import React from 'react';
import VillageLogo from './VillageLogo';
import CommunityShare from './CommunityShare';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200/80 py-10 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left mb-6">
          <div className="flex flex-col items-center md:items-start max-w-sm">
            <div className="flex items-center gap-2.5 mb-1.5 group">
              <VillageLogo className="w-8 h-8 rounded-lg p-1.5" />
              <span className="font-bold text-xl text-slate-900">হাজিয়ান গ্রাম বাতায়ন</span>
            </div>
            <span className="text-emerald-700 font-semibold text-xs tracking-wide uppercase mb-2">
              ১নং ওয়ার্ড • ফাঁসিয়াখালী ইউনিয়ন, চকরিয়া
            </span>
            <p className="text-xs text-slate-500 leading-relaxed font-normal">
              হাজিয়ান গ্রামের সার্বিক ইতিহাস, ঐতিহ্য, নাগরিক সেবা ও জরুরি যোগাযোগের একমাত্র প্রাতিষ্ঠানিক ডিজিটাল পোর্টাল।
            </p>
          </div>

          <nav aria-label="ফুটার নেভিগেশন" className="flex flex-wrap justify-center gap-x-6 gap-y-2.5 text-xs sm:text-sm font-semibold text-slate-700">
            <a href="#home" className="hover:text-emerald-700 transition-colors">মূলপাতা</a>
            <a href="#about" className="hover:text-emerald-700 transition-colors">আমাদের গ্রাম</a>
            <a href="#history" className="hover:text-emerald-700 transition-colors">ইতিহাস</a>
            <a href="#institutions" className="hover:text-emerald-700 transition-colors">প্রতিষ্ঠান</a>
            <a href="#representatives" className="hover:text-emerald-700 transition-colors">জনপ্রতিনিধি</a>
            <a href="#notables" className="hover:text-emerald-700 transition-colors">কৃতি সন্তান</a>
            <a href="#services" className="hover:text-emerald-700 transition-colors">নাগরিক সেবা</a>
            <a href="#emergency" className="hover:text-emerald-700 transition-colors">জরুরী নম্বর</a>
            <a href="#gallery" className="hover:text-emerald-700 transition-colors">গ্যালারি</a>
            <a href="#faq" className="hover:text-emerald-700 transition-colors">প্রশ্নোত্তর</a>
            <a href="#route" className="hover:text-emerald-700 transition-colors">যাতায়াত</a>
            <a href="#contact" className="hover:text-emerald-700 transition-colors">যোগাযোগ</a>
          </nav>
        </div>

        {/* Community One-Tap Share Bar */}
        <CommunityShare />
        
        <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-2.5 text-xs text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} হাজিয়ান গ্রামের সর্বস্তরের সাধারণ জনগণ। সর্বস্বত্ব সংরক্ষিত।
          </div>
          <p className="flex items-center gap-1">
            কারিগরি সহায়তায়{" "}
            <a 
              href="https://www.facebook.com/Asif10H/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-emerald-600 hover:text-emerald-700 font-semibold underline underline-offset-2 transition-colors"
            >
              Habibullah Asif
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
