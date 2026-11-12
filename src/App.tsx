import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { Menu, X, FlaskConical, BadgeCheck, TestTube2, Boxes, Microscope, SlidersHorizontal, CheckCircle2, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Loader2, Clock, Target, Star, Quote, Info, ChevronLeft, ChevronRight, ArrowLeft, ArrowRight, Sparkles, Layers, ShieldCheck, FileText, Volume2, VolumeX } from 'lucide-react';
import { animate, motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay, Mousewheel } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { articles } from './data/articles';
import { PrivacyPolicy, TermsOfService, ManufacturingStandards, Certifications, ContactSupport } from './pages/LegalPages';
import { ProcessPage } from './pages/ProcessPage';

export const ThemeToggle = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Start light by default
    const isDarkGlobal = document.documentElement.classList.contains('dark');
    setIsDark(isDarkGlobal);
  }, []);

  const toggleMainTheme = () => {
    const nextDark = !isDark;
    setIsDark(nextDark);
    if (nextDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <button
      onClick={toggleMainTheme}
      aria-label="Toggle Theme"
      className="relative w-10 h-[18px] md:w-[44px] md:h-5 rounded-full shadow-md flex items-center justify-center overflow-hidden border border-black/20 dark:border-white/10 transition-transform active:scale-95 ml-2 flex-shrink-0"
    >
      <div className={`absolute inset-0 flex transition-transform duration-500 ease-in-out ${isDark ? 'rotate-180' : 'rotate-0'}`}>
        <div className="flex-1 bg-gradient-to-r from-primary to-orange-600" />
        <div className="w-[1.5px] bg-black/20 shadow-inner z-10" />
        <div className="flex-1 bg-gradient-to-r from-white to-zinc-300 dark:from-zinc-500 dark:to-zinc-700" />
      </div>
      {/* Glossy Overlay */}
      <div 
        className="absolute inset-0 pointer-events-none rounded-full" 
        style={{
          background: 'linear-gradient(to bottom, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.2) 40%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.3) 100%)'
        }} 
      />
      <div className="absolute top-[1px] left-[20%] right-[20%] h-[30%] bg-white/60 rounded-full blur-[1px] pointer-events-none" />
    </button>
  );
};

export const MouseLighting = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const targetTags = ['A', 'BUTTON', 'IMG', 'DIV'];
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (targetTags.includes(target.tagName) || target.closest('a') || target.closest('button')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-40 mix-blend-screen"
      animate={{
        background: `radial-gradient(${isHovering ? '600px' : '400px'} circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255, 152, 0, ${isHovering ? '0.08' : '0.05'}), transparent 80%)`
      }}
      transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
    />
  );
};

const portfolioProducts = [
  {
    id: 1,
    img: "/images/smartbrain_candy_1794465737583.jpg",
    name: "SMARTBRAIN",
    category: "Pressed Milk Candy",
    desc: "Formula nutrisi otak dengan DHA & multivitamin padat alami.",
    badge: "Bestseller"
  },
  {
    id: 2,
    img: "/images/smartup_tablet_1794465737066.jpg",
    name: "SMART UP PLUS",
    category: "Chewable Milk Tablet",
    desc: "Dukungan pertumbuhan tinggi badan & stamina anak dengan kalsium bio-aktif.",
    badge: "High Calcium"
  },
  {
    id: 3,
    img: "/images/visionix_lozenges_1794465738404.jpg",
    name: "VISIONIX",
    category: "Lozenges Eye Care",
    desc: "Permen susu hisap dengan ekstrak Bilberry & Lutein perlindungan mata.",
    badge: "Herbal Extract"
  },
  {
    id: 4,
    img: "/images/growvit_candy_1794465738656.jpg",
    name: "GROWVIT",
    category: "Tablet Candy",
    desc: "Kombinasi Kalsium Murni dan Vitamin D3 untuk kekuatan tulang & gigi optimal.",
    badge: "Bone Health"
  },
  {
    id: 5,
    img: "/images/vitaro_lozenges_1794465738508.jpg",
    name: "VITARO",
    category: "Herbal Throat Lozenges",
    desc: "Sensasi mint lembut dan ekstrak herbal alami penyejuk tenggorokan higienis.",
    badge: "Sugar Free"
  },
  {
    id: 6,
    img: "/images/nurvit_chewable_1794465739685.jpg",
    name: "NURVIT PRO",
    category: "Immune Chewable",
    desc: "Konsentrat susu kolostrum dan Zinc penunjang sistem imun harian keluarga.",
    badge: "Immunity"
  },
  {
    id: 7,
    img: "/images/colostrum_tablet_1794465739161.jpg",
    name: "DNA COLOSTRUM",
    category: "Bovine Colostrum",
    desc: "Tablet kunyah bio-aktif kaya imunoglobulin alami dengan cita rasa vanila susu.",
    badge: "Exclusive"
  }
];

