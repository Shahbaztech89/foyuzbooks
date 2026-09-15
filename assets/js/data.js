/* =========================================================
   ویب سائٹ کا ڈیٹا — یہ تمام معلومات
   https://foyuz.blogspot.com/ سے لی گئی ہیں
   (کتابوں کے نام، گوگل ڈرائیو لنکس، رابطہ کی تفصیلات)
   نئی کتاب/مضمون شامل کرنے کے لیے بس نیچے ایک انٹری کاپی کر کے
   تفصیلات تبدیل کر دیں۔
   ========================================================= */

const SITE_BOOKS = [
  // ---- وہ کتابیں جن کا اصل سرِ ورق بلاگ پر موجود ہے ----
  {
    id: "amal-ki-dawat",
    title: "عمل کی دعوت و تلقین",
    category: "اسلامیات",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi7Cbmt24s3qDygWfi78QcECoWrollBKa6B6i5B-lu56jcNbrjKEzPoLVw0_ZoaevqeXE0CARYjlj6qsJJvdq8bhVp-xBgCKM_T5jeX-zA51Hc77hMF4_p1nDe6TxTXCKbSl36hpfI4CxmoVo600CgVqBJnGwaYAlcrWoNo_fNAyGb82sxFwL9sj6DEKw/w450-h640/Page%201.jpg",
    meta: "ناشر: شفیق سنز · ۱۹۸۳ء",
    readUrl: "https://drive.google.com/file/d/1zqkJn-Yj9teRlszlXdRG5sPdqjrU9dKa/view?usp=share_link",
    downloadUrl: "https://drive.google.com/uc?export=download&id=1zqkJn-Yj9teRlszlXdRG5sPdqjrU9dKa"
  },
  {
    id: "fazail-e-amal",
    title: "فضائل اعمال (حدیث پاک کی روشنی میں)",
    category: "حدیث شریف",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEigRTYmtFOlerMLAGmhqqmyKjw1vaYOliiCEawBIHIvFnQVEPTEoooMgxEonr6CQLSbA_dOFhlMV0M1jquhG1CO_6klh1yHNWJCuJ-Q8JS9VsU-wTwxtYPTD-KXAjpH1m70RO-qI5af99y4/w500-h700-p-k-no-nu/Fazaile+Amal.jpg",
    meta: "ناشر: جامع مسجد الفرقان ملیر کینٹ · ۲۰۱۸ء",
    readUrl: "https://drive.google.com/open?id=1cW48xkmvjK_1w_wSkbMxIVeTxH8MbtTn",
    downloadUrl: "https://drive.google.com/open?id=1cW48xkmvjK_1w_wSkbMxIVeTxH8MbtTn"
  },
  {
    id: "kitab-ut-tajweed",
    title: "کتاب التجوید",
    category: "قراءت",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgliaLfdBfytUpThCTRxNVQ1RhDm21DkVbMRJX89G1Ww0Gc7cESUbWfz6OxiBMMck1ckDXuI57gfl7z_J94yUmTWQ4Bx9LxDjgZR3BQ9cCNwuzk5qCndusXkNRjyMsmZSrnNFj2gPmWr-OS/s500/Title+Page.jpg",
    meta: "سیرت پبلشرز · پانچواں ایڈیشن",
    readUrl: "https://drive.google.com/open?id=1mSBm4Q0ONhcg8Mt7yLootzuCuvOaDpzh",
    downloadUrl: "https://drive.google.com/open?id=1mSBm4Q0ONhcg8Mt7yLootzuCuvOaDpzh"
  },
  {
    id: "mashaheer-ulma-e-sarhad",
    title: "مشاہیر علمائے سرحد (تحقیقی مقالہ برائے پی ایچ ڈی)",
    category: "تاریخ و سوانح",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgbaTNOHDBLmb-mWl4sEHJDILKwG_66y-GXjQPqKGLQxmAf7WvQmlrJ12S9DS9Q21tc-NXnmCy2oPdrHWs7xQYLOBFSqSebDGCQDYyN8xhRILSfycmVJdw2ATVEjgIJxhY-AbzVHWMQwIjS/w500-h700-p-k-no-nu/Mashaheer+Ulma.JPG",
    meta: "تحقیقی مقالہ برائے پی ایچ ڈی علومِ اسلامیہ",
    readUrl: "https://drive.google.com/open?id=1NUOPE7BhPK2VcSQjf8cvywRq0M18W9VS",
    downloadUrl: "https://drive.google.com/open?id=1NUOPE7BhPK2VcSQjf8cvywRq0M18W9VS"
  },
  {
    id: "mukhtasar-swanahi-khaka",
    title: "مختصر سوانحی خاکہ",
    category: "تاریخ و سوانح",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgSB9Rs-D3E3umNXOAMUR-0tiMY8hFKk9BZCwyOOevDFAL0tPIneFAAQBkUDQpCWk14sourO2mLQT6hCH3Ds0eAaDUjvRdi5znyL5N6FQ-Cl6oopSDlTmZtgWMtrZPyMWdHhZzuFruDDaJ6/w500-h700-p-k-no-nu/Title+Swanahi+Khaka-1.jpg",
    meta: "ناشر: جامع مسجد الفرقان ملیر کینٹ",
    readUrl: "https://drive.google.com/open?id=155v6rXDqmTBZStnaIjH6ovcCgAkt9PSv",
    downloadUrl: "https://drive.google.com/open?id=155v6rXDqmTBZStnaIjH6ovcCgAkt9PSv"
  },
  {
    id: "duaon-ka-khazana",
    title: "دعاؤں کا خزانہ",
    category: "اسلامیات",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgTaRXcsGUCuWlia0mNLFI6K9OktunFGKknfD4F8_LtNBHns65XuWGYo7npO12mbRD6f8LWdAYOPjKW0cPEA9TyHsJ9s9V_iRsQpCG-HQ4EhI03bsAIvx6ZSI4pFV30FJQqoS1rZDQLE-Uj/w500-h700-p-k-no-nu/Title+Duaen+13-9-2019.jpg",
    meta: "مرتب: بریگیڈیئر ڈاکٹر حافظ قاری فیوض الرحمن جدون (ر)",
    readUrl: "https://drive.google.com/open?id=1M2rNJX5mcDb7S5DJD9AHhr1v7xTscxzJ",
    downloadUrl: "https://drive.google.com/open?id=1M2rNJX5mcDb7S5DJD9AHhr1v7xTscxzJ"
  },

  // ---- حدیث شریف ----
  { id: "jannat-ka-rasta", title: "جنت کا راستہ", category: "حدیث شریف", cover: "assets/images/books/book1.svg", meta: "عربی سے اردو ترجمہ", readUrl: "https://drive.google.com/open?id=1B6yhEv_gYciVvIGInK2MC3oKqB0VDWeo", downloadUrl: "https://drive.google.com/open?id=1B6yhEv_gYciVvIGInK2MC3oKqB0VDWeo" },
  { id: "asma-ul-husna", title: "اسماء اللہ الحسنیٰ", category: "حدیث شریف", cover: "assets/images/books/book2.svg", meta: "۱۰۴ صفحات · ۲۰۱۸ء", readUrl: "https://drive.google.com/open?id=1rD44HzXX5MH4QUkcLf0BUzaiZtdfJqxb", downloadUrl: "https://drive.google.com/open?id=1rD44HzXX5MH4QUkcLf0BUzaiZtdfJqxb" },
  { id: "55-wasiyat", title: "رسول کریم ﷺ کی ۵۵ وصیتیں", category: "حدیث شریف", cover: "assets/images/books/book3.svg", meta: "اردو ترجمہ", readUrl: "https://drive.google.com/open?id=19AoVhSeNgZRgYr4V8DqFOnUgwkXQCH9w", downloadUrl: "https://drive.google.com/open?id=19AoVhSeNgZRgYr4V8DqFOnUgwkXQCH9w" },
  { id: "jawahir-1", title: "جواہر الحدیث (جلد اول)", category: "حدیث شریف", cover: "assets/images/books/book4.svg", meta: "مع ترجمہ", readUrl: "https://drive.google.com/open?id=1DURIZcAghzLDaDpaxb00K_GO0Gt2-MPs", downloadUrl: "https://drive.google.com/open?id=1DURIZcAghzLDaDpaxb00K_GO0Gt2-MPs" },
  { id: "jawahir-2", title: "جواہر الحدیث (جلد دوم)", category: "حدیث شریف", cover: "assets/images/books/book5.svg", meta: "مع ترجمہ و تشریح", readUrl: "https://drive.google.com/open?id=1jkJjeOCuuDfYNef_Zs9ruYfsk2R-a8oF", downloadUrl: "https://drive.google.com/open?id=1jkJjeOCuuDfYNef_Zs9ruYfsk2R-a8oF" },
  { id: "jawahir-3", title: "جواہر الحدیث (جلد سوم)", category: "حدیث شریف", cover: "assets/images/books/book6.svg", meta: "مع ترجمہ و تشریح", readUrl: "https://drive.google.com/open?id=1Qzeq-3afAz3dp4yhh351OnEhXYhETG4x", downloadUrl: "https://drive.google.com/open?id=1Qzeq-3afAz3dp4yhh351OnEhXYhETG4x" },
  { id: "andaz-e-tarbiyat", title: "آنحضرت ﷺ کا اندازِ تربیت اور اس کے انقلابی اثرات", category: "حدیث شریف", cover: "assets/images/books/book7.svg", meta: "", readUrl: "https://drive.google.com/open?id=185RfmZvBYyXdPqfu1rdYPWFX97dRCaMR", downloadUrl: "https://drive.google.com/open?id=185RfmZvBYyXdPqfu1rdYPWFX97dRCaMR" },

  // ---- سیرت النبی ﷺ ----
  { id: "hamziya-nabaviya", title: "الھمزیۃ النبویہ ﷺ", category: "سیرت النبی ﷺ", cover: "assets/images/books/book8.svg", meta: "احمد شوقی کے قصیدہ کا اردو ترجمہ و تشریح", readUrl: "https://drive.google.com/open?id=1VKfKHWFaYBAbqKDyAsicVCCru3t2PSOx", downloadUrl: "https://drive.google.com/open?id=1VKfKHWFaYBAbqKDyAsicVCCru3t2PSOx" },
  { id: "fazail-e-durood", title: "فضائلِ درود شریف", category: "سیرت النبی ﷺ", cover: "assets/images/books/book1.svg", meta: "", readUrl: "https://drive.google.com/open?id=14HyQ7dFU6SLh6Ps_M4_IbR2c0tpd3Mgg", downloadUrl: "https://drive.google.com/open?id=14HyQ7dFU6SLh6Ps_M4_IbR2c0tpd3Mgg" },
  { id: "noor-e-mustafa", title: "نور مصطفیٰ ﷺ کی جھلکیاں", category: "سیرت النبی ﷺ", cover: "assets/images/books/book2.svg", meta: "جنرل محمود شیت خطاب کی کتاب کا اردو ترجمہ", readUrl: "https://drive.google.com/open?id=1hntWrHjH_G5kWKy8yRu28mP0BqMrMJcU", downloadUrl: "https://drive.google.com/open?id=1hntWrHjH_G5kWKy8yRu28mP0BqMrMJcU" },
  { id: "akhlaq-un-nabi", title: "کچھ اخلاق النبی ﷺ", category: "سیرت النبی ﷺ", cover: "assets/images/books/book3.svg", meta: "", readUrl: "https://drive.google.com/open?id=1_r_z1hOwmMlsQQgzUDbXX8j5H493rFjq", downloadUrl: "https://drive.google.com/open?id=1_r_z1hOwmMlsQQgzUDbXX8j5H493rFjq" },
  { id: "nasab-e-tahir", title: "النسب الطاہر الشریف", category: "سیرت النبی ﷺ", cover: "assets/images/books/book4.svg", meta: "", readUrl: "https://drive.google.com/open?id=1ESHVzg3hqqQkpT5So3R0a7jF0oeRKexM", downloadUrl: "https://drive.google.com/open?id=1ESHVzg3hqqQkpT5So3R0a7jF0oeRKexM" },
  { id: "maqalat-e-seerat", title: "مقالاتِ سیرت النبی ﷺ", category: "سیرت النبی ﷺ", cover: "assets/images/books/book5.svg", meta: "", readUrl: "https://drive.google.com/open?id=1aOwdhFVf4GOM22RR9fsEA9eZ2JniHODK", downloadUrl: "https://drive.google.com/open?id=1aOwdhFVf4GOM22RR9fsEA9eZ2JniHODK" },

  // ---- جہاد فی سبیل اللہ ----
  { id: "islam-aur-quwwat", title: "اسلام اور قوت", category: "جہاد فی سبیل اللہ", cover: "assets/images/books/book6.svg", meta: "ڈاکٹر عبد الرزاق کی کتاب کا اردو ترجمہ", readUrl: "https://drive.google.com/open?id=1FuLpnJ7xxZji8liWMwR8MRFTpx2OLl97", downloadUrl: "https://drive.google.com/open?id=1FuLpnJ7xxZji8liWMwR8MRFTpx2OLl97" },
  { id: "sipah-salar", title: "آنحضرت ﷺ بحیثیت سپہ سالار", category: "جہاد فی سبیل اللہ", cover: "assets/images/books/book7.svg", meta: "جی ایچ کیو راولپنڈی", readUrl: "https://drive.google.com/open?id=1oFBVA2Wu2dqj-WFp3RnPBhr-VcQ17eGa", downloadUrl: "https://drive.google.com/open?id=1oFBVA2Wu2dqj-WFp3RnPBhr-VcQ17eGa" },

  // ---- اسلامیات ----
  { id: "quran-o-sunnat", title: "قرآن و سنت پر مضبوط عمل ہی سعادت کا ذریعہ ہے", category: "اسلامیات", cover: "assets/images/books/book8.svg", meta: "", readUrl: "https://drive.google.com/open?id=106uYa1g51QLmwfPfsS2wWpe_1UyxZCwy", downloadUrl: "https://drive.google.com/open?id=106uYa1g51QLmwfPfsS2wWpe_1UyxZCwy" },
  { id: "islami-huqooq", title: "اسلامی حقوق", category: "اسلامیات", cover: "assets/images/books/book1.svg", meta: "شیخ صالح بن عثیمین کے مقالہ کا ترجمہ", readUrl: "https://drive.google.com/open?id=1A9__eE-opeMQlszZeKpDhDmij6W1BoN5", downloadUrl: "https://drive.google.com/open?id=1A9__eE-opeMQlszZeKpDhDmij6W1BoN5" },
  { id: "qasas-ul-anbiya", title: "قصص الانبیاء علیہم السلام", category: "اسلامیات", cover: "assets/images/books/book2.svg", meta: "مولانا ابو الحسن علی ندویؒ کی کتاب کا ترجمہ", readUrl: "https://drive.google.com/open?id=18yPzYc-mM3_TQjA9p_vPhr4wn7Njhhnp", downloadUrl: "https://drive.google.com/open?id=18yPzYc-mM3_TQjA9p_vPhr4wn7Njhhnp" },

  // ---- تاریخ و سوانح ----
  { id: "swanah-qari-fazal-e-kareem", title: "سوانح حضرت قاری فضل کریم صاحبؒ", category: "تاریخ و سوانح", cover: "assets/images/books/book3.svg", meta: "مجلس ابنائے قدیم مدرسہ تجوید القرآن", readUrl: "https://drive.google.com/open?id=1vNYNnGeOsbt4YD5dxymSo90Jc25kz4FB", downloadUrl: "https://drive.google.com/open?id=1vNYNnGeOsbt4YD5dxymSo90Jc25kz4FB" },
  { id: "mere-chand-asatza", title: "میرے چند اساتذہ کرام", category: "تاریخ و سوانح", cover: "assets/images/books/book4.svg", meta: "۲۰۱۸ء · مسجد الفرقان ملیر کینٹ", readUrl: "https://drive.google.com/open?id=1qm5jQAMgWNNJK7RGLlp-hMA41W_QMEJQ", downloadUrl: "https://drive.google.com/open?id=1qm5jQAMgWNNJK7RGLlp-hMA41W_QMEJQ" },
  { id: "swanah-ghazi-ahmad", title: "سوانح پروفیسر غازی احمد صاحبؒ", category: "تاریخ و سوانح", cover: "assets/images/books/book5.svg", meta: "", readUrl: "https://drive.google.com/open?id=1D7A1GlSEdn-GMyJCx-aT3EOy_0P480Kf", downloadUrl: "https://drive.google.com/open?id=1D7A1GlSEdn-GMyJCx-aT3EOy_0P480Kf" },
  { id: "tazkiratul-khalil", title: "تذکرۃُ الخلیل", category: "تاریخ و سوانح", cover: "assets/images/books/book6.svg", meta: "", readUrl: "https://drive.google.com/open?id=1SIlzz4l_qgBFzttHf2_nec7-GeMS_xpy", downloadUrl: "https://drive.google.com/open?id=1SIlzz4l_qgBFzttHf2_nec7-GeMS_xpy" },
  { id: "swanah-qari-arif", title: "سوانح مولانا قاری محمد عارف صاحبؒ", category: "تاریخ و سوانح", cover: "assets/images/books/book7.svg", meta: "", readUrl: "https://drive.google.com/open?id=1DiShUNePldVFR8w_REjNIBpMvKDkcCVs", downloadUrl: "https://drive.google.com/open?id=1DiShUNePldVFR8w_REjNIBpMvKDkcCVs" },
  { id: "yadgar-khutoot", title: "یادگار خطوط", category: "خطوط", cover: "assets/images/books/book8.svg", meta: "مسجد الفرقان ملیر کینٹ", readUrl: "https://drive.google.com/open?id=1PsXyAbQA5PjCLV7uedBBGGTU8Av5gmjD", downloadUrl: "https://drive.google.com/open?id=1PsXyAbQA5PjCLV7uedBBGGTU8Av5gmjD" },
  { id: "prof-qazi-ahmad", title: "پروفیسر قاضی محمد احمد صاحب", category: "تاریخ و سوانح", cover: "assets/images/books/book1.svg", meta: "", readUrl: "https://drive.google.com/open?id=1ocwJiPphAk6-kV8oyOvRd0x9wmUpvIPU", downloadUrl: "https://drive.google.com/open?id=1ocwJiPphAk6-kV8oyOvRd0x9wmUpvIPU" },
  { id: "tabsare", title: "تبصرے", category: "تاریخ و سوانح", cover: "assets/images/books/book2.svg", meta: "مسجد الفرقان ملیر کینٹ", readUrl: "https://drive.google.com/open?id=1NmQqzcth5UDZPb1uc765kh3cnFaArnK5", downloadUrl: "https://drive.google.com/open?id=1NmQqzcth5UDZPb1uc765kh3cnFaArnK5" },
  { id: "swanah-qari-taqi", title: "سوانح قاری محمد تقی الاسلام دہلویؒ", category: "تاریخ و سوانح", cover: "assets/images/books/book3.svg", meta: "", readUrl: "https://drive.google.com/file/d/1BeC4xqaWaVAZh3XamEcP0notbmcncFt8/view?usp=share_link", downloadUrl: "https://drive.google.com/file/d/1BeC4xqaWaVAZh3XamEcP0notbmcncFt8/view?usp=share_link" }
];

