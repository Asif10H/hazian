import React from 'react';
import { FileText, Coins, HelpCircle, Briefcase, CheckCircle2 } from 'lucide-react';

const CitizenServices = ({ data }) => {
  return (
    <section id="services" className="section-padding bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            ফাঁসিয়াখালী ইউনিয়ন ডিজিটাল সেন্টারের মাধ্যমে হাজিয়ান গ্রামের নাগরিকদের প্রদেয় গুরুত্বপূর্ণ সেবাসমূহ।
          </p>
        </div>

        {/* 2-Column Citizen Services Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Guidance Panel */}
          <div className="lg:col-span-4 bg-slate-900 text-white p-6 sm:p-7 rounded-xl border border-slate-800 shadow-xs flex flex-col justify-between card-hover-lift reveal">
            <div>
              <div className="w-10 h-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center mb-4">
                <Briefcase size={20} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2.5">
                সেবা গ্রহণের নিয়মাবলী
              </h3>
              
              <p className="text-sm text-slate-300 leading-relaxed font-normal mb-6">
                {data.guideline}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700/80">
              <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold mb-1.5">
                <HelpCircle size={15} />
                প্রয়োজনীয় তথ্য ও সহায়তা
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                ফাঁসিয়াখালী ইউনিয়ন পরিষদের ১নং ওয়ার্ড ডিজিটাল সেন্টারে নির্ধারিত কর্মদিবসে সরাসরি সেবা পাওয়া যাবে।
              </p>
            </div>
          </div>

          {/* Right Service Grid */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {data.items.map((service, index) => (
              <div
                key={index}
                className={`p-5 rounded-xl bg-white border border-slate-200/80 shadow-xs hover:border-emerald-300 transition-colors flex flex-col justify-between card-hover-lift reveal reveal-delay-${(index % 2) + 1}`}
              >
                <div>
                  <div className="w-9 h-9 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-3 border border-emerald-100">
                    <FileText size={18} />
                  </div>
                  
                  <h4 className="text-base font-bold text-slate-900 mb-2">
                    {service.name}
                  </h4>
                </div>

                <div className="space-y-1.5 pt-3 border-t border-slate-100 mt-2">
                  <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-800">
                    <Coins size={14} className="text-emerald-600 shrink-0" />
                    <span>ফি: {service.fee}</span>
                  </div>
                  <div className="text-xs text-slate-500 font-medium">
                    প্রয়োজনীয় কাগজ: {service.doc}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default CitizenServices;
