import { CurrencyRate, NewsArticle, WeatherData } from '../types/news';

// 12 ta xabar uchun maxsus generatsiya qilingan hayotiy va unikal foto suratlar
import heroImg from '../assets/images/hero_tashkent_modern_1791197688897.jpg';
import worldSummitImg from '../assets/images/news_world_summit_1791197703501.jpg';
import techAiImg from '../assets/images/news_tech_ai_center_1791197719433.jpg';
import sportOlympicImg from '../assets/images/news_sport_olympic_1791197730117.jpg';
import uzbExportImg from '../assets/images/news_uzb_export_trade_1791198028839.jpg';
import samarkandFestivalImg from '../assets/images/news_samarkand_festival_1791198047986.jpg';
import autumnHealthImg from '../assets/images/news_autumn_health_nutrition_1791198064025.jpg';
import aralSeaImg from '../assets/images/news_aral_sea_greenery_1791198078879.jpg';
import centralBankImg from '../assets/images/news_central_bank_finance_1791198093920.jpg';
import itCoworkingImg from '../assets/images/news_it_coworking_developer_1791198110122.jpg';
import olympicVillageImg from '../assets/images/news_olympic_village_tashkent_1791198124102.jpg';
import unClimateImg from '../assets/images/news_un_climate_assembly_1791198139002.jpg';