// کتابوں کی فہرست جو ویب سائٹ پر بطور فلٹر دکھائی جائیں گی
const SITE_BOOK_CATEGORIES = [
  "حدیث شریف",
  "سیرت النبی ﷺ",
  "قراءت",
  "جہاد فی سبیل اللہ",
  "اسلامیات",
  "تاریخ و سوانح",
  "خطوط"
];

/* =========================================================
   مضامین — تعارف قرآن ابھی تک بلاگ پر شائع شدہ واحد مکمل مضمون
   ہے، اس لیے "مکمل پڑھیں" اصل بلاگ پوسٹ پر لے جاتا ہے (نئے ٹیب
   میں)۔ باقی عنوانات مصنف کی فہرست میں شامل ہیں مگر ابھی
   ویب سائٹ پر شائع نہیں ہوئے، اس لیے "جلد آ رہا ہے" دکھایا
   گیا ہے۔
   ========================================================= */
const SITE_ARTICLES = [
  {
    id: "taaruf-e-quran",
    title: "تعارف قرآن",
    category: "تفسیر",
    date: "۵ جنوری ۲۰۲۳ء",
    readTime: "مکمل مضمون",
    cover: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjUWFE1SL6anzoynbKUONxuMtAVpUIV7Op7NR32quL3BiTxMPhbFNiblMJ_FviAAnikf62VK5R1n-27dQeP2vhV4cMPMtNHBmgvxNH0ZswH1yMJZJ4r4pnCeQSB1Q79AHtoGEqZz8BE5tsSHISJd0y63ZGkIidadMEZaRT0op6c4wPYOKcZBNJWqIk6pQ/s960/Slide2.JPG",
    excerpt: "قرآن مجید کے مختلف اسمائے مبارکہ، نزولِ قرآن کی کیفیت، مکی و مدنی سورتوں کا فرق، تدوینِ قرآن کا تاریخی پس منظر اور آدابِ تلاوت پر ایک تفصیلی اور مستند مضمون۔",
    externalUrl: "https://foyuz.blogspot.com/2023/01/Taaruf-e-Quran.html",
    comingSoon: false
  },
  {
    id: "fayuz-ul-quran",
    title: "فیوض القرآن",
    category: "تفسیر",
    date: "جلد شائع ہوگا",
    readTime: "",
    cover: "assets/images/books/book4.svg",
    excerpt: "علامہ محمد علی الصابونی کی 'صفوۃ التفاسیر' سے تمام قرآنی سورتوں کے خلاصے کا عربی سے اردو ترجمہ۔",
    externalUrl: "",
    comingSoon: true
  },
  {
    id: "tajweed-o-qiraat",
    title: "تجوید و قراءت کی اہمیت",
    category: "قراءت",
    date: "جلد شائع ہوگا",
    readTime: "",
    cover: "assets/images/books/book5.svg",
    excerpt: "علمِ تجوید و قراءت کی دینی اہمیت، اس کے قواعد و ضوابط اور قرآن مجید کو صحیح ترتیل کے ساتھ پڑھنے کی فضیلت پر مضمون۔",
    externalUrl: "",
    comingSoon: true
  },
  {
    id: "arabi-zaban-o-adab",
    title: "عربی زبان و ادب",
    category: "زبان و ادب",
    date: "جلد شائع ہوگا",
    readTime: "",
    cover: "assets/images/books/book6.svg",
    excerpt: "عربی زبان و ادب کی تاریخ، اس کی خصوصیات اور اسلامی علوم میں اس کی مرکزی حیثیت پر ایک تعارفی مضمون۔",
    externalUrl: "",
    comingSoon: true
  }
];

