import React, { useState } from 'react';
import { School, Landmark, ShoppingBag, Globe, Building, HeartPulse, BookOpen } from 'lucide-react';

const toBengaliNumber = (num) => {
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, (d) => bengaliDigits[d]);
};

const Institutions = ({ data }) => {
  const [activeCategory, setActiveCategory] = useState('all');

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

  const categories = [
    { id: 'all', label: 'সবগুলো' },
    { id: 'education', label: 'শিক্ষা' },
    { id: 'religious', label: 'ধর্মীয়' },
    { id: 'health', label: 'স্বাস্থ্য' },
    { id: 'commerce_service', label: 'বাণিজ্য ও সেবা' },
  ];

  const getCategoryCount = (catId) => {
    if (catId === 'all') return data.items.length;
    if (catId === 'education') return data.items.filter(i => i.type === 'শিক্ষা').length;
    if (catId === 'religious') return data.items.filter(i => i.type === 'ধর্মীয়' || i.type === 'ধর্মীয়' || i.type === 'মসজিদ').length;
    if (catId === 'health') return data.items.filter(i => i.type === 'স্বাস্থ্য').length;
    if (catId === 'commerce_service') return data.items.filter(i => i.type === 'বাণিজ্য' || i.type === 'সেবা' || i.type === 'সামাজিক').length;
    return 0;
  };

  const filteredItems = data.items.filter((item) => {
    if (activeCategory === 'all') return true;
    if (activeCategory === 'education') return item.type === 'শিক্ষা';
    if (activeCategory === 'religious') return item.type === 'ধর্মীয়' || item.type === 'ধর্মীয়' || item.type === 'মসজিদ';
    if (activeCategory === 'health') return item.type === 'স্বাস্থ্য';
    if (activeCategory === 'commerce_service') return item.type === 'বাণিজ্য' || item.type === 'সেবা' || item.type === 'সামাজিক';
    return true;
  });

  return (
    <section id="institutions" className="section-padding bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            {data.title}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            হাজিয়ান গ্রামের শিক্ষা, ধর্মীয় অনুশাসন এবং সামাজিক জীবনযাত্রার প্রাণকেন্দ্রসমূহ।
          </p>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8 reveal">
          {categories.map((cat) => {
            const count = getCategoryCount(cat.id);
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer border ${
                  isActive
                    ? 'bg-emerald-700 text-white border-emerald-700 shadow-xs'
                    : 'bg-white text-slate-700 border-slate-200 hover:bg-slate-50 hover:border-slate-300'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`px-1.5 py-0.5 rounded-md text-[11px] font-bold ${
                    isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600 border border-slate-200/60'
                  }`}
                >
                  {toBengaliNumber(count)}
                </span>
              </button>
            );
          })}
        </div>

        {/* Institution Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredItems.map((item) => {
            const Icon = iconMap[item.type] || Landmark;
            return (
              <div
                key={item.name}
                className="animate-tab-fade p-5 sm:p-6 rounded-xl bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-emerald-300 transition-all duration-200 shadow-xs flex flex-col card-hover-lift group"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <Icon size={20} />
                  </div>
                  <span className="px-2.5 py-0.5 bg-white text-emerald-800 text-xs font-semibold rounded-lg border border-slate-200 group-hover:border-emerald-200 transition-colors">
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
