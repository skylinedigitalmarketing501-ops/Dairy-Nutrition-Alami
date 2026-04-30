import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, useParams } from 'react-router-dom';
import { Menu, X, FlaskConical, BadgeCheck, TestTube2, Boxes, Microscope, SlidersHorizontal, CheckCircle2, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Loader2, Clock, Target, Star, Quote, Info, ChevronRight, ArrowLeft } from 'lucide-react';
import { animate, motion, AnimatePresence } from 'motion/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { articles } from './data/articles';
import { PrivacyPolicy, TermsOfService, ManufacturingStandards, Certifications, ContactSupport } from './pages/LegalPages';

function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState<string | null>(null);
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [activeSection, setActiveSection] = useState('home');

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

  const serviceDetails: Record<string, { title: string, content: string }> = {
    'pressed-milk': {
      title: 'Pressed Milk Candy',
      content: 'Kami menggunakan bahan baku berkualitas tinggi dan teknologi modern untuk menghasilkan permen susu yang memiliki tekstur sempurna, rasa yang kaya, dan umur simpan yang optimal. Ideal untuk berbagai segmen pasar, mulai dari anak-anak hingga dewasa. Layanan ini mencakup kustomisasi bentuk, warna, dan penambahan nutrisi spesifik sesuai dengan kebutuhan brand Anda.'
    },
    'lozenges': {
      title: 'Lozenges Candy',
      content: 'Diformulasikan khusus dengan bahan-bahan aktif seperti ekstrak herbal, mint, atau bahan alami lainnya yang dapat memberikan sensasi melegakan tenggorokan dan menyegarkan napas dengan efektivitas tinggi. Sangat diminati sebagai permen fungsional bernilai jual tinggi dengan potensi kustomisasi yang luas.'
    },
    'tablet': {
      title: 'Tablet Candy',
      content: 'Sangat cocok untuk produk multivitamin, suplemen kesehatan, atau produk nutrisi khusus. Kami mengontrol dosis dengan akurasi tinggi pada setiap bentuk tablet. Fasilitas kami mampu memproduksi tablet dalam beberapa ukuran dan bentuk untuk memastikan suplemen atau nutrisi didistribusikan secara presisi dalam setiap sajiannya.'
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
    <div className="bg-background text-on-background font-body-md antialiased overflow-x-hidden min-h-screen">
      {/* TopNavBar Component */}
      <nav className="fixed top-0 w-full z-50 bg-stone-50/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-orange-100/50 dark:border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-20">
          <motion.div 
            className="text-xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-zinc-900 via-zinc-500 to-zinc-900 dark:from-white dark:via-zinc-400 dark:to-white"
            style={{ backgroundSize: '200% auto' }}
            animate={{ backgroundPosition: ['0% center', '200% center'] }}
            transition={{ duration: 8, ease: 'linear', repeat: Infinity }}
          >
            Dairy Nutrition Alami
          </motion.div>
          <div className="hidden md:flex gap-md font-manrope tracking-tight text-sm font-semibold">
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
                className={`cursor-pointer transition-colors pb-1 ${activeSection === item.id ? 'text-zinc-900 dark:text-white border-b-2 border-zinc-900 dark:border-white' : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 border-b-2 border-transparent'}`} 
                onClick={(e) => handleNavScroll(e, item.id)} 
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex gap-sm items-center">
            <a href="#contact" onClick={(e) => handleAction(e, 'nav-project', 'contact')} className="bg-white text-on-surface font-label-sm px-md py-sm rounded-lg hover:bg-white hover:text-on-surface active:bg-white active:text-on-surface transition-transform duration-300 scale-95 active:scale-90 border border-outline-variant/30 uppercase tracking-widest text-[11px] inline-flex items-center justify-center sm:min-w-[140px] shadow-sm">
              {isNavigating === 'nav-project' ? <Loader2 className="w-4 h-4 mr-2 animate-spin text-on-surface" /> : null}
              Mulai Proyek Anda
            </a>
            <a href={whatsappUrl} onClick={(e) => handleWhatsapp(e, 'nav-consult')} className="bg-on-surface text-on-primary font-label-sm px-md py-sm rounded-lg hover:bg-zinc-800 transition-all duration-300 scale-95 active:scale-90 uppercase tracking-widest text-[11px] inline-flex items-center justify-center sm:min-w-[140px]">
              {isNavigating === 'nav-consult' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              Konsultasi Gratis
            </a>
          </div>
          <button className="md:hidden text-zinc-900 dark:text-white" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
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
                <a href="#contact" onClick={(e) => handleAction(e, 'mobile-project', 'contact')} className="bg-primary-container text-on-surface font-label-sm px-md py-3 rounded-xl border border-outline-variant/30 text-center uppercase tracking-widest text-[11px] flex items-center justify-center min-h-[44px] active:scale-[0.98] transition-transform">
                  {isNavigating === 'mobile-project' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                  Mulai Proyek Anda
                </a>
                <a href={whatsappUrl} onClick={(e) => handleWhatsapp(e, 'mobile-consult')} className="bg-on-surface text-on-primary font-label-sm px-md py-3 rounded-xl text-center uppercase tracking-widest text-[11px] flex items-center justify-center min-h-[44px] active:scale-[0.98] transition-transform">
                  {isNavigating === 'mobile-consult' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                  Konsultasi Gratis
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className="pt-20 md:pt-24">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-margin lg:py-xl flex flex-col lg:flex-row items-center gap-12 lg:gap-margin" id="home">
          <div className="flex-1 space-y-md z-10 pt-4 md:pt-0">
            <div className="inline-block bg-primary-container text-on-surface font-label-sm px-sm py-xs rounded-full border border-outline-variant/30 uppercase tracking-widest text-xs">
              B2B Contract Manufacturing
            </div>
            <h1 className="font-h1 text-h1 text-on-surface">
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
            </h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px]">Ciptakan Brand Permen Sehat Anda dengan Formula Dairy Nutrition Berkualitas Tinggi. Kami menyediakan solusi hulu ke hilir untuk inovasi produk nutrisi.</p>
            <div className="flex flex-wrap gap-sm pt-sm">
              <a href={whatsappUrl} onClick={(e) => handleWhatsapp(e, 'hero-consult')} className="bg-on-surface text-on-primary font-label-sm px-6 sm:px-lg py-2 sm:py-sm rounded-lg hover:bg-primary transition-colors h-11 md:h-12 uppercase tracking-widest text-[10px] md:text-xs inline-flex items-center justify-center sm:min-w-[160px] w-full sm:w-auto">
                {isNavigating === 'hero-consult' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Konsultasi Gratis
              </a>
              <a href="#contact" onClick={(e) => handleAction(e, 'hero-project', 'contact')} className="bg-primary-container text-on-surface font-label-sm px-6 sm:px-lg py-2 sm:py-sm rounded-lg border border-outline-variant/30 hover:bg-surface-container-highest transition-colors h-11 md:h-12 uppercase tracking-widest text-[10px] md:text-xs inline-flex items-center justify-center sm:min-w-[170px] w-full sm:w-auto">
                {isNavigating === 'hero-project' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Mulai Proyek Anda
              </a>
            </div>
          </div>
          <div className="flex-1 w-full relative mt-4 md:mt-0">
            <div className="absolute inset-0 bg-primary-container rounded-[2rem] md:rounded-3xl -rotate-3 scale-105 opacity-50 z-0"></div>
            <img 
              alt="Hero Image" 
              className="w-full h-[280px] md:h-[500px] object-cover rounded-[2rem] md:rounded-3xl shadow-sm border border-outline-variant/20 relative z-10" 
              src="https://imgmu.id/f/32295e5.jpg" 
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-surface-container-lowest py-12 md:py-margin lg:py-xl border-y border-surface-variant/50" id="about">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-[768px] mx-auto mb-lg">
              <h2 className="font-h2 text-h2 text-on-surface mb-sm">Kenapa Memilih Dairy Nutrition Alami</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Keahlian spesifik dengan fasilitas terstandarisasi untuk memastikan produk Anda memimpin pasar.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Feature Card */}
              <div className="p-md rounded-xl border border-primary-container bg-surface hover:bg-surface-container-highest transition-colors duration-300">
                <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
                  <FlaskConical className="w-8 h-8 text-tertiary mb-sm" />
                </motion.div>
                <h3 className="font-h3 text-h3 text-on-surface text-lg mb-xs">Specialist in Pressed Milk</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Fokus mendalam pada teknologi pembuatan permen susu padat dan lozenges.</p>
              </div>
              <div className="p-md rounded-xl border border-primary-container bg-surface hover:bg-surface-container-highest transition-colors duration-300">
                <motion.div animate={{ scale: [1, 1.1, 1] }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}>
                  <BadgeCheck className="w-8 h-8 text-tertiary mb-sm" />
                </motion.div>
                <h3 className="font-h3 text-h3 text-on-surface text-lg mb-xs">Quality Dairy Ingredients</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Hanya menggunakan bahan baku susu premium yang teruji klinis.</p>
              </div>
              <div className="p-md rounded-xl border border-primary-container bg-surface hover:bg-surface-container-highest transition-colors duration-300">
                <motion.div animate={{ rotate: [0, 10, -10, 0] }} transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}>
                  <TestTube2 className="w-8 h-8 text-tertiary mb-sm" />
                </motion.div>
                <h3 className="font-h3 text-h3 text-on-surface text-lg mb-xs">Custom Formula & R&D</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Tim R&D berpengalaman untuk menciptakan formulasi unik brand Anda.</p>
              </div>
              <div className="p-md rounded-xl border border-primary-container bg-surface hover:bg-surface-container-highest transition-colors duration-300">
                <motion.div animate={{ y: [0, -4, 0] }} transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}>
                  <Boxes className="w-8 h-8 text-tertiary mb-sm" />
                </motion.div>
                <h3 className="font-h3 text-h3 text-on-surface text-lg mb-xs">Competitive MOQ</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Sangat fleksibel untuk brand baru maupun ekspansi perusahaan besar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-12 md:py-margin lg:py-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="services">
          <h2 className="font-h2 text-h2 text-on-surface mb-8 md:mb-lg text-center">Layanan Maklon Permen Dairy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[250px]">
            <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2 min-h-[350px] md:min-h-0 rounded-2xl relative overflow-hidden group border border-outline-variant/20">
              <img 
                alt="Pressed Milk Candy" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://imgmu.id/f/c49995b.jpg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/95 via-[#1a1c1c]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6 md:p-lg w-full z-10">
                <div className="bg-white/20 backdrop-blur-sm text-white font-label-sm px-sm py-xs rounded-full inline-block mb-sm border border-white/30 uppercase tracking-widest text-[10px]">Layanan Utama</div>
                <h3 className="font-h3 text-h3 text-white mb-xs drop-shadow-sm flex items-center gap-2">
                  Pressed Milk Candy
                  <div className="relative group/tooltip inline-flex items-center">
                    <Info className="w-4 h-4 md:w-5 md:h-5 text-white/70 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-white font-body-md text-xs whitespace-nowrap rounded opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all pointer-events-none drop-shadow-xl">
                      Pressed Milk Candy
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-zinc-900 drop-shadow-sm"></div>
                    </div>
                  </div>
                </h3>
                <p className="font-body-md text-body-md text-white/90 max-w-[448px] drop-shadow-sm transition-all duration-300">
                  Solusi permen susu padat premium dengan profil rasa dan nutrisi yang dapat disesuaikan.
                  <button onClick={(e) => { e.preventDefault(); toggleService('pressed-milk'); }} className="text-white hover:text-white/80 font-bold underline mt-1 block text-sm transition-colors">Baca Selengkapnya</button>
                </p>
              </div>
            </div>
            
            <div className="min-h-[220px] md:min-h-0 rounded-2xl relative overflow-hidden group border border-outline-variant/20 bg-surface-container">
              <img 
                alt="Lozenges Candy" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://imgmu.id/f/2b71e4f.jpg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/90 to-transparent opacity-80 z-0"></div>
              <div className="p-md h-full flex flex-col justify-end relative z-10">
                <h3 className="font-h3 text-h3 text-white text-xl mb-xs drop-shadow-sm flex items-center gap-2">
                  Lozenges Candy
                  <div className="relative group/tooltip inline-flex items-center">
                    <Info className="w-4 h-4 md:w-5 md:h-5 text-white/70 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-white font-body-md text-xs whitespace-nowrap rounded opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all pointer-events-none drop-shadow-xl">
                      Lozenges Candy
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-zinc-900 drop-shadow-sm"></div>
                    </div>
                  </div>
                </h3>
                <p className="font-body-md text-body-md text-white/90 text-sm drop-shadow-sm transition-all duration-300">
                  Permen hisap fungsional untuk pelega tenggorokan.
                  <button onClick={(e) => { e.preventDefault(); toggleService('lozenges'); }} className="text-white hover:text-white/80 font-bold underline mt-1 block text-xs transition-colors">Baca Selengkapnya</button>
                </p>
              </div>
            </div>
            
            <div className="min-h-[220px] md:min-h-0 rounded-2xl relative overflow-hidden group border border-outline-variant/20 bg-primary-container">
              <img 
                alt="Tablet Candy" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://imgmu.id/f/5df1580.jpg" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/90 to-transparent opacity-80 z-0"></div>
              <div className="p-md h-full flex flex-col justify-end relative z-10">
                <h3 className="font-h3 text-h3 text-white text-xl mb-xs drop-shadow-sm flex items-center gap-2">
                  Tablet Candy
                  <div className="relative group/tooltip inline-flex items-center">
                    <Info className="w-4 h-4 md:w-5 md:h-5 text-white/70 cursor-help" />
                    <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-zinc-900 border border-zinc-800 text-white font-body-md text-xs whitespace-nowrap rounded opacity-0 invisible group-hover/tooltip:opacity-100 group-hover/tooltip:visible transition-all pointer-events-none drop-shadow-xl">
                      Tablet Candy
                      <div className="absolute top-full left-1/2 -translate-x-1/2 border-[5px] border-transparent border-t-zinc-900 drop-shadow-sm"></div>
                    </div>
                  </div>
                </h3>
                <p className="font-body-md text-body-md text-white/90 text-sm drop-shadow-sm transition-all duration-300">
                  Format tablet presisi untuk suplemen dan nutrisi.
                  <button onClick={(e) => { e.preventDefault(); toggleService('tablet'); }} className="text-white hover:text-white/80 font-bold underline mt-1 block text-xs transition-colors">Baca Selengkapnya</button>
                </p>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-3 rounded-2xl p-md border border-outline-variant/20 bg-surface flex flex-col sm:flex-row justify-between items-center gap-md">
              <div>
                <h3 className="font-h3 text-h3 text-on-surface text-xl mb-xs">Functional, Supplement & Herbal Candy</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm max-w-[576px]">Inovasi formulasi yang menggabungkan manfaat ekstrak herbal, vitamin, dan nutrisi fungsional lainnya ke dalam format permen yang lezat.</p>
              </div>
              <a href="#products" onClick={(e) => handleNavScroll(e, 'products')} className="bg-surface-container-high text-on-surface font-label-sm px-4 md:px-md py-2 md:py-sm rounded-lg hover:bg-outline-variant transition-colors whitespace-nowrap h-10 md:h-12 uppercase tracking-widest text-[10px] md:text-xs inline-flex items-center justify-center cursor-pointer w-full sm:w-auto mt-4 sm:mt-0">Lihat Katalog</a>
            </div>
          </div>
        </section>

        {/* Modal Layanan */}
        <AnimatePresence>
          {expandedService && serviceDetails[expandedService] && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
              onClick={closeServiceModal}
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0, y: 20 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.95, opacity: 0, y: 20 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="w-[90vw] md:w-[500px] max-w-[95vw] shadow-xl overflow-hidden pointer-events-auto bg-white dark:bg-zinc-950 rounded-2xl md:rounded-3xl border border-zinc-200 dark:border-zinc-800"
                onClick={e => e.stopPropagation()}
              >
                <div className="p-6 md:p-8 flex flex-col relative w-full h-full">
                  <button 
                    onClick={closeServiceModal}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-500 flex items-center justify-center w-10 h-10 z-10"
                    aria-label="Tutup"
                  >
                    <X className="w-5 h-5 flex-shrink-0" />
                  </button>
                  <h3 className="font-h3 text-zinc-900 dark:text-zinc-100 mb-4 pr-8 text-xl md:text-2xl">{serviceDetails[expandedService].title}</h3>
                  <div className="font-body-md text-zinc-600 dark:text-zinc-400 text-sm md:text-base leading-relaxed overflow-y-auto max-h-[60vh] pb-4">
                    {serviceDetails[expandedService].content}
                  </div>
                  <div className="mt-6 pt-4 flex justify-end">
                    <button 
                      onClick={closeServiceModal}
                      className="px-6 py-2.5 rounded-full bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 font-medium hover:bg-zinc-800 dark:hover:bg-zinc-200 transition-colors shadow-sm"
                    >
                      Tutup
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* R&D Section */}
        <section className="py-12 md:py-margin lg:py-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="rnd">
          <div className="mb-lg text-center max-w-[768px] mx-auto">
            <h2 className="font-h2 text-h2 text-on-surface mb-sm">Formulasi & R&D Eksekutif</h2>
            <p className="font-body-md text-body-md text-on-surface-variant">Inovasi yang didukung oleh sains. Tim R&D kami siap mewujudkan visi produk unik Anda dengan presisi dan standar kualitas tertinggi.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-margin items-center">
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
                src="https://imgmu.id/f/f5fd290.png" 
              />
              <div className="absolute -bottom-6 -left-2 sm:-bottom-10 sm:-left-6 p-2 bg-surface rounded-[2rem] z-20 shadow-xl hidden xs:block">
                <img 
                  alt="Dairy powder close-up" 
                  className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-[1.5rem] bg-white border border-outline-variant/20" 
                  src="https://images.unsplash.com/photo-1563636619-e9143da7973b?q=80&w=1000&auto=format&fit=crop" 
                />
              </div>
            </div>
          </div>

          {/* R&D Process Breakdown */}
          <div className="mt-xl">
            <div className="text-center max-w-[768px] mx-auto mb-lg">
              <h3 className="font-h2 text-h2 text-on-surface mb-xs">Tahapan R&D Kami</h3>
              <p className="font-body-md text-on-surface-variant text-sm">Proses pengembangan produk yang terstruktur dan terukur untuk memastikan efisiensi waktu dan hasil formulasi berkualitas premium.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-md gap-y-10">
              {/* Step 1 */}
              <div className="bg-surface p-md rounded-xl border border-outline-variant/30 relative flex flex-col h-full hover:border-tertiary/50 hover:shadow-md transition-all duration-300">
                <div className="absolute -top-5 left-6 w-10 h-10 bg-on-surface text-on-primary rounded-xl flex items-center justify-center font-h3 font-bold text-lg shadow-sm">1</div>
                
                <h4 className="font-h3 text-on-surface text-lg mb-xs mt-4">Ideation & Analysis</h4>
                <p className="font-body-md text-on-surface-variant text-sm flex-grow mb-md">Riset mendalam tren pasar, target audiens, dan analisis kompetitor untuk menentukan profil fungsional dan nutrisi yang tepat.</p>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-outline-variant/20 bg-surface-container-lowest -mx-md -mb-md p-md rounded-b-xl">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-tertiary mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Timeline</span>
                      <span className="text-sm font-medium text-on-surface">1 - 2 Minggu</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Target className="w-4 h-4 text-tertiary mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Expected Outcome</span>
                      <span className="text-sm text-on-surface leading-snug">Product Blueprint & Kelayakan Maklon</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="bg-surface p-md rounded-xl border border-outline-variant/30 relative flex flex-col h-full hover:border-tertiary/50 hover:shadow-md transition-all duration-300">
                <div className="absolute -top-5 left-6 w-10 h-10 bg-on-surface text-on-primary rounded-xl flex items-center justify-center font-h3 font-bold text-lg shadow-sm">2</div>
                
                <h4 className="font-h3 text-on-surface text-lg mb-xs mt-4">Prototyping</h4>
                <p className="font-body-md text-on-surface-variant text-sm flex-grow mb-md">Pembuatan sampel awal di lab farmasi. Eksperimentasi pencampuran bahan baku untuk menguji interaksi dan kesempurnaan tekstur.</p>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-outline-variant/20 bg-surface-container-lowest -mx-md -mb-md p-md rounded-b-xl">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-tertiary mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Timeline</span>
                      <span className="text-sm font-medium text-on-surface">3 - 4 Minggu</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Target className="w-4 h-4 text-tertiary mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Expected Outcome</span>
                      <span className="text-sm text-on-surface leading-snug">Sampel V1 & Laporan Nutrisi Awal</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="bg-surface p-md rounded-xl border border-outline-variant/30 relative flex flex-col h-full hover:border-tertiary/50 hover:shadow-md transition-all duration-300">
                <div className="absolute -top-5 left-6 w-10 h-10 bg-on-surface text-on-primary rounded-xl flex items-center justify-center font-h3 font-bold text-lg shadow-sm">3</div>
                
                <h4 className="font-h3 text-on-surface text-lg mb-xs mt-4">Sensory Testing</h4>
                <p className="font-body-md text-on-surface-variant text-sm flex-grow mb-md">Pengujian organoleptik komprehensif meliputi parameter rasa, aroma, warna, dan <i>mouth-feel</i> standar permen premium pasar.</p>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-outline-variant/20 bg-surface-container-lowest -mx-md -mb-md p-md rounded-b-xl">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-tertiary mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Timeline</span>
                      <span className="text-sm font-medium text-on-surface">2 - 3 Minggu</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Target className="w-4 h-4 text-tertiary mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Expected Outcome</span>
                      <span className="text-sm text-on-surface leading-snug">Formula Final Ditetapkan (<i>Locked</i>)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="bg-surface p-md rounded-xl border border-outline-variant/30 relative flex flex-col h-full hover:border-tertiary/50 hover:shadow-md transition-all duration-300">
                <div className="absolute -top-5 left-6 w-10 h-10 bg-on-surface text-on-primary rounded-xl flex items-center justify-center font-h3 font-bold text-lg shadow-sm">4</div>
                
                <h4 className="font-h3 text-on-surface text-lg mb-xs mt-4">Scale-up & Stability</h4>
                <p className="font-body-md text-on-surface-variant text-sm flex-grow mb-md">Uji ketahanan produk terhadap suhu, kelembaban, serta eksekusi perpindahan dimensi dari skala lab menuju skala manufaktur (SOP pabrik).</p>
                
                <div className="space-y-3 mt-auto pt-4 border-t border-outline-variant/20 bg-surface-container-lowest -mx-md -mb-md p-md rounded-b-xl">
                  <div className="flex items-start gap-2.5">
                    <Clock className="w-4 h-4 text-tertiary mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Timeline</span>
                      <span className="text-sm font-medium text-on-surface">2 - 4 Minggu</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <Target className="w-4 h-4 text-tertiary mt-0.5 shrink-0" />
                    <div>
                      <span className="block text-[10px] font-bold text-on-surface-variant/70 uppercase tracking-widest mb-0.5">Expected Outcome</span>
                      <span className="text-sm text-on-surface leading-snug">SOP Produksi & Data <i>Shelf-Life</i></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Portofolio Products Section */}
        <section className="py-12 md:py-margin lg:py-xl overflow-hidden relative" id="products">
          <div className="text-center max-w-[768px] mx-auto mb-10 md:mb-12 px-4">
            <h2 className="font-h2 text-h2 text-on-surface mb-sm">Portofolio Produk</h2>
            <p className="font-body-md text-on-surface-variant">Berbagai inovasi nutrisi premium yang telah sukses kami produksi untuk klien kami.</p>
          </div>
          
          <div className="max-w-[1000px] mx-auto px-4">
            <Swiper
              effect={'coverflow'}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={'auto'}
              loop={true}
              autoplay={{
                delay: 3500,
                disableOnInteraction: false,
              }}
              coverflowEffect={{
                rotate: 20,
                stretch: 0,
                depth: 250,
                modifier: 1,
                slideShadows: true,
              }}
              pagination={{ clickable: true, dynamicBullets: true }}
              navigation={true}
              modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
              className="w-full pb-16 pt-4"
            >
              {[
                "https://imgmu.id/f/53c4175.png",
                "https://imgmu.id/f/837daa3.png",
                "https://imgmu.id/f/3779f4b.png",
                "https://imgmu.id/f/a55a55c.png",
                "https://imgmu.id/f/6ad7578.png",
                "https://imgmu.id/f/5585e5f.png",
                "https://imgmu.id/f/c2ba04f.png"
              ].map((imgUrl, idx) => (
                <SwiperSlide key={idx} className="w-[280px] sm:w-[350px] md:w-[450px]">
                  <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-outline-variant/30 bg-surface group transition-transform duration-300">
                    <img src={imgUrl} alt={`Portofolio Produk Dairy Nutrition Alami ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-80 pointer-events-none"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none drop-shadow-md">
                      <div className="font-label-sm uppercase tracking-widest text-white/80 mb-1 text-[10px] md:text-xs">Premium Product</div>
                      <div className="font-h3 text-lg md:text-xl font-bold">Inovasi Suplemen</div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-12 md:py-margin lg:py-xl bg-surface-container-lowest border-y border-surface-variant/50" id="process">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-h2 text-h2 text-on-surface mb-12 flex justify-center text-center">Proses Maklon Mudah</h2>
            <div className="grid grid-cols-2 md:flex md:flex-row justify-between items-start relative gap-y-12 gap-x-4 md:gap-0">
              <div className="hidden md:block absolute top-[28px] md:top-[32px] left-[5%] w-[90%] h-[2px] bg-outline-variant/30 z-0 overflow-hidden rounded-full">
                <motion.div
                  className="h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent w-1/4"
                  animate={{ x: ["-100%", "400%"] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
              </div>
              
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto order-1">
                {/* 1->2 Horizontal line */}
                <div className="md:hidden absolute top-[27px] left-[50%] w-[calc(100%+16px)] h-[2px] bg-outline-variant/30 -z-10 overflow-hidden rounded-r-full">
                  <motion.div className="w-[50%] h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0 }} />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-primary-container border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold shadow-sm relative z-10">1</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-xs relative z-10 bg-surface-container-lowest">Konsultasi</h4>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto order-2">
                {/* 2->3 Vertical line down */}
                <div className="md:hidden absolute top-[27px] left-[50%] w-[2px] h-[calc(100%+48px)] bg-outline-variant/30 -z-10 overflow-hidden rounded-b-full">
                  <motion.div className="h-[50%] w-full bg-gradient-to-b from-transparent via-orange-500 to-transparent" animate={{ y: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 0.5 }} />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-container-high border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold relative z-10">2</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-[10px] md:text-xs text-on-surface-variant relative z-10 bg-surface-container-lowest">Formulasi</h4>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto order-4 md:order-3">
                {/* 3->4 Horizontal line (Right to Left) */}
                <div className="md:hidden absolute top-[27px] right-[50%] w-[calc(100%+16px)] h-[2px] bg-outline-variant/30 -z-10 overflow-hidden rounded-l-full">
                  <motion.div className="w-[50%] h-full bg-gradient-to-l from-transparent via-orange-500 to-transparent" animate={{ x: ["200%", "-100%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 1 }} />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-container-high border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold relative z-10">3</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-[10px] md:text-xs text-on-surface-variant relative z-10 bg-surface-container-lowest">Sample</h4>
              </div>
              
              {/* Step 4 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto order-3 md:order-4">
                {/* 4->5 Vertical line down */}
                <div className="md:hidden absolute top-[27px] left-[50%] w-[2px] h-[calc(100%+48px)] bg-outline-variant/30 -z-10 overflow-hidden rounded-b-full">
                  <motion.div className="h-[50%] w-full bg-gradient-to-b from-transparent via-orange-500 to-transparent" animate={{ y: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 1.5 }} />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-container-high border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold relative z-10">4</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-[10px] md:text-xs text-on-surface-variant relative z-10 bg-surface-container-lowest">Produksi</h4>
              </div>
              
              {/* Step 5 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto order-5 md:order-5">
                {/* 5->6 Horizontal line */}
                <div className="md:hidden absolute top-[27px] left-[50%] w-[calc(100%+16px)] h-[2px] bg-outline-variant/30 -z-10 overflow-hidden rounded-r-full">
                  <motion.div className="w-[50%] h-full bg-gradient-to-r from-transparent via-orange-500 to-transparent" animate={{ x: ["-100%", "200%"] }} transition={{ repeat: Infinity, duration: 1.5, ease: "linear", delay: 2 }} />
                </div>
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-surface-container-high border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold relative z-10">5</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-[10px] md:text-xs text-on-surface-variant relative z-10 bg-surface-container-lowest">Packaging</h4>
              </div>
              
              {/* Step 6 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto order-6 md:order-6">
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-on-surface text-on-primary border-[4px] border-surface flex items-center justify-center mb-sm font-h3 font-bold relative z-10">6</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-[10px] md:text-xs text-on-surface-variant relative z-10 bg-surface-container-lowest">Delivery</h4>
              </div>
            </div>
          </div>
        </section>

        {/* Legal Section */}
        <section className="py-12 md:py-margin lg:py-xl bg-surface-container-low" id="legal">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-h2 text-h2 text-on-surface mb-sm">Legal & Perizinan</h2>
              <p className="font-body-md text-on-surface-variant">Fasilitas dan produk kami terdaftar dan diawasi oleh lembaga berwenang untuk menjamin keamanan dan standar kualitas tertinggi.</p>
            </div>
            
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
              {[
                { src: "https://imgmu.id/f/c35f86c.png", alt: "Sertifikasi 1", delay: 0.1 },
                { src: "https://imgmu.id/f/3f1b084.png", alt: "Sertifikasi 2", delay: 0.2 },
                { src: "https://imgmu.id/f/5b2d2ad.png", alt: "Sertifikasi 3", delay: 0.3 },
                { src: "https://imgmu.id/f/c66a1fe.png", alt: "Sertifikasi 4", delay: 0.4 },
                { src: "https://imgmu.id/f/516a4b1.png", alt: "Sertifikasi 5", delay: 0.5 }
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
        </section>

        {/* Artikel Section */}
        <section className="py-12 md:py-margin lg:py-xl overflow-hidden bg-surface-container-lowest" id="artikel">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 md:mb-12 gap-6">
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
              className="w-full pb-8"
            >
              {articles.map((article) => (
                <SwiperSlide key={article.id} className="h-auto">
                  <Link to={`/artikel/${article.slug}`} className="block h-full group">
                    <div className="h-full flex flex-col bg-surface rounded-2xl overflow-hidden border border-outline-variant/30 hover:shadow-lg transition-all duration-300 hover:border-primary/30">
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img src={article.image} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
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
        </section>

        {/* Testimoni Section */}
        <section className="py-12 md:py-margin lg:py-xl max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" id="testimoni">
          <div className="text-center max-w-[768px] mx-auto mb-12 md:mb-lg">
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

          <div className="mt-12 md:mt-16 relative overflow-hidden">
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
                       <span className="font-h3 text-lg md:text-2xl lg:text-3xl font-black tracking-tight relative z-10 text-black dark:text-black opacity-90 hover:opacity-100 transition-opacity">{item}</span>
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
                       <span className="font-h3 text-lg md:text-2xl lg:text-3xl font-black tracking-tight relative z-10 text-black dark:text-black opacity-90 hover:opacity-100 transition-opacity">{item}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <footer className="bg-surface-container-low w-full border-t border-outline-variant/30 font-label-sm text-xs uppercase tracking-widest text-on-surface-variant py-12 md:py-16 mt-8" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 md:gap-12">
          <div className="col-span-1 md:col-span-2 lg:col-span-2">
            <div className="text-lg font-bold text-on-surface mb-sm capitalize tracking-tight font-h3">Dairy Nutrition Alami</div>
            <p className="font-body-md text-on-surface-variant normal-case tracking-normal mb-lg max-w-[384px]">
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
          <div className="flex flex-col gap-sm">
            <h4 className="font-bold text-on-surface mb-xs uppercase tracking-widest">Legal</h4>
            <Link aria-label="Read our Privacy Policy" className="hover:text-on-surface transition-colors underline-offset-4 hover:underline" to="/privacy-policy">Privacy Policy</Link>
            <Link aria-label="Read our Terms of Service" className="hover:text-on-surface transition-colors underline-offset-4 hover:underline" to="/terms-of-service">Terms of Service</Link>
            <Link aria-label="View our Manufacturing Standards" className="text-on-surface font-bold hover:text-on-surface transition-colors underline-offset-4 hover:underline" to="/manufacturing-standards">Manufacturing Standards</Link>
          </div>
          <div className="flex flex-col gap-sm">
            <h4 className="font-bold text-on-surface mb-xs uppercase tracking-widest">Company</h4>
            <Link aria-label="View our Certifications" className="hover:text-on-surface transition-colors underline-offset-4 hover:underline" to="/certifications">Certifications</Link>
            <Link aria-label="Contact our Support team" className="hover:text-on-surface transition-colors underline-offset-4 hover:underline" to="/contact-support">Contact Support</Link>
          </div>
          <div className="flex flex-col gap-sm lg:col-span-1">
            <h4 className="font-bold text-on-surface mb-xs uppercase tracking-widest">Contact</h4>
            <a aria-label="Call us directly at +6282225613106" href="tel:+6282225613106" className="hover:text-on-surface transition-colors normal-case tracking-normal flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+6282225613106</span>
            </a>
            <a aria-label="Email us at dairynutritionalami@gmail.com" href="mailto:dairynutritionalami@gmail.com" className="hover:text-on-surface transition-colors normal-case tracking-normal flex items-center gap-2 break-all">
              <Mail className="w-4 h-4 shrink-0 mt-0.5" />
              <span>dairynutritionalami@gmail.com</span>
            </a>
            <div className="normal-case tracking-normal flex items-start gap-2 mt-xs text-on-surface-variant/90">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>CV Dairy Nutrition Alami<br />RT 25 RW 15, Jl.Nanggulan Mendut Petronalan,<br />Kel. Banjaroyo, Kec. Kalibawang,<br />Kab Kulon Progo, Daerah Istimewa Yogyakarta 55672.<br />(dekat SPBU Rafano, depan es teh idaman)</span>
            </div>
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
      <div className="min-h-screen bg-background flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl font-bold text-on-surface mb-2">Artikel Tidak Ditemukan</h2>
        <p className="text-on-surface-variant mb-6">Maaf, artikel yang Anda cari tidak ada atau telah dipindahkan.</p>
        <Link to="/" className="bg-primary text-on-primary px-6 py-2 rounded-full font-medium inline-flex items-center hover:bg-primary/90 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" /> Kembali ke Beranda
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background font-sans text-on-background selection:bg-primary/30 selection:text-on-background">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/" className="flex items-center group">
            <ArrowLeft className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors mr-2" />
            <span className="font-medium text-sm text-on-surface-variant group-hover:text-primary transition-colors uppercase tracking-widest">Kembali</span>
          </Link>
          <div className="font-h3 text-lg font-bold text-on-surface uppercase tracking-tight">DNA.</div>
          <div className="w-8"></div> {/* Spacer for centering */}
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-12 md:py-20">
        <div className="mb-8">
          <div className="text-primary font-medium text-sm mb-4">{article.date}</div>
          <h1 className="font-h1 text-3xl md:text-5xl lg:text-6xl text-on-surface mb-6 leading-tight tracking-tight">{article.title}</h1>
        </div>
        
        <div className="aspect-video w-full rounded-2xl overflow-hidden mb-12 shadow-md">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
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
      </article>

      <footer className="bg-surface-container-low border-t border-outline-variant/30 py-8 text-center text-on-surface-variant text-sm">
        <p>© 2026 Dairy Nutrition Alami (DNA). Bio-Innovation in Confectionery.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/artikel/:slug" element={<ArticleView />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
      <Route path="/manufacturing-standards" element={<ManufacturingStandards />} />
      <Route path="/certifications" element={<Certifications />} />
      <Route path="/contact-support" element={<ContactSupport />} />
    </Routes>
  );
}
