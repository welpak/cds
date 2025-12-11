import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingCart, Search } from 'lucide-react';

const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled 
          ? 'bg-black/80 backdrop-blur-md border-white/10 py-3' 
          : 'bg-transparent border-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 group cursor-pointer">
          <div className="w-8 h-8 bg-cdf-red rounded-sm transform rotate-45 group-hover:rotate-0 transition-transform duration-500 flex items-center justify-center shadow-[0_0_15px_rgba(214,0,28,0.6)]">
            <span className="text-white font-bold transform -rotate-45 group-hover:rotate-0 font-display">C</span>
          </div>
          <span className="text-white font-display font-bold text-xl tracking-wider group-hover:text-cdf-red transition-colors">
            CAROLINA <span className="text-cdf-silver font-light">DIECAST</span>
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {['Models', 'Figures', 'Ghostbusters', 'Exclusives', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-sm uppercase tracking-widest hover:text-cdf-red transition-colors duration-300 relative group"
            >
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cdf-red transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Search className="w-5 h-5 cursor-pointer hover:text-cdf-blue transition-colors" />
          <a href="https://www.ebay.com/str/carolinasdiecast" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 bg-white/10 hover:bg-cdf-red hover:border-cdf-red border border-white/20 px-4 py-2 rounded-full transition-all duration-300">
            <span className="text-xs font-bold tracking-wider">EBAY STORE</span>
            <ShoppingCart className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-black/95 border-b border-white/10 backdrop-blur-xl p-6 flex flex-col gap-6 md:hidden">
          {['Models', 'Figures', 'Ghostbusters', 'Exclusives', 'About'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`}
              className="text-lg font-display uppercase tracking-widest hover:text-cdf-red"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a href="https://www.ebay.com/str/carolinasdiecast" className="w-full text-center bg-cdf-red py-3 text-white font-bold tracking-wider rounded-sm shadow-[0_0_15px_rgba(214,0,28,0.4)]">
            VISIT EBAY STORE
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navigation;