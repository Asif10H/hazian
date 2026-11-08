import React from 'react';
import { School, Landmark, ShoppingBag, Globe, Building, HeartPulse, BookOpen } from 'lucide-react';

const Institutions = ({ data }) => {
  const iconMap = {
    'শিক্ষা': School,
    'ধর্মীয়': BookOpen,
    'ধর্মীয়': BookOpen,
    'মসজিদ': Landmark,
    'স্বাস্থ্য': HeartPulse,
    'সামাজিক': Building,
    'বাণিজ্য': ShoppingBag,
    'সেবা': Globe
  };

  return (
    <section id="institutions" className="section-padding bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 reveal">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-200/60 text-emerald-800 text-xs font-bold uppercase tracking-wider mb-3">
            <Building size={14} />
            সামাজিক ও ধর্মীয় প্রতিষ্ঠান
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            হাজিয়ান গ্রামের শিক্ষা, ধর্মীয় অনুশাসন এবং সামাজিক জীবনযাত্রার প্রাণকেন্দ্রসমূহ।
          </p>
        </div>

        {/* Institution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.items.map((item, index) => {
            const Icon = iconMap[item.type] || Landmark;
            const delayClass = `reveal-delay-${(index % 3) + 1}`;
            return (
              <div
                key={index}
                className={`p-5 sm:p-6 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-emerald-300 transition-colors shadow-xs flex flex-col card-hover-lift group reveal ${delayClass}`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 bg-white text-emerald-800 text-xs font-semibold rounded-md border border-slate-200 group-hover:border-emerald-200 transition-colors">
                    {item.type}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  {item.name}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Institutions;
