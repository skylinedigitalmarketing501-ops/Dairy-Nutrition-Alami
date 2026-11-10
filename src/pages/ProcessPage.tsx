import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, Factory, ClipboardCheck, Microscope, ArrowRight, Truck, FileCheck, PackageOpen } from 'lucide-react';
import { ThemeToggle } from '../App';

const steps = [
  {
    id: 1,
    title: "Konsultasi & Ideasi",
    subtitle: "Merumuskan visi produk nutrisi impian Anda.",
    icon: <ClipboardCheck className="w-8 h-8 text-on-primary-container" />,
    description: "Kami mendiskusikan kebutuhan, target pasar, dan spesifikasi produk Anda secara mendalam. Tim ahli kami akan memberikan masukan strategis mengenai tren pasar, formulasi optimal, serta estimasi biaya yang sesuai dengan budget Anda.",
    timeline: "1 - 2 Minggu",
    details: [
      "Penentuan spesifikasi produk",
      "Analisis target market",
      "Pemilihan bahan baku (Raw Material)",
      "Estimasi HPP dan MOQ",
      "Penandatanganan Perjanjian Kerahasiaan (NDA)"
    ]
  },
  {
    id: 2,
    title: "Riset & Pengembangan (R&D)",
    subtitle: "Menciptakan formula eksklusif dan stabil.",
    icon: <Microscope className="w-8 h-8 text-on-primary-container" />,
    description: "Tim R&D DNA. akan merancang formula awal berdasarkan kesepakatan. Anda akan menerima sample produk untuk diuji rasa, tekstur, dan stabilitasnya. Kami akan melakukan revisi hingga Anda 100% puas dengan hasil akhir.",
    timeline: "2 - 4 Minggu",
    details: [
      "Formulasi awal di Laboratorium",
      "Pembuatan Prototipe (Sample)",
      "Uji organoleptik (rasa, aroma, tekstur)",
      "Uji stabilitas awal",
      "Revisi sample (jika diperlukan)"
    ]
  },
  {
    id: 3,
    title: "Registrasi & Perizinan",
    subtitle: "Memastikan kepatuhan regulasi secara menyeluruh.",
    icon: <FileCheck className="w-8 h-8 text-on-primary-container" />,
    description: "Fase krusial untuk memastikan produk Anda legal dan aman diedarkan. Tim Regulatory Affairs kami akan membantu mengurus semua perizinan yang dibutuhkan, termasuk BPOM, Sertifikasi Halal MUI, dan HKI (merek).",
    timeline: "3 - 6 Bulan (Estimasi BPOM)",
    details: [
      "Registrasi akun perusahaan (jika baru)",
      "Penyusunan dokumen registrasi BPOM",
      "Pendaftaran Sertifikasi Halal",
      "Bantuan pendaftaran HKI/Merek",
      "Penerbitan Nomor Izin Edar (NIE)"
    ]
  },
  {
    id: 4,
    title: "Desain Kemasan & Pengadaan",
    subtitle: "Visual produk yang menarik dan supply terjamin.",
    icon: <PackageOpen className="w-8 h-8 text-on-primary-container" />,
    description: "Sambil menunggu perizinan selesai, kita mulai memproses desain kemasan yang memikat sesuai pedoman BPOM. Kami juga akan memulai pengadaan bahan baku dan bahan kemas untuk mempercepat persiapan produksi.",
    timeline: "Bersamaan dengan Registrasi",
    details: [
      "Proses desain kemasan primer dan sekunder",
      "Review kepatuhan label BPOM",
      "Pemesanan bahan baku premium",
      "Pemesanan material kemasan",
      "Pembuatan dummy kemasan"
    ]
  },
  {
    id: 5,
    title: "Produksi Massal",
    subtitle: "Manufaktur berstandar GMP/CPPOB tertinggi.",
    icon: <Factory className="w-8 h-8 text-on-primary-container" />,
    description: "Setelah bahan baku dan kemasan siap beserta izin turun, produk Anda diproses dalam fasilitas produksi higienis kami. Setiap proses diawasi dengan Quality Control (QC) yang ketat untuk menjamin konsistensi dan kualitas batch demi batch.",
    timeline: "2 - 4 Minggu (Tergantung Antrian)",
    details: [
      "Penimbangan dan pencampuran (Mixing)",
      "Pencetakan / Granulasi / Filling",
      "Pemeriksaan mutu in-process (IPC)",
      "Pengemasan (Packaging)",
      "Pemeriksaan akhir (Final QC Release)"
    ]
  },
  {
    id: 6,
    title: "Pengiriman & Serah Terima",
    subtitle: "Produk siap meluncur memenangkan pasar.",
    icon: <Truck className="w-8 h-8 text-on-primary-container" />,
    description: "Produk jadi (Finish Good) disimpan sementara di gudang berstandar CPOB sebelum dikirim. Kami membantu pengaturan logistik efisien untuk memastikan produk sampai dengan aman di tempat Anda.",
    timeline: "1 - 3 Hari (Untuk area tertentu)",
    details: [
      "Penyimpanan Finish Good",
      "Penerbitan Certificate of Analysis (CoA)",
      "Pelunasan administrasi",
      "Pengorganisasian Pengiriman",
      "Post-marketing support"
    ]
  }
];

