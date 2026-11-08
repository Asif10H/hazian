import React, { useState, useEffect, useMemo } from 'react';
import { Sun, CloudSun, CloudRain, CloudLightning, Wind, MapPin, Clock } from 'lucide-react';

const toBengaliNumber = (num) => {
  if (num === null || num === undefined) return '';
  const bengaliDigits = ['০', '১', '২', '৩', '৪', '৫', '৬', '৭', '৮', '৯'];
  return num.toString().replace(/\d/g, (d) => bengaliDigits[d]);
};

const formatTo12HourBengali = (time24) => {
  if (!time24) return '';
  const parts = time24.split(':');
  let h = parseInt(parts[0], 10);
  const m = parts[1] || '০০';
  h = h % 12 || 12;
  const formattedH = h < 10 ? `০${h}` : `${h}`;
  return `${toBengaliNumber(formattedH)}:${toBengaliNumber(m)}`;
};

const getWeatherMeta = (code) => {
  if (code === 0) return { label: 'পরিষ্কার আকাশ', icon: Sun, color: 'text-amber-400' };
  if ([1, 2, 3].includes(code)) return { label: 'আংশিক মেঘলা', icon: CloudSun, color: 'text-amber-300' };
  if ([51, 53, 55, 61, 63, 65, 80, 81, 82].includes(code)) return { label: 'হালকা বৃষ্টিপাত', icon: CloudRain, color: 'text-blue-400' };
  if ([95, 96, 99].includes(code)) return { label: 'বজ্রবৃষ্টি', icon: CloudLightning, color: 'text-yellow-400' };
  return { label: 'রৌদ্রোজ্জ্বল ও স্নিগ্ধ', icon: Sun, color: 'text-amber-400' };
};

