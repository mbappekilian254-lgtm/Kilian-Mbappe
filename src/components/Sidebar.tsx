import React, { useState } from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  Eye, 
  CloudSun, 
  Wind, 
  Droplets, 
  Send, 
  Calculator, 
  Flame,
  ArrowRight
} from 'lucide-react';
import { CurrencyRate, NewsArticle, WeatherData } from '../types/news';

interface SidebarProps {
  topArticles: NewsArticle[];
  currencies: CurrencyRate[];
  weather: WeatherData;
  onSelectArticle: (article: NewsArticle) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  topArticles,
  currencies,
  weather,
  onSelectArticle
}) => {
  // Valyuta kalkulyatori holati
  const [calcAmount, setCalcAmount] = useState<number>(100);
  const [selectedCurrency, setSelectedCurrency] = useState<'USD' | 'EUR' | 'RUB'>('USD');

  const currentRateObj = currencies.find((c) => c.code === selectedCurrency) || currencies[0];
  const convertedTotal = Math.round(calcAmount * currentRateObj.rate);

  return (
    <aside className="space-y-6" aria-label="Qo‘shimcha ma’lumotlar va ommabop yangiliklar">
      
      {/* 1. "Ko‘p o‘qilganlar" (TOP 5) bloki */}
      <div className="bg-white dark:bg-[#111C38] rounded-xl border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-xs">
        <div className="flex items-center gap-2 pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
          <Flame className="w-5 h-5 text-[#D62828]" />
          <h2 className="font-editorial text-lg font-bold text-slate-900 dark:text-white">
            Ko‘p o‘qilganlar
          </h2>
        </div>

        <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
          {topArticles.map((article, index) => {
            const rank = String(index + 1).padStart(2, '0');
            return (
              <article
                key={article.id}
                onClick={() => onSelectArticle(article)}
                className="group cursor-pointer py-3.5 first:pt-0 last:pb-0 flex items-start gap-3.5 transition-colors"
              >
                {/* Tartib raqami (Playfair Display) */}
                <span className="font-editorial text-2xl font-bold text-slate-300 dark:text-slate-600 group-hover:text-[#D62828] transition-colors shrink-0 w-8">
                  {rank}
                </span>

                <div className="flex-1">
                  <div className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 mb-1 flex items-center justify-between">
                    <span>{article.category}</span>
                    <span className="flex items-center gap-1 font-mono text-[10px] tabular-nums">
                      <Eye className="w-3 h-3 text-slate-400" />
                      {article.views.toLocaleString('uz-UZ')}
                    </span>
                  </div>

                  <h3 className="font-medium text-xs sm:text-sm text-slate-800 dark:text-slate-200 group-hover:text-[#0B3C5D] dark:group-hover:text-sky-400 leading-snug line-clamp-2 transition-colors">
                    {article.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* 2. Valyuta kurslari (USD, EUR, RUB) */}
      <div className="bg-white dark:bg-[#111C38] rounded-xl border border-slate-200/80 dark:border-slate-800/80 p-5 shadow-xs">
        <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-[#0B3C5D] dark:text-sky-400" />
            <h2 className="font-editorial text-lg font-bold text-slate-900 dark:text-white">
              Valyuta kurslari
            </h2>
          </div>
          <span className="text-[11px] text-slate-400 font-sans">MB kursi</span>
        </div>

        {/* Kurslar ro'yxati */}
        <div className="space-y-3 mb-5">
          {currencies.map((curr) => {
            const isPositive = curr.diff >= 0;
            return (
              <div 
                key={curr.code} 
                className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-100/70 dark:hover:bg-slate-800/50 transition-colors"
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-8 h-8 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center font-bold text-xs text-[#0B3C5D] dark:text-sky-300">
                    {curr.symbol}
                  </span>
                  <div>
                    <div className="font-semibold text-xs text-slate-800 dark:text-slate-200">{curr.code}</div>
                    <div className="text-[10px] text-slate-500 dark:text-slate-400">{curr.name}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-mono text-sm font-semibold text-slate-900 dark:text-white tabular-nums">
                    {curr.rate.toLocaleString('uz-UZ')} <span className="text-[10px] font-normal text-slate-500">so‘m</span>
                  </div>
                  <div className={`text-[10px] font-mono flex items-center justify-end gap-0.5 ${isPositive ? 'text-emerald-600 dark:text-emerald-400' : 'text-rose-600 dark:text-rose-400'}`}>
                    {isPositive ? <TrendingUp className="w-2.5 h-2.5" /> : <TrendingDown className="w-2.5 h-2.5" />}
                    <span>{isPositive ? `+${curr.diff}` : curr.diff}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Tezkor valyuta kalkulyatori */}
        <div className="pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
          <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 mb-2 font-medium">
            <Calculator className="w-3.5 h-3.5 text-[#0B3C5D] dark:text-sky-400" />
            <span>Tezkor hisoblagich</span>
          </div>

          <div className="grid grid-cols-5 gap-2 mb-2">
            <input
              type="number"
              min="1"
              value={calcAmount}
              onChange={(e) => setCalcAmount(Math.max(1, Number(e.target.value) || 0))}
              className="col-span-3 px-2.5 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md font-mono text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#0B3C5D]"
              placeholder="Miqdor"
            />
            <select
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value as any)}
              className="col-span-2 px-2 py-1.5 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-md font-medium text-slate-800 dark:text-slate-200 focus:outline-none focus:border-[#0B3C5D]"
            >
              <option value="USD">USD</option>
              <option value="EUR">EUR</option>
              <option value="RUB">RUB</option>
            </select>
          </div>

          <div className="text-right text-[11px] text-slate-600 dark:text-slate-400">
            Jami: <strong className="text-slate-900 dark:text-white font-mono tabular-nums text-xs">{convertedTotal.toLocaleString('uz-UZ')}</strong> so‘m
          </div>
        </div>

      </div>

      {/* 3. Ob-havo vidjeti (Toshkent) */}
      <div className="bg-gradient-to-br from-[#0B3C5D] to-[#082b43] text-white rounded-xl p-5 shadow-xs">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[11px] uppercase tracking-wider text-sky-200/80 font-medium">
              Ob-havo ma’lumoti
            </span>
            <h3 className="font-editorial text-xl font-bold text-white">
              {weather.city}
            </h3>
          </div>
          <CloudSun className="w-10 h-10 text-amber-300 drop-shadow-sm" />
        </div>

        <div className="flex items-baseline gap-2 mb-3">
          <span className="text-4xl font-bold font-mono tracking-tight">+{weather.temp}°C</span>
          <span className="text-xs text-sky-200">His qilinishi: +{weather.feelsLike}°C</span>
        </div>

        <p className="text-xs text-sky-100 mb-4 font-medium">
          {weather.condition}
        </p>

        <div className="grid grid-cols-2 gap-2 pt-3 border-t border-white/10 text-xs text-sky-200">
          <div className="flex items-center gap-1.5">
            <Droplets className="w-3.5 h-3.5 text-sky-300" />
            <span>Namlik: {weather.humidity}%</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Wind className="w-3.5 h-3.5 text-sky-300" />
            <span>Shamol: {weather.windSpeed} m/s</span>
          </div>
        </div>
      </div>

      {/* 4. Telegram kanal taklifi */}
      <div className="bg-white dark:bg-[#111C38] rounded-xl border border-sky-100 dark:border-sky-900/40 p-5 shadow-xs text-center relative overflow-hidden">
        <div className="w-12 h-12 bg-sky-50 dark:bg-sky-950/60 text-sky-600 dark:text-sky-400 rounded-full flex items-center justify-center mx-auto mb-3">
          <Send className="w-6 h-6" />
        </div>
        <h3 className="font-editorial text-lg font-bold text-slate-900 dark:text-white mb-1">
          Eng muhim xabarlar Telegramda
        </h3>
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">
          Kun yangiliklari rasmiy kanali orqali voqealarni birinchilardan bo‘lib kuzatib boring.
        </p>
        <a
          href="https://t.me/kunyangiliklari"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
        >
          <span>Kanalga obuna bo‘lish</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>

    </aside>
  );
};
