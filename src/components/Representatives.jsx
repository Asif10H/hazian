import React from "react";
import { User, Phone } from "lucide-react";

const Representatives = ({ data }) => {
  return (
    <section
      id="representatives"
      className="section-padding bg-slate-50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-sans text-slate-900 mb-4">
            {data.title}
          </h2>
          <p className="text-lg md:text-xl text-slate-500 max-w-2xl mx-auto">
            আমাদের গ্রামের উন্নয়নে নিয়োজিত জনপ্রতিনিধি এবং সমাজ সংস্কারকবৃন্দ।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {data.list.map((rep, index) => (
            <div
              key={index}
              className="relative p-6 sm:p-7 bg-white border border-slate-100 rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 group text-center hover:-translate-y-1"
            >
              <div className="absolute top-6 right-6 opacity-[0.03] group-hover:opacity-[0.1] transition-opacity">
                <User size={80} />
              </div>

              <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-5 border-4 border-white shadow-emerald-200 shadow-md text-emerald-600">
                <User size={38} strokeWidth={1.5} />
              </div>

              <h3 className="text-2xl font-black font-sans text-slate-900 mb-1.5 truncate">
                {rep.name}
              </h3>
              <p className="text-emerald-700 font-bold text-sm sm:text-base mb-5">{rep.role}</p>

              <a
                href={`tel:${rep.phone}`}
                className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl bg-slate-900 text-white font-bold hover:bg-emerald-600 transition-colors w-full justify-center group/btn text-base"
              >
                <Phone size={16} className="group-hover/btn:animate-bounce" />
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
