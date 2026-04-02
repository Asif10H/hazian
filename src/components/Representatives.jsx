import React from "react";
import { User, Phone } from "lucide-react";

const Representatives = ({ data }) => {
  return (
    <section
      id="representatives"
      className="section-padding bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold font-sans text-slate-900 mb-6">
            {data.title}
          </h2>
          <p className="text-xl text-slate-500 max-w-2xl mx-auto">
            আমাদের গ্রামের উন্নয়নে নিয়োজিত জনপ্রতিনিধি এবং সমাজ সংস্কারকবৃন্দ।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {data.list.map((rep, index) => (
            <div
              key={index}
              className="relative p-10 bg-white border border-slate-100 rounded-[3rem] shadow-xl hover:shadow-emerald-500/10 transition-all duration-500 group text-center hover:scale-[1.02]"
            >
              <div className="absolute top-10 right-10 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                <User size={120} />
              </div>

              <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-8 border-4 border-white shadow-emerald-200 shadow-lg text-emerald-600">
                <User size={48} strokeWidth={1.5} />
              </div>

              <h3 className="text-3xl font-black font-sans text-slate-900 mb-2 truncate">
                {rep.name}
              </h3>
              <p className="text-emerald-700 font-bold mb-8">{rep.role}</p>

              <a
                href={`tel:${rep.phone}`}
                className="inline-flex items-center gap-3 px-8 py-3 rounded-2xl bg-slate-900 text-white font-bold hover:bg-emerald-600 transition-colors w-full justify-center group/btn"
              >
                <Phone size={18} className="group-hover/btn:animate-bounce" />
                {rep.phone}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Representatives;
