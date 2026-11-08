import React, { useState, useEffect } from "react";
import { ChevronDown, ArrowRight, PhoneCall, MapPin, Eye } from "lucide-react";
import siteData from "../data.json";

const Hero = ({ data }) => {
  const stats = siteData.village.about.stats;
  const [views, setViews] = useState(null);

  useEffect(() => {
    const namespace = "hazian-page-views";
    const key = "views";
    const url = `https://api.counterapi.dev/v1/${namespace}/${key}/up`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // V1 returns count, V2 returns value
        const currentViews = data.count !== undefined ? data.count : data.value;
        if (currentViews !== undefined) {
          setViews(currentViews);
        }
      })
      .catch((err) => console.error("Error fetching view count:", err));
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen lg:h-screen w-full flex flex-col justify-center overflow-hidden bg-slate-950 pt-24 pb-16 lg:py-0"
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
      <div className="absolute inset-x-0 bottom-0 z-10 h-24 sm:h-28 bg-gradient-to-t from-white to-transparent" />

      {/* Aurora glow on the left */}
      <div className="absolute top-1/4 left-[-10%] w-[500px] h-[500px] rounded-full bg-emerald-600/20 blur-[120px] pointer-events-none z-0" />

      {/* Main Content Grid */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center mt-6 lg:mt-0">
        {/* Left Column - Text & CTA */}
        <div className="lg:col-span-7 flex flex-col items-start text-left w-full">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 shadow-2xl animate-fade-in">
            <span className="text-emerald-300 font-semibold tracking-wider text-xs sm:text-sm uppercase">
              ঐতিহ্য ও আধুনিকতার মেলবন্ধন
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-black text-white mb-6 leading-[1.1] animate-fade-in delay-100">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-slate-400">
              {data.title.split(" ")[0]}
            </span>
            <br />
            <span className="text-emerald-400 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              {data.title.split(" ").slice(1).join(" ")}
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 mb-8 max-w-2xl leading-relaxed animate-fade-in delay-200 font-light border-l-4 border-emerald-500 pl-5">
            {data.subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md sm:max-w-none sm:w-auto animate-fade-in delay-300">
            <a
              href="#about"
              className="group px-7 py-3.5 font-bold text-base sm:text-lg text-slate-900 bg-emerald-400 rounded-xl hover:bg-emerald-300 hover:shadow-[0_0_35px_rgba(52,211,153,0.4)] transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
            >
              বিস্তারিত জানুন
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </a>
            <a
              href="#emergency"
              className="group px-7 py-3.5 font-bold text-base sm:text-lg text-white bg-slate-900/50 border border-slate-700 backdrop-blur-xl rounded-xl hover:bg-slate-800 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2.5 hover:border-emerald-500/50"
            >
              <PhoneCall
                size={20}
                className="text-emerald-400 group-hover:rotate-12 transition-transform"
              />
              জরুরী যোগাযোগ
            </a>
          </div>
        </div>

        {/* Right Column - Premium Glass Cards */}
        <div className="flex lg:col-span-5 relative h-[360px] sm:h-[420px] lg:h-[460px] items-center justify-center animate-fade-in delay-500 w-full mt-6 lg:mt-0">
          <div className="relative lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 w-full max-w-md lg:w-80 bg-slate-900/50 backdrop-blur-2xl border border-white/10 p-5 sm:p-7 rounded-2xl sm:rounded-3xl shadow-[0_30px_60px_rgba(0,0,0,0.5)] hover:scale-[1.02] transition-transform duration-500 z-20">
            <div className="w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-br from-emerald-500 to-teal-700 rounded-xl flex items-center justify-center mb-4 shadow-lg shadow-emerald-500/30">
              <MapPin className="text-white" size={28} />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-1">হাজিয়ান</h3>
            <p className="text-slate-400 font-medium text-sm mb-5">চকরিয়া, কক্সবাজার</p>

            <div className="space-y-3">
              {stats &&
                stats.map((stat, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-white/5 pb-2.5"
                  >
                    <span className="text-slate-400 font-medium text-sm sm:text-base">
                      {stat.label}
                    </span>
                    <span className="text-white font-bold text-base bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5">
                      {stat.value}
                    </span>
                  </div>
                ))}
              {views !== null && (
                <div className="flex items-center justify-between pt-1.5">
                  <span className="text-slate-400 font-medium flex items-center gap-1.5 text-sm sm:text-base">
                    <Eye className="w-4 h-4 text-emerald-400" />
                    মোট ভিজিটর
                  </span>
                  <span className="text-emerald-400 font-bold text-base bg-emerald-500/10 px-2.5 py-0.5 rounded-md border border-emerald-500/20">
                    {views.toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className="absolute right-[10%] sm:right-20 top-[15%] w-48 h-48 sm:w-60 sm:h-60 bg-gradient-to-br from-emerald-600 to-teal-800 rounded-3xl rotate-12 opacity-70 blur-[2px] z-10 animate-pulse-soft mix-blend-screen shadow-[0_0_50px_rgba(16,185,129,0.5)]"></div>
        </div>
      </div>

     
    </section>
  );
};

export default Hero;
