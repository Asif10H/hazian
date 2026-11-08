import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQ = ({ data }) => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(prev => (prev === index ? -1 : index));
  };

  if (!data || !data.items || data.items.length === 0) return null;

  return (
    <section id="faq" className="section-padding bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-10 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            {data.title || "সাধারণ প্রশ্নোত্তর"}
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            {data.subtitle || "হাজিয়ান গ্রামে যাতায়াত, সরকারি সেবা ও নাগরিক জীবন সংক্রান্ত বহুল জিজ্ঞাসিত প্রশ্নসমূহ।"}
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {data.items.map((item, index) => {
            const isOpen = openIndex === index;
            const delayClass = `reveal-delay-${(index % 3) + 1}`;

            return (
              <div
                key={index}
                className={`rounded-xl border transition-all duration-200 overflow-hidden reveal ${delayClass} ${
                  isOpen
                    ? 'bg-white border-emerald-300 shadow-sm'
                    : 'bg-white/80 border-slate-200/80 hover:border-slate-300'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={isOpen}
                  className="w-full px-5 py-4 sm:px-6 sm:py-4.5 text-left flex items-center justify-between gap-4 cursor-pointer select-none transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-md bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100">
                      <HelpCircle size={15} />
                    </span>
                    <span className={`text-base sm:text-lg font-bold transition-colors ${
                      isOpen ? 'text-emerald-900' : 'text-slate-900 hover:text-emerald-700'
                    }`}>
                      {item.question}
                    </span>
                  </div>

                  <span className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-emerald-100 text-emerald-800' : 'bg-slate-100 text-slate-500'
                  }`}>
                    <ChevronDown size={18} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 sm:px-6 sm:pb-6 text-sm sm:text-base text-slate-700 leading-relaxed border-t border-slate-100/80">
                    <p className="pt-2 font-normal">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;
