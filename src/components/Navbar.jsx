import React, { useState } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar = ({ data }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'মূলপাতা', href: '#home' },
    { name: 'সম্পর্কে', href: '#about' },
    { name: 'প্রতিষ্ঠান', href: '#institutions' },
    { name: 'জনপ্রতিনিধি', href: '#representatives' },
    { name: 'সেবা', href: '#services' },
    { name: 'জরুরী', href: '#emergency' },
    { name: 'গ্যালারি', href: '#gallery' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 transition-all duration-500 bg-white/90 backdrop-blur-lg shadow-lg py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          
          <a href="#home" className="flex items-center gap-2 group cursor-pointer no-underline">
            <div className="p-2 rounded-xl transition-all duration-300 bg-emerald-600 text-white shadow-md">
              <MapPin size={24} className="group-hover:scale-110 transition-transform" />
            </div>
            <span className="font-sans font-bold text-2xl tracking-tighter transition-colors text-slate-900">
              {data.name}
            </span>
          </a>

          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-4 py-2 rounded-lg font-medium text-[15px] transition-all hover:bg-emerald-50 hover:text-emerald-700 text-slate-700"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="ml-4 px-6 py-2.5 rounded-full font-bold shadow-md transition-all hover:scale-105 active:scale-95 bg-emerald-600 text-white hover:bg-emerald-700 shadow-emerald-200"
            >
              যোগাযোগ
            </a>
          </div>

          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg bg-slate-100 text-slate-900"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 shadow-2xl animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="px-4 py-6 space-y-2">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-xl text-slate-800 font-semibold hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-4 py-4 mt-4 bg-emerald-600 text-white rounded-xl font-bold text-center"
            >
              যোগাযোগ করুন
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
