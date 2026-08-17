import { useEffect, useMemo, useRef, useState } from "react";
import { Check, Search } from "lucide-react";

/**
 * Site-wide language switcher.
 *
 * Uses the Google Website Translator engine, which translates every rendered
 * string on the page (nav, headings, paragraphs, buttons, form labels, CTAs,
 * menus) without touching any existing component. The default Google widget UI
 * is hidden (see styles.css) and driven by this custom searchable dropdown
 * instead, so the branding and layout of the site stay untouched.
 *
 * NOTE ON POSITIONING: this component no longer positions itself on the page
 * (no more `fixed` wrapper). It only renders a trigger button + an
 * absolutely-positioned dropdown relative to that trigger. The parent
 * (SiteHeader) decides where in the layout it sits, so it never overlaps or
 * fights with the navbar.
 */

export type LanguageOption = { code: string; label: string; native: string; country: string };

// `country` is the ISO 3166-1 alpha-2 code used to fetch a flag image from
// flagcdn.com. Emoji flags were dropped because Windows does not render
// flag-emoji glyphs (they show up blank), so this renders consistently on
// every OS/browser instead.
export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", native: "English", country: "gb" },
  { code: "fr", label: "French", native: "Français", country: "fr" },
  { code: "de", label: "German", native: "Deutsch", country: "de" },
  { code: "es", label: "Spanish", native: "Español", country: "es" },
  { code: "it", label: "Italian", native: "Italiano", country: "it" },
  { code: "pt", label: "Portuguese", native: "Português", country: "pt" },
  { code: "nl", label: "Dutch", native: "Nederlands", country: "nl" },
  { code: "zh-CN", label: "Chinese (Simplified)", native: "中文 (简体)", country: "cn" },
  { code: "zh-TW", label: "Chinese (Traditional)", native: "中文 (繁體)", country: "tw" },
  { code: "ja", label: "Japanese", native: "日本語", country: "jp" },
  { code: "ko", label: "Korean", native: "한국어", country: "kr" },
  { code: "ar", label: "Arabic", native: "العربية", country: "sa" },
  { code: "sw", label: "Swahili", native: "Kiswahili", country: "ke" },
  { code: "ru", label: "Russian", native: "Русский", country: "ru" },
  { code: "hi", label: "Hindi", native: "हिन्दी", country: "in" },
  { code: "bn", label: "Bengali", native: "বাংলা", country: "bd" },
  { code: "ur", label: "Urdu", native: "اردو", country: "pk" },
  { code: "fa", label: "Persian", native: "فارسی", country: "ir" },
  { code: "tr", label: "Turkish", native: "Türkçe", country: "tr" },
  { code: "pl", label: "Polish", native: "Polski", country: "pl" },
  { code: "sv", label: "Swedish", native: "Svenska", country: "se" },
  { code: "no", label: "Norwegian", native: "Norsk", country: "no" },
  { code: "da", label: "Danish", native: "Dansk", country: "dk" },
  { code: "fi", label: "Finnish", native: "Suomi", country: "fi" },
  { code: "el", label: "Greek", native: "Ελληνικά", country: "gr" },
  { code: "iw", label: "Hebrew", native: "עברית", country: "il" },
  { code: "th", label: "Thai", native: "ไทย", country: "th" },
  { code: "vi", label: "Vietnamese", native: "Tiếng Việt", country: "vn" },
  { code: "id", label: "Indonesian", native: "Bahasa Indonesia", country: "id" },
  { code: "ms", label: "Malay", native: "Bahasa Melayu", country: "my" },
  { code: "uk", label: "Ukrainian", native: "Українська", country: "ua" },
  { code: "cs", label: "Czech", native: "Čeština", country: "cz" },
  { code: "ro", label: "Romanian", native: "Română", country: "ro" },
  { code: "hu", label: "Hungarian", native: "Magyar", country: "hu" },
  { code: "tl", label: "Filipino", native: "Filipino", country: "ph" },
  { code: "am", label: "Amharic", native: "አማርኛ", country: "et" },
];

function flagUrl(country: string) {
  return `https://flagcdn.com/w80/${country}.png`;
}

const COOKIE_NAME = "googtrans";
const SCRIPT_ID = "google-translate-script";

function readCookie(name: string): string | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match && match[2] ? decodeURIComponent(match[2]) : null;
}

function writeCookie(value: string) {
  const host = window.location.hostname;
  const bare = host.replace(/^www\./, "");
  const expires = new Date(Date.now() + 365 * 24 * 60 * 60 * 1000).toUTCString();
  // Written on every applicable domain scope so Google picks it up after reloads.
  document.cookie = `${COOKIE_NAME}=${value};expires=${expires};path=/`;
  document.cookie = `${COOKIE_NAME}=${value};expires=${expires};path=/;domain=${host}`;
  if (bare !== host) {
    document.cookie = `${COOKIE_NAME}=${value};expires=${expires};path=/;domain=.${bare}`;
  }
}

