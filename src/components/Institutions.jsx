import React from 'react';
import { School, Landmark, Church, ShoppingBag, Globe } from 'lucide-react';

const Institutions = ({ data }) => {
  const iconMap = {
    'শিক্ষা': School,
    'ধর্মীয়': Church,
    'মসজিদ': Landmark,
    'বাণিজ্য': ShoppingBag,
    'সেবা': Globe
  };

  return (
    <section id="institutions" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-14 animate-fade-in">
           <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-sans text-slate-900 mb-4">{data.title}</h2>
           <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">আমাদের গ্রামের সামাজিক ও ধর্মীয় উন্নয়ন এবং জীবনযাত্রার প্রাণকেন্দ্রসমূহ।</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
           {data.items.map((item, index) => {
             const Icon = iconMap[item.type] || Landmark;
             return (
               <div key={index} className="p-6 sm:p-7 rounded-2xl sm:rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:border-emerald-200 hover:-translate-y-1.5 transition-all duration-300 group flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                     <Icon size={28} strokeWidth={1.5} />
                  </div>
                  <div className="inline-block px-3 py-1 bg-white text-emerald-700 text-xs font-black uppercase tracking-widest rounded-full border border-emerald-50 mb-3">
                     {item.type}
                  </div>
                  <h3 className="text-2xl font-black font-sans text-slate-900 mb-2.5">{item.name}</h3>
                  <p className="text-base text-slate-500 leading-relaxed">{item.description}</p>
               </div>
             )
           })}
        </div>
      </div>
    </section>
  );
};

export default Institutions;
