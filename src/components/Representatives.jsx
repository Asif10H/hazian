import React from "react";
import { User, Phone } from "lucide-react";

const Representatives = ({ data }) => {
  return (
    <section id="representatives" className="section-padding bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            হাজিয়ান গ্রামের সার্বিক উন্নয়ন ও জনসেবায় দায়িত্বপ্রাপ্ত বর্তমান ও স্থানীয় নেতৃবৃন্দ।
          </p>
        </div>

        {/* Representatives Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.list.map((rep, index) => (
            <div
              key={index}
              className={`p-5 sm:p-6 bg-white border border-slate-200/80 rounded-xl shadow-xs text-center flex flex-col items-center card-hover-lift hover:border-emerald-300 transition-colors reveal reveal-delay-${index + 1}`}
            >
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mb-3.5 border-2 border-emerald-500/20 text-slate-600">
                <User size={30} strokeWidth={1.5} />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-1">
                {rep.name}
              </h3>
              
              <div className="mb-4">
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200/60">
                  {rep.role}
                </span>
              </div>

              {rep.phone && !rep.phone.includes("আপডেট") && !rep.phone.includes("000000") ? (
                <a
                  href={`tel:${rep.phone}`}
                  className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-emerald-700 active:scale-[0.98] transition-all w-full"
                >
                  <Phone size={14} />
                  {rep.phone}
                </a>
              ) : (
                <div className="mt-auto inline-flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-slate-100 text-slate-500 text-xs sm:text-sm font-semibold w-full border border-slate-200">
                  <Phone size={14} className="text-slate-400" />
                  {rep.phone}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Representatives;
