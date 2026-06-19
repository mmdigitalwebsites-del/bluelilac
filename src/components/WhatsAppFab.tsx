import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "254715405641";
const WHATSAPP_TEXT = "Hello Bluelilac Tours, I'd like to enquire about a safari.";

export function WhatsAppFab() {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_TEXT)}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-xl ring-2 ring-white/70 transition hover:scale-110 hover:shadow-2xl md:bottom-7 md:right-7 md:h-16 md:w-16"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="relative h-7 w-7 md:h-8 md:w-8" />
    </a>
  );
}
