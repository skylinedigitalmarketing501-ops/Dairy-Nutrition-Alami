import React, { useState } from 'react';
import { Menu, X, FlaskConical, BadgeCheck, TestTube2, Boxes, Microscope, SlidersHorizontal, CheckCircle2, MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Loader2, Clock, Target } from 'lucide-react';
import { animate } from 'motion/react';

export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isNavigating, setIsNavigating] = useState<string | null>(null);

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
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
          <div className="text-xl font-black tracking-tighter text-zinc-900 dark:text-white">Dairy Nutrition Alami</div>
          <div className="hidden md:flex gap-md font-manrope tracking-tight text-sm font-semibold">
            <a className="text-zinc-900 dark:text-white border-b-2 border-zinc-900 dark:border-white pb-1 cursor-pointer" onClick={(e) => handleNavScroll(e, 'home')} href="#home">Home</a>
            <a className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer" onClick={(e) => handleNavScroll(e, 'services')} href="#services">Services</a>
            <a className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer" onClick={(e) => handleNavScroll(e, 'products')} href="#products">Products</a>
            <a className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer" onClick={(e) => handleNavScroll(e, 'process')} href="#process">Process</a>
            <a className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer" onClick={(e) => handleNavScroll(e, 'about')} href="#about">About</a>
            <a className="text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors cursor-pointer" onClick={(e) => handleNavScroll(e, 'contact')} href="#contact">Contact</a>
          </div>
          <div className="hidden lg:flex gap-sm items-center">
            <a href="#contact" onClick={(e) => handleAction(e, 'nav-project', 'contact')} className="bg-white text-on-surface font-label-sm px-md py-sm rounded-lg hover:bg-white hover:text-on-surface active:bg-white active:text-on-surface transition-transform duration-300 scale-95 active:scale-90 border border-outline-variant/30 uppercase tracking-widest text-[11px] inline-flex items-center justify-center sm:min-w-[140px] shadow-sm">
              {isNavigating === 'nav-project' ? <Loader2 className="w-4 h-4 mr-2 animate-spin text-on-surface" /> : null}
              Mulai Proyek Anda
            </a>
            <a href="#contact" onClick={(e) => handleAction(e, 'nav-consult', 'contact')} className="bg-on-surface text-on-primary font-label-sm px-md py-sm rounded-lg hover:bg-zinc-800 transition-all duration-300 scale-95 active:scale-90 uppercase tracking-widest text-[11px] inline-flex items-center justify-center sm:min-w-[140px]">
              {isNavigating === 'nav-consult' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              Konsultasi Gratis
            </a>
          </div>
          <button className="md:hidden text-on-surface" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed top-20 left-0 w-full bg-surface-container-lowest/95 backdrop-blur-md border-b border-outline-variant/30 px-8 py-6 flex flex-col gap-6 shadow-lg z-40">
            <a onClick={(e) => handleNavScroll(e, 'home')} className="cursor-pointer text-on-surface font-label-sm uppercase tracking-widest text-xs" href="#home">Home</a>
            <a onClick={(e) => handleNavScroll(e, 'services')} className="cursor-pointer text-on-surface-variant font-label-sm uppercase tracking-widest text-xs" href="#services">Services</a>
            <a onClick={(e) => handleNavScroll(e, 'products')} className="cursor-pointer text-on-surface-variant font-label-sm uppercase tracking-widest text-xs" href="#products">Products</a>
            <a onClick={(e) => handleNavScroll(e, 'process')} className="cursor-pointer text-on-surface-variant font-label-sm uppercase tracking-widest text-xs" href="#process">Process</a>
            <a onClick={(e) => handleNavScroll(e, 'about')} className="cursor-pointer text-on-surface-variant font-label-sm uppercase tracking-widest text-xs" href="#about">About</a>
            <a onClick={(e) => handleNavScroll(e, 'contact')} className="cursor-pointer text-on-surface-variant font-label-sm uppercase tracking-widest text-xs" href="#contact">Contact</a>
            <hr className="border-outline-variant/30 my-2" />
            <a href="#contact" onClick={(e) => handleAction(e, 'mobile-project', 'contact')} className="bg-primary-container text-on-surface font-label-sm px-md py-sm rounded-lg border border-outline-variant/30 text-center uppercase tracking-widest text-[11px] flex items-center justify-center">
              {isNavigating === 'mobile-project' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              Mulai Proyek Anda
            </a>
            <a href="#contact" onClick={(e) => handleAction(e, 'mobile-consult', 'contact')} className="bg-on-surface text-on-primary font-label-sm px-md py-sm rounded-lg text-center uppercase tracking-widest text-[11px] flex items-center justify-center">
              {isNavigating === 'mobile-consult' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
              Konsultasi Gratis
            </a>
          </div>
        )}
      </nav>

      <main className="pt-24">
        {/* Hero Section */}
        <section className="relative max-w-7xl mx-auto px-8 py-margin lg:py-xl flex flex-col lg:flex-row items-center gap-margin" id="home">
          <div className="flex-1 space-y-md z-10 pt-12 md:pt-0">
            <div className="inline-block bg-primary-container text-on-surface font-label-sm px-sm py-xs rounded-full border border-outline-variant/30 uppercase tracking-widest text-xs">
              B2B Contract Manufacturing
            </div>
            <h1 className="font-h1 text-h1 text-on-surface">Maklon Pressed Milk Candy & Lozenges Premium dari Bahan Alami</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-[672px]">Ciptakan Brand Permen Sehat Anda dengan Formula Dairy Nutrition Berkualitas Tinggi. Kami menyediakan solusi hulu ke hilir untuk inovasi produk nutrisi.</p>
            <div className="flex flex-wrap gap-sm pt-sm">
              <a href="#contact" onClick={(e) => handleAction(e, 'hero-consult', 'contact')} className="bg-on-surface text-on-primary font-label-sm px-lg py-sm rounded-lg hover:bg-primary transition-colors h-12 uppercase tracking-widest text-xs inline-flex items-center justify-center sm:min-w-[160px]">
                {isNavigating === 'hero-consult' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Konsultasi Gratis
              </a>
              <a href="#contact" onClick={(e) => handleAction(e, 'hero-project', 'contact')} className="bg-primary-container text-on-surface font-label-sm px-lg py-sm rounded-lg border border-outline-variant/30 hover:bg-surface-container-highest transition-colors h-12 uppercase tracking-widest text-xs inline-flex items-center justify-center sm:min-w-[170px]">
                {isNavigating === 'hero-project' ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : null}
                Mulai Proyek Anda
              </a>
            </div>
          </div>
          <div className="flex-1 w-full relative">
            <div className="absolute inset-0 bg-primary-container rounded-3xl -rotate-3 scale-105 opacity-50 z-0"></div>
            <img 
              alt="Hero Image" 
              className="w-full h-[300px] md:h-[500px] object-cover rounded-3xl shadow-sm border border-outline-variant/20 relative z-10" 
              src="https://lh3.googleusercontent.com/aida/ADBb0uiwdQnVVxrkDBDRV5Jhea_-olbJe_U0yFcGdJgmhVcqqxhRU-WXHMvVoVPCKm9kssEaCcABlQERFg9ldtMk-btwx5Hgrv-tdelWCY5pIx023DLvBzB48TlCp2f3534NfMquRLM-xc7BuUN2_kK-694c6YVn7ZsG56bsJO5uQIFmExZNqdONxnajvPtua9Q0NCKi5LO2F3zXQA99-GsAIdr-RvZNcbdMTEA2PdN3I_3MS1k-614oHvxrcovYP88WQChxm0Kw4kft2Q" 
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="bg-surface-container-lowest py-margin lg:py-xl border-y border-surface-variant/50" id="about">
          <div className="max-w-7xl mx-auto px-8">
            <div className="text-center max-w-[768px] mx-auto mb-lg">
              <h2 className="font-h2 text-h2 text-on-surface mb-sm">Kenapa Memilih Dairy Nutrition Alami</h2>
              <p className="font-body-md text-body-md text-on-surface-variant">Keahlian spesifik dengan fasilitas terstandarisasi untuk memastikan produk Anda memimpin pasar.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-gutter">
              {/* Feature Card */}
              <div className="p-md rounded-xl border border-primary-container bg-surface hover:bg-surface-container-highest transition-colors duration-300">
                <FlaskConical className="w-8 h-8 text-tertiary mb-sm" />
                <h3 className="font-h3 text-h3 text-on-surface text-lg mb-xs">Specialist in Pressed Milk</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Fokus mendalam pada teknologi pembuatan permen susu padat dan lozenges.</p>
              </div>
              <div className="p-md rounded-xl border border-primary-container bg-surface hover:bg-surface-container-highest transition-colors duration-300">
                <BadgeCheck className="w-8 h-8 text-tertiary mb-sm" />
                <h3 className="font-h3 text-h3 text-on-surface text-lg mb-xs">Quality Dairy Ingredients</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Hanya menggunakan bahan baku susu premium yang teruji klinis.</p>
              </div>
              <div className="p-md rounded-xl border border-primary-container bg-surface hover:bg-surface-container-highest transition-colors duration-300">
                <TestTube2 className="w-8 h-8 text-tertiary mb-sm" />
                <h3 className="font-h3 text-h3 text-on-surface text-lg mb-xs">Custom Formula & R&D</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Tim R&D berpengalaman untuk menciptakan formulasi unik brand Anda.</p>
              </div>
              <div className="p-md rounded-xl border border-primary-container bg-surface hover:bg-surface-container-highest transition-colors duration-300">
                <Boxes className="w-8 h-8 text-tertiary mb-sm" />
                <h3 className="font-h3 text-h3 text-on-surface text-lg mb-xs">Competitive MOQ</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Sangat fleksibel untuk brand baru maupun ekspansi perusahaan besar.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Bento Grid */}
        <section className="py-margin lg:py-xl max-w-7xl mx-auto px-8" id="services">
          <h2 className="font-h2 text-h2 text-on-surface mb-lg text-center">Layanan Maklon Permen Dairy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter auto-rows-[250px]">
            <div className="col-span-1 md:col-span-2 row-span-2 rounded-2xl relative overflow-hidden group border border-outline-variant/20">
              <img 
                alt="Pressed Milk Candy" 
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                src="https://lh3.googleusercontent.com/aida/ADBb0ug2VWXri1kWk8pqH-pGM9dtTPfCBZT5Ze_mZATzoxUFiRlPUKfwAT_918h61dOPOKIvJpgRTcYIWu8osBFzm9_BwtGUT-vAujWu5QPlSfRmSbC70ytOlZrcdK5kMLqe2BYAlSp8FnlmqJmshjrlf2ZZ-x73OytDBtJuYoJUcSf3pRtbflF7idjIjQCdhVFQevP0DCjlOJTSDgS-XGtAXLzg4fzUQqGBCWLSl1-axN8JR4gDK2OCaIZvvrxV4glVga_Ckm5emDBV0A" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a1c1c]/95 via-[#1a1c1c]/50 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-lg w-full z-10">
                <div className="bg-white/20 backdrop-blur-sm text-white font-label-sm px-sm py-xs rounded-full inline-block mb-sm border border-white/30 uppercase tracking-widest text-[10px]">Layanan Utama</div>
                <h3 className="font-h3 text-h3 text-white mb-xs drop-shadow-sm">Pressed Milk Candy</h3>
                <p className="font-body-md text-body-md text-white/90 max-w-[448px] drop-shadow-sm">Solusi permen susu padat premium dengan profil rasa dan nutrisi yang dapat disesuaikan.</p>
              </div>
            </div>
            
            <div className="rounded-2xl relative overflow-hidden group border border-outline-variant/20 bg-surface-container">
              <div className="p-md h-full flex flex-col justify-end relative z-10">
                <h3 className="font-h3 text-h3 text-on-surface text-xl mb-xs">Lozenges Candy</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Permen hisap fungsional untuk pelega tenggorokan.</p>
              </div>
            </div>
            
            <div className="rounded-2xl relative overflow-hidden group border border-outline-variant/20 bg-primary-container">
              <div className="p-md h-full flex flex-col justify-end relative z-10">
                <h3 className="font-h3 text-h3 text-on-surface text-xl mb-xs">Tablet Candy</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm">Format tablet presisi untuk suplemen dan nutrisi.</p>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-3 rounded-2xl p-md border border-outline-variant/20 bg-surface flex flex-col sm:flex-row justify-between items-center gap-md">
              <div>
                <h3 className="font-h3 text-h3 text-on-surface text-xl mb-xs">Functional, Supplement & Herbal Candy</h3>
                <p className="font-body-md text-body-md text-on-surface-variant text-sm max-w-[576px]">Inovasi formulasi yang menggabungkan manfaat ekstrak herbal, vitamin, dan nutrisi fungsional lainnya ke dalam format permen yang lezat.</p>
              </div>
              <a href="#products" onClick={(e) => handleNavScroll(e, 'products')} className="bg-surface-container-high text-on-surface font-label-sm px-md py-sm rounded-lg hover:bg-outline-variant transition-colors whitespace-nowrap h-12 uppercase tracking-widest text-xs inline-flex items-center justify-center cursor-pointer">Lihat Katalog</a>
            </div>
          </div>
        </section>

        {/* R&D Section */}
        <section className="py-margin lg:py-xl max-w-7xl mx-auto px-8" id="products">
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
            
            <div className="relative px-2 sm:px-8 mt-12 lg:mt-0 xl:pl-12">
              <div className="absolute inset-0 bg-tertiary-container rounded-[3rem] rotate-[-3deg] scale-105 opacity-60 z-0 transition-transform duration-1000 hover:rotate-[-1deg]"></div>
              <img 
                alt="Lab scientists working" 
                className="w-full h-[350px] md:h-[500px] object-cover rounded-[3rem] shadow-xl border border-outline-variant/20 relative z-10 transition-transform duration-1000 hover:scale-[1.02]" 
                src="https://lh3.googleusercontent.com/aida/ADBb0ujhsgRHhTc4FKWu4KMFzoaIKkazYWyXXVQ6CU06mhSAdUbI6B9O1FIEBcB2_v1012KyoMG2an3gQDFPUdFjML7qy_-4xlVA9HxNdmvMegH7T78j-ZGnexFtwqY6fWDgL55oRqMJMjCN3HaDN3epoCXaYZI2TNHbQZjgrHfuptwWq-habsYbXoNvNyovXW2PT_d-CDphBJ3uM3t5rMeXr2MhJZqg0U5tEGpXskxRuYdNfaDY82YuKoyEPO-4m_yn9D97_s7eP2GcGg" 
              />
              <div className="absolute -bottom-6 -left-2 sm:-bottom-10 sm:-left-6 p-2 bg-surface rounded-[2rem] z-20 shadow-xl hidden xs:block">
                <img 
                  alt="Dairy powder close-up" 
                  className="w-32 h-32 md:w-48 md:h-48 object-cover rounded-[1.5rem] bg-white border border-outline-variant/20" 
                  src="https://lh3.googleusercontent.com/aida/ADBb0ujPRbHrJjiHCVHIMaTQE1xR6fC3389nFN3Mym5bTwVL_1c3he8QLrG6mAqLIjT4_1jcGbbJ2K2egBJJ_W3laeEXJDlfmM5FSD-G2q-rE2J8pZc7pIuE9qBhrvMf4QF1LNOZ3A86imrAoEzTmmGOo1MScTA43RNFslI0kXYRHers1DvZ7c4pNv9-MsXVNVQoBxNehvBI7gFpicg-V4Nz_K_08dgXUSTn1iwuheEN-pfC3dY8Cv19R85kuhNjx5arDMyjVNcaeAvh" 
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

        {/* Process Section */}
        <section className="py-margin lg:py-xl bg-surface-container-lowest border-y border-surface-variant/50" id="process">
          <div className="max-w-7xl mx-auto px-8">
            <h2 className="font-h2 text-h2 text-on-surface mb-lg text-center">Proses Maklon Mudah</h2>
            <div className="flex flex-col md:flex-row justify-between items-start relative gap-8 md:gap-0">
              <div className="hidden md:block absolute top-[32px] left-[5%] w-[90%] h-[2px] bg-outline-variant/30 z-0"></div>
              
              {/* Step 1 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto">
                <div className="w-16 h-16 rounded-full bg-primary-container border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold shadow-sm">1</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-xs">Konsultasi</h4>
              </div>
              
              {/* Step 2 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto">
                <div className="w-16 h-16 rounded-full bg-surface-container-high border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold">2</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-xs text-on-surface-variant">Formulasi</h4>
              </div>
              
              {/* Step 3 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto">
                <div className="w-16 h-16 rounded-full bg-surface-container-high border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold">3</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-xs text-on-surface-variant">Sample</h4>
              </div>
              
              {/* Step 4 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto">
                <div className="w-16 h-16 rounded-full bg-surface-container-high border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold">4</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-xs text-on-surface-variant">Produksi</h4>
              </div>
              
              {/* Step 5 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto">
                <div className="w-16 h-16 rounded-full bg-surface-container-high border-[4px] border-surface flex items-center justify-center mb-sm text-on-surface font-h3 font-bold">5</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-xs text-on-surface-variant">Packaging</h4>
              </div>
              
              {/* Step 6 */}
              <div className="relative z-10 flex flex-col items-center text-center w-full md:w-[150px] mx-auto">
                <div className="w-16 h-16 rounded-full bg-on-surface text-on-primary border-[4px] border-surface flex items-center justify-center mb-sm font-h3 font-bold">6</div>
                <h4 className="font-label-sm text-label-sm text-on-surface mb-xs uppercase tracking-widest text-xs">Delivery</h4>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer Component */}
      <footer className="bg-surface-container-low w-full border-t border-outline-variant/30 font-label-sm text-xs uppercase tracking-widest text-on-surface-variant py-16 mt-8" id="contact">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
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
              <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:border-outline-variant hover:text-on-surface transition-all duration-300">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" aria-label="LinkedIn" className="w-10 h-10 rounded-full border border-outline-variant/30 flex items-center justify-center text-on-surface-variant hover:bg-surface-container-high hover:border-outline-variant hover:text-on-surface transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-sm">
            <h4 className="font-bold text-on-surface mb-xs uppercase tracking-widest">Legal</h4>
            <a aria-label="Read our Privacy Policy" className="hover:text-on-surface transition-colors underline-offset-4 hover:underline" href="#">Privacy Policy</a>
            <a aria-label="Read our Terms of Service" className="hover:text-on-surface transition-colors underline-offset-4 hover:underline" href="#">Terms of Service</a>
            <a aria-label="View our Manufacturing Standards" className="text-on-surface font-bold hover:text-on-surface transition-colors underline-offset-4 hover:underline" href="#">Manufacturing Standards</a>
          </div>
          <div className="flex flex-col gap-sm">
            <h4 className="font-bold text-on-surface mb-xs uppercase tracking-widest">Company</h4>
            <a aria-label="View our Certifications" className="hover:text-on-surface transition-colors underline-offset-4 hover:underline" href="#">Certifications</a>
            <a aria-label="Contact our Support team" className="hover:text-on-surface transition-colors underline-offset-4 hover:underline" href="#">Contact Support</a>
          </div>
          <div className="flex flex-col gap-sm lg:col-span-1">
            <h4 className="font-bold text-on-surface mb-xs uppercase tracking-widest">Contact</h4>
            <a aria-label="Call us directly at +62 811 1222 333" href="tel:+628111222333" className="hover:text-on-surface transition-colors normal-case tracking-normal flex items-center gap-2">
              <Phone className="w-4 h-4 shrink-0" />
              <span>+62 811 1222 333</span>
            </a>
            <a aria-label="Email us at hello@dairynutritionalami.com" href="mailto:hello@dairynutritionalami.com" className="hover:text-on-surface transition-colors normal-case tracking-normal flex items-center gap-2">
              <Mail className="w-4 h-4 shrink-0" />
              <span>hello@dairynutritionalami.com</span>
            </a>
            <div className="normal-case tracking-normal flex items-start gap-2 mt-xs text-on-surface-variant/90">
              <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
              <span>Jl. Industri Raya No. 88,<br />Kawasan Industri Hijau,<br />Jakarta, Indonesia</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