export const PortfolioSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-10 md:py-14 bg-surface-container-lowest/60 border-y border-surface-variant/40 overflow-hidden relative"
      id="products"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-[640px] mx-auto mb-6 md:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-label-sm text-[10px] md:text-xs uppercase tracking-widest mb-2 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Scroll & Swipe 3D Showcase
          </div>
          <h2 className="font-h2 text-2xl sm:text-3xl md:text-4xl text-on-surface font-black tracking-tight mb-2">
            Portofolio Produk
          </h2>
          <p className="font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed">
            Scroll mousewheel atau geser gambar untuk menjelajah variasi produk. Foto utama berada di tengah dengan produk berikutnya di kanan dan kiri belakang.
          </p>
        </div>

        {/* 3D Coverflow Stage */}
        <div className="max-w-[820px] mx-auto px-2 sm:px-4 min-h-[220px] sm:min-h-[260px] md:min-h-[290px] flex items-center justify-center">
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={'auto'}
            initialSlide={0}
            observer={true}
            observeParents={true}
            watchSlidesProgress={true}
            onSwiper={(swiper) => {
              setTimeout(() => {
                swiper.update();
              }, 120);
            }}
            mousewheel={{
              releaseOnEdges: true,
              sensitivity: 1,
            }}
            coverflowEffect={{
              rotate: 22,
              stretch: 0,
              depth: 140,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ 
              clickable: true, 
              dynamicBullets: true,
              el: '.portfolio-pagination',
            }}
            navigation={{
              prevEl: '.portfolio-prev',
              nextEl: '.portfolio-next',
            }}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            modules={[EffectCoverflow, Pagination, Navigation, Mousewheel]}
            className="w-full pb-6 pt-2"
          >
            {portfolioProducts.map((item) => (
              <SwiperSlide key={item.id} className="!w-[180px] sm:!w-[215px] md:!w-[245px] shrink-0">
                <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.18)] dark:shadow-[0_12px_32px_rgba(0,0,0,0.6)] border border-outline-variant/30 bg-surface-container group transition-transform duration-300">
                  <img
                    src={item.img}
                    alt={item.name}
                    loading="eager"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-950/85 via-emerald-950/20 to-transparent pointer-events-none"></div>

                  {/* Top Badge */}
                  <div className="absolute top-2.5 left-2.5 z-10">
                    <span className="text-[8px] sm:text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-emerald-600 text-white shadow-sm">
                      {item.badge}
                    </span>
                  </div>

                  {/* Card Title info */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white pointer-events-none drop-shadow-md">
                    <div className="font-label-sm uppercase tracking-widest text-emerald-300 text-[8px] sm:text-[9px] mb-0.5">
                      {item.category}
                    </div>
                    <div className="font-h3 text-xs sm:text-sm font-bold truncate">
                      {item.name}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Active Product Details & Controls */}
        <div className="max-w-[460px] mx-auto text-center px-4 mt-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="mb-3"
            >
              <div className="text-sm sm:text-base font-bold text-on-surface font-h3 mb-0.5">
                {portfolioProducts[activeIndex].name} • <span className="text-emerald-700 dark:text-emerald-400 font-medium">{portfolioProducts[activeIndex].category}</span>
              </div>
              <p className="text-xs sm:text-sm text-on-surface-variant line-clamp-2 leading-relaxed">
                {portfolioProducts[activeIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls & Pagination */}
          <div className="flex items-center justify-center gap-4">
            <button
              aria-label="Previous Slide"
              className="portfolio-prev w-8 h-8 rounded-full border border-outline-variant/40 flex items-center justify-center transition-all hover:bg-primary-container text-on-surface active:scale-95 cursor-pointer shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Pagination container */}
            <div className="portfolio-pagination flex items-center justify-center min-w-[80px]"></div>

            <button
              aria-label="Next Slide"
              className="portfolio-next w-8 h-8 rounded-full border border-outline-variant/40 flex items-center justify-center transition-all hover:bg-primary-container text-on-surface active:scale-95 cursor-pointer shadow-xs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="mt-2 text-[10px] uppercase tracking-widest text-on-surface-variant/70 font-label-sm">
            Produk {activeIndex + 1} dari {portfolioProducts.length} • Scroll mousewheel atau geser untuk melihat produk berikutnya
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// ... keep existing code
function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');
  const [isHeroVideoMuted, setIsHeroVideoMuted] = useState(true);
  const heroVideoRef = useRef<HTMLVideoElement>(null);

  const toggleHeroVideoMute = () => {
    if (heroVideoRef.current) {
      const nextMuted = !isHeroVideoMuted;
      heroVideoRef.current.muted = nextMuted;
      setIsHeroVideoMuted(nextMuted);
    }
  };

  React.useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'services', 'products', 'process', 'artikel', 'testimoni', 'about', 'contact'];
      let current = '';
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 150)) {
          current = section;
        }
      }
      if (current && current !== activeSection) {
        setActiveSection(current);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const serviceDetails: Record<string, {
    title: string;
    badge: string;
    tagline: string;
    description: string;
    specs: { label: string; value: string }[];
    ingredients: string[];
    packaging: string[];
    workflow: string[];
    guarantees: string[];
    waMessage: string;
  }> = {
    'pressed-milk': {
      title: 'Pressed Milk Candy (Permen Susu Padat)',
      badge: 'Spesialisasi Manufaktur DNA',
      tagline: 'Pencetakan kempa dingin (Direct Cold Compression) bertekanan tinggi tanpa pemanasan, mengunci 100% bio-aktivitas kalsium, kolostrum, dan vitamin.',
      description: 'Layanan maklon permen susu padat premium yang diformulasikan khusus dengan bahan susu sapi murni New Zealand, konsentrat whey, bovine colostrum, dan kalsium susu alami. Mesin rotary tablet press kami mampu mencetak hingga 500.000 butir per hari dengan akurasi bobot dan kekerasan tablet yang presisi, bebas retak, dan memiliki tekstur lumer yang lembut di mulut.',
      specs: [
        { label: 'Bentuk Tablet', value: 'Bulat, Oval, Hati, Koin Emboss Logo, Karakter Kustom' },
        { label: 'Bobot Tablet', value: '500 mg – 1.500 mg per butir (sesuai spesifikasi)' },
        { label: 'Kadar Air (Water Activity)', value: '< 0.25 Aw (sangat stabil, tahan simpan hingga 24 bulan)' },
        { label: 'Kapasitas Mesin', value: 'Hingga 500.000 tablet / hari (Rotary High-Speed Press)' },
        { label: 'Kerapuhan (Friability)', value: '< 0.8% (kuat saat pengiriman, renyah & lumer di mulut)' }
      ],
      ingredients: [
        'Susu Skim & Full Cream New Zealand murni kualitas prima',
        'Bovine Colostrum kaya IgG (Imunoglobulin alami penunjang imun)',
        'Kalsium Bio-Aktif & Vitamin D3/K2 untuk kepadatan tulang',
        'Omega-3 DHA mikroenkapsulasi tanpa aroma/rasa amis',
        'Pilihan Pemanis: Sukrosa murni, Zero-Calorie Stevia, Xylitol, atau Isomalt'
      ],
      packaging: [
        'Blister Pack Alu-Alu (10 / 12 butir per strip) – perlindungan kelembaban maksimal',
        'Blister PVC Transparan / Blister gantung display supermarket & modern retail',
        'Botol Plastik HDPE Food-Grade / Amber Glass (isi 30, 60, 90 tablet) segel induksi',
        'Standing Pouch Foil dengan Ziplock kedap udara (isi 15 – 30 butir)'
      ],
      workflow: [
        'Fase 1: Konsultasi Konsep, Target Pasar, & Formulasi Rasa Produk',
        'Fase 2: Pembuatan Sampel Laboratorium (Trial Prototipe R&D Gratis)',
        'Fase 3: Uji Organoleptik & Penyesuaian Profil Rasa / Tekstur',
        'Fase 4: Pendaftaran Legalitas Izin Edar BPOM MD & Sertifikat Halal',
        'Fase 5: Pengadaan Kemasan & Produksi Massal Berstandar CPPOB/GMP',
        'Fase 6: Quality Control Akhir, Uji Lab Mikrobiologi, & Rilis COA'
      ],
      guarantees: [
        'Izin Edar BPOM RI MD Resmi atas nama brand Anda',
        'Sertifikasi Halal BPJPH / MUI (SJPH HAS 23000)',
        'Certificate of Analysis (COA) per batch dari Lab Terakreditasi KAN',
        'Kerahasiaan Formula dijamin dengan Non-Disclosure Agreement (NDA)'
      ],
      waMessage: 'Halo Tim DNA, saya ingin berkonsultasi mengenai layanan maklon Pressed Milk Candy untuk brand saya.'
    },
    'lozenges': {
      title: 'Functional & Throat Lozenges (Permen Hisap Pelega)',
      badge: 'Permen Fungsional & Herbal',
      tagline: 'Pelepasan zat aktif orofaringeal bertahap (10–15 menit) untuk melapisi mukosa tenggorokan dan meredakan iritasi secara efektif.',
      description: 'Layanan maklon permen hisap fungsional untuk pelega tenggorokan, batuk kering, sariawan, dan penyegar napas higienis. Matriks padatan dirancang khusus dengan laju kelarutan lambat terukur, memungkinkan zat aktif herbal seperti mentol, peppermint, ekstrak jahe merah, propolis, dan vitamin diserap optimal melalui jaringan kapiler sublingual dan buccal mukosa mulut.',
      specs: [
        { label: 'Waktu Larut (Dissolution)', value: '10 – 15 menit konsisten di rongga mulut' },
        { label: 'Bentuk Sediaan', value: 'Bulat bikonveks, lonjong halus tanpa sudut tajam' },
        { label: 'Kadar Gula', value: 'Pilihan Sugar-Free (Isomalt & Xylitol) atau Gula Alami' },
        { label: 'Kapasitas Produksi', value: '400.000 lozenges per hari' },
        { label: 'Ketahanan Suhu', value: 'Tahan leleh pada iklim tropis Indonesia' }
      ],
      ingredients: [
        'Ekstrak Daun Peppermint & Menthol Crystal kemurnian tinggi',
        'Ekstrak Jahe Merah terstandar gingerol antioksidan',
        'Ekstrak Propolis Lebah murni anti-inflamasi alami',
        'Ekstrak Bilberry & Lutein untuk perlindungan kesehatan mata',
        'Vitamin C Buffered (ramah lambung) & Zinc mineral penunjang imun'
      ],
      packaging: [
        'Blister Alu-Alu Kedap Udara (isi 6, 8, atau 12 tablet per strip)',
        'Kotak Kaleng Mewah (Tin Can Packaging) dengan segel hologram',
        'Sachet Individual Sealed (satuan dalam dus dispenser display retail)'
      ],
      workflow: [
        'Fase 1: Analisis Dosis Zat Aktif & Target Efek Terapeutik',
        'Fase 2: Formulasi Profil Rasa Herbal / Mint yang Menyegarkan',
        'Fase 3: Uji Laju Pelarutan Orofaringeal & Stabilitas Bahan Aktif',
        'Fase 4: Registrasi BPOM MD & Sertifikasi Halal BPJPH',
        'Fase 5: Manufaktur Cleanroom & Pengemasan Blistering Otomatis'
      ],
      guarantees: [
        'Standar Higienitas CPPOB / GMP Pangan Fungsional',
        'Uji Laboratorium Bebas Logam Berat & Bebas Cemaran Mikroba',
        'Legalitas Izin Edar MD Resmi BPOM RI & Sertifikat Halal'
      ],
      waMessage: 'Halo Tim DNA, saya ingin berkonsultasi mengenai maklon Permen Hisap Lozenges untuk brand saya.'
    },
    'tablet': {
      title: 'Chewable Tablet Candy (Tablet Kunyah Multivitamin)',
      badge: 'Nutrisi & Suplemen Kunyah',
      tagline: 'Akurasi dosis mikronutrien tinggi dengan rasa buah susu lezat yang menutupi rasa pahit vitamin bagi anak maupun dewasa.',
      description: 'Maklon tablet kunyah suplemen untuk kebutuhan multivitamin harian, kesehatan tulang, sistem imun, dan pertumbuhan anak. Dengan teknologi rasa canggih (taste masking), kami memastikan zat aktif seperti kalsium, zat besi, zinc, dan vitamin tidak berasa pahit atau getir, melainkan memiliki sensasi rasa stroberi, jeruk, vanila susu, atau cokelat yang sangat digemari konsumen.',
      specs: [
        { label: 'Presisi Dosis', value: 'Akurasi takaran zat aktif 98% – 102% per tablet' },
        { label: 'Bobot Tablet', value: '600 mg – 1.200 mg per butir' },
        { label: 'Kekerasan (Hardness)', value: '5 – 8 kg/cm² (renyah dikunyah, tidak mudah hancur saat kirim)' },
        { label: 'Keseragaman Kandungan', value: 'Memenuhi Farmakope & Standar AKG BPOM' }
      ],
      ingredients: [
        'Multivitamin Lengkap (Vitamin A, B-Kompleks, C, D3, E)',
        'Mineral Esensial (Kalsium Karbonat/Laktat, Zinc, Zat Besi)',
        'Konsentrat Ekstrak Buah Asli & Perisa Alami Food Grade',
        'Serat Pangan Alami & Prebiotik Inulin / FOS pendukung pencernaan'
      ],
      packaging: [
        'Botol Plastik PET/HDPE Tutup Child-Resistant / Flip-top',
        'Blister Pack Strip gantung untuk toko kelontong & apotek',
        'Pouch Ziplock praktis travel-friendly'
      ],
      workflow: [
        'Fase 1: Perhitungan Angka Kecukupan Gizi (AKG) Sesuai Regulasi BPOM',
        'Fase 2: Uji Masking Rasa Pahit & Homogenitas Campuran Granulasi',
        'Fase 3: Trial Batch & Uji Stabilitas Dipercepat (Accelerated Stability)',
        'Fase 4: Registrasi Izin Edar BPOM MD & Sertifikat Halal',
        'Fase 5: Produksi Massal, Pengemasan Botol/Blister, & Distribusi'
      ],
      guarantees: [
        'Klaim Nutrisi (Nutrition Facts) Terverifikasi Uji Lab KAN',
        'Legalitas Izin Edar MD Resmi BPOM RI',
        'Jaminan Mutu Halal BPJPH & GMP'
      ],
      waMessage: 'Halo Tim DNA, saya ingin berkonsultasi mengenai maklon Tablet Kunyah Nutrisi untuk brand saya.'
    },
    'one-stop-maklon': {
      title: 'Layanan One-Stop Maklon (End-to-End Turnkey)',
      badge: 'Solusi Lengkap Pabrik Maklon',
      tagline: 'Mulai dari riset formulasi, izin legalitas BPOM & Halal, desain kemasan, hingga produk jadi siap kirim ke gudang Anda.',
      description: 'Solusi lengkap bagi brand owner, entrepreneur, distributor farmasi, maupun perusahaan FMCG yang ingin meluncurkan produk kembang gula fungsional tanpa beban investasi pabrik miliaran rupiah dan perizinan yang rumit. Tim ahli Dairy Nutrition Alami (DNA) bertindak sebagai fasilitas manufaktur resmi brand Anda dari awal hingga siap dipasarkan.',
      specs: [
        { label: 'Cakupan Layanan', value: 'Hulu ke Hilir (R&D, Legalitas, Desain, Manufaktur, Lab)' },
        { label: 'Waktu Peluncuran', value: 'Cepat & Terjadwal (3 - 8 Minggu tergantung izin)' },
        { label: 'Kapasitas Pabrik', value: 'Ratusan ribu butir / hari dengan mesin rotary modern' },
        { label: 'Fasilitas Produksi', value: 'Cleanroom Bertekanan Positif Berstandar CPPOB / GMP' }
      ],
      ingredients: [
        'Penyediaan Bahan Baku Impor & Lokal dengan Dokumen COA Lengkap',
        'Formulasi Kustom R&D Eksklusif khusus brand Anda',
        'Bahan Kemas Food-Grade Berstandar Farmasi & Pangan'
      ],
      packaging: [
        'Desain Grafis Kemasan Komersial Gratis (Blister, Botol, Dus Sekunder)',
        'Pencetakan Kemasan Primer & Sekunder Berlisensi',
        'Barcode GS1 & Format Label BPOM Sesuai Regulasi Terbaru'
      ],
      workflow: [
        'Fase 1: Konsultasi Kebutuhan Produk, Target Pasar & Estimasi HPP',
        'Fase 2: Pembuatan Sampel Formula R&D & Penandatanganan NDA Kerahasiaan',
        'Fase 3: Pendaftaran Izin Edar BPOM MD & Sertifikasi Halal BPJPH',
        'Fase 4: Finalisasi Desain Kemasan Komersial & Pengadaan Material',
        'Fase 5: Produksi Massal di Cleanroom & In-Process Quality Control (IPC)',
        'Fase 6: Uji Mikrobiologi Lab KAN, Penerbitan COA, & Pengiriman ke Gudang Anda'
      ],
      guarantees: [
        'Izin Edar BPOM MD 100% Legal & Terdaftar di SIINas',
        'Sertifikat Halal Resmi BPJPH / MUI',
        'Kerahasiaan Formula Dilindungi Kontrak Hukum Non-Disclosure Agreement (NDA)',
        'Pendampingan Teknis Pemasaran & Regulasi Klaim Label Iklan'
      ],
      waMessage: 'Halo Tim DNA, saya ingin berkonsultasi mengenai paket One-Stop Maklon lengkap dari nol untuk brand saya.'
    },
    'skema-kerjasama': {
      title: 'Skema Kerjasama Maklon (Toll Manufacturing)',
      badge: 'Pilihan Model Kerjasama B2B',
      tagline: 'Pilihan model kerjasama maklon yang disesuaikan dengan kapasitas modal, kesiapan formula, dan target waktu peluncuran brand Anda.',
      description: 'Pabrik maklon modern kami menyediakan 3 model kontrak manufaktur yang fleksibel untuk berbagai profil mitra: pemilik brand baru (startup/influencer), apotek & klinik kesehatan, hingga korporasi FMCG dan distributor farmasi besar.',
      specs: [
        { label: '1. Full Maklon (Turnkey)', value: 'DNA siapkan seluruh formulasi, izin BPOM, kemasan, hingga produksi jadi' },
        { label: '2. Private Label (Fast Launch)', value: 'Gunakan formula unggulan DNA yang sudah teruji stabil untuk peluncuran kilat' },
        { label: '3. Toll Manufacturing', value: 'Klien menyediakan spesifikasi/formula khusus, DNA memproses & mengemas' },
        { label: 'MOQ (Minimum Order)', value: 'Kompetitif dan dapat disesuaikan bertahap sesuai skala bisnis' }
      ],
      ingredients: [
        'Formula Kustom Eksklusif Milik Klien atau Formula Unggulan DNA',
        'Fleksibilitas Pengadaan Bahan Baku (Disediakan Klien atau Pabrik DNA)'
      ],
      packaging: [
        'Kustomisasi Penuh Kemasan Blister, Botol, Sachet, dan Outer Box'
      ],
      workflow: [
        'Langkah 1: Pilih Model Kerjasama yang Sesuai dengan Kebutuhan Brand',
        'Langkah 2: Perhitungan Biaya HPP Transparan & Penandatanganan Kontrak',
        'Langkah 3: Pelaksanaan Produksi Sesuai Skema Pilihan Hingga Selesai'
      ],
      guarantees: [
        'Transparansi Biaya Produksi Tanpa Ada Biaya Tersembunyi',
        'Kepatuhan Standar Mutu CPPOB / GMP & Audit Fasilitas Pabrik Terbuka',
        'Jaminan Ketepatan Waktu Pengiriman Sesuai Service Level Agreement (SLA)'
      ],
      waMessage: 'Halo Tim DNA, saya ingin menanyakan rincian skema kerjasama maklon dan ketentuan MOQ untuk produk kembang gula.'
    }
  };

  const toggleService = (service: string) => {
    setExpandedService(service);
  };

  const closeServiceModal = () => {
    setExpandedService(null);
  };

  const whatsappUrl = "https://wa.me/6282225613106?text=Halo%20Tim%20Dairy%20Nutrition%20Alami%2C%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20layanan%20maklon%20permen.%20Boleh%20minta%20waktunya%20sebentar%3F";

  const handleWhatsapp = (e: React.MouseEvent<HTMLAnchorElement>, actionId: string) => {
    e.preventDefault();
    setIsNavigating(actionId);
    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
      setIsNavigating(null);
      setIsMobileMenuOpen(false);
    }, 600);
  };

  const handleAction = (e: React.MouseEvent<HTMLAnchorElement>, actionId: string, targetId: string) => {
    e.preventDefault();
    setIsNavigating(actionId);
    
    // Simulate loading for visual feedback
    setTimeout(() => {
      const element = document.getElementById(targetId);
      if (element) {
        const y = element.getBoundingClientRect().top + window.scrollY - 100;
        animate(window.scrollY, y, {
          duration: 0.8,
          ease: [0.16, 1, 0.3, 1],
          onUpdate: (latest) => window.scrollTo(0, latest)
        });
      }
      setIsNavigating(null);
      setIsMobileMenuOpen(false);
    }, 800);
  };

  const handleNavScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      // Offset by 100 for the fixed header
      const y = element.getBoundingClientRect().top + window.scrollY - 100;
      animate(window.scrollY, y, {
        duration: 0.8,
        // Easing curve for a very smooth transition
        ease: [0.22, 1, 0.36, 1],
        onUpdate: (latest) => window.scrollTo(0, latest)
      });
    }
  };

  return (
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-clip min-h-screen transition-colors duration-500">
      {/* TopNavBar Component */}
      <nav className="fixed top-0 w-full z-50 bg-stone-50/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-orange-100/50 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <a 
            href="#home" 
            onClick={(e) => handleNavScroll(e, 'home')}
            className="flex items-center gap-2.5 sm:gap-3 group cursor-pointer"
            aria-label="Dairy Nutrition Alami Home"
          >
            <img 
              src="/logo.png" 
              alt="Logo Dairy Nutrition Alami" 
              className="h-9 sm:h-10 w-auto object-contain drop-shadow-sm transition-transform duration-300 group-hover:scale-105" 
            />
            <motion.div 
              className="text-lg sm:text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-emerald-950 via-emerald-600 to-emerald-950 dark:from-emerald-200 dark:via-emerald-400 dark:to-emerald-200"
              style={{ backgroundSize: '200% auto' }}
              animate={{ backgroundPosition: ['0% center', '200% center'] }}
              transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
            >
              Dairy Nutrition Alami
            </motion.div>
          </a>
          <div className="hidden md:flex gap-6 font-manrope tracking-tight text-sm font-semibold">
            {[
              { id: 'home', label: 'Home' },
              { id: 'services', label: 'Services' },
              { id: 'products', label: 'Products' },
              { id: 'process', label: 'Process' },
              { id: 'artikel', label: 'Artikel' },
              { id: 'testimoni', label: 'Testimoni' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a 
                key={item.id}
                className={`cursor-pointer transition-colors pb-1 ${activeSection === item.id ? 'text-emerald-900 dark:text-emerald-300 border-b-2 border-emerald-900 dark:border-emerald-300' : 'text-zinc-500 dark:text-zinc-400 hover:text-emerald-700 dark:hover:text-emerald-200 border-b-2 border-transparent'}`} 
                onClick={(e) => handleNavScroll(e, item.id)} 
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex gap-3 items-center">
            <a href="#contact" onClick={(e) => handleAction(e, 'nav-project', 'contact')} className="bg-white text-on-surface dark:text-zinc-900 font-label-sm px-5 py-2.5 rounded-lg hover:bg-white hover:text-on-surface dark:hover:text-zinc-900 active:bg-white active:text-on-surface dark:active:text-zinc-900 transition-transform duration-300 scale-95 active:scale-90 border border-outline-variant/30 uppercase tracking-widest text-[11px] inline-flex items-center justify-center sm:min-w-[140px] shadow-sm">
              {isNavigating === 'nav-project' ? <Loader2 className="w-4 h-4 mr-2 animate-spin text-on-surface dark:text-zinc-900" /> : null}
              Mulai Proyek Anda
            </a>
            <div className="flex items-center">
              <a href={whatsappUrl} onClick={(e) => handleWhatsapp(e, 'nav-consult')} className="bg-gradient-to-r from-emerald-950 to-emerald-600 hover:from-emerald-900 hover:to-emerald-500 text-white font-label-sm px-5 py-2.5 rounded-lg transition-all duration-300 scale-95 active:scale-90 uppercase tracking-widest text-[11px] inline-flex items-center justify-center sm:min-w-[140px] shadow-md border border-emerald-500/20">
                {isNavigating === 'nav-consult' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Konsultasi Gratis
              </a>
              <ThemeToggle />
            </div>
          </div>
          <div className="flex md:hidden items-center gap-3">
            <ThemeToggle />
            <button className="text-emerald-900 dark:text-emerald-300 hover:text-emerald-700 dark:hover:text-emerald-100 transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="md:hidden fixed top-20 left-0 w-full bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/30 px-4 py-4 flex flex-col gap-1 shadow-lg z-40 max-h-[calc(100vh-5rem)] overflow-y-auto"
            >
              {[
                { id: 'home', label: 'Home' },
                { id: 'services', label: 'Services' },
                { id: 'products', label: 'Products' },
                { id: 'process', label: 'Process' },
                { id: 'artikel', label: 'Artikel' },
                { id: 'testimoni', label: 'Testimoni' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <a 
                  key={item.id}
                  onClick={(e) => handleNavScroll(e, item.id)} 
                  className={`cursor-pointer font-label-sm uppercase tracking-widest text-xs px-4 py-3 rounded-xl flex items-center transition-colors active:scale-[0.98] ${activeSection === item.id ? 'bg-primary/10 text-primary font-bold' : 'text-on-surface-variant hover:bg-surface-container hover:text-on-surface'}`} 
                  href={`#${item.id}`}
                >
                  {item.label}
                </a>
              ))}
              <hr className="border-outline-variant/30 my-4 mx-4" />
              <div className="flex flex-col gap-3 px-2 pb-4">
                <a href="#contact" onClick={(e) => handleAction(e, 'mobile-project', 'contact')} className="bg-primary-container text-on-surface font-label-sm px-5 py-3 rounded-xl border border-outline-variant/30 text-center uppercase tracking-widest text-[11px] flex items-center justify-center min-h-[44px] active:scale-[0.98] transition-transform">
                  {isNavigating === 'mobile-project' ? <Loader2 className="w-4 h-4 mr-2 animate-spin text-on-surface dark:text-zinc-900" /> : null}
                  Mulai Proyek Anda
                </a>
                <a href={whatsappUrl} onClick={(e) => handleWhatsapp(e, 'mobile-consult')} className="bg-gradient-to-r from-emerald-950 to-emerald-600 hover:from-emerald-900 hover:to-emerald-500 text-white font-label-sm px-5 py-3 rounded-xl text-center uppercase tracking-widest text-[11px] flex items-center justify-center min-h-[44px] active:scale-[0.98] transition-transform shadow-md border border-emerald-500/20">
                  {isNavigating === 'mobile-consult' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                  Konsultasi Gratis
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-10 lg:py-12 flex flex-col lg:flex-row items-center gap-8 lg:gap-12" id="home">
          <div className="flex-1 space-y-6 z-10 pt-4 md:pt-0">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="inline-block bg-primary-container text-on-surface font-label-sm px-3.5 py-1 rounded-full border border-outline-variant/30 uppercase tracking-widest text-xs"
            >
              B2B Contract Manufacturing
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="font-h1 text-h1 text-on-surface"
            >
              Maklon{' '}
              <span className="inline-block whitespace-pre">
                {"Pressed Milk".split('').map((char, index) => (
                  <motion.span
                    key={index}
                    animate={{ y: [-30, 0, 0, -30], opacity: [0, 1, 1, 0] }}
                    transition={{ 
                      duration: 4, 
                      repeat: Infinity, 
                      times: [0, 0.1, 0.9, 1],
                      delay: index * 0.1 
                    }}
                    className="inline-block animate-color-cycle"
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
              {' '}Candy & Lozenges Premium dari Bahan Alami
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px]"
            >
              Ciptakan Brand Permen Sehat Anda dengan Formula Dairy Nutrition Berkualitas Tinggi. Kami menyediakan solusi hulu ke hilir untuk inovasi produk nutrisi.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="flex flex-wrap gap-3 pt-3"
            >
              <a href={whatsappUrl} onClick={(e) => handleWhatsapp(e, 'hero-consult')} className="bg-gradient-to-r from-emerald-950 to-emerald-600 hover:from-emerald-900 hover:to-emerald-500 text-white font-label-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg transition-all shadow-md border border-emerald-500/20 h-11 md:h-12 uppercase tracking-widest text-[10px] md:text-xs inline-flex items-center justify-center sm:min-w-[160px] w-full sm:w-auto">
                {isNavigating === 'hero-consult' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Konsultasi Gratis
              </a>
              <a href="#contact" onClick={(e) => handleAction(e, 'hero-project', 'contact')} className="bg-primary-container text-on-surface font-label-sm px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg border border-outline-variant/30 hover:bg-surface-container-highest transition-colors h-11 md:h-12 uppercase tracking-widest text-[10px] md:text-xs inline-flex items-center justify-center sm:min-w-[170px] w-full sm:w-auto">
                {isNavigating === 'hero-project' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Mulai Proyek Anda
              </a>
            </motion.div>

            {/* Symmetrical Trust Badges */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.85 }}
              className="pt-2 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-on-surface-variant font-medium"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Izin Edar BPOM MD & Halal</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Kapasitas 500k Butir/Hari</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Trial Sampel R&D Eksklusif</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Hero Showcase Video */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="flex-1 w-full flex justify-center items-center relative mt-6 lg:mt-0"
          >
            {/* Perfectly Symmetrical Ambient Glow */}
            <div className="absolute inset-0 max-w-[320px] sm:max-w-[350px] lg:max-w-[370px] mx-auto aspect-[9/16] bg-gradient-to-tr from-emerald-500/25 via-teal-500/20 to-emerald-400/25 rounded-[2.5rem] blur-2xl -z-10"></div>
            
            {/* Video Showcase Card */}
            <div className="relative w-full max-w-[320px] sm:max-w-[350px] lg:max-w-[370px] aspect-[9/16] rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl border-2 border-emerald-600/30 dark:border-emerald-400/25 bg-zinc-950 group">
              <video 
                ref={heroVideoRef}
                src="/assets/aistudio/Membuat_video_dari_empat_gambar_91a2d2fd_4280e1d7.mp4" 
                autoPlay 
                loop 
                muted={isHeroVideoMuted}
                playsInline 
                className="w-full h-full object-cover rounded-[1.9rem] sm:rounded-[2.4rem]"
              />
              
              {/* Subtle top overlay gradient for readability */}
              <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-black/60 via-black/20 to-transparent pointer-events-none z-10" />

              {/* Floating Top Controls */}
              <div className="absolute top-3 sm:top-4 inset-x-3 sm:inset-x-4 flex items-center justify-between z-20">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-semibold border border-white/20 shadow-md">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>Showcase Produk</span>
                </div>
                <button
                  onClick={toggleHeroVideoMute}
                  aria-label={isHeroVideoMuted ? "Aktifkan Suara" : "Matikan Suara"}
                  className="p-2 rounded-full bg-black/50 hover:bg-black/75 backdrop-blur-md text-white transition-all hover:scale-105 border border-white/20 shadow-md cursor-pointer"
                  title={isHeroVideoMuted ? "Klik untuk aktifkan audio" : "Klik untuk bisukan audio"}
                >
                  {isHeroVideoMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-emerald-400" />}
                </button>
              </div>

              {/* Bottom Info Glass Card */}
              <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-3 sm:bottom-4 inset-x-3 sm:inset-x-4 p-3 rounded-2xl bg-black/65 backdrop-blur-md border border-white/20 text-white shadow-xl z-20">
                <div className="flex items-center justify-between text-[10px] uppercase font-bold text-emerald-300 tracking-wider">
                  <span>4 Varian Rasa DNA</span>
                  <span className="text-white/70">Kempa Dingin</span>
                </div>
                <div className="text-xs font-semibold text-white/95 mt-0.5 truncate">
                  Matcha • Strawberry • Madu • Pisang
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Why Choose Us */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="bg-surface-container-lowest py-8 md:py-12 border-y border-surface-variant/50" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[768px] mx-auto mb-8 md:mb-10">
              <h2 className="font-h2 text-h2 text-on-surface mb-3">Kenapa Memilih Dairy Nutrition Alami</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Keahlian spesifik dengan fasilitas terstandarisasi untuk memastikan produk Anda memimpin pasar.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Feature Card */}
              <div className="p-6 rounded-xl border border-primary-container bg-surface hover:bg-surface-container-highest transition-colors duration-300">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
                  <FlaskConical className="w-8 h-8 text-tertiary mb-3" />
                </motion.div>
                <h3 className="font-h3 text-h3 text-on-surface text-lg mb-1.5 font-bold">Specialist in Pressed Milk</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Fokus mendalam pada teknologi pembuatan permen susu padat dan lozenges.</p>
              </div>
              <div className="p-6 rounded-xl border border-primary-container bg-surface hover:bg-surface-container-highest transition-colors duration-300">
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
                  <BadgeCheck className="w-8 h-8 text-tertiary mb-3" />
                </motion.div>
                <h3 className="font-h3 text-h3 text-on-surface text-lg mb-1.5 font-bold">Quality Dairy Ingredients</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Hanya menggunakan bahan baku susu premium yang teruji klinis.</p>
              </div>
              <div className="p-6 rounded-xl border border-primary-container bg-surface hover:bg-surface-container-highest transition-colors duration-300">
                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
                  <TestTube2 className="w-8 h-8 text-tertiary mb-3" />
                </motion.div>
                <h3 className="font-h3 text-h3 text-on-surface text-lg mb-1.5 font-bold">Custom Formula & R&D</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Tim R&D berpengalaman untuk menciptakan formulasi unik brand Anda.</p>
              </div>
              <div className="p-6 rounded-xl border border-primary-container bg-surface hover:bg-surface-container-highest transition-colors duration-300">
                <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
                  <Boxes className="w-8 h-8 text-tertiary mb-3" />
                </motion.div>
                <h3 className="font-h3 text-h3 text-on-surface text-lg mb-1.5 font-bold">Competitive MOQ</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Sangat fleksibel untuk brand baru maupun ekspansi perusahaan besar.</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Services Bento Grid */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="py-8 md:py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services">
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 text-xs font-semibold tracking-wide uppercase mb-3">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Toll Manufacturing Sediaan Kembang Gula Fungsional
            </div>
            <h2 className="font-h2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-on-surface mb-3 tracking-tight">
              Layanan Maklon Permen Dairy & Herbal
            </h2>
            <p className="font-body-md text-sm sm:text-base text-on-surface-variant leading-relaxed">
              Fasilitas manufaktur kontrak terintegrasi hulu-ke-hilir berstandar <strong>CPPOB / GMP</strong> & <strong>Izin Edar BPOM MD</strong>. Melayani formulasi R&D sampel kustom, perizinan legalitas resmi, desain kemasan, hingga manufaktur massal berkapasitas tinggi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1: Pressed Milk Candy (Hero Card) */}
            <div className="col-span-1 md:col-span-2 rounded-2xl md:rounded-3xl relative overflow-hidden group border border-outline-variant/30 bg-surface shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[360px] md:min-h-[380px]">
              <img 
                alt="Pressed Milk Candy" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/images/service_pressed_milk.jpg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/65 to-zinc-950/20"></div>
              
              {/* Top Tags */}
              <div className="relative z-10 p-6 md:p-8 flex flex-wrap items-center justify-between gap-2">
                <span className="bg-emerald-600/90 text-white font-label-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-xs shadow-xs">
                  Format Unggulan DNA
                </span>
                <span className="bg-white/20 text-white backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium border border-white/20">
                  Direct Cold Compression
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 p-6 md:p-8">
                <h3 className="font-h3 text-2xl sm:text-3xl text-white font-extrabold mb-2 flex items-center gap-2">
                  Pressed Milk Candy (Permen Susu Padat)
                </h3>
                <p className="font-body-md text-white/90 text-sm sm:text-base mb-4 max-w-2xl leading-relaxed">
                  Teknologi kempa dingin tanpa pemanasan ekstrem untuk menjaga keutuhan protein susu murni New Zealand, bovine colostrum IgG, dan bio-kalsium. Tekstur padat renyah yang lumer lembut di rongga mulut.
                </p>
                <div className="flex flex-wrap items-center gap-2 mb-4">
                  <span className="text-[11px] bg-white/15 text-white px-2.5 py-1 rounded-md backdrop-blur-xs">Kapasitas 500k butir/hari</span>
                  <span className="text-[11px] bg-white/15 text-white px-2.5 py-1 rounded-md backdrop-blur-xs">Water Activity &lt; 0.25 Aw</span>
                  <span className="text-[11px] bg-white/15 text-white px-2.5 py-1 rounded-md backdrop-blur-xs">Bisa Emboss Logo Brand</span>
                </div>
                <button 
                  onClick={(e) => { e.preventDefault(); toggleService('pressed-milk'); }} 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-900 font-bold text-xs uppercase tracking-wider hover:bg-emerald-500 hover:text-white transition-all shadow-md group-hover:translate-x-1"
                >
                  Lihat Spesifikasi & Alur Maklon
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Card 2: Lozenges Candy */}
            <div className="col-span-1 rounded-2xl md:rounded-3xl relative overflow-hidden group border border-outline-variant/30 bg-surface-container shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[320px]">
              <img 
                alt="Lozenges Candy" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/images/service_lozenges.jpg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/20"></div>
              
              <div className="relative z-10 p-6 flex items-center justify-between">
                <span className="bg-teal-600/90 text-white font-label-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                  Pelega & Herbal
                </span>
                <span className="text-[11px] bg-white/20 text-white px-2.5 py-1 rounded-full backdrop-blur-xs">
                  10-15 Min Dissolution
                </span>
              </div>

              <div className="relative z-10 p-6">
                <h3 className="font-h3 text-xl sm:text-2xl text-white font-bold mb-2">
                  Functional Lozenges Candy
                </h3>
                <p className="font-body-md text-white/90 text-xs sm:text-sm mb-4 leading-relaxed">
                  Permen hisap pelega tenggorokan dengan pelepasan lambat terkendali. Diformulasikan dengan peppermint, ekstrak jahe merah, propolis, dan vitamin C. Pilihan Sugar-Free dengan Isomalt & Xylitol.
                </p>
                <button 
                  onClick={(e) => { e.preventDefault(); toggleService('lozenges'); }} 
                  className="inline-flex items-center gap-1.5 text-emerald-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Spesifikasi & Kemasan Blister &rarr;
                </button>
              </div>
            </div>
            
            {/* Card 3: Chewable Tablet Candy */}
            <div className="col-span-1 rounded-2xl md:rounded-3xl relative overflow-hidden group border border-outline-variant/30 bg-primary-container shadow-sm hover:shadow-md transition-all flex flex-col justify-between min-h-[320px]">
              <img 
                alt="Tablet Candy" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="/images/service_tablet.jpg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-zinc-950/20"></div>
              
              <div className="relative z-10 p-6 flex items-center justify-between">
                <span className="bg-amber-600/90 text-white font-label-sm px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
                  Multivitamin Kunyah
                </span>
                <span className="text-[11px] bg-white/20 text-white px-2.5 py-1 rounded-full backdrop-blur-xs">
                  Taste Masking
                </span>
              </div>

              <div className="relative z-10 p-6">
                <h3 className="font-h3 text-xl sm:text-2xl text-white font-bold mb-2">
                  Chewable Tablet Candy
                </h3>
                <p className="font-body-md text-white/90 text-xs sm:text-sm mb-4 leading-relaxed">
                  Tablet kunyah mikronutrien presisi tinggi dengan teknologi penyamaran rasa pahit vitamin (taste masking). Sangat disukai anak dan dewasa dengan varian rasa buah susu segar.
                </p>
                <button 
                  onClick={(e) => { e.preventDefault(); toggleService('tablet'); }} 
                  className="inline-flex items-center gap-1.5 text-amber-300 hover:text-white font-bold text-xs uppercase tracking-wider transition-colors"
                >
                  Spesifikasi & Dosis AKG &rarr;
                </button>
              </div>
            </div>

            {/* Card 4: One-Stop Maklon (Turnkey Solusi Lengkap) */}
            <div className="col-span-1 md:col-span-2 rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-emerald-500/30 bg-gradient-to-br from-emerald-950/90 via-zinc-900 to-emerald-950/90 text-white shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-semibold uppercase tracking-wider">
                    <BadgeCheck className="w-4 h-4 text-emerald-400" />
                    Layanan End-to-End Turnkey
                  </div>
                  <span className="text-xs text-zinc-400 font-mono">Bebas Repot Izin & Investasi Mesin</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold text-white mb-2">
                  One-Stop Maklon: Dari Formulasi Hingga Produk Siap Jual
                </h3>
                <p className="text-sm text-zinc-300 leading-relaxed max-w-2xl mb-6">
                  Anda cukup membawa ide atau konsep produk, tim profesional DNA menangani seluruh rantai manufaktur: peracikan sampel R&D gratis, pengurusan <strong>Izin Edar BPOM MD</strong>, <strong>Sertifikasi Halal BPJPH</strong>, desain kemasan komersial, hingga uji lab mikrobiologi dengan rilis COA.
                </p>

                {/* 4 Pillars Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 mx-auto flex items-center justify-center mb-2">
                      <FlaskConical className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-xs font-bold text-white">R&D Sampel</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">Trial Prototipe Gratis</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 mx-auto flex items-center justify-center mb-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-xs font-bold text-white">Izin BPOM & Halal</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">100% Legalitas Resmi</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 mx-auto flex items-center justify-center mb-2">
                      <Boxes className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-xs font-bold text-white">Desain Kemasan</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">Blister, Botol & Dus</div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-center">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 mx-auto flex items-center justify-center mb-2">
                      <FileText className="w-4 h-4 text-emerald-400" />
                    </div>
                    <div className="text-xs font-bold text-white">Uji Lab & COA</div>
                    <div className="text-[10px] text-zinc-400 mt-0.5">Lab KAN Terakreditasi</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-white/10">
                <span className="text-xs text-zinc-400 text-center sm:text-left">
                  Didukung fasilitas cleanroom bertekanan positif & mesin high-speed rotary.
                </span>
                <button 
                  onClick={(e) => { e.preventDefault(); toggleService('one-stop-maklon'); }} 
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold text-xs uppercase tracking-wider transition-colors text-center shadow-md cursor-pointer"
                >
                  Pelajari Alur One-Stop Maklon &rarr;
                </button>
              </div>
            </div>

            {/* Card 5: 3 Skema Kerjasama Maklon (Toll Manufacturing Models) */}
            <div className="col-span-1 md:col-span-3 rounded-2xl md:rounded-3xl p-6 sm:p-8 border border-outline-variant/30 bg-surface shadow-sm">
              <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                <div className="max-w-2xl">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider mb-2">
                    <SlidersHorizontal className="w-3.5 h-3.5" />
                    Pilihan Skema Kerjasama Fleksibel
                  </div>
                  <h3 className="font-h3 text-xl sm:text-2xl text-on-surface font-extrabold mb-2">
                    Sesuaikan Skema Maklon dengan Kesiapan Bisnis Brand Anda
                  </h3>
                  <p className="font-body-md text-on-surface-variant text-xs sm:text-sm leading-relaxed">
                    Kami menyediakan 3 model kontrak kemitraan: <strong>Full Maklon (Turnkey)</strong> untuk solusi lengkap dari nol, <strong>Private Label</strong> untuk peluncuran kilat memakai formula siap edar DNA, dan <strong>Toll Manufacturing</strong> murni bagi perusahaan yang telah memiliki spesifikasi formulasi sendiri.
                  </p>
                </div>
                <div className="flex flex-wrap sm:flex-nowrap items-center gap-3 w-full lg:w-auto shrink-0">
                  <button 
                    onClick={(e) => { e.preventDefault(); toggleService('skema-kerjasama'); }} 
                    className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-surface-container-high hover:bg-outline-variant text-on-surface text-xs font-bold uppercase tracking-wider transition-colors text-center border border-outline-variant/40"
                  >
                    Bandingkan 3 Skema Maklon
                  </button>
                  <a 
                    href="#products" 
                    onClick={(e) => handleNavScroll(e, 'products')} 
                    className="flex-1 sm:flex-none px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 text-white text-xs font-bold uppercase tracking-wider hover:from-emerald-700 hover:to-teal-700 transition-all text-center shadow-md whitespace-nowrap"
                  >
                    Lihat Portofolio Produk &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Modal Layanan Maklon Komprehensif */}
        <AnimatePresence>
          {expandedService && serviceDetails[expandedService] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-sm overflow-y-auto"
              onClick={closeServiceModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="w-full max-w-3xl my-auto shadow-2xl overflow-hidden pointer-events-auto bg-white dark:bg-zinc-900 rounded-2xl md:rounded-3xl border border-zinc-200 dark:border-zinc-800 flex flex-col max-h-[90vh]"
                onClick={e => e.stopPropagation()}
              >
                {/* Header */}
                <div className="p-6 md:p-8 border-b border-zinc-100 dark:border-zinc-800/80 bg-gradient-to-r from-emerald-50/60 via-teal-50/40 to-transparent dark:from-emerald-950/30 dark:via-zinc-900 dark:to-transparent relative">
                  <button 
                    onClick={closeServiceModal}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-200/60 dark:hover:bg-zinc-800 transition-colors text-zinc-500 hover:text-zinc-800 dark:hover:text-zinc-200 flex items-center justify-center w-9 h-9 z-10"
                    aria-label="Tutup"
                  >
                    <X className="w-5 h-5 flex-shrink-0" />
                  </button>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-600/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20 text-xs font-semibold uppercase tracking-wider mb-2">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    {serviceDetails[expandedService].badge}
                  </div>
                  <h3 className="font-h3 text-xl sm:text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-white pr-8">
                    {serviceDetails[expandedService].title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-emerald-800 dark:text-emerald-300/90 font-medium leading-relaxed">
                    {serviceDetails[expandedService].tagline}
                  </p>
                </div>

                {/* Scrollable Content Body */}
                <div className="p-6 md:p-8 space-y-6 overflow-y-auto font-body-md text-sm text-zinc-600 dark:text-zinc-300 divide-y divide-zinc-100 dark:divide-zinc-800/60">
                  {/* Overview */}
                  <div className="space-y-2">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-2">
                      <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Deskripsi Layanan Manufaktur
                    </h4>
                    <p className="text-zinc-700 dark:text-zinc-200 leading-relaxed text-sm sm:text-base">
                      {serviceDetails[expandedService].description}
                    </p>
                  </div>

                  {/* Spesifikasi Teknis */}
                  <div className="pt-6 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Parameter Spesifikasi Teknis Mesin & Produk
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {serviceDetails[expandedService].specs.map((item, idx) => (
                        <div key={idx} className="p-3.5 rounded-xl bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200/80 dark:border-zinc-700/60">
                          <div className="text-[11px] font-semibold text-zinc-400 dark:text-zinc-400 uppercase tracking-wide">{item.label}</div>
                          <div className="text-sm font-bold text-zinc-800 dark:text-zinc-100 mt-0.5">{item.value}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Formulasi & Bahan Baku */}
                  <div className="pt-6 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-2">
                      <FlaskConical className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Pilihan Formulasi Bahan Baku & Zat Aktif
                    </h4>
                    <ul className="grid grid-cols-1 gap-2">
                      {serviceDetails[expandedService].ingredients.map((ing, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{ing}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Kemasan */}
                  <div className="pt-6 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-2">
                      <Boxes className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Pilihan Kemasan Primer & Sekunder
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {serviceDetails[expandedService].packaging.map((pack, idx) => (
                        <div key={idx} className="flex items-start gap-2 p-2.5 rounded-lg bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-500/20 text-xs sm:text-sm text-zinc-700 dark:text-zinc-200">
                          <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span>{pack}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Workflow */}
                  <div className="pt-6 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-2">
                      <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Tahapan Alur Pengerjaan Maklon
                    </h4>
                    <div className="space-y-2">
                      {serviceDetails[expandedService].workflow.map((flow, idx) => (
                        <div key={idx} className="flex items-start gap-3 p-2.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/40 border border-zinc-200/60 dark:border-zinc-700/50 text-xs sm:text-sm">
                          <span className="w-5 h-5 rounded-full bg-emerald-600 text-white font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                            {idx + 1}
                          </span>
                          <span className="text-zinc-700 dark:text-zinc-200">{flow}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Legalitas & Jaminan */}
                  <div className="pt-6 space-y-3">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 flex items-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                      Jaminan Kualitas, Legalitas & Kerahasiaan Formula
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {serviceDetails[expandedService].guarantees.map((gua, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-2 rounded-lg bg-emerald-500/5 dark:bg-emerald-500/10 border border-emerald-500/20 text-xs text-zinc-700 dark:text-zinc-200 font-medium">
                          <BadgeCheck className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span>{gua}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-4 sm:p-6 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
                  <div className="text-xs text-zinc-500 dark:text-zinc-400 text-center sm:text-left">
                    Konsultasi gratis & penyesuaian formula sampel R&D.
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button 
                      onClick={closeServiceModal}
                      className="flex-1 sm:flex-none px-4 py-2.5 rounded-xl border border-zinc-300 dark:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 text-sm font-semibold transition-colors"
                    >
                      Tutup
                    </button>
                    <a
                      href={`https://wa.me/6282225613106?text=${encodeURIComponent(serviceDetails[expandedService].waMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      <Phone className="w-4 h-4" />
                      Konsultasi via WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* R&D Section */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="rnd">
          <div className="mb-6 md:mb-8 text-center max-w-[768px] mx-auto">
            <h2 className="font-h2 text-h2 text-on-surface mb-sm">Formulasi & R&D Eksekutif</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Inovasi yang didukung oleh sains. Tim R&D kami siap mewujudkan visi produk unik Anda dengan presisi dan standar kualitas tertinggi.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-8 md:mb-10 items-center">
            <div className="space-y-6">
              {/* Pusat Inovasi Card */}
              <div className="bg-surface p-6 sm:p-8 rounded-[2rem] border border-outline-variant/30 shadow-sm relative overflow-hidden group hover:border-outline-variant/50 transition-colors">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary-container rounded-bl-[4rem] -z-10 group-hover:scale-110 transition-transform duration-700 opacity-50"></div>
                <h3 className="font-h3 text-h3 text-on-surface mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                    <Microscope className="w-6 h-6 text-tertiary" />
                  </div>
                  Pusat Inovasi & Lab
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm leading-relaxed">Fasilitas laboratorium mutakhir kami dilengkapi dengan instrumen analitik presisi tinggi. Lingkungan steril dan terkendali memastikan setiap sampel dikembangkan dengan standar kebersihan dan akurasi yang ketat, memungkinkan pengembangan formulasi yang konsisten dan dapat direplikasi.</p>
              </div>
              
              {/* Keahlian Formulasi Card */}
              <div className="bg-surface p-6 sm:p-8 rounded-[2rem] border border-outline-variant/30 shadow-sm relative overflow-hidden group hover:border-outline-variant/50 transition-colors">
                <div className="absolute bottom-0 right-0 w-40 h-40 bg-surface-container-highest rounded-tl-[5rem] -z-10 group-hover:scale-110 transition-transform duration-700 opacity-30"></div>
                <h3 className="font-h3 text-h3 text-on-surface mb-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0">
                    <SlidersHorizontal className="w-6 h-6 text-tertiary" />
                  </div>
                  Keahlian Formulasi
                </h3>
                <p className="font-body-md text-on-surface-variant text-sm mb-6 leading-relaxed">Kemampuan mengkustomisasi resep sesuai tren pasar dan kebutuhan nutrisi spesifik merek Anda:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <li className="flex items-start gap-3 bg-surface-container-lowest px-4 py-3 rounded-xl border border-outline-variant/20 hover:border-tertiary/40 transition-colors shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0 mt-0.5" /> 
                    <span className="font-label-sm text-on-surface-variant text-xs leading-snug">Sugar-Free / Low Sugar Formulation</span>
                  </li>
                  <li className="flex items-start gap-3 bg-surface-container-lowest px-4 py-3 rounded-xl border border-outline-variant/20 hover:border-tertiary/40 transition-colors shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0 mt-0.5" /> 
                    <span className="font-label-sm text-on-surface-variant text-xs leading-snug">High Calcium Integration</span>
                  </li>
                  <li className="flex items-start gap-3 bg-surface-container-lowest px-4 py-3 rounded-xl border border-outline-variant/20 hover:border-tertiary/40 transition-colors shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0 mt-0.5" /> 
                    <span className="font-label-sm text-on-surface-variant text-xs leading-snug">Added Vitamins & Minerals</span>
                  </li>
                  <li className="flex items-start gap-3 bg-surface-container-lowest px-4 py-3 rounded-xl border border-outline-variant/20 hover:border-tertiary/40 transition-colors shadow-sm">
                    <CheckCircle2 className="w-5 h-5 text-tertiary shrink-0 mt-0.5" /> 
                    <span className="font-label-sm text-on-surface-variant text-xs leading-snug">Herbal Extracts Compatibility</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="relative px-2 sm:px-8 mt-8 lg:mt-0 xl:pl-12">
              <div className="absolute inset-0 bg-tertiary-container rounded-[2rem] sm:rounded-[3rem] rotate-[-3deg] scale-105 opacity-60 z-0 transition-transform duration-1000 hover:rotate-[-1deg]"></div>
              <img 
                alt="Lab scientists working" 
                className="w-full h-[280px] sm:h-[350px] md:h-[500px] object-cover rounded-[2rem] sm:rounded-[3rem] shadow-xl border border-outline-variant/20 relative z-10 transition-transform duration-1000 hover:scale-[1.02]" 
                src="/images/logo_dna_large.png" 
              />
              <div className="absolute -bottom-6 -left-2 sm:-bottom-10 sm:-left-6 p-2 bg-surface rounded-[2rem] z-20 shadow-xl hidden xs:block">
                <img 
                  alt="Dairy powder close-up" 
                  className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-[1.5rem] bg-white border border-outline-variant/20" 
                  src="/images/dairy_powder.jpg" 
                />
              </div>
            </div>
          </div>

          {/* R&D Process Breakdown */}
          <div className="mt-10 md:mt-12">
            <div className="text-center max-w-[768px] mx-auto mb-8 md:mb-10 px-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-800 dark:text-emerald-300 font-label-sm text-[10px] md:text-xs uppercase tracking-widest mb-3 shadow-xs">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                Alur Kerja Terstruktur
              </div>
              <h3 className="font-h2 text-2xl sm:text-3xl md:text-4xl text-on-surface font-extrabold tracking-tight mb-2">
                Tahapan Maklon Kami
              </h3>
              <p className="font-body-md text-on-surface-variant text-sm md:text-base leading-relaxed max-w-[620px] mx-auto">
                Proses pengembangan produk dan manufaktur yang terstruktur untuk mewujudkan brand Anda dari konsep hingga siap edar.
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 gap-y-10">
              {/* Step 1 */}
              <div className="bg-surface rounded-2xl border border-outline-variant/30 relative flex flex-col h-full hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 p-6 pt-7 shadow-xs">
                <div className="absolute -top-4 left-6 w-9 h-9 bg-gradient-to-br from-emerald-950 to-emerald-600 text-white rounded-xl flex items-center justify-center font-h3 font-bold text-sm shadow-md border border-emerald-400/30">
                  1
                </div>
                
                <h4 className="font-h3 text-on-surface text-lg font-bold mb-2">
                  Konsultasi & Ideasi
                </h4>
                <p className="font-body-md text-on-surface-variant text-sm flex-grow mb-6 leading-relaxed">
                  Diskusi mendalam mengenai konsep produk, target pasar, pemilihan bahan baku premium, dan rancangan formula eksklusif brand Anda.
                </p>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-outline-variant/20 bg-surface-container-lowest/80 dark:bg-surface-container-high/40 -mx-6 -mb-6 p-5 rounded-b-2xl">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Timeline</span>
                      <span className="text-sm font-semibold text-on-surface">1 - 2 Minggu</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Expected Outcome</span>
                      <span className="text-sm text-on-surface font-medium leading-snug">Konsep Produk & Kesepakatan Awal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-surface rounded-2xl border border-outline-variant/30 relative flex flex-col h-full hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 p-6 pt-7 shadow-xs">
                <div className="absolute -top-4 left-6 w-9 h-9 bg-gradient-to-br from-emerald-950 to-emerald-600 text-white rounded-xl flex items-center justify-center font-h3 font-bold text-sm shadow-md border border-emerald-400/30">
                  2
                </div>
                
                <h4 className="font-h3 text-on-surface text-lg font-bold mb-2">
                  Formulasi & Sampel
                </h4>
                <p className="font-body-md text-on-surface-variant text-sm flex-grow mb-6 leading-relaxed">
                  Tim R&D Farmasi kami meracik sampel awal untuk uji organoleptik, kestabilan tekstur, dan cita rasa riil hingga formula final teruji (<i>Locked</i>).
                </p>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-outline-variant/20 bg-surface-container-lowest/80 dark:bg-surface-container-high/40 -mx-6 -mb-6 p-5 rounded-b-2xl">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Timeline</span>
                      <span className="text-sm font-semibold text-on-surface">2 - 4 Minggu</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Expected Outcome</span>
                      <span className="text-sm text-on-surface font-medium leading-snug">Sampel <i>Approved</i> & Formula Final</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-surface rounded-2xl border border-outline-variant/30 relative flex flex-col h-full hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 p-6 pt-7 shadow-xs">
                <div className="absolute -top-4 left-6 w-9 h-9 bg-gradient-to-br from-emerald-950 to-emerald-600 text-white rounded-xl flex items-center justify-center font-h3 font-bold text-sm shadow-md border border-emerald-400/30">
                  3
                </div>
                
                <h4 className="font-h3 text-on-surface text-lg font-bold mb-2">
                  Legalitas & Desain
                </h4>
                <p className="font-body-md text-on-surface-variant text-sm flex-grow mb-6 leading-relaxed">
                  Pengesahan identitas merek. Kami mengurus izin BPOM, Sertifikasi Halal, sembari tim desain merancang kemasan komersial yang memikat.
                </p>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-outline-variant/20 bg-surface-container-lowest/80 dark:bg-surface-container-high/40 -mx-6 -mb-6 p-5 rounded-b-2xl">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Timeline</span>
                      <span className="text-sm font-semibold text-on-surface">1 - 3 Bulan</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Expected Outcome</span>
                      <span className="text-sm text-on-surface font-medium leading-snug">Izin Edar BPOM & Desain Kemasan</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-surface rounded-2xl border border-outline-variant/30 relative flex flex-col h-full hover:border-emerald-500/40 hover:shadow-lg transition-all duration-300 p-6 pt-7 shadow-xs">
                <div className="absolute -top-4 left-6 w-9 h-9 bg-gradient-to-br from-emerald-950 to-emerald-600 text-white rounded-xl flex items-center justify-center font-h3 font-bold text-sm shadow-md border border-emerald-400/30">
                  4
                </div>
                
                <h4 className="font-h3 text-on-surface text-lg font-bold mb-2">
                  Produksi & Pengiriman
                </h4>
                <p className="font-body-md text-on-surface-variant text-sm flex-grow mb-6 leading-relaxed">
                  Produksi massal berstandar CPPOB/GMP, <i>Quality Control</i> yang ketat, dilanjutkan pengemasan siap jual dan pengiriman ke <i>warehouse</i> Anda.
                </p>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-outline-variant/20 bg-surface-container-lowest/80 dark:bg-surface-container-high/40 -mx-6 -mb-6 p-5 rounded-b-2xl">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Timeline</span>
                      <span className="text-sm font-semibold text-on-surface">2 - 4 Minggu</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-400 mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Expected Outcome</span>
                      <span className="text-sm text-on-surface font-medium leading-snug">Produk Siap Jual (<i>Ready to Launch</i>)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Portofolio Products 3D Coverflow Section */}
        <PortfolioSection />

        {/* Process Section */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="py-8 md:py-12 bg-surface-container-lowest border-y border-surface-variant/50" id="process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-h2 text-h2 text-on-surface mb-8 md:mb-10 flex justify-center text-center">Proses Maklon Mudah</h2>
            <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-start relative gap-y-12 gap-x-4 md:gap-0">
              <div className="hidden md:block absolute top-[28px] md:top-[32px] left-[5%] w-[90%] h-[2px] z-0">
                <div className="absolute inset-0 border-t-[2px] border-dashed border-outline-variant/30"></div>
                <div className="absolute inset-x-0 -top-[1px] h-[4px] overflow-hidden">
                  <motion.div
                    className="h-[2px] w-1/4 bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-80 blur-[1px]"
                    animate={{ x: ["-100%", "400%"] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                  />
                </div>
              </div>
              
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto order-1">
                {/* 1->2 Horizontal line */}
                <div className="md:hidden absolute top-[27px] left-[50%] w-[calc(100%+16px)] h-[2px] -z-10">
                  <div className="absolute inset-0 border-t-[2px] border-dashed border-outline-variant/30"></div>
                  <div className="absolute inset-x-0 -top-[1px] h-[4px] overflow-hidden">
                    <motion.div className="w-[50%] h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-80 blur-[1px]" animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0 }} />
                  </div>
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-container border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold shadow-sm relative z-10">1</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-xs relative z-10 bg-surface-container-lowest">Konsultasi</h4>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto order-2">
                {/* 2->3 Vertical line down */}
                <div className="md:hidden absolute top-[27px] left-[50%] w-[2px] h-[calc(100%+48px)] -z-10">
                  <div className="absolute inset-0 border-l-[2px] border-dashed border-outline-variant/30"></div>
                  <div className="absolute inset-y-0 -left-[1px] w-[4px] overflow-hidden">
                    <motion.div className="h-[50%] w-[2px] bg-gradient-to-b from-transparent via-emerald-500 to-transparent opacity-80 blur-[1px]" animate={{ y: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.5 }} />
                  </div>
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-container-high border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold relative z-10">2</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-[10px] md:text-xs text-on-surface-variant relative z-10 bg-surface-container-lowest">Formulasi</h4>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto order-4 md:order-3">
                {/* 3->4 Horizontal line (Right to Left) */}
                <div className="md:hidden absolute top-[27px] right-[50%] w-[calc(100%+16px)] h-[2px] -z-10">
                  <div className="absolute inset-0 border-t-[2px] border-dashed border-outline-variant/30"></div>
                  <div className="absolute inset-x-0 -top-[1px] h-[4px] overflow-hidden">
                    <motion.div className="w-[50%] h-[2px] bg-gradient-to-l from-transparent via-emerald-500 to-transparent opacity-80 blur-[1px]" animate={{ x: ["200%", "-100%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 1 }} />
                  </div>
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-container-high border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold relative z-10">3</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-[10px] md:text-xs text-on-surface-variant relative z-10 bg-surface-container-lowest">Sample</h4>
              </div>
              
              {/* Step 4 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto order-3 md:order-4">
                {/* 4->5 Vertical line down */}
                <div className="md:hidden absolute top-[27px] left-[50%] w-[2px] h-[calc(100%+48px)] -z-10">
                  <div className="absolute inset-0 border-l-[2px] border-dashed border-outline-variant/30"></div>
                  <div className="absolute inset-y-0 -left-[1px] w-[4px] overflow-hidden">
                    <motion.div className="h-[50%] w-[2px] bg-gradient-to-b from-transparent via-emerald-500 to-transparent opacity-80 blur-[1px]" animate={{ y: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 1.5 }} />
                  </div>
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-container-high border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold relative z-10">4</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-[10px] md:text-xs text-on-surface-variant relative z-10 bg-surface-container-lowest">Produksi</h4>
              </div>
              
              {/* Step 5 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto order-5 md:order-5">
                {/* 5->6 Horizontal line */}
                <div className="md:hidden absolute top-[27px] left-[50%] w-[calc(100%+16px)] h-[2px] -z-10">
                  <div className="absolute inset-0 border-t-[2px] border-dashed border-outline-variant/30"></div>
                  <div className="absolute inset-x-0 -top-[1px] h-[4px] overflow-hidden">
                    <motion.div className="w-[50%] h-[2px] bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-80 blur-[1px]" animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 2 }} />
                  </div>
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-container-high border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold relative z-10">5</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-[10px] md:text-xs text-on-surface-variant relative z-10 bg-surface-container-lowest">Packaging</h4>
              </div>
              
              {/* Step 6 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto order-6 md:order-6">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-emerald-950 to-emerald-600 text-white border-[4px] border-surface flex items-center justify-center mb-sm font-h3 font-bold relative z-10 shadow-md">6</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-[10px] md:text-xs text-on-surface-variant relative z-10 bg-surface-container-lowest">Delivery</h4>
              </div>
            </div>
            
            <div className="w-full flex justify-center mt-8 md:mt-10">
              <Link to="/proses-pembuatan" className="group flex items-center justify-center gap-2 bg-gradient-to-r from-emerald-950 to-emerald-600 hover:from-emerald-900 hover:to-emerald-500 text-white font-label-sm uppercase tracking-widest text-xs px-8 py-3.5 rounded-xl transition-all duration-300 shadow-md hover:shadow-lg border border-emerald-500/20 hover:-translate-y-0.5">
                Lihat Detail Proses Pembuatan
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.section>

        {/* Legal Section */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="py-8 md:py-12 bg-surface-container-low" id="legal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-6 md:mb-8">
              <h2 className="font-h2 text-h2 text-on-surface mb-sm">Legal & Perizinan</h2>
              <p className="font-body-md text-on-surface-variant">Fasilitas dan produk kami terdaftar dan diawasi oleh lembaga berwenang untuk menjamin keamanan dan standar kualitas tertinggi.</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
              {[
                { src: "/images/cert_1.png", alt: "Sertifikasi 1", delay: 0.1 },
                { src: "/images/cert_2.png", alt: "Sertifikasi 2", delay: 0.2 },
                { src: "/images/cert_3.png", alt: "Sertifikasi 3", delay: 0.3 },
                { src: "/images/cert_4.png", alt: "Sertifikasi 4", delay: 0.4 },
                { src: "/images/cert_5.png", alt: "Sertifikasi 5", delay: 0.5 }
              ].map((img, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ delay: img.delay, duration: 0.6, type: "spring", stiffness: 100 }}
                  whileHover={{ scale: 1.1, rotate: [-2, 2, -2, 0], transition: { duration: 0.3 } }}
                  className="w-24 md:w-32 lg:w-40 h-24 md:h-32 lg:h-40 flex items-center justify-center p-4 bg-white rounded-2xl shadow-sm border border-outline-variant/20 hover:shadow-lg transition-shadow"
                >
                  <img src={img.src} alt={img.alt} className="max-w-full max-h-full object-contain filter" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Artikel Section */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="py-8 md:py-12 overflow-hidden bg-surface-container-lowest" id="artikel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 md:mb-8 gap-6">
              <div className="max-w-2xl">
                <h2 className="font-h2 text-h2 text-on-surface mb-sm">Wawasan & Inovasi</h2>
                <p className="font-body-md text-on-surface-variant">Fakta mengejutkan dan temuan terbaru seputar nutrisi, vitamin, dan teknologi makanan.</p>
              </div>
              <div className="flex gap-2">
                <div className="swiper-button-prev-article w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-primary hover:border-primary transition-all cursor-pointer">
                  <ArrowLeft className="w-5 h-5" />
                </div>
                <div className="swiper-button-next-article w-10 h-10 rounded-full border border-outline-variant/50 flex items-center justify-center text-on-surface-variant hover:bg-primary-container hover:text-primary hover:border-primary transition-all cursor-pointer">
                  <ChevronRight className="w-5 h-5" />
                </div>
              </div>
            </div>

            <Swiper
              slidesPerView={1.2}
              spaceBetween={20}
              breakpoints={{
                640: { slidesPerView: 2.2, spaceBetween: 24 },
                1024: { slidesPerView: 3, spaceBetween: 32 }
              }}
              navigation={{
                prevEl: '.swiper-button-prev-article',
                nextEl: '.swiper-button-next-article',
              }}
              modules={[Navigation]}
              className="w-full pb-6"
            >
              {articles.map((article) => (
                <SwiperSlide key={article.id} className="h-auto">
                  <Link to={`/artikel/${article.slug}`} className="block h-full group">
                    <div className="h-full flex flex-col bg-surface rounded-2xl overflow-hidden border border-outline-variant/30 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img 
                          src={article.image} 
                          alt={article.title} 
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                        />
                        <div className="absolute top-4 left-4 bg-surface/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest text-primary shadow-sm">
                          DNA Insights
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="text-[11px] font-medium text-on-surface-variant mb-3 uppercase tracking-wider">{article.date}</div>
                        <h3 className="font-h3 text-xl font-bold text-on-surface mb-3 line-clamp-2 group-hover:text-primary transition-colors">{article.title}</h3>
                        <p className="font-body-md text-sm text-on-surface-variant line-clamp-3 mb-6 flex-grow">{article.preview}</p>
                        <div className="flex items-center text-primary font-medium text-sm mt-auto">
                          Baca Selengkapnya
                          <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </motion.section>

        {/* Testimoni Section */}
        <motion.section initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6, ease: "easeOut" }} className="py-8 md:py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="testimoni">
          <div className="text-center max-w-[768px] mx-auto mb-8 md:mb-10">
            <h2 className="font-h2 text-h2 text-on-surface mb-sm">Apa Kata Klien Kami</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Kepercayaan mereka adalah bukti komitmen kami terhadap kualitas dan layanan berstandar tinggi.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Testimoni 1 */}
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/30 relative flex flex-col hover:shadow-md transition-shadow duration-300">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-container z-0 opacity-50" />
              <div className="flex gap-1 mb-4 relative z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="font-body-md text-on-surface-variant mb-6 flex-grow relative z-10">"Sangat puas dengan layanan maklon dari DNA. Tim R&D-nya sangat solutif. Permen herbal pesanan kami hasilnya sangat memuaskan, rasanya enak dan stabil."</p>
              <div className="flex items-center gap-4 relative z-10 border-t border-outline-variant/20 pt-4 mt-auto">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-on-surface font-bold text-lg shrink-0">B</div>
                <div>
                  <h4 className="font-h3 text-base text-on-surface">Budi Santoso</h4>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant">Owner Brand Herbal</p>
                </div>
              </div>
            </div>

            {/* Testimoni 2 */}
            <div className="bg-primary-container p-6 md:p-8 rounded-2xl border border-outline-variant/30 relative flex flex-col hover:shadow-md transition-shadow duration-300">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-on-primary-container opacity-20 z-0" />
              <div className="flex gap-1 mb-4 relative z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-orange-500 text-orange-500" />
                ))}
              </div>
              <p className="font-body-md text-on-primary-container mb-6 flex-grow relative z-10">"Proses maklonnya luar biasa mudah dan transparan. Dari awal konsultasi hingga delivery, semua dijadwalkan dengan presisi. Rekomendasi utama untuk pembuatan suplemen."</p>
              <div className="flex items-center gap-4 relative z-10 border-t border-on-primary-container/20 pt-4 mt-auto">
                <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center text-on-primary-container font-bold text-lg shrink-0">S</div>
                <div>
                  <h4 className="font-h3 text-base text-on-primary-container">Siti Rahma</h4>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-primary-container/80">Direktur Pemasaran Pharmcare</p>
                </div>
              </div>
            </div>

            {/* Testimoni 3 */}
            <div className="bg-surface-container-lowest p-6 md:p-8 rounded-2xl border border-outline-variant/30 relative flex flex-col hover:shadow-md transition-shadow duration-300">
              <Quote className="absolute top-6 right-6 w-8 h-8 text-primary-container z-0 opacity-50" />
              <div className="flex gap-1 mb-4 relative z-10">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 fill-orange-400 text-orange-400" />
                ))}
              </div>
              <p className="font-body-md text-on-surface-variant mb-6 flex-grow relative z-10">"Kualitas pressed milk candy yang dihasilkan memiliki tekstur dan nutrisi persis seperti yang kami ekspektasikan. Support dari tim teknis mereka tiada duanya."</p>
              <div className="flex items-center gap-4 relative z-10 border-t border-outline-variant/20 pt-4 mt-auto">
                <div className="w-12 h-12 bg-surface-container-high rounded-full flex items-center justify-center text-on-surface font-bold text-lg shrink-0">A</div>
                <div>
                  <h4 className="font-h3 text-base text-on-surface">Ahmad Fadil</h4>
                  <p className="font-label-sm text-[10px] uppercase tracking-widest text-on-surface-variant">CEO NutriDairy Indonesia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 md:mt-10 relative overflow-hidden">
            <div className="absolute top-0 left-0 bottom-0 w-12 md:w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none"></div>
            <div className="absolute top-0 right-0 bottom-0 w-12 md:w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none"></div>
            
            <div className="flex flex-col gap-4 md:gap-6">
              {/* Row 1 - Right to Left */}
              <div className="flex flex-nowrap w-[200%] md:w-max">
                <motion.div
                  className="flex gap-6 md:gap-12 whitespace-nowrap min-w-max items-center"
                  animate={{ x: ["0%", "-50%"] }}
                  transition={{ ease: "linear", duration: 50, repeat: Infinity }}
                >
                  {[...["SMARTBRAIN", "SMART UP PLUS", "VISIONIX", "GROWVIT", "VITARO", "NURVIT"], ...["SMARTBRAIN", "SMART UP PLUS", "VISIONIX", "GROWVIT", "VITARO", "NURVIT"]].map((item, idx) => (
                    <div key={`r1-${idx}`} className="flex items-center justify-center px-4 md:px-8 py-2 md:py-4">
                       <span className="font-h3 text-lg md:text-2xl lg:text-3xl font-black tracking-tight relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-emerald-950 via-emerald-600 to-emerald-950 dark:from-emerald-300 dark:via-emerald-100 dark:to-emerald-300 opacity-90 hover:opacity-100 transition-all duration-300">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Row 2 - Left to Right */}
              <div className="flex flex-nowrap w-[200%] md:w-max">
                <motion.div
                  className="flex gap-6 md:gap-12 whitespace-nowrap min-w-max items-center"
                  animate={{ x: ["-50%", "0%"] }}
                  transition={{ ease: "linear", duration: 55, repeat: Infinity }}
                >
                  {[...["VITARO", "NURVIT", "SMARTBRAIN", "VISIONIX", "SMART UP PLUS", "GROWVIT"], ...["VITARO", "NURVIT", "SMARTBRAIN", "VISIONIX", "SMART UP PLUS", "GROWVIT"]].map((item, idx) => (
                    <div key={`r2-${idx}`} className="flex items-center justify-center px-4 md:px-8 py-2 md:py-4">
                       <span className="font-h3 text-lg md:text-2xl lg:text-3xl font-black tracking-tight relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-emerald-950 via-emerald-600 to-emerald-950 dark:from-emerald-300 dark:via-emerald-100 dark:to-emerald-300 opacity-90 hover:opacity-100 transition-all duration-300">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
      </main>

      {/* Footer Component */}
      <footer className="bg-surface-container-low w-full border-t border-outline-variant/30 font-label-sm text-xs uppercase tracking-widest text-on-surface-variant py-8 md:py-12 mt-4" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-3">
              <img src="/logo.png" alt="Logo Dairy Nutrition Alami" className="h-8 w-auto object-contain" />
              <div className="text-lg font-bold text-on-surface capitalize tracking-tight font-h3">Dairy Nutrition Alami</div>
            </div>
            <p className="font-body-md text-on-surface-variant normal-case tracking-normal mb-6 max-w-[384px]">
              Bio-Innovation in Confectionery. Menyediakan layanan maklon premium untuk brand kesehatan dan nutrisi.
            </p>
            <div className="text-on-surface-variant/70 normal-case">© 2024 Dairy Nutrition Alami (DNA). Bio-Innovation in Confectionery.</div>
            
            {/* Social Media Links */}
            <div className="flex items-center gap-4 mt-8">
              <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:border-outline-variant hover:text-on-surface transition-all duration-300">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/dairynutritionalami?igsh=MXAyZ2pmMXhvcWNzeg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:border-outline-variant hover:text-on-surface transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:border-outline-variant hover:text-on-surface transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="font-bold text-on-surface mb-1 uppercase tracking-widest">Legal</h4>
            <Link aria-label="Read our Privacy Policy" className="hover:text-on-surface transition-colors underline-offset-4 hover:underline" to="/privacy-policy">Privacy Policy</Link>
            <Link aria-label="Read our Terms of Service" className="hover:text-on-surface transition-colors underline-offset-4 hover:underline" to="/terms-of-service">Terms of Service</Link>
            <Link aria-label="View our Manufacturing Standards" className="text-on-surface font-bold hover:text-on-surface transition-colors underline-offset-4 hover:underline" to="/manufacturing-standards">Manufacturing Standards</Link>
          </div>
          <div className="flex flex-col gap-2.5">
            <h4 className="font-bold text-on-surface mb-1 uppercase tracking-widest">Company</h4>
            <Link aria-label="View our Certifications" className="hover:text-on-surface transition-colors underline-offset-4 hover:underline" to="/certifications">Certifications</Link>
            <Link aria-label="Contact our Support team" className="hover:text-on-surface transition-colors underline-offset-4 hover:underline" to="/contact-support">Contact Support</Link>
          </div>
          <div className="flex flex-col gap-2.5 lg:col-span-1">
            <h4 className="font-bold text-on-surface mb-1 uppercase tracking-widest">Contact</h4>
            <a aria-label="Call us directly at +6282225613106" href="tel:+6282225613106" className="hover:text-on-surface transition-colors normal-case tracking-normal flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+6282225613106</span>
            </a>
            <a aria-label="Email us at dairynutritionalami@gmail.com" href="mailto:dairynutritionalami@gmail.com" className="hover:text-on-surface transition-colors normal-case tracking-normal flex items-center gap-2 break-all">
              <Mail className="w-4 h-4 shrink-0 mt-0.5" />
              <span>dairynutritionalami@gmail.com</span>
            </a>
            <a aria-label="View our location on Google Maps" href="https://maps.app.goo.gl/KBH1McbbUbe2DsHF9" target="_blank" rel="noopener noreferrer" className="hover:text-on-surface transition-colors normal-case tracking-normal flex items-start gap-2 mt-1 text-on-surface-variant/90">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>CV Dairy Nutrition Alami<br />Jl.Nanggulan Mendut Petronalan,<br />Kel. Banjaroyo, Kec. Kalibawang,<br />Kab Kulon Progo, Daerah Istimewa Yogyakarta 55672.</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ArticleView() {
  const { slug } = useParams();
  const article = articles.find(a => a.slug === slug);
  
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!article) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4 transition-colors duration-500">
        <h2 className="text-3xl font-bold text-on-surface mb-2">Artikel Tidak Ditemukan</h2>
        <p className="text-on-surface-variant mb-6">Maaf, artikel yang Anda cari tidak ada atau telah dipindahkan.</p>
        <Link to="/" className="bg-primary text-on-primary px-6 py-2 rounded-full font-medium inline-flex items-center hover:bg-primary/90 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans text-on-background selection:bg-primary/30 selection:text-on-background transition-colors duration-500">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <ArrowLeft className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors mr-2" />
            <span className="font-medium text-sm text-on-surface-variant group-hover:text-primary transition-colors uppercase tracking-widest">Kembali</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 group">
            <img src="/logo.png" alt="Logo DNA" className="h-7 w-auto object-contain" />
            <span className="font-h3 text-lg font-bold text-on-surface uppercase tracking-tight">DNA.</span>
          </Link>
          <div className="w-[100px] flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <motion.article 
        initial={{ opacity: 0, y: 30 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, ease: "easeOut" }} 
        className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20"
      >
        <div className="mb-8">
          <div className="text-primary font-medium text-sm mb-4">{article.date}</div>
          <h1 className="font-h1 text-3xl md:text-5xl lg:text-6xl text-on-surface mb-6 leading-tight tracking-tight">{article.title}</h1>
        </div>
        
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-md">
          <img src={article.image} alt={article.title} referrerPolicy="no-referrer" className="w-full h-full object-cover" />
        </div>

        <div className="prose prose-lg dark:prose-invert prose-p:text-on-surface-variant prose-p:leading-relaxed prose-headings:text-on-surface max-w-none">
          {article.content.split('\n\n').map((paragraph, idx) => (
            <p key={idx} className="mb-6">{paragraph}</p>
          ))}
        </div>
        
        <div className="mt-16 pt-8 border-t border-outline-variant/30 flex justify-between items-center flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-primary font-bold text-xl">
              D
            </div>
            <div>
              <div className="font-bold text-on-surface">Redaksi DNA</div>
              <div className="text-sm text-on-surface-variant">Tim Penulis Keilmuan</div>
            </div>
          </div>
          <Link to="/" className="font-medium text-primary hover:text-primary/80 flex items-center transition-colors">
            Lihat Berita Lainnya <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        </div>
      </motion.article>

      <footer className="bg-surface-container-low border-t border-outline-variant/30 py-8 text-center text-on-surface-variant text-sm">
        <p>© 2026 Dairy Nutrition Alami (DNA). Bio-Innovation in Confectionery.</p>
      </footer>
    </div>
  );
}

export const FloatingWhatsApp = () => {
  const whatsappUrl = "https://wa.me/6282225613106?text=Halo%20Tim%20Dairy%20Nutrition%20Alami%2C%20saya%20tertarik%20untuk%20berkonsultasi%20mengenai%20layanan%20maklon%20permen.%20Boleh%20minta%20waktunya%20sebentar%3F";

  return (
    <aside aria-label="WhatsApp Floating Action" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex items-center group">
      {/* Tooltip on hover */}
      <span className="hidden sm:inline-flex items-center mr-3 px-3.5 py-1.5 bg-zinc-900/90 dark:bg-zinc-100/95 text-white dark:text-zinc-900 text-xs font-semibold rounded-full shadow-lg backdrop-blur-sm opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap border border-white/10 dark:border-zinc-300/50">
        <span className="w-2 h-2 rounded-full bg-emerald-500 mr-2 animate-pulse"></span>
        Chat WhatsApp Kami
      </span>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Langsung"
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.95 }}
        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(37,211,102,0.45)] hover:shadow-[0_6px_28px_rgba(37,211,102,0.65)] hover:bg-[#20ba59] transition-all duration-300"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-25 pointer-events-none"></span>
        <svg className="w-6 h-6 sm:w-8 sm:h-8 fill-current relative z-10" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
      </motion.a>
    </aside>
  );
};

export default function App() {
  return (
    <>
      <MouseLighting />
      <FloatingWhatsApp />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/proses-pembuatan" element={<ProcessPage />} />
        <Route path="/artikel/:slug" element={<ArticleView />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/manufacturing-standards" element={<ManufacturingStandards />} />
        <Route path="/certifications" element={<Certifications />} />
        <Route path="/contact-support" element={<ContactSupport />} />
      </Routes>
    </>
  );
}
