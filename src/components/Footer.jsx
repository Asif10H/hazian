import React from 'react';
import { Heart, Globe, MessageCircle, Share2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-100 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left mb-16">
          <div className="flex flex-col items-center md:items-start max-w-xs">
            <span className="font-sans font-black text-4xl text-slate-900 mb-1">হাজিয়ান</span>
            <span className="text-emerald-600 font-bold tracking-widest text-[13px] uppercase mb-4">ঐতিজ্যের স্পর্শে আধুনিক গ্রাম</span>
            <p className="text-slate-500 font-medium leading-relaxed">চকরিয়ার ফাঁসিয়াখালী ইউনিয়নের অন্তর্গত ১ নং ওয়ার্ডের সকল তথ্য ও সেবার একমাত্র ডিজিটাল পোর্টাল।</p>
          </div>

          <nav aria-label="ফুটার নেভিগেশন" className="flex flex-wrap justify-center gap-x-12 gap-y-6 text-base font-bold text-slate-800">
            <a href="#home" className="hover:text-emerald-600 transition-colors">মূলপাতা</a>
            <a href="#about" className="hover:text-emerald-600 transition-colors">আমাদের গ্রাম</a>
            <a href="#institutions" className="hover:text-emerald-600 transition-colors">প্রতিষ্ঠান</a>
            <a href="#services" className="hover:text-emerald-600 transition-colors">সেবা সমূহ</a>
            <a href="#contact" className="hover:text-emerald-600 transition-colors">যোগাযোগ</a>
          </nav>

        </div>
        
        <div className="pt-10 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-bold text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} হাজিয়ান গ্রাম পরিচালনা কমিটি। সর্বস্বত্ব সংরক্ষিত।
          </div>
          <p className="text-xs text-slate-500 flex items-center gap-1">
            Developed  by{" "}
            <a href="https://www.facebook.com/Asif10H/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors">
              Habibullah Asif
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
