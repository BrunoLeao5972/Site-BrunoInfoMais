import { MessageCircle, Instagram } from "lucide-react";

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      <a
        href="https://wa.me/558599149141"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        title="WhatsApp: (85) 99914-9141"
        aria-label="Contato via WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
      <a
        href="https://instagram.com/brunoinfomais"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
        title="Instagram: @brunoinfomais"
        aria-label="Contato via Instagram"
      >
        <Instagram className="w-6 h-6" />
      </a>
    </div>
  );
}
