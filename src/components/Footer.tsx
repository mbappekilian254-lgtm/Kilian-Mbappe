import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  ArrowUp,
  Globe
} from 'lucide-react';
import { NewsCategory } from '../types/news';

interface FooterProps {
  categories: NewsCategory[];
  onSelectCategory: (category: NewsCategory) => void;
}

export const Footer: React.FC<FooterProps> = ({ categories, onSelectCategory }) => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim() && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#071F30] text-slate-300 mt-20 border-t border-slate-800">
      {/* Asosiy kontent qismi */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* 1. Brend va Biz haqimizda (4 ustun) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-1">
              <span className="font-editorial text-2xl font-bold tracking-tight text-white">
                Kun yangiliklari
                <span className="text-[#D62828] text-2xl leading-none">.</span>
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
              "Kun yangiliklari" — O‘zbekiston va jahondagi eng dolzarb voqealar, siyosiy, iqtisodiy va madaniy yangiliklarni xolis va tezkor yetkazib beruvchi zamonaviy axborot portali.
            </p>

            <div className="pt-2">
              <a
                href="https://t.me/kunyangiliklari"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2.5 bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
              >
                <Send className="w-4 h-4" />
                <span>Telegram kanalimizga a’zo bo‘ling</span>
              </a>
            </div>
          </div>

          {/* 2. Bo'limlar va Kategoriyalar (3 ustun) */}
          <div className="lg:col-span-3 space-y-4">
            <h3 className="font-editorial text-base font-bold text-white uppercase tracking-wider">
              Kategoriyalar
            </h3>
            <ul className="grid grid-cols-2 gap-2 text-xs text-slate-400">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => {
                      onSelectCategory(cat);
                      scrollToTop();
                    }}
                    className="hover:text-white transition-colors text-left py-1 cursor-pointer"
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. Tahririyat aloqasi (2 ustun) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="font-editorial text-base font-bold text-white uppercase tracking-wider">
              Aloqa
            </h3>
            <div className="space-y-2.5 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0 mt-0.5" />
                <span>Toshkent sh., Navoiy ko‘chasi, 30-uy</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="tel:+998712000000" className="hover:text-white transition-colors font-mono">
                  +998 (71) 200-00-00
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a href="mailto:tahririyat@kunyangiliklari.uz" className="hover:text-white transition-colors">
                  info@kunyangiliklari.uz
                </a>
              </div>
            </div>
          </div>

          {/* 4. Yangiliklar obunasi (Newsletter) (3 ustun) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="font-editorial text-base font-bold text-white uppercase tracking-wider">
              Kunlik xabarnoma
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Eng muhim yangiliklar to‘plamini har kuni elektron pochtangizga bepul qabul qiling.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Elektron pochtangiz..."
                  className="w-full px-3.5 py-2 text-xs bg-slate-900 border border-slate-700 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-sky-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-2 bg-[#D62828] hover:bg-rose-700 text-white text-xs font-semibold rounded-lg shadow-xs transition-colors"
              >
                Obuna bo‘lish
              </button>
            </form>

            {subscribed && (
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 pt-1">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Rahmat! Siz muvaffaqiyatli obuna bo‘ldingiz.</span>
              </div>
            )}
          </div>

        </div>

        {/* Pastki litsenziya va mualliflik huquqi */}
        <div className="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p className="text-center sm:text-left">
            © 2026 "Kun yangiliklari". Barcha huquqlar qonun bilan himoyalangan. O‘zbekiston Respublikasi OAV to‘g‘risidagi qonunchiligiga muvofiq ro‘yxatga olingan.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors cursor-pointer shrink-0"
            aria-label="Sahifa yuqorisiga qaytish"
          >
            <span>Yuqoriga</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