export const ProcessPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-on-background selection:bg-primary/30 selection:text-on-background transition-colors duration-500 overflow-x-hidden">
      <header className="sticky top-0 z-50 bg-surface/80 backdrop-blur-md border-b border-outline-variant/30 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link to="/#process" className="flex items-center group">
            <ArrowLeft className="w-5 h-5 text-on-surface-variant group-hover:text-primary transition-colors mr-2" />
            <span className="font-medium text-sm text-on-surface-variant group-hover:text-primary transition-colors uppercase tracking-widest">Kembali</span>
          </Link>
          <div className="font-h3 text-lg font-bold text-on-surface uppercase tracking-tight">DNA.</div>
          <div className="w-[100px] flex justify-end">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-14"
        >
          <h1 className="font-h1 text-3xl md:text-5xl lg:text-6xl text-on-surface mb-6 md:mb-8 font-black uppercase tracking-tighter dark:bg-gradient-to-r dark:from-emerald-200 dark:via-emerald-400 dark:to-emerald-200 dark:bg-clip-text dark:text-transparent">
            Detail Proses Pembuatan
          </h1>
          <p className="font-body-lg text-lg md:text-xl text-on-surface-variant max-w-3xl mx-auto">
            Mewujudkan konsep cemerlang Anda menjadi produk berstandar global melalui alur kerja klinis, transparan, dan terstruktur dengan sempurna.
          </p>
        </motion.div>

        {/* Timeline Desktop/Mobile mixed layout */}
        <div className="relative">
          {/* Vertical Line for timeline connection (Desktop mainly) */}
          <div className="absolute left-[24px] md:left-1/2 top-4 bottom-12 w-[2px] transform md:-translate-x-1/2 hidden sm:block z-0">
            {/* Base dashed line */}
            <div className="absolute inset-0 border-l-[2px] border-dashed border-outline-variant/30"></div>
            {/* Flowing energy animation */}
            <div className="absolute -inset-x-[1px] top-0 h-full overflow-hidden">
              <motion.div
                className="w-[4px] h-[30vh] bg-gradient-to-b from-transparent via-emerald-500 to-transparent opacity-90 blur-[1px]"
                animate={{ y: ['-30vh', '100%'] }}
                transition={{ duration: 3.5, repeat: Infinity, ease: 'linear' }}
              />
            </div>
          </div>

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.7, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start md:items-center ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-12 pl-12 sm:pl-0`}
                >
                  
                  {/* Timeline Node/Icon */}
                  <div className="absolute sm:relative left-0 sm:left-auto top-0 md:top-auto sm:w-1/2 flex justify-start md:justify-center z-10 
                      md:-translate-y-0 translate-y-2">
                    <div className="w-12 h-12 md:w-20 md:h-20 bg-primary-container border-[4px] border-surface rounded-full shadow-lg flex items-center justify-center -ml-6 sm:ml-0 md:absolute md:left-[50%] md:top-[50%] md:transform md:-translate-x-1/2 md:-translate-y-[calc(50%+24px)] md:mt-6">
                      <div className="hidden md:block scale-150">
                        {step.icon}
                      </div>
                      <div className="md:hidden font-bold text-on-primary-container text-lg">
                        {step.id}
                      </div>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full sm:w-1/2 ${isEven ? 'md:pr-16 lg:pr-24' : 'md:pl-16 lg:pl-24'}`}>
                    <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-3xl p-6 md:p-8 shadow-sm hover:shadow-lg transition-all duration-300">
                      <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-label-sm uppercase tracking-wider text-[10px] md:text-xs rounded-full mb-4">
                        Tahap {step.id}: {step.timeline}
                      </div>
                      
                      <h2 className="font-h3 text-xl md:text-3xl text-on-surface mb-2 font-bold tracking-tight">
                        {step.title}
                      </h2>
                      <h3 className="font-medium text-sm md:text-base text-on-surface-variant mb-4 italic">
                        "{step.subtitle}"
                      </h3>
                      
                      <p className="font-body-md text-sm md:text-base text-on-surface-variant leading-relaxed mb-6">
                        {step.description}
                      </p>
                      
                      <div className="bg-surface-container-low rounded-2xl p-4 border border-outline-variant/20">
                        <h4 className="font-label-sm uppercase text-xs tracking-widest text-on-surface mb-3 flex items-center">
                          <CheckCircle2 className="w-4 h-4 mr-2 text-primary" /> Rincian Aktivitas
                        </h4>
                        <ul className="space-y-2">
                          {step.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start">
                              <ArrowRight className="w-3 h-3 text-primary mt-[6px] mr-2 flex-shrink-0" />
                              <span className="font-body-sm text-sm text-on-surface-variant">{detail}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 md:mt-16 text-center bg-primary-container p-8 md:p-12 rounded-[2.5rem] border border-outline-variant/20 relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none"></div>
          <div className="relative z-10">
            <h2 className="font-h2 text-2xl md:text-4xl text-on-primary-container mb-4 font-black">
              Siap Memulai Perjalanan Produk Anda?
            </h2>
            <p className="font-body-md text-on-primary-container/80 mb-8 max-w-2xl mx-auto">
              Hubungi tim konsultan kami hari ini untuk berdiskusi tentang ide brilian Anda. Kami siap memberikan solusi spesifik yang sesuai dengan visi produk Anda.
            </p>
            <a 
              href="https://wa.me/628118816867" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-950 to-emerald-600 hover:from-emerald-900 hover:to-emerald-500 text-white font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-xl transition-all duration-300 shadow-md border border-emerald-500/20 hover:shadow-lg inline-flex items-center"
            >
              Konsultasi Sekarang <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </div>
        </motion.div>
      </main>
    </div>
  );
};
