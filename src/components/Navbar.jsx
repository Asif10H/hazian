import React, { useState, useEffect } from 'react';
import { Menu, X, PhoneCall } from 'lucide-react';
import VillageLogo from './VillageLogo';

const Navbar = ({ data }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('#home');

  const navLinks = [
    { name: 'মূলপাতা', href: '#home' },
    { name: 'আমাদের গ্রাম', href: '#about' },
    { name: 'ইতিহাস', href: '#history' },
    { name: 'প্রতিষ্ঠান', href: '#institutions' },
    { name: 'জনপ্রতিনিধি', href: '#representatives' },
    { name: 'কৃতি সন্তান', href: '#notables' },
    { name: 'নাগরিক সেবা', href: '#services' },
    { name: 'জরুরী নম্বর', href: '#emergency' },
    { name: 'গ্যালারি', href: '#gallery' },
  ];

  // ScrollSpy to track active section dynamically
  useEffect(() => {
    const sectionIds = [
      'home',
      'about',
      'history',
      'institutions',
      'representatives',
      'notables',
      'services',
      'emergency',
      'gallery',
      'contact',
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;

      // Bottom of page check
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 50) {
        setActiveSection('#contact');
        return;
      }

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const top = el.offsetTop;
          if (scrollPosition >= top) {
            setActiveSection(`#${sectionIds[i]}`);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          
          {/* Logo / Brand */}
          <a 
            href="#home" 
            onClick={() => setActiveSection('#home')}
            className="flex items-center gap-2.5 group focus:outline-hidden"
          >
            <VillageLogo className="w-10 h-10" />
            <div className="flex flex-col">
              <span className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight leading-tight">
                {data.name}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                চকরিয়া, কক্সবাজার
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links with Active Underline Indicator */}
          <nav aria-label="প্রধান নেভিগেশন" className="hidden xl:flex items-center space-x-0.5">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => setActiveSection(link.href)}
                  className={`relative py-2.5 px-3 text-sm font-semibold transition-colors duration-200 group ${
                    isActive
                      ? 'text-emerald-700 font-bold'
                      : 'text-slate-600 hover:text-emerald-700'
                  }`}
                >
                  {link.name}

                  {/* Active Indicator Underline */}
                  <span
                    className={`absolute bottom-0 left-2.5 right-2.5 h-[2.5px] bg-emerald-600 rounded-full transition-all duration-300 ease-out ${
                      isActive 
                        ? 'opacity-100 scale-x-100' 
                        : 'opacity-0 scale-x-0 group-hover:opacity-40 group-hover:scale-x-75'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Quick Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5">
            <a 
              href="#contact" 
              onClick={() => setActiveSection('#contact')}
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold transition-all hover:scale-[1.02] active:scale-[0.98] shadow-xs ${
                activeSection === '#contact'
                  ? 'bg-emerald-700 text-white ring-2 ring-emerald-500/40'
                  : 'bg-emerald-600 text-white hover:bg-emerald-700'
              }`}
            >
              <PhoneCall size={15} />
              যোগাযোগ
            </a>

            <div className="xl:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label="মেনু খুলুন বা বন্ধ করুন"
              >
                {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-slate-200 shadow-lg">
          <div className="px-4 py-3 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
            {navLinks.map((link, index) => {
              const isActive = activeSection === link.href;

              return (
                <a
                  key={index}
                  href={link.href}
                  onClick={() => {
                    setActiveSection(link.href);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`block px-3 py-2.5 rounded-lg text-sm font-semibold transition-colors ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800 font-bold border-l-4 border-emerald-600'
                      : 'text-slate-800 hover:bg-slate-100 hover:text-emerald-700'
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
            <div className="pt-2 pb-1">
              <a
                href="#contact"
                onClick={() => {
                  setActiveSection('#contact');
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-bold transition-colors ${
                  activeSection === '#contact'
                    ? 'bg-emerald-700 text-white'
                    : 'bg-emerald-600 text-white hover:bg-emerald-700'
                }`}
              >
                <PhoneCall size={16} />
                যোগাযোগ করুন
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
