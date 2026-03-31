import { Phone, Instagram, MessageCircle } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-white font-bold text-lg mb-1">
              PRESTIGE<span className="text-zinc-400">DRIVE</span>
            </p>
            <p className="text-zinc-400 text-sm">
              &copy; {new Date().getFullYear()} PrestigeDrive. Аренда премиум авто в Перми.
            </p>
          </div>
          <div className="flex space-x-4">
            <a
              href="tel:+73422000000"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Телефон"
            >
              <Phone />
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href="#"
              className="text-zinc-400 hover:text-white transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