/* =========================================================
   روزانہ حدیث گیلری — ماخذ ویب سائٹ پر ابھی تک الگ سے کوئی
   امیج گیلری شائع نہیں ہوئی (جواہر الحدیث کا صفحہ فی الحال
   خالی ہے)، اس لیے نیچے دی گئی تصاویر نمائشی (placeholder)
   ہیں — انہیں اپنی حدیث کی تصاویر سے بدل دیں۔
   ========================================================= */
const SITE_HADITH = [
  { id: "hadith-1", image: "assets/images/hadith/hadith1.svg", alt: "روزانہ حدیث — نیتوں کا بیان" },
  { id: "hadith-2", image: "assets/images/hadith/hadith2.svg", alt: "روزانہ حدیث — رحم کا بیان" },
  { id: "hadith-3", image: "assets/images/hadith/hadith3.svg", alt: "روزانہ حدیث — خیرخواہی کا بیان" },
  { id: "hadith-4", image: "assets/images/hadith/hadith4.svg", alt: "روزانہ حدیث — قرآن سیکھنے کا بیان" },
  { id: "hadith-5", image: "assets/images/hadith/hadith5.svg", alt: "روزانہ حدیث — مسلمان کی پہچان" },
  { id: "hadith-6", image: "assets/images/hadith/hadith6.svg", alt: "روزانہ حدیث — طلبِ علم کا بیان" }
];

