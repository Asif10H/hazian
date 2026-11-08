import React, { useState } from 'react';
import { Menu, X, MapPin, PhoneCall } from 'lucide-react';

const Navbar = ({ data }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-18">
          
          {/* Logo / Brand */}
          <a href="#home" className="flex items-center gap-2.5 group focus:outline-hidden">
            <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-xs group-hover:bg-emerald-700 transition-colors">
              <MapPin size={20} />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-xl sm:text-2xl text-slate-900 tracking-tight leading-tight">
                {data.name}
              </span>
              <span className="text-[11px] font-semibold text-slate-500 uppercase tracking-wider">
                চকরিয়া, কক্সবাজার
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav aria-label="প্রধান নেভিগেশন" className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-semibold text-slate-700 hover:text-emerald-700 hover:bg-slate-100/80 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Quick Action & Mobile Menu Toggle */}
          <div className="flex items-center gap-2.5">
            <a 
              href="#contact" 
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold bg-emerald-600 text-white hover:bg-emerald-700 transition-colors shadow-xs"
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
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-3 py-2.5 rounded-lg text-slate-800 font-semibold text-sm hover:bg-slate-100 hover:text-emerald-700 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-2 pb-1">
              <a
                href="#contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 text-white rounded-xl text-sm font-bold hover:bg-emerald-700 transition-colors"
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
