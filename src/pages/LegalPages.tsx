import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';
import { ThemeToggle } from '../App';

const PageLayout = ({ title, children }: { title: string, children: React.ReactNode }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background font-sans text-on-background selection:bg-primary/30 selection:text-on-background flex flex-col transition-colors duration-500">
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

      <main className="flex-grow max-w-4xl mx-auto px-4 sm:px-6 py-12 md:py-20 w-full">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }} 
          className="font-h1 text-3xl md:text-5xl lg:text-6xl text-on-surface mb-12 tracking-tight"
        >
          {title}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.2 }} 
          className="prose prose-lg dark:prose-invert prose-p:text-on-surface-variant prose-p:leading-relaxed prose-headings:text-on-surface max-w-none"
        >
          {children}
        </motion.div>
      </main>

      <footer className="bg-surface-container-low border-t border-outline-variant/30 py-8 text-center text-on-surface-variant text-sm mt-auto">
        <p>© 2026 Dairy Nutrition Alami (DNA). Bio-Innovation in Confectionery.</p>
      </footer>
    </div>
  );
};

export function PrivacyPolicy() {
  return (
    <PageLayout title="Privacy Policy">
      <p>Kebijakan Privasi ini menjelaskan bagaimana Dairy Nutrition Alami (DNA) mengumpulkan, menggunakan, dan melindungi informasi pribadi Anda saat Anda menggunakan website dan layanan kami.</p>
      <h2>Pengumpulan Informasi</h2>
      <p>Kami mengumpulkan informasi yang Anda berikan secara langsung kepada kami, seperti saat Anda mengisi formulir kontak, melakukan pemesanan maklon, atau berinteraksi dengan layanan pelanggan kami. Informasi ini dapat mencakup nama, alamat email, nomor telepon, dan detail perusahaan.</p>
      <h2>Penggunaan Informasi</h2>
      <p>Kami menggunakan informasi yang kami kumpulkan untuk menyediakan, memelihara, dan meningkatkan layanan kami. Ini termasuk memproses pesanan, merespons pertanyaan, dan mengirimkan pembaruan terkait layanan kami.</p>
      <h2>Perlindungan Data</h2>
      <p>Kami menerapkan langkah-langkah keamanan teknis dan organisasi yang ketat untuk melindungi informasi pribadi Anda dari akses tidak sah, pengungkapan, atau kerusakan.</p>
      <h2>Pertanyaan</h2>
      <p>Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini, silakan hubungi kami melalui Contact Support.</p>
    </PageLayout>
  );
}

export function TermsOfService() {
  return (
    <PageLayout title="Terms of Service">
      <p>Syarat dan Ketentuan Layanan ini mengatur penggunaan Anda atas website dan layanan maklon Dairy Nutrition Alami (DNA).</p>
      <h2>Penerimaan Syarat</h2>
      <p>Dengan mengakses atau menggunakan situs web kami, Anda menyetujui untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari ketentuan ini, Anda tidak boleh menggunakan layanan kami.</p>
      <h2>Layanan Maklon</h2>
      <p>Layanan maklon kami tunduk pada perjanjian kontrak terpisah yang akan ditandatangani antara DNA dan pihak klien. Estimasi biaya, jadwal produksi, dan kewajiban kerahasiaan (NDA) akan diuraikan secara rinci dalam kontrak tersebut.</p>
      <h2>Kekayaan Intelektual</h2>
      <p>Kecuali disepakati lain dalam kontrak maklon, semua formulasi inovatif, desain proses, dan kekayaan intelektual yang dikembangkan oleh tim R&D DNA tetap menjadi milik DNA. Formulasi custom yang dikembangkan secara eksklusif untuk klien akan diatur sesuai perjanjian yang berlaku.</p>
      <h2>Batasan Tanggung Jawab</h2>
      <p>Kami berusaha sebaik mungkin untuk memberikan layanan berkualitas tinggi, namun kami tidak bertanggung jawab atas kerugian tidak langsung, insidental, atau konsekuensial yang timbul dari penggunaan layanan kami.</p>
    </PageLayout>
  );
}