const WeatherPrayerWidget = () => {
  const [weather, setWeather] = useState({
    temperature: 31,
    windspeed: 5,
    weathercode: 1,
    isDay: true,
  });

  const [prayerTimes, setPrayerTimes] = useState({
    Fajr: '04:42',
    Dhuhr: '11:35',
    Asr: '14:49',
    Maghrib: '17:12',
    Isha: '18:28',
  });

  // Fetch Live Weather for Chakaria (lat: 21.7866, lon: 92.0779)
  useEffect(() => {
    let isMounted = true;

    fetch('https://api.open-meteo.com/v1/forecast?latitude=21.7866&longitude=92.0779&current_weather=true')
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted || !data?.current_weather) return;
        const cw = data.current_weather;
        setWeather({
          temperature: Math.round(cw.temperature),
          windspeed: Math.round(cw.windspeed),
          weathercode: cw.weathercode,
          isDay: Boolean(cw.is_day),
        });
      })
      .catch(() => {
        // Silently preserve resilient fallback values
      });

    // Fetch Daily Prayer Times for Chakaria
    fetch('https://api.aladhan.com/v1/timingsByCity?city=Chakaria&country=Bangladesh&method=1')
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted || !data?.data?.timings) return;
        const t = data.data.timings;
        setPrayerTimes({
          Fajr: t.Fajr?.slice(0, 5) || '04:42',
          Dhuhr: t.Dhuhr?.slice(0, 5) || '11:35',
          Asr: t.Asr?.slice(0, 5) || '14:49',
          Maghrib: t.Maghrib?.slice(0, 5) || '17:12',
          Isha: t.Isha?.slice(0, 5) || '18:28',
        });
      })
      .catch(() => {
        // Silently preserve resilient fallback values
      });

    return () => {
      isMounted = false;
    };
  }, []);

  // Compute Next Prayer directly via useMemo (avoids cascading effect renders)
  const nextPrayerName = useMemo(() => {
    const now = new Date();
    const currentMinutes = now.getHours() * 60 + now.getMinutes();

    const toMinutes = (timeStr) => {
      const [h, m] = timeStr.split(':').map(Number);
      return h * 60 + m;
    };

    const fajrMin = toMinutes(prayerTimes.Fajr);
    const dhuhrMin = toMinutes(prayerTimes.Dhuhr);
    const asrMin = toMinutes(prayerTimes.Asr);
    const maghribMin = toMinutes(prayerTimes.Maghrib);
    const ishaMin = toMinutes(prayerTimes.Isha);

    if (currentMinutes < fajrMin) return 'ফজর';
    if (currentMinutes < dhuhrMin) return 'জোহর';
    if (currentMinutes < asrMin) return 'আসর';
    if (currentMinutes < maghribMin) return 'মাগরিব';
    if (currentMinutes < ishaMin) return 'এশা';
    return 'ফজর';
  }, [prayerTimes]);

  const weatherMeta = getWeatherMeta(weather.weathercode);
  const WeatherIcon = weatherMeta.icon;

  const prayerSchedule = [
    { key: 'Fajr', label: 'ফজর', time: prayerTimes.Fajr, period: 'ভোর' },
    { key: 'Dhuhr', label: 'জোহর', time: prayerTimes.Dhuhr, period: 'দুপুর' },
    { key: 'Asr', label: 'আসর', time: prayerTimes.Asr, period: 'বিকাল' },
    { key: 'Maghrib', label: 'মাগরিব', time: prayerTimes.Maghrib, period: 'সন্ধ্যা' },
    { key: 'Isha', label: 'এশা', time: prayerTimes.Isha, period: 'রাত' },
  ];

  return (
    <section className="bg-slate-950 text-white border-b border-slate-800/80 py-4 sm:py-5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 items-center">
          
          {/* Weather Widget Card (5 Columns) */}
          <div className="lg:col-span-5 bg-slate-900/90 border border-slate-800/90 rounded-xl p-3.5 sm:p-4 flex items-center justify-between gap-3 shadow-sm hover:border-slate-700 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-slate-800/80 border border-slate-700/60 flex items-center justify-center shrink-0 shadow-inner">
                <WeatherIcon size={26} className={weatherMeta.color} />
              </div>
              <div>
                <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 uppercase tracking-wider">
                  <MapPin size={11} />
                  চকরিয়া • আবহাওয়া
                </div>
                <div className="flex items-baseline gap-2 mt-0.5">
                  <span className="text-xl sm:text-2xl font-black text-white font-mono">
                    {toBengaliNumber(weather.temperature)}°সে.
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {weatherMeta.label}
                  </span>
                </div>
              </div>
            </div>

            <div className="text-right border-l border-slate-800 pl-3 shrink-0">
              <div className="flex items-center justify-end gap-1 text-[11px] text-slate-400">
                <Wind size={11} className="text-slate-400" />
                <span>বাতাস</span>
              </div>
              <div className="text-xs font-bold text-slate-200 mt-0.5">
                {toBengaliNumber(weather.windspeed)} কিমি/ঘণ্টা
              </div>
            </div>
          </div>

          {/* Prayer Times Card (7 Columns) */}
          <div className="lg:col-span-7 bg-slate-900/90 border border-slate-800/90 rounded-xl p-3.5 sm:p-4 shadow-sm hover:border-slate-700 transition-colors">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 mb-2.5">
              <div className="flex items-center gap-1.5 text-xs font-bold text-white">
                <Clock size={13} className="text-emerald-400" />
                <span>আজকের নামাজের সময়সূচি (চকরিয়া)</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-md border border-emerald-500/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                পরবর্তী ওয়াক্ত: {nextPrayerName}
              </div>
            </div>

            {/* 5 Waqt Chips Grid */}
            <div className="grid grid-cols-5 gap-1.5 sm:gap-2">
              {prayerSchedule.map((item) => {
                const isNext = nextPrayerName === item.label;
                return (
                  <div
                    key={item.key}
                    className={`py-1.5 px-1 sm:px-2 rounded-lg text-center border transition-all ${
                      isNext
                        ? 'bg-emerald-950/60 border-emerald-500/40 text-emerald-200 shadow-xs ring-1 ring-emerald-500/30'
                        : 'bg-slate-800/50 border-slate-800 text-slate-300'
                    }`}
                  >
                    <div className="text-[10px] sm:text-[11px] font-semibold text-slate-400">
                      {item.label}
                    </div>
                    <div className="text-xs sm:text-sm font-black font-mono mt-0.5 text-white">
                      {formatTo12HourBengali(item.time)}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WeatherPrayerWidget;
