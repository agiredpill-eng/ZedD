import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'The Question', href: '#question' },
  { label: 'The Signs', href: '#signs' },
  { label: 'The Message', href: '#message' },
  { label: 'The Messengers', href: '#messengers' },
  { label: 'Podcast', href: '#podcast' },
  { label: 'About', href: '#about' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setIsMobileMenuOpen(false);
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-200'
            : 'bg-white/80 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            <a
              href="#hero"
              onClick={scrollToTop}
              className="font-playfair text-xl font-bold text-gray-900 hover:text-gold transition-colors"
            >
              ZED DEAN
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden text-gray-900 p-2 hover:text-gold transition-colors"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="font-inter text-sm font-medium text-gray-700 hover:text-gold transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                className="font-inter text-sm font-semibold bg-gold text-white px-5 py-2 rounded-lg hover:bg-gold/90 transition-all"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-300 lg:hidden ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-6 w-full px-8 text-center">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-2xl font-inter font-medium text-gray-900 hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="text-2xl font-inter font-semibold text-gold hover:text-gold/80 transition-colors mt-4"
          >
            Contact
          </a>
        </div>
      </div>
    </>
  );
}
