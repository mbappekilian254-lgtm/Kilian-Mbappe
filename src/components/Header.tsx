import React, { useState } from 'react';
import { 
  Search, 
  Sun, 
  Moon, 
  X, 
  Send, 
  CloudSun, 
  TrendingUp, 
  TrendingDown,
  Calendar
} from 'lucide-react';
import { CurrencyRate, WeatherData } from '../types/news';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  currencies: CurrencyRate[];
  weather: WeatherData;
  onLogoClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  isDarkMode,
  onToggleTheme,
  currencies,
  weather,
  onLogoClick
}) => {
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  // O'zbekcha sana formati: "5-oktabr, 2026-yil, dushanba"
  const formattedDate = "5-oktabr, 2026-yil, dushanba";

  return (
    <header className="sticky top-0 z-40 bg-white/95 dark:bg-[#0B1325]/95 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 transition-colors duration-200">
      {/* 1. Yuqori ma'lumotlar satri (Utility Bar) */}
      <div className="hidden md:block bg-slate-50 dark:bg-slate-900/60 border-b border-slate-100 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-400 py-1.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Sana */}
          <div className="flex items-center gap-2 font-medium">
            <Calendar className="w-3.5 h-3.5 text-[#D62828]" />
            <span>{formattedDate}</span>
          </div>

          {/* Valyuta va ob-havo qisqartmasi */}
          <div className="flex items-center gap-6">
            {/* Valyuta kurslari */}
            <div className="flex items-center gap-4">
              {currencies.slice(0, 2).map((curr) => (
                <div key={curr.code} className="flex items-center gap-1">
                  <span className="font-semibold text-slate-700 dark:text-slate-300">{curr.code}</span>
                  <span className="tabular-nums font-mono">{curr.rate.toLocaleString('uz-UZ')}</span>
                  {curr.diff >= 0 ? (
                    <TrendingUp className="w-3 h-3 text-emerald-600 inline" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-rose-500 inline" />
                  )}
                </div>
              ))}
            </div>

            <span className="text-slate-300 dark:text-slate-700" aria-hidden="true">|</span>

            {/* Ob-havo */}
            <div className="flex items-center gap-1.5 font-medium">
              <CloudSun className="w-3.5 h-3.5 text-amber-500" />
              <span>{weather.city}: <strong className="text-slate-800 dark:text-slate-200">+{weather.temp}°C</strong></span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Asosiy Header (Top Bar Contract: 3 zonali arxitektura) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20 gap-4">
          
          {/* Zona 1: Brand logotipi (Yagona matnli editorial wordmark) */}
          <button
            onClick={onLogoClick}
            className="flex items-center text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0B3C5D] rounded-sm"
            aria-label="Kun yangiliklari bosh sahifasi"
          >
            <div className="flex flex-col">
              <span className="font-editorial text-2xl sm:text-3xl font-bold tracking-tight text-[#0B3C5D] dark:text-white transition-colors">
                Kun yangiliklari
                <span className="text-[#D62828] text-3xl leading-none">.</span>
              </span>
              <span className="text-[10px] uppercase tracking-widest text-slate-500 dark:text-slate-400 font-sans hidden sm:block">
                O‘zbekiston va jahon xabarlari
              </span>
            </div>
          </button>

          {/* Zona 2: Qidiruv maydoni (Katta ekranda) */}
          <div className="hidden md:flex flex-1 max-w-md mx-6">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Yangiliklar bo‘yicha qidiruv..."
                className="w-full pl-10 pr-10 py-2 text-sm bg-slate-100 dark:bg-slate-800/80 border border-transparent focus:border-[#0B3C5D] dark:focus:border-sky-500 rounded-lg text-slate-800 dark:text-slate-100 placeholder-slate-400 dark:placeholder-slate-500 focus:outline-none transition-all duration-200"
              />
              <Search className="w-4 h-4 text-slate-400 dark:text-slate-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-1"
                  aria-label="Qidiruvni tozalash"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Zona 3: Boshqaruv tugmalari (Rejim va tezkor amallar) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Mobil qidiruv tugmasi */}
            <button
              onClick={() => setMobileSearchOpen(!mobileSearchOpen)}
              className="md:hidden p-2 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              aria-label="Qidiruv maydonini ochish"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Telegram tezkor havola */}
            <a
              href="https://t.me/kunyangiliklari"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-[#0B3C5D] hover:bg-[#082b43] dark:bg-sky-600 dark:hover:bg-sky-500 rounded-lg shadow-xs transition-colors whitespace-nowrap"
              title="Telegram kanalimizga obuna bo‘ling"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Telegram kanal</span>
            </a>

            {/* Qorong‘i / Yorug‘ rejim almashtirish tugmasi */}
            <button
              onClick={onToggleTheme}
              className="p-2 sm:px-3 sm:py-2 text-xs font-medium text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-all flex items-center gap-1.5"
              aria-label={isDarkMode ? "Yorug' rejimga o'tish" : "Qorong'i rejimga o'tish"}
              title={isDarkMode ? "Yorug' rejim" : "Qorong'i rejim"}
            >
              {isDarkMode ? (
                <>
                  <Sun className="w-4 h-4 text-amber-400" />
                  <span className="hidden sm:inline">Yorug‘</span>
                </>
              ) : (
                <>
                  <Moon className="w-4 h-4 text-slate-700" />
                  <span className="hidden sm:inline">Qorong‘i</span>
                </>
              )}
            </button>
          </div>

        </div>

        {/* Mobil qidiruv maydoni ochilganda */}
        {mobileSearchOpen && (
          <div className="md:hidden pb-3 pt-1 border-t border-slate-100 dark:border-slate-800">
            <div className="relative">
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                placeholder="Yangiliklar bo‘yicha qidiruv..."
                className="w-full pl-10 pr-10 py-2.5 text-sm bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg text-slate-800 dark:text-slate-100 focus:outline-none focus:border-[#0B3C5D]"
              />
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              {searchQuery && (
                <button
                  onClick={() => onSearchChange('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