function currentLangFromCookie(): string {
  const raw = readCookie(COOKIE_NAME); // format: /en/fr
  if (!raw) return "en";
  const parts = raw.split("/");
  return parts[2] || "en";
}

export function LanguageSwitcher({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const [lang, setLang] = useState("en");
  const [query, setQuery] = useState("");
  const wrapRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);

  // Load the translation engine once, client-side only.
  useEffect(() => {
    setLang(currentLangFromCookie());

    if (document.getElementById(SCRIPT_ID)) return;

    (window as unknown as Record<string, unknown>)["googleTranslateElementInit"] = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const g = (window as unknown as { google?: any }).google;
      if (!g?.translate?.TranslateElement) return;
      new g.translate.TranslateElement(
        { pageLanguage: "en", autoDisplay: false },
        "google_translate_element",
      );
    };

    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  // Close on outside click / Escape.
  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  // Reset search + focus the search field whenever the panel opens.
  useEffect(() => {
    if (open) {
      setQuery("");
      const id = requestAnimationFrame(() => searchRef.current?.focus());
      return () => cancelAnimationFrame(id);
    }
  }, [open]);

  const select = (code: string) => {
    setOpen(false);
    if (code === lang) return;
    setLang(code);
    writeCookie(code === "en" ? "/en/en" : `/en/${code}`);

    // Try the in-page combo first (no reload); fall back to a reload.
    const combo = document.querySelector<HTMLSelectElement>("select.goog-te-combo");
    if (combo) {
      combo.value = code === "en" ? "" : code;
      combo.dispatchEvent(new Event("change"));
      if (code === "en") window.location.reload();
      return;
    }
    window.location.reload();
  };

  const active = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0]!;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return LANGUAGES;
    return LANGUAGES.filter(
      (l) =>
        l.label.toLowerCase().includes(q) ||
        l.native.toLowerCase().includes(q) ||
        l.code.toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <div ref={wrapRef} className={`relative ${className}`} translate="no">
      {/* Hidden container the Google engine mounts into */}
      <div id="google_translate_element" aria-hidden="true" className="hidden" />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className="notranslate inline-flex h-10 items-center gap-2 rounded-full pl-1.5 pr-3 text-[#070661] shadow-md transition hover:bg-white"
      >
        <span className="flex h-7 w-7 shrink-0 items-center justify-center overflow-hidden rounded-full bg-white ring-2 ring-white/70">
          <img src={flagUrl(active.country)} alt="" className="h-full w-full object-cover" />
        </span>
        <span className="text-xs font-semibold tracking-wide sm:text-sm">
          {active.code.split("-")[0]!.toUpperCase()}
        </span>
      </button>

      {open && (
        <div
          className="notranslate absolute right-0 top-full z-[70] mt-2 w-[min(20rem,92vw)] max-h-[75vh] overflow-hidden rounded-2xl border border-black/10 bg-white shadow-2xl"
          role="listbox"
        >
          {/* Search field */}
          <div className="flex items-center gap-2 border-b border-black/10 px-3 py-2.5">
            <Search className="h-4 w-4 shrink-0 text-[#030464]/50" />
            <input
              ref={searchRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search language"
              className="w-full bg-transparent text-sm text-[#030464] placeholder:text-[#030464]/40 focus:outline-none"
            />
          </div>

          {/* Scrollable language list */}
          <ul className="max-h-72 overflow-y-auto p-1.5">
            {filtered.length === 0 && (
              <li className="px-3 py-6 text-center text-sm text-[#030464]/50">
                No languages found
              </li>
            )}
            {filtered.map((l) => (
              <li key={l.code}>
                <button
                  type="button"
                  role="option"
                  aria-selected={l.code === lang}
                  onClick={() => select(l.code)}
                  className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm transition hover:bg-[#D0E0FF] hover:text-[#0C5DFF] ${
                    l.code === lang ? "bg-[#D0E0FF]/60 text-[#0C5DFF]" : "text-[#030464]"
                  }`}
                >
                  <span className="h-4 w-6 shrink-0 overflow-hidden rounded-sm ring-1 ring-black/10">
                    <img
                      src={flagUrl(l.country)}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </span>
                  <span className="flex-1 leading-tight">
                    <span className="block font-medium">{l.label}</span>
                    {l.native !== l.label && (
                      <span className="block text-xs text-current/60">{l.native}</span>
                    )}
                  </span>
                  {l.code === lang && <Check className="h-4 w-4 shrink-0" />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;
