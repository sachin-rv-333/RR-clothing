"use client";

import { MessageCircle, Phone } from "lucide-react";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Call Button (Mobile Only) */}
      <a
        href="tel:+919148161724"
        className="sm:hidden w-14 h-14 rounded-full bg-foreground text-background flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
        aria-label="Call Now"
      >
        <Phone size={24} className="fill-current" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919148161724"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} className="fill-current" />
      </a>
    </div>
  );
}
