import { MessageCircle } from "lucide-react";

/** Shared WhatsApp action used wherever a visitor may want a quick answer. */
export function WhatsAppButton({ className = "btn-primary" }: { className?: string }) {
  return (
    <a
      className={className}
      href="https://wa.me/910000000000"
      target="_blank"
      rel="noreferrer"
    >
      <MessageCircle size={17} aria-hidden="true" />
      WhatsApp Us
    </a>
  );
}
