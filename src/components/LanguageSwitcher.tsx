import { useEffect, useRef, useState } from "react";
import { Globe, ChevronDown, Check } from "lucide-react";

/**
 * Site-wide language switcher.
 *
 * Uses the Google Website Translator engine, which translates every rendered
 * string on the page (nav, headings, paragraphs, buttons, form labels, CTAs,
 * menus) without touching any existing component. The default Google widget UI
 * is hidden (see styles.css) and driven by this custom dropdown instead, so the
 * branding and layout of the site stay untouched.
 */

export type LanguageOption = { code: string; label: string; flag: string };

export const LANGUAGES: LanguageOption[] = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fr", label: "Français", flag: "🇫🇷" },
  { code: "de", label: "Deutsch", flag: "🇩🇪" },
  { code: "es", label: "Español", flag: "🇪🇸" },
  { code: "it", label: "Italiano", flag: "🇮🇹" },
  { code: "pt", label: "Português", flag: "🇵🇹" },
  { code: "nl", label: "Nederlands", flag: "🇳🇱" },
  { code: "zh-CN", label: "中文", flag: "🇨🇳" },
  { code: "ja", label: "日本語", flag: "🇯🇵" },
  { code: "ar", label: "العربية", flag: "🇸🇦" },
  { code: "sw", label: "Kiswahili", flag: "🇰🇪" },
];

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
  const wrapRef = useRef<HTMLDivElement>(null);

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

  return (
    <div ref={wrapRef} className={`relative ${className}`} translate="no">
      {/* Hidden container the Google engine mounts into */}
      <div id="google_translate_element" aria-hidden="true" />

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Select language"
        className="notranslate inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-white/90 px-3 py-1.5 text-xs font-medium text-[#030464] shadow-sm backdrop-blur-md transition hover:bg-white sm:text-sm"
      >
        <Globe className="h-4 w-4 shrink-0" />
        <span className="hidden sm:inline">{active.label}</span>
        <span className="sm:hidden">{active.code.toUpperCase()}</span>
        <ChevronDown className={`h-3.5 w-3.5 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="notranslate absolute top-full right-0 z-[60] mt-2 max-h-72 w-48 overflow-y-auto rounded-xl border border-black/10 bg-white p-1 shadow-2xl"
        >
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                type="button"
                role="option"
                aria-selected={l.code === lang}
                onClick={() => select(l.code)}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm text-[#030464] transition hover:bg-[#D0E0FF]"
              >
                <span className="text-base leading-none">{l.flag}</span>
                <span className="flex-1">{l.label}</span>
                {l.code === lang && <Check className="h-4 w-4" />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/**
 * Fixed placement: same vertical level as the sticky site header,
 * just to the right of the header pill (next to the call icon, outside its border).
 */
export function FloatingLanguageSwitcher() {
  return (
    <div className="fixed right-2 top-[31px] z-[100] md:right-4 lg:right-6">
      <LanguageSwitcher />
    </div>
  );
}