export const INITIAL_NEWS: NewsArticle[] = [
  {
    id: 'news-1',
    title: 'Toshkentda 2026-yilgi yashil shahar infratuzilmasi va tezkor temir yo‘l kengayishi taqdim etildi',
    slug: 'toshkent-yashil-shahar-infratuzilmasi',
    summary: 'Poytaxtda ekologik toza jamoat transporti va yangi tezyurar elektr poyezdlar tarmog‘i ishga tushirilmoqda. Loyiha shahar havosini 30 foizga tozalashga xizmat qiladi.',
    content: [
      'Toshkent shahrida bugun poytaxt hokimiyati va Transport vazirligi hamkorligida 2026-2030 yillarga mo‘ljallangan "Yashil poytaxt" kompleks dasturi rasman taqdim etildi. Ushbu keng ko‘lamli tashabbus shahar ekologiyasini yaxshilash va jamoat transporti qamrovini sezilarli darajada oshirishga qaratilgan.',
      'Dastur doirasida poytaxt atrofida yangi tezyurar shahar atrofi elektr poyezdlari halqasi to‘liq barpo etiladi. Shuningdek, 600 dan ortiq yangi avlod elektr avtobuslari yo‘nalishlarga chiqarilib, velosiped va piyodalar uchun 120 kilometrlik xavfsiz yashil yo‘laklar tashkil etiladi.',
      'Loyiha xalqaro ekologik standartlarga to‘liq javob berishi hamda shahar markazidagi tirbandliklarni kamida 25 foizga qisqartirishi kutilmoqda. Mutaxassislarning fikricha, yangi infratuzilma Toshkentni mintaqadagi eng zamonaviy va qulay megapolisga aylantiradi.'
    ],
    quote: {
      text: 'Biz shahar aholisi uchun nafaqat qulay transport, balki toza nafas oladigan, sog‘lom va ko‘rkam poytaxt muhitini yaratmoqdamiz.',
      author: 'Loyiha bosh muhandisi'
    },
    keyPoints: [
      '600 dan ortiq yangi ekologik toza elektrobuslar xarid qilindi',
      'Poytaxt bo‘ylab 120 km yangi yashil yo‘laklar qurilmoqda',
      'Yillik havo sifati ko‘rsatkichlarini 30% yaxshilash rejalashtirilgan'
    ],
    category: 'O‘zbekiston',
    imageUrl: heroImg,
    imageCaption: 'Toshkent shahrining zamonaviy biznes va yashil arxitektura manzarasi',
    publishedAt: 'Bugun, 08:30',
    date: '5-oktabr, 2026-yil',
    readTime: '3 daqiqa',
    author: 'Azizbek Rahimov',
    views: 14250,
    isLead: true,
    isTop: true,
    topRank: 1,
    tags: ['Toshkent', 'Ekologiya', 'Transport', 'Infratuzilma']
  },
  {
    id: 'news-2',
    title: 'Markaziy Osiyo va Yevropa Ittifoqi iqtisodiy forumi: Yangi savdo shartnomalari imzolandi',
    slug: 'markaziy-osiyo-yei-iqtisodiy-forumi',
    summary: 'Forum doirasida barqaror energetika, raqamlashtirish va agrosanoat sohalarida umumiy qiymati 4,2 milliard yevrolik ikki tomonlama kelishuvlarga erishildi.',
    content: [
      'Bryussel va Samarqand o‘rtasidagi iqtisodiy muloqotning navbatdagi bosqichida tomonlar strategik hamkorlikni yangi bosqichga ko‘tarishga kelishib oldilar. Forumda 30 dan ortiq xorijiy davlatlar delegatsiyalari ishtirok etdi.',
      'Yevropa Ittifoqi O‘zbekistonning "yashil vodorod" va quyosh energetikasi loyihalariga to‘g‘ridan-to‘g‘ri investitsiya kiritishni qo‘llab-quvvatlaydi. Shuningdek, Markaziy Osiyo transport yo‘lagini Yevropa bozorlari bilan bog‘lovchi yangi logistika marshrutlari belgilandi.',
      'Ushbu shartnomalar mamlakatimiz eksport salohiyatini oshirish bilan birga, minglab yangi yuqori daromadli ish o‘rinlari yaratishga imkon beradi.'
    ],
    quote: {
      text: 'Markaziy Osiyo bugun global ta’minot zanjirlarining ishonchli va barqaror markaziga aylanib bormoqda.',
      author: 'Yevropa Komissiyasi vakili'
    },
    category: 'Dunyo',
    imageUrl: worldSummitImg,
    imageCaption: 'Xalqaro iqtisodiy forum doirasidagi rasmiy delegatsiyalar muzokaralari',
    publishedAt: 'Bugun, 09:15',
    date: '5-oktabr, 2026-yil',
    readTime: '4 daqiqa',
    author: 'Dilnoza Karimova',
    views: 9820,
    isTop: true,
    topRank: 2,
    tags: ['Xalqaro', 'Iqtisodiyot', 'Investitsiya', 'Yevropa']
  },
  {
    id: 'news-3',
    title: 'Toshkent IT Parkida Markaziy Osiyodagi eng yirik Sun’iy intellekt markazi ish boshladi',
    slug: 'toshkentda-suniy-intellekt-markazi',
    summary: 'Yangi superkompyuter klasteri tibbiyot, qishloq xo‘jaligi va moliyaviy texnologiyalar sohasidagi murakkab tahlillarni daqiqalar ichida qayta ishlash quvvatiga ega.',
    content: [
      'Raqamli texnologiyalar vazirligi huzuridagi IT Park hududida mintaqadagi eng ilg‘or sun’iy intellekt va ma’lumotlarni tahlil qilish ilmiy-amaliy markazi tantanali ravishda ochildi.',
      'Markaz 100 dan ortiq yetakchi xalqaro GPU serverlar bilan jihozlangan bo‘lib, o‘zbek tilidagi katta til modellarini (LLM) o‘qitish va davlat xizmatlarini to‘liq avtomatlashtirish imkonini beradi.',
      'Mahalliy dasturchilar va startaplar ushbu hisoblash quvvatlaridan imtiyozli asosda foydalanishlari mumkin bo‘ladi, bu esa mahalliy IT mahsulotlarning jahon bozoriga chiqishini tezlashtiradi.'
    ],
    keyPoints: [
      'Superkompyuter quvvati mintaqada eng yuqori ko‘rsatkichga ega',
      'Mahalliy ilmiy tadqiqotchilar uchun bepul grantlar ajratiladi',
      'O‘zbek tili uchun milliy intellektual modellar ishlab chiqiladi'
    ],
    category: 'Texnologiya',
    imageUrl: techAiImg,
    imageCaption: 'IT Park qoshidagi yangi superkompyuter va sun’iy intellekt laboratoriyasi',
    publishedAt: 'Bugun, 10:00',
    date: '5-oktabr, 2026-yil',
    readTime: '3 daqiqa',
    author: 'Javohir Saidov',
    views: 12300,
    isTop: true,
    topRank: 3,
    tags: ['Sun’iy intellekt', 'IT Park', 'Startaplar', 'Innovatsiya']
  },
  {
    id: 'news-4',
    title: 'O‘zbekiston sportchilari qit’a chempionatida 14 ta oltin medalni qo‘lga kiritib, yetakchilikni saqlab qoldi',
    slug: 'ozbekiston-sportchilari-qita-chempionati',
    summary: 'Boks, dzyudo va og‘ir atletika bo‘yicha o‘tkazilgan nufuzli musobaqada terma jamoamiz umumjamoa hisobida birinchi o‘rinni egalladi.',
    content: [
      'Xalqaro sport arenasida O‘zbekiston bayrog‘i yana bir bor yuksaklarga ko‘tarildi. Qit’a chempionatining yakuniy kunida hamyurtlarimiz yorqin g‘alabalarga erishib, umumjamoa hisobida yetakchi bo‘lishdi.',
      'Boks bo‘yicha barcha vazn toifalarida finalga chiqqan sportchilarimiz yuksak texnika va iroda ko‘rsatib, 7 ta oltin medalni terma jamoamiz hisobiga yozib qo‘yishdi.',
      'Murabbiylar shtabi sportchilarning jismoniy va ruhiy tayyorgarligini yuqori baholab, navbatdagi Olimpiya o‘yinlariga tayyorgarlik rejaga muvofiq davom etayotganini bildirdi.'
    ],
    category: 'Sport',
    imageUrl: sportOlympicImg,
    imageCaption: 'Chempionat g‘oliblarini tantanali taqdirlash marosimi',
    publishedAt: 'Bugun, 07:45',
    date: '5-oktabr, 2026-yil',
    readTime: '2 daqiqa',
    author: 'Bobur Yoqubov',
    views: 8940,
    isTop: true,
    topRank: 4,
    tags: ['Sport', 'G‘alaba', 'Boks', 'Chempionat']
  },
  {
    id: 'news-5',
    title: 'O‘zbekiston eksport hajmi 2026-yilning 9 oyida 22 milliard dollardan oshdi',
    slug: 'ozbekiston-eksport-hajmi-rekord',
    summary: 'Sanoat mahsulotlari, to‘qimachilik va yuqori qo‘shilgan qiymatli tovarlar eksporti o‘tgan yilning shu davriga nisbatan 18,4 foizga o‘sdi.',
    content: [
      'Davlat statistika agentligi ma’lumotlariga ko‘ra, mamlakatimiz tashqi savdo aylanmasida ijobiy dinamika kuzatilmoqda. Ayniqsa, tayyor mahsulotlar eksporti salmog‘i ortgan.',
      'Elektronika, avtomobil ehtiyot qismlari va qayta ishlangan meva-sabzavot mahsulotlari eksporti bo‘yicha yangi bozorlar ochildi. Janubi-Sharqiy Osiyo va Yevropa davlatlariga tovar yetkazib berish hajmi ikki baravarga ko‘paydi.',
      'Eksportchilarni qo‘llab-quvvatlash agentligi bergan subsidiya va imtiyozlar mahalliy ishlab chiqaruvchilarning jahon miqyosida raqobatbardoshligini ta’minlamoqda.'
    ],
    category: 'Iqtisodiyot',
    imageUrl: uzbExportImg,
    imageCaption: 'Yangi logistika terminallari va temir yo‘l eksport vagonlari',
    publishedAt: 'Bugun, 10:20',
    date: '5-oktabr, 2026-yil',
    readTime: '3 daqiqa',
    author: 'Nodir Qodirov',
    views: 7450,
    isTop: true,
    topRank: 5,
    tags: ['Eksport', 'Statistika', 'Iqtisodiyot', 'Savdo']
  },
  {
    id: 'news-6',
    title: 'Samarqandda "Sharq taronalari" xalqaro musiqa festivali o‘z ishini boshlamoqda',
    slug: 'samarqandda-sharq-taronalari-festivali',
    summary: 'Registonda dunyoning 60 dan ortiq mamlakatidan kelgan 300 ga yaqin xonanda va sozandalar ishtirokida tantanali ochilish marosimi bo‘lib o‘tadi.',
    content: [
      'Afsonaviy Registon maydonida qadimiy va zamonaviy ohanglar uyg‘unlashadi. Bu yilgi festival doirasida an’anaviy xalq ijodiyoti, maqom san’ati va etno-musiqa yo‘nalishlarida mahorat darslari tashkil etiladi.',
      'Madaniyat vazirligi tomonidan festival mehmonlari uchun qadimiy obidalarga sayohatlar, sharqona milliy taomlar yarmarkalari va hunarmandchilik ko‘rgazmalari ham rejalashtirilgan.',
      'YUNESKO shafeligida o‘tadigan ushbu nufuzli tadbir xalqlar o‘rtasidagi do‘stlik va madaniy aloqalarni mustahkamlashda beqiyos ahamiyat kasb etadi.'
    ],
    category: 'Madaniyat',
    imageUrl: samarkandFestivalImg,
    imageCaption: 'Registon maydonidagi tahririy milliy musiqa va sahna yoritgichlari',
    publishedAt: 'Bugun, 06:50',
    date: '5-oktabr, 2026-yil',
    readTime: '3 daqiqa',
    author: 'Shahnoza Alimova',
    views: 6120,
    tags: ['Madaniyat', 'Samarqand', 'Musiqa', 'Festival']
  },
  {
    id: 'news-7',
    title: 'Kuz mavsumida immunitetni mustahkamlash: Shifokorlardan 7 ta muhim tavsiya',
    slug: 'kuz-mavsumida-immunitetni-mustahkamlash',
    summary: 'Mavsumiy shamollash va grippdan himoyalanish uchun to‘g‘ri ovqatlanish, jismoniy faollik va D vitamini muvozanatini saqlash zarur.',
    content: [
      'Haroratning pasayishi va kunlarning qisqarishi inson organizmining himoya funksiyalariga ta’sir ko‘rsatadi. Salomatlik instituti mutaxassislari kuzda salomatlikni asrashning asosiy qoidalarini sanab o‘tdilar.',
      'Birinchi navbatda, ratsionga mavsumiy meva va sabzavotlar — anor, xurmo, qizil lavlagi va zanjabilni kiritish tavsiya etiladi. Shuningdek, yetarli uyqu (kuniga kamida 7-8 soat) immunitet hujayralari tiklanishida asosiy omil hisoblanadi.',
      'Shifokorlar o‘zboshimchalik bilan antibiotiklar qabul qilmaslikni va albatta shifokor ko‘rigidan so‘ng kerakli vitaminlar majmuasini tanlashni eslatib o‘tadilar.'
    ],
    category: 'Salomatlik',
    imageUrl: autumnHealthImg,
    imageCaption: 'Kuzgi tabiiy vitaminlarga boy mahsulotlar va sog‘lom ovqatlanish',
    publishedAt: 'Kecha, 21:10',
    date: '4-oktabr, 2026-yil',
    readTime: '4 daqiqa',
    author: 'Gulnora Ismoilova',
    views: 8190,
    tags: ['Salomatlik', 'Tibbiyot', 'Immunitet', 'Kuz']
  },
  {
    id: 'news-8',
    title: 'Orolbo‘yida "Yashil makon" loyihasi: 50 ming gektardan ortiq maydonda saksovulzorlar barpo etildi',
    slug: 'orolboyida-yashil-makon-saksovulzorlar',
    summary: 'Orol dengizining qurigan tubida chang bo‘ronlarini to‘xtatish maqsadida ekilgan himoya daraxtzorlari 85 foiz ko‘karish natijasini ko‘rsatmoqda.',
    content: [
      'Qoraqalpog‘iston Respublikasi va Xorazm viloyatida Orol fojiasining salbiy oqibatlarini yumshatish bo‘yicha tizimli ishlar davom etmoqda. Joriy yilda ekilgan o‘simliklar Orol dengizi tubidagi qum ko‘chishini jiddiy to‘xtatishga erishdi.',
      'O‘rmon xo‘jaligi mutaxassislari uchuvchisiz uchish apparatlari (dronlar) orqali urug‘ sepish texnologiyasini qo‘lladilar. Bu jarayon mehnat unumdorligini 4 barobarga oshirdi.',
      'Xalqaro donorlar hamda BMT trast fondi ushbu loyihani mintaqaviy ekologik tiklanishning eng muvaffaqiyatli namunasi sifatida e’tirof etmoqda.'
    ],
    category: 'O‘zbekiston',
    imageUrl: aralSeaImg,
    imageCaption: 'Orolbo‘yida ekologlar tomonidan barpo etilgan yosh saksovulzorlar',
    publishedAt: 'Kecha, 18:40',
    date: '4-oktabr, 2026-yil',
    readTime: '3 daqiqa',
    author: 'Farhod Nazarov',
    views: 5410,
    tags: ['Orol', 'Ekologiya', 'O‘zbekiston', 'Tabiat']
  },
  {
    id: 'news-9',
    title: 'Markaziy bank inflyatsiya kutilmalari va qayta moliyalash stavkasi barqarorligini e’lon qildi',
    slug: 'markaziy-bank-stavka-qarori',
    summary: 'Yillik inflyatsiya ko‘rsatkichi 6,8 foizgacha pasaydi, milliy valyuta kursi bozor mexanizmlari asosida mustahkam muvozanatda saqlanmoqda.',
    content: [
      'O‘zbekiston Respublikasi Markaziy banki boshqaruvining navbatdagi yig‘ilishida asosiy stavkani o‘zgarishsiz qoldirish to‘g‘risida qaror qabul qilindi.',
      'Iqtisodiy faollikning yuqori sur’atlari, bank sektoridagi likvidlik va xorijiy pul o‘tkazmalari hajmining barqarorligi makroiqtisodiy xavflarni minimallashtirishga xizmat qilmoqda.',
      'Markaziy bank kelgusi choraklarda ham narxlar barqarorligini ta’minlash va investitsiyalar oqimini rag‘batlantirish siyosatini davom ettiradi.'
    ],
    category: 'Iqtisodiyot',
    imageUrl: centralBankImg,
    imageCaption: 'Markaziy bank boshqaruvi matbuot anjumani va iqtisodiy tahlillar',
    publishedAt: 'Kecha, 16:15',
    date: '4-oktabr, 2026-yil',
    readTime: '3 daqiqa',
    author: 'Nodir Qodirov',
    views: 4890,
    tags: ['Markaziy Bank', 'Valyuta', 'Inflyatsiya', 'Moliya']
  },
  {
    id: 'news-10',
    title: 'O‘zbekistonlik IT-frilanserlar va kompaniyalar eksporti 1 milliard dollarga yaqinlashmoqda',
    slug: 'ozbekistonlik-it-eksport-rekordi',
    summary: 'Dasturiy ta’minot, sun’iy intellekt xizmatlari va autsorsing yo‘nalishlarida faoliyat yuritayotgan 20 mingdan ortiq yosh mutaxassislar chet el bozorlariga xizmat ko‘rsatmoqda.',
    content: [
      'O‘zbekiston axborot texnologiyalari sohasida ulkan sakrashni amalga oshirmoqda. IT Park rezidentlari soni 2500 tadan oshib, ularning yarmidan ko‘pi xorijiy kompaniyalar hissasiga to‘g‘ri kelmoqda.',
      'Asosiy eksport yo‘nalishlari — AQSH, Yevropa mamlakatlari va Fors ko‘rfazi davlatlaridir. Yangi kiritilgan soliq imtiyozlari va vizaviy qulayliklar xorijiy startaplarni mamlakatimizga jalb qilishni tezlashtirdi.',
      'Hukumat rejasiga binoan, 2030-yilga kelib O‘zbekiston IT-xizmatlar eksportini yiliga 5 milliard dollarga yetkazishni maqsad qilgan.'
    ],
    category: 'Texnologiya',
    imageUrl: itCoworkingImg,
    imageCaption: 'Toshkentdagi zamonaviy IT-kovorking maydonida dasturchilar jamoasi',
    publishedAt: 'Kecha, 14:30',
    date: '4-oktabr, 2026-yil',
    readTime: '2 daqiqa',
    author: 'Javohir Saidov',
    views: 6730,
    tags: ['IT', 'Dasturlash', 'Frilans', 'Eksport']
  },
  {
    id: 'news-11',
    title: 'Olimpiada o‘yinlariga tayyorgarlik: Toshkentda yangi Olimpiya shaharchasi qurilishi yakunlanmoqda',
    slug: 'olimpiya-shaharchasi-qurilishi-yakunlanmoqda',
    summary: 'Yashnobod tumanidagi 100 gektarlik maydonda barpo etilgan yopiq velodrom, suv sporti saroyi va yengil atletika majmuasi sinov rejimida ish boshladi.',
    content: [
      '2026-yilda yoshlar o‘rtasidagi qit’a o‘yinlariga mezbonlik qiladigan Olimpiya shaharchasida qurilish-montaj ishlarining 95 foizi yakuniga yetdi.',
      'Majmuada xalqaro federatsiyalar talablariga mos keladigan eng zamonaviy elektron hisoblash, doping nazorati va teletomoshabinlar uchun 4K translatsiya tizimlari o‘rnatildi.',
      'Shaharcha musobaqalardan keyin professional sportchilar va jamoatchilik uchun ommaviy sport markazi sifatida xizmat qilishda davom etadi.'
    ],
    category: 'Sport',
    imageUrl: olympicVillageImg,
    imageCaption: 'Toshkentdagi yangi Olimpiya shaharchasining zamonaviy arenalari',
    publishedAt: 'Kecha, 12:00',
    date: '4-oktabr, 2026-yil',
    readTime: '3 daqiqa',
    author: 'Bobur Yoqubov',
    views: 7620,
    tags: ['Olimpiya shaharchasi', 'Sport', 'Toshkent', 'Stadion']
  },
  {
    id: 'news-12',
    title: 'BMT Bosh Assambleyasida global iqlim o‘zgarishiga qarshi kurash bo‘yicha yangi deklaratsiya qabul qilindi',
    slug: 'bmt-bosh-assambleyasi-iqlim-deklaratsiyasi',
    summary: 'Dunyo davlatlari uglerod chiqindilarini kamaytirish va suv resurslarini oqilona boshqarish bo‘yicha yangi majburiyatlarni o‘z zimmalariga oldilar.',
    content: [
      'Nyu-Yorkda bo‘lib o‘tgan BMT Bosh Assambleyasining navbatdagi sessiyasida iqlim o‘zgarishi va chuchuk suv tanqisligi masalasi asosiy kun tartibiga aylandi.',
      'O‘zbekiston delegatsiyasi Orolbo‘yi mintaqasida amalga oshirilayotgan tajribani taqdim etib, transchegaraviy daryolardan oqilona foydalanish bo‘yicha xalqaro konvensiya qabul qilish tashabbusini ilgari surdi.',
      'Mazkur tashabbus qatnashchi davlatlarning ko‘pchiligi tomonidan iliq kutib olindi va yakuniy rezolyutsiya matniga rasman kiritildi.'
    ],
    category: 'Dunyo',
    imageUrl: unClimateImg,
    imageCaption: 'BMT Bosh Assambleyasi yig‘ilish zali va xalqaro delegatsiyalar',
    publishedAt: 'Kecha, 10:15',
    date: '4-oktabr, 2026-yil',
    readTime: '4 daqiqa',
    author: 'Dilnoza Karimova',
    views: 5280,
    tags: ['BMT', 'Iqlim', 'Dunyo', 'Orolbo‘yi']
  }
];

export const CURRENCY_RATES: CurrencyRate[] = [
  {
    code: 'USD',
    name: 'AQSH Dollari',
    rate: 12850,
    diff: 15.20,
    symbol: '$'
  },
  {
    code: 'EUR',
    name: 'Yevro',
    rate: 13920,
    diff: -12.40,
    symbol: '€'
  },
  {
    code: 'RUB',
    name: 'Rossiya Rubli',
    rate: 141.50,
    diff: 0.65,
    symbol: '₽'
  }
];

export const TASHKENT_WEATHER: WeatherData = {
  city: 'Toshkent',
  temp: 22,
  condition: 'Quyoshli, ochiq havo',
  icon: 'sun',
  humidity: 42,
  windSpeed: 3.4,
  feelsLike: 23
};
