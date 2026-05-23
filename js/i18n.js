/* ============================================================
   i18n.js — Internationalisation (EN / AR / DE)
   ArabCar — Arabic-speaking Gulf travelers in Germany
   ============================================================ */

const TRANSLATIONS = {

  /* ──────────────────────────────────────────
     ENGLISH (default)
  ────────────────────────────────────────── */
  en: {
    // Nav
    nav_fleet:     'Fleet',
    nav_how:       'How it Works',
    nav_locations: 'Locations',
    nav_contact:   'Contact',
    nav_book:      'Book Now',

    // Hero
    hero_eyebrow:  'Premium Rentals · Germany',
    hero_title_1:  'Drive Germany',
    hero_title_2:  'Your Way',
    hero_sub:      'Luxury, SUV & economy cars across Germany — Arabic support, transparent pricing, zero hidden fees.',
    hero_cta1:     'Reserve a Car',
    hero_cta2:     'See Fleet',

    // Stats
    stat_cars:   'Car Models',
    stat_cities: 'Cities',
    stat_happy:  'Happy Clients',

    // Booking
    book_pickup: 'Pick-up Location',
    book_dropoff:'Drop-off Location',
    book_same:   'Same as Pick-up',
    book_from:   'Pick-up Date',
    book_to:     'Return Date',
    book_search: 'Search Cars',

    // Fleet
    fleet_eyebrow: 'Our Vehicles',
    fleet_title:   'Choose Your Ride',
    fleet_sub:     'From compact to luxury — every car is inspected, insured & ready for German roads.',
    filter_all:    'All',
    filter_suv:    'SUV',
    filter_luxury: 'Luxury',
    filter_sedan:  'Sedan',
    filter_coupe:  'Coupé',
    filter_economy:'Economy',
    filter_electric:'Electric',
    sort_popular:  'Most Popular',
    sort_price_asc:'Price ↑',
    sort_price_desc:'Price ↓',
    price_range:   'Price Range:',
    search_placeholder: 'Search cars…',
    no_results:    'No cars found. Try adjusting filters.',
    card_book:     'Book This Car',

    // How
    how_eyebrow:  'Simple Process',
    how_title:    'Book in 3 Steps',
    step1_title:  'Search',
    step1_desc:   'Enter your city, dates, and preferred car type to see available vehicles.',
    step2_title:  'Choose',
    step2_desc:   'Pick your car and any add-ons. Full price shown — no hidden fees.',
    step3_title:  'Drive',
    step3_desc:   'Pick up your car at the agreed location. Documents in English & Arabic.',

    // Locations
    loc_eyebrow:  'We\'re Everywhere',
    loc_title:    'Our Locations',
    loc_sub:      'Pick up and drop off at major German airports and city centers.',
    loc_airport:  'Airport Terminal 1 & 2',
    loc_city:     'City Center',

    // Testimonials
    test_eyebrow: 'What Clients Say',
    test_title:   'Trusted by Gulf Travelers',
    test1_text:   '"Exceptional service. The car was spotless and the Arabic-language support made everything stress-free."',
    test2_text:   '"Best car rental experience in Germany. Fast booking, no surprises at pick-up."',
    test3_text:   '"Rented a BMW X3 for two weeks. Perfect condition, great price. Will use again next summer."',

    // Contact
    contact_eyebrow:  'Get in Touch',
    contact_title:    'We Speak Arabic 🇩🇪🇸🇦',
    contact_whatsapp: 'WhatsApp Us',
    contact_hours:    'Mon–Sun, 07:00–22:00 CET',
    form_name:        'Your Name',
    form_email:       'Email Address',
    form_msg:         'How can we help you?',
    form_send:        'Send Message',

    // Footer
    footer_tag:        'Premium German Cars for Gulf Travelers.',
    footer_quick:      'Quick Links',
    footer_legal:      'Legal',
    footer_impressum:  'Impressum',
    footer_privacy:    'Privacy Policy',
    footer_terms:      'Terms & Conditions',
    footer_news:       'Newsletter',
    footer_news_sub:   'Get exclusive deals for Gulf travelers.',
    footer_subscribe:  'Subscribe',
    footer_made:       'Made with ❤️ for Gulf travelers in Germany',
  },

  /* ──────────────────────────────────────────
     ARABIC — اللغة العربية
     NOTE: Review translations with a native speaker.
           Especially legal/terms text.
  ────────────────────────────────────────── */
  ar: {
    // Nav
    nav_fleet:     'الأسطول',
    nav_how:       'كيف يعمل',
    nav_locations: 'المواقع',
    nav_contact:   'اتصل بنا',
    nav_book:      'احجز الآن',

    // Hero
    hero_eyebrow:  'تأجير سيارات فاخرة · ألمانيا',
    hero_title_1:  'استكشف ألمانيا',
    hero_title_2:  'بأسلوبك',
    hero_sub:      'سيارات فاخرة وSUV واقتصادية في جميع أنحاء ألمانيا — دعم عربي كامل، أسعار شفافة، بدون رسوم خفية.',
    hero_cta1:     'احجز سيارة',
    hero_cta2:     'استعرض الأسطول',

    // Stats
    stat_cars:   'طراز سيارة',
    stat_cities: 'مدن',
    stat_happy:  'عملاء سعداء',

    // Booking
    book_pickup: 'موقع الاستلام',
    book_dropoff:'موقع الإرجاع',
    book_same:   'نفس موقع الاستلام',
    book_from:   'تاريخ الاستلام',
    book_to:     'تاريخ الإرجاع',
    book_search: 'ابحث عن سيارات',

    // Fleet
    fleet_eyebrow: 'سياراتنا',
    fleet_title:   'اختر سيارتك',
    fleet_sub:     'من الاقتصادية إلى الفاخرة — كل سيارة مفحوصة ومؤمنة وجاهزة للطرق الألمانية.',
    filter_all:    'الكل',
    filter_suv:    'SUV',
    filter_luxury: 'فاخرة',
    filter_sedan:  'سيدان',
    filter_coupe:  'كوبيه',
    filter_economy:'اقتصادية',
    filter_electric:'كهربائية',
    sort_popular:  'الأكثر طلباً',
    sort_price_asc:'السعر ↑',
    sort_price_desc:'السعر ↓',
    price_range:   'نطاق السعر:',
    search_placeholder: 'ابحث عن سيارة...',
    no_results:    'لا توجد سيارات. حاول تعديل الفلاتر.',
    card_book:     'احجز هذه السيارة',

    // How
    how_eyebrow:  'عملية بسيطة',
    how_title:    'احجز في 3 خطوات',
    step1_title:  'ابحث',
    step1_desc:   'أدخل المدينة والتواريخ ونوع السيارة المفضل لديك لعرض المركبات المتاحة.',
    step2_title:  'اختر',
    step2_desc:   'اختر سيارتك والإضافات. السعر الكامل ظاهر — بدون رسوم مخفية.',
    step3_title:  'اقود',
    step3_desc:   'استلم سيارتك في الموقع المتفق عليه. الوثائق بالعربية والإنجليزية.',

    // Locations
    loc_eyebrow:  'نحن في كل مكان',
    loc_title:    'مواقعنا',
    loc_sub:      'استلام وإرجاع في كبرى المطارات ومراكز المدن الألمانية.',
    loc_airport:  'صالة المغادرة 1 و 2',
    loc_city:     'وسط المدينة',

    // Testimonials
    test_eyebrow: 'ماذا يقول العملاء',
    test_title:   'موثوق من قِبل مسافري الخليج',
    test1_text:   '"خدمة استثنائية. السيارة كانت نظيفة تماماً والدعم باللغة العربية جعل كل شيء سلساً."',
    test2_text:   '"أفضل تجربة تأجير سيارات في ألمانيا. حجز سريع، ولا مفاجآت عند الاستلام."',
    test3_text:   '"أجرت BMW X3 لأسبوعين. حالة ممتازة وسعر رائع. سأعود إليهم الصيف القادم."',

    // Contact
    contact_eyebrow:  'تواصل معنا',
    contact_title:    'نتحدث العربية 🇩🇪🇸🇦',
    contact_whatsapp: 'واتساب',
    contact_hours:    'الاثنين–الأحد، ٠٧:٠٠–٢٢:٠٠ بتوقيت ألمانيا',
    form_name:        'الاسم',
    form_email:       'البريد الإلكتروني',
    form_msg:         'كيف يمكننا مساعدتك؟',
    form_send:        'إرسال الرسالة',

    // Footer
    footer_tag:        'سيارات ألمانية فاخرة لمسافري الخليج.',
    footer_quick:      'روابط سريعة',
    footer_legal:      'قانوني',
    footer_impressum:  'بيانات الشركة',
    footer_privacy:    'سياسة الخصوصية',
    footer_terms:      'الشروط والأحكام',
    footer_news:       'النشرة البريدية',
    footer_news_sub:   'احصل على عروض حصرية لمسافري الخليج.',
    footer_subscribe:  'اشترك',
    footer_made:       'صُنع بـ ❤️ لمسافري الخليج في ألمانيا',
  },

  /* ──────────────────────────────────────────
     GERMAN — Deutsch
     NOTE: Review with a native German speaker for legal accuracy.
  ────────────────────────────────────────── */
  de: {
    // Nav
    nav_fleet:     'Fahrzeuge',
    nav_how:       'So funktioniert\'s',
    nav_locations: 'Standorte',
    nav_contact:   'Kontakt',
    nav_book:      'Jetzt buchen',

    // Hero
    hero_eyebrow:  'Premium-Mietwagen · Deutschland',
    hero_title_1:  'Deutschland',
    hero_title_2:  'Erleben',
    hero_sub:      'Luxus-, SUV- und Kompaktfahrzeuge in ganz Deutschland — arabischer Support, transparente Preise, keine versteckten Gebühren.',
    hero_cta1:     'Fahrzeug reservieren',
    hero_cta2:     'Flotte ansehen',

    // Stats
    stat_cars:   'Fahrzeugmodelle',
    stat_cities: 'Städte',
    stat_happy:  'Zufriedene Kunden',

    // Booking
    book_pickup: 'Abholort',
    book_dropoff:'Rückgabeort',
    book_same:   'Wie Abholort',
    book_from:   'Abholdatum',
    book_to:     'Rückgabedatum',
    book_search: 'Fahrzeuge suchen',

    // Fleet
    fleet_eyebrow: 'Unsere Fahrzeuge',
    fleet_title:   'Ihr Fahrzeug wählen',
    fleet_sub:     'Von kompakt bis luxuriös — jedes Fahrzeug geprüft, versichert und bereit für deutsche Straßen.',
    filter_all:    'Alle',
    filter_suv:    'SUV',
    filter_luxury: 'Luxus',
    filter_sedan:  'Limousine',
    filter_coupe:  'Coupé',
    filter_economy:'Kompakt',
    filter_electric:'Elektro',
    sort_popular:  'Beliebteste',
    sort_price_asc:'Preis ↑',
    sort_price_desc:'Preis ↓',
    price_range:   'Preisbereich:',
    search_placeholder: 'Fahrzeug suchen…',
    no_results:    'Keine Fahrzeuge gefunden. Filter anpassen.',
    card_book:     'Dieses Fahrzeug buchen',

    // How
    how_eyebrow:  'Einfacher Ablauf',
    how_title:    'In 3 Schritten buchen',
    step1_title:  'Suchen',
    step1_desc:   'Stadt, Datum und Fahrzeugtyp eingeben, um verfügbare Fahrzeuge anzuzeigen.',
    step2_title:  'Auswählen',
    step2_desc:   'Fahrzeug und Extras wählen. Gesamtpreis sichtbar — keine versteckten Kosten.',
    step3_title:  'Fahren',
    step3_desc:   'Fahrzeug am vereinbarten Ort abholen. Unterlagen auf Arabisch & Englisch.',

    // Locations
    loc_eyebrow:  'Überall in Deutschland',
    loc_title:    'Unsere Standorte',
    loc_sub:      'Abholung und Rückgabe an großen deutschen Flughäfen und Stadtzentren.',
    loc_airport:  'Terminal 1 & 2',
    loc_city:     'Stadtzentrum',

    // Testimonials
    test_eyebrow: 'Kundenmeinungen',
    test_title:   'Von Golfstaaten-Reisenden vertraut',
    test1_text:   '"Exzellenter Service. Das Auto war makellos und der arabischsprachige Support machte alles stressfrei."',
    test2_text:   '"Bestes Mietwagenerlebnis in Deutschland. Schnelle Buchung, keine Überraschungen bei Abholung."',
    test3_text:   '"BMW X3 für zwei Wochen gemietet. Perfekter Zustand, top Preis. Nächsten Sommer wieder."',

    // Contact
    contact_eyebrow:  'Kontakt aufnehmen',
    contact_title:    'Wir sprechen Arabisch 🇩🇪🇸🇦',
    contact_whatsapp: 'WhatsApp schreiben',
    contact_hours:    'Mo–So, 07:00–22:00 Uhr MEZ',
    form_name:        'Ihr Name',
    form_email:       'E-Mail-Adresse',
    form_msg:         'Wie können wir Ihnen helfen?',
    form_send:        'Nachricht senden',

    // Footer
    footer_tag:        'Premium-Mietwagen für Golfstaaten-Reisende.',
    footer_quick:      'Schnellzugriff',
    footer_legal:      'Rechtliches',
    footer_impressum:  'Impressum',
    footer_privacy:    'Datenschutzerklärung',
    footer_terms:      'AGB',
    footer_news:       'Newsletter',
    footer_news_sub:   'Exklusive Angebote für Golfstaaten-Reisende.',
    footer_subscribe:  'Abonnieren',
    footer_made:       'Mit ❤️ für Golfstaaten-Reisende in Deutschland gemacht',
  }
};

/* ============================================================
   i18n Engine
   ============================================================ */
const I18N = {
  currentLang: 'en',

  init() {
    // Read saved lang from localStorage or default to 'en'
    const saved = localStorage.getItem('arabcar_lang') || 'en';
    this.set(saved, false);

    // Listen for lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => this.set(btn.dataset.lang));
    });
  },

  set(lang, save = true) {
    if (!TRANSLATIONS[lang]) lang = 'en';
    this.currentLang = lang;
    if (save) localStorage.setItem('arabcar_lang', lang);

    const html = document.documentElement;
    html.lang = lang;
    html.dir  = lang === 'ar' ? 'rtl' : 'ltr';

    // Update all data-i18n elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (TRANSLATIONS[lang][key]) el.textContent = TRANSLATIONS[lang][key];
    });

    // Update placeholder attributes
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.dataset.i18nPlaceholder;
      if (TRANSLATIONS[lang][key]) el.placeholder = TRANSLATIONS[lang][key];
    });

    // Update lang buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
  },

  t(key) {
    return (TRANSLATIONS[this.currentLang] || TRANSLATIONS['en'])[key] || key;
  }
};

// Init on DOM ready
document.addEventListener('DOMContentLoaded', () => I18N.init());