/* =========================================================
   مصنف اور رابطہ کی تفصیلات — یہ سب www.foyuz.blogspot.com
   سے لیا گیا ہے
   ========================================================= */
const SITE_AUTHOR = {
  name: "بریگیڈیئر (ر) ڈاکٹر حافظ قاری فیوض الرحمن جدون",
  nameEn: "Brig (R) Dr. Hafiz Qari Foyouz-ur-Rehman Jadoon",
  role: "اسلامی مصنف، محقق و سابق ڈائریکٹر مذہبی اُمور، پاک فوج",
  booksCount: "200+",
  articlesCount: "500+",
  citedByCount: "300+"
};

const SITE_CONTACT = {
  address: "مکان نمبر 210، گلی نمبر 7، ڈیفنس فیز 1، ملیر کینٹ، کراچی",
  mobile1: "0333-1229593",
  mobile2: "0324-2935120",
  whatsapp: "+92-336-2405103",
  email: "tibyaan.foyuz@gmail.com",
  website: "foyuz.blogspot.com",
  twitter: "https://twitter.com/Foyuz_ur_Rehman",
  telegram: "https://t.me/foyuz_ur_rehman",
  facebook: "https://www.facebook.com/485641944881685",
  mapQuery: "Malir Cantt, Karachi, Pakistan"
};
