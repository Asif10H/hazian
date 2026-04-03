import React from "react";
import { ChevronDown, ArrowRight, PhoneCall, MapPin } from "lucide-react";
import siteData from "../data.json";

const Hero = ({ data }) => {
  const stats = siteData.village.about.stats;

  return (
    <section
      id="home"
      className="relative h-screen min-h-[700px] w-full flex flex-col justify-center overflow-hidden bg-slate-950"
    >
      {/* Background Image with Slow Pan Overlay */}
      <div
        className="absolute inset-0 z-0 opacity-60 transition-transform duration-[20s] ease-linear scale-105"
        style={{
          backgroundImage: `url(${data.imageUrl})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply" />
        {/* Hidden img for SEO — Google can index this with proper alt text */}
        <img
          src={data.imageUrl}
          alt="হাজিয়ান গ্রামের প্রাকৃতিক দৃশ্য — মাতামুহুরী নদীর তীরে সবুজ প্রকৃতি, চকরিয়া, কক্সবাজার"
          width="1200"
          height="630"
          className="sr-only"
          aria-hidden="true"
          loading="eager"
        />
      </div>

      {/* Complex Gradients for Depth */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent w-full md:w-[75%]" />
      <div className="absolute inset-x-0 bottom-0 z-10 h-32 bg-gradient-to-t from-ui-soft to-transparent" />

      {/* Aurora glow on the left */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-600/20 blur-[120px] pointer-events-none z-0" />

      {/* Main Content Grid */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-12 md:mt-24">
        {/* Left Column - Text & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 shadow-2xl animate-fade-in">
            <span className="text-emerald-300 font-semibold tracking-wider text-sm uppercase">
              ঐতিহ্য ও আধুনিকতার মেলবন্ধন
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white mb-8 leading-[1.1] animate-fade-in delay-100">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              {data.title.split(" ")[0]}
            </span>
            <br />
            <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              {data.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="text-lg md:text-2xl text-slate-300 mb-12 max-w-2xl leading-relaxed animate-fade-in delay-200 font-light border-l-4 border-emerald-500 pl-6">
            {data.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto animate-fade-in delay-300">
            <a
              href="#about"
              className="group px-8 py-5 font-bold text-lg text-slate-900 bg-emerald-400 rounded-2xl hover:bg-emerald-300 hover:shadow-[0_0_40px_rgba(52,211,153,0.4)] transition-all duration-500 hover:-translate-y-1 flex items-center justify-center gap-3"
            >
              বিস্তারিত জানুন
              <ArrowRight
                size={22}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#emergency"
              className="group px-8 py-5 font-bold text-lg text-white bg-slate-900/50 border border-slate-700 backdrop-blur-xl rounded-2xl hover:bg-slate-800 transition-all duration-500 hover:-translate-y-1 flex items-center justify-center gap-3 hover:border-emerald-500/50"
            >
              <PhoneCall
                size={22}
                className="text-emerald-400 group-hover:rotate-12 transition-transform"
              />
              জরুরী যোগাযোগ
            </a>
          </div>
        </div>

        {/* Right Column - Premium Glass Cards */}
        <div className="hidden lg:flex lg:col-span-5 relative h-[500px] items-center justify-center animate-fade-in delay-500">
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 bg-slate-900/40 backdrop-blur-2xl border border-white/10 p-8 rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:scale-105 transition-transform duration-700 z-20">
            <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/30">
              <MapPin className="text-white" size={32} />
            </div>
            <h3 className="text-3xl font-bold text-white mb-2">হাজিয়ান</h3>
            <p className="text-slate-400 font-medium mb-8">চকরিয়া, কক্সবাজার</p>

            <div className="space-y-4">
              {stats &&
                stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-white/5 pb-4 last:border-0 last:pb-0"
                  >
                    <span className="text-slate-400 font-medium">
                      {stat.label}
                    </span>
                    <span className="text-white font-bold text-lg bg-white/5 px-3 py-1 rounded-lg border border-white/5">
                      {stat.value}
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Floating Accent Card Behind */}
          <div className="absolute right-20 top-[15%] w-64 h-64 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-[3rem] rotate-12 opacity-80 blur-[2px] z-10 animate-pulse-soft mix-blend-screen shadow-[0_0_50px_rgba(16,185,129,0.5)]"></div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 animate-bounce">
        <a
          href="#about"
          className="flex items-center justify-center w-12 h-12 bg-white/5 border border-white/10 backdrop-blur-md rounded-full text-slate-300 hover:bg-white/10 transition-all hover:text-white"
        >
          <ChevronDown size={24} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
