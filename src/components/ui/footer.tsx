import Link from 'next/link';
import { Instagram, Facebook, Youtube, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal border-t border-silver-gray/10">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-accent-gold rounded-lg flex items-center justify-center">
                <span className="font-playfair font-bold text-cinematic-black text-xl">K</span>
              </div>
              <span className="font-playfair text-2xl font-semibold">KVNGSHOTIT</span>
            </div>
            <p className="text-silver-gray/70 max-w-md">
              Capturing life's most precious moments through a cinematic lens. 
              Professional photography for weddings, portraits, and events.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-silver-gray/70 hover:text-accent-gold transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-silver-gray/70 hover:text-accent-gold transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-silver-gray/70 hover:text-accent-gold transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-silver-gray/70 hover:text-accent-gold transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <a 
                href="mailto:hello@kvnghotit.com" 
                className="flex items-center text-silver-gray/70 hover:text-accent-gold transition-colors"
              >
                <Mail className="w-4 h-4 mr-2" />
                hello@kvnghotit.com
              </a>
              <a 
                href="tel:+15551234567" 
                className="flex items-center text-silver-gray/70 hover:text-accent-gold transition-colors"
              >
                <span className="w-4 h-4 mr-2">📱</span>
                +1 (555) 123-4567
              </a>
            </div>
            <div className="flex space-x-3 mt-6">
              <a 
                href="https://instagram.com/kvngshotit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-silver-gray/70 hover:text-accent-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://facebook.com/kvngshotit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-silver-gray/70 hover:text-accent-gold transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a 
                href="https://youtube.com/kvngshotit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-silver-gray/70 hover:text-accent-gold transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-silver-gray/10 mt-8 pt-8 text-center text-silver-gray/60 text-sm">
          <p>© {currentYear} KVNGSHOTIT Photography. All rights reserved.</p>
          <p className="mt-2">Capturing moments with royal precision.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;