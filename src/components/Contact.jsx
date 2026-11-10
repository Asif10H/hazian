import React from 'react';
import { MapPin, Mail, Phone, ExternalLink, Navigation, Clock, ShieldCheck } from 'lucide-react';

const Contact = ({ data }) => {
  return (
    <section id="contact" className="section-padding bg-slate-50 border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-12 reveal">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mb-3 tracking-tight">
            সরাসরি যোগাযোগ ও অবস্থান
          </h2>
          <p className="text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
            হাজিয়ান গ্রামের যেকোনো নাগরিক তথ্য, অভিযোগ বা পরামর্শের জন্য আমাদের সাথে যোগাযোগ করুন।
          </p>
        </div>

        {/* 2-Column Contact Info + Google Maps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Contact Details Card (5 Columns) */}
          <div className="lg:col-span-5 bg-slate-900 text-white p-6 sm:p-7 rounded-2xl border border-slate-800 shadow-md flex flex-col justify-between card-hover-lift reveal">
            <div>
              <div className="flex items-center justify-between gap-2 border-b border-slate-800 pb-4 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">
                    গ্রাম তথ্য ও যোগাযোগ কেন্দ্র
                  </h3>
                  <p className="text-xs text-slate-400 font-medium">
                    ১নং ওয়ার্ড, ফাঁসিয়াখালী ইউনিয়ন, চকরিয়া
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-lg border border-emerald-500/20 shrink-0">
                  <ShieldCheck size={13} /> অফিসিয়াল
                </span>
              </div>

              <div className="space-y-4">
                {/* Address */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0 border border-slate-700 shadow-xs">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      ঠিকানা ও অবস্থান
                    </div>
                    <p className="text-sm font-semibold text-white mt-0.5 leading-snug">
                      {data.address}
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-slate-800/40 border border-slate-800">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 text-emerald-400 flex items-center justify-center shrink-0 border border-slate-700 shadow-xs">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                      ইমেইল যোগাযোগ
                    </div>
                    <a 
                      href={`mailto:${data.email}`} 
                      className="text-sm font-semibold text-white hover:text-emerald-400 transition-colors mt-0.5 block"
                    >
                      {data.email}
                    </a>
                  </div>
                </div>

                {/* Emergency Helpline */}
                <div className="flex items-start gap-3.5 p-3 rounded-xl bg-emerald-950/30 border border-emerald-800/40">
                  <div className="w-10 h-10 rounded-xl bg-emerald-900/60 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-700/50 shadow-xs">
                    <Phone size={18} />
                  </div>
                  <div>
                    <div className="text-[11px] font-semibold text-emerald-300 uppercase tracking-wider">
                      জরুরি নাগরিক হেল্পলাইন
                    </div>
                    <a 
                      href={`tel:${data.phone}`} 
                      className="text-sm sm:text-base font-bold text-emerald-400 font-mono hover:text-emerald-300 transition-colors mt-0.5 block"
                    >
                      {data.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Working Hours */}
            <div className="pt-4 border-t border-slate-800 mt-6 flex items-center gap-2 text-xs text-slate-400">
              <Clock size={14} className="text-emerald-400 shrink-0" />
              <span>কার্যদিবস: রবিবার হতে বৃহস্পতিবার (সকাল ৯টা – বিকাল ৫টা)</span>
            </div>
          </div>

          {/* Premium Google Maps Card (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl border border-slate-800 shadow-xl overflow-hidden flex flex-col relative min-h-[440px] sm:min-h-[480px] card-hover-lift reveal reveal-delay-1">
            
            {/* Top Premium Map Header Bar */}
            <div className="bg-slate-900/95 backdrop-blur-md px-4 py-3 border-b border-slate-800 flex items-center justify-between gap-3 z-10 shrink-0">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                    <span>হাজিয়ান গ্রাম লাইভ স্যাটেলাইট মানচিত্র</span>
                  </h4>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href="https://maps.app.goo.gl/YttXbSo8JCqcuF7r5"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold rounded-lg shadow-xs transition-colors inline-flex items-center gap-1"
                  title="গুগল ম্যাপে বড় করে দেখুন"
                >
                  <ExternalLink size={12} />
                  <span>ওপেন ম্যাপ</span>
                </a>
              </div>
            </div>

            {/* Live Interactive Google Map Frame */}
            <div className="relative flex-1 w-full h-full min-h-[300px]">
              <iframe 
                src="https://maps.google.com/maps?q=Hazian,+Fasiakhali,+Chakaria&hl=bn&t=m&z=15&output=embed"
                title="Hazian Map"
                width="100%" 
                height="100%" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[15%] contrast-[1.05]"
              />

              {/* Floating Bottom Location & Directions Overlay */}
              <div className="absolute bottom-3.5 left-3.5 right-3.5 z-10">
                <div className="bg-slate-950/90 backdrop-blur-md border border-slate-800/90 p-3.5 sm:p-4 rounded-xl shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-white">
                  
                  <div className="flex items-start gap-2.5">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30 mt-0.5">
                      <MapPin size={16} />
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm font-bold text-white flex items-center gap-1.5">
                        <span>হাজিয়ান গ্রাম, ১নং ওয়ার্ড</span>
                        <span className="text-[10px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.2 rounded border border-emerald-500/20 font-normal">
                          চকরিয়া
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-normal mt-0.5">
                        মাতামুহুরী নদীর দক্ষিণ তীরবর্তী • চকরিয়া সদর হতে দূরত্ব প্রায় ৪ কিমি
                      </p>
                    </div>
                  </div>

                  <a 
                    href="https://maps.app.goo.gl/YttXbSo8JCqcuF7r5" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full sm:w-auto px-4 py-2 bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs sm:text-sm font-bold rounded-lg shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all inline-flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <Navigation size={14} className="text-slate-950 fill-current" />
                    <span>দিকনির্দেশনা পান</span>
                  </a>

                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