export function ManufacturingStandards() {
  return (
    <PageLayout title="Manufacturing Standards">
      <p>Di Dairy Nutrition Alami (DNA), kami memegang teguh standar manufaktur tertinggi untuk memastikan kualitas, keamanan, dan efektivitas setiap produk yang kami hasilkan.</p>
      <h2>Fasilitas Produksi</h2>
      <p>Fasilitas kami dilengkapi dengan mesin-mesin modern dan teknologi cold-press terkini untuk menjaga stabilitas bahan aktif dan nutrisi. Ruang produksi kami dikontrol ketat dalam hal suhu, kelembaban, dan tingkat kebersihan (Clean Room Standard).</p>
      <h2>Quality Control (QC) & Quality Assurance (QA)</h2>
      <p>Tim QC & QA kami melakukan pengujian berlapis mulai dari bahan baku hingga produk jadi. Ini mencakup tes organoleptik, stabilitas, kekerasan tablet, dan tingkat kelembaban (Moisture Content).</p>
      <h2>Bahan Baku Premium</h2>
      <p>Kami hanya bekerja sama dengan pemasok bahan baku yang dapat memberikan Certificate of Analysis (CoA) untuk memastikan kemurnian dan keamanan bahan baku dairy, ekstrak herbal, dan nutrisi tambahan.</p>
      <h2>Keamanan Pangan</h2>
      <p>Kami mematuhi dan mengimplementasikan standar keamanan pangan yang diatur oleh otoritas berwenang, termasuk prinsip-prinsip Hazard Analysis and Critical Control Points (HACCP) dan Good Manufacturing Practices (GMP).</p>
    </PageLayout>
  );
}

export function Certifications() {
  return (
    <PageLayout title="Certifications">
      <p>Sertifikasi adalah komitmen kami terhadap kualitas, keamanan, dan kepatuhan dalam industri pengolahan pangan dan nutrasetika.</p>
      <h2>CPPOB (Cara Produksi Pangan Olahan yang Baik)</h2>
      <p>Fasilitas kami dirancang dan dioperasikan sesuai dengan standar CPPOB dari BPOM RI, memastikan bahwa setiap permen dan lozenges diproduksi dengan higienis dan sesuai spesifikasi mutu.</p>
      <h2>Sertifikasi Halal</h2>
      <p>Produk kami diolah menggunakan bahan baku yang aman, tidak mengandung turunan berbahaya, serta mengikuti prosedur yang telah disertifikasi Halal oleh BPJPH dan MUI.</p>
      <h2>ISO & HACCP (Proses)</h2>
      <p>Kami sedang dalam proses menuju sertifikasi sistem manajemen kualitas dan keamanan pangan internasional untuk terus meningkatkan kepercayaan mitra B2B kami.</p>
      <p>Tim Legal dan Regulatori kami juga memfasilitasi pendampingan proses pendaftaran izin edar (BPOM), Halal, dan Hak Kekayaan Intelektual (HAKI) merek untuk setiap produk klien maklon kami.</p>
    </PageLayout>
  );
}

export function ContactSupport() {
  return (
    <PageLayout title="Contact Support">
      <p>Tim Support DNA siap membantu Anda menyelesaikan masalah teknis, mendiskusikan kelengkapan dokumen maklon, atau menjawab pertanyaan lain.</p>
      <div className="bg-surface-container p-8 rounded-2xl border border-outline-variant/30 mt-8">
        <h2 className="text-xl font-bold mb-6">Hubungi Kami Secara Langsung</h2>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-container text-primary rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            </div>
            <div>
              <h3 className="font-bold text-on-surface">Telepon / WhatsApp</h3>
              <a href="https://wa.me/6282225613106" className="text-primary hover:underline hover:text-primary/80 transition-colors">+62 822-2561-3106</a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-container text-primary rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg>
            </div>
            <div>
              <h3 className="font-bold text-on-surface">Email</h3>
              <a href="mailto:dairynutritionalami@gmail.com" className="text-primary hover:underline hover:text-primary/80 transition-colors">dairynutritionalami@gmail.com</a>
            </div>
          </div>
          
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 bg-primary-container text-primary rounded-full flex items-center justify-center shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            </div>
            <div>
              <h3 className="font-bold text-on-surface">Lokasi Pabrik</h3>
              <a href="https://maps.app.goo.gl/KBH1McbbUbe2DsHF9" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors block mt-1">CV Dairy Nutrition Alami<br />Jl.Nanggulan Mendut Petronalan,<br />Kel. Banjaroyo, Kec. Kalibawang,<br />Kab Kulon Progo, Daerah Istimewa Yogyakarta 55672.</a>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
