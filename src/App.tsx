import { useState, useEffect } from 'react';
import { ActiveTab, ServiceItem, NewsItem, GalleryItem, StaffMember, ServiceApplication } from './types';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomeView from './components/HomeView';
import ProfilView from './components/ProfilView';
import LayananView from './components/LayananView';
import GaleriView from './components/GaleriView';
import ContactModal from './components/ContactModal';
import ServiceDetailModal from './components/ServiceDetailModal';
import { Search, X, ArrowRight, HelpCircle } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Beranda);
  const [contactOpen, setContactOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [applications, setApplications] = useState<ServiceApplication[]>([]);

  // Load applications from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('desa_mandiri_applications');
      if (stored) {
        setApplications(JSON.parse(stored));
      }
    } catch (e) {
      console.error('Error loading applications:', e);
    }
  }, []);

  // Services data
  const services: ServiceItem[] = [
    {
      id: 'srv-sku',
      title: 'Surat Keterangan Usaha (SKU)',
      subtitle: 'Legalitas Usaha Mikro/Kecil',
      description: 'Diberikan kepada warga pemilik usaha mikro, kecil, atau menengah (UMKM) di wilayah desa untuk keperluan administrasi perbankan, perizinan, atau pengajuan bantuan pengembangan usaha.',
      requirements: [
        'Kartu Tanda Penduduk (KTP) asli & fotokopi pemohon',
        'Kartu Keluarga (KK) asli & fotokopi',
        'Surat Pengantar dari Ketua RT/RW setempat',
        'Foto lokasi usaha atau surat pernyataan kepemilikan usaha',
      ],
      duration: '1 Hari Kerja',
      cost: 'Rp 0 (Gratis)',
      iconName: 'file-text',
    },
    {
      id: 'srv-pindah',
      title: 'Surat Keterangan Pindah Domisili',
      subtitle: 'Mutasi Penduduk Antar Daerah',
      description: 'Layanan administrasi kependudukan untuk warga yang berniat pindah domisili tinggal, baik keluar dusun, keluar desa, antar kecamatan, maupun antar kabupaten/provinsi.',
      requirements: [
        'Kartu Keluarga (KK) asli (akan ditarik untuk pembaruan)',
        'Kartu Tanda Penduduk (KTP) asli dari warga yang pindah',
        'Surat Pengantar RT/RW dengan mencantumkan alamat tujuan pindah secara lengkap',
        'Pasfoto terbaru ukuran 3x4 (2 lembar)',
      ],
      duration: '2 Hari Kerja',
      cost: 'Rp 0 (Gratis)',
      iconName: 'users',
    },
    {
      id: 'srv-kk',
      title: 'Pembuatan Kartu Keluarga (KK) Baru',
      subtitle: 'Pendaftaran Anggota Keluarga Baru',
      description: 'Pelayanan pengurusan Kartu Keluarga (KK) baru akibat pernikahan baru, pecah KK mandiri, penambahan anggota keluarga (kelahiran), atau penggantian KK karena rusak/hilang.',
      requirements: [
        'Surat Pengantar RT/RW setempat',
        'Buku Nikah / Akta Perkawinan (bagi keluarga baru)',
        'Akta Kelahiran anggota baru (jika karena kelahiran)',
        'KK lama yang asli (jika karena pemisahan/penambahan)',
        'Surat Kehilangan dari Kepolisian (jika KK hilang asli)',
      ],
      duration: '3 Hari Kerja',
      cost: 'Rp 0 (Gratis)',
      iconName: 'home',
    },
    {
      id: 'srv-sktm',
      title: 'Surat Keterangan Tidak Mampu (SKTM)',
      subtitle: 'Bantuan Sosial & Keringanan Pendidikan',
      description: 'Surat resmi yang dikeluarkan oleh desa untuk menyatakan bahwa pemohon termasuk dalam golongan masyarakat ekonomi lemah untuk pengajuan beasiswa, BPJS Kesehatan PBI, atau keringanan biaya rumah sakit.',
      requirements: [
        'Kartu Tanda Penduduk (KTP) asli & fotokopi',
        'Kartu Keluarga (KK) asli & fotokopi',
        'Surat Pengantar RT/RW dengan keterangan "Benar-benar Kurang Mampu"',
        'Surat Pernyataan Penghasilan bermaterai (bisa dibuat di kantor desa)',
        'Fotokopi Kartu Indonesia Pintar (KIP) / PKH (jika ada)',
      ],
      duration: '1 Hari Kerja',
      cost: 'Rp 0 (Gratis)',
      iconName: 'alert-circle',
    },
  ];

  // News data
  const news: NewsItem[] = [
    {
      id: 'news-1',
      category: 'Pembangunan',
      date: '12 Maret 2024',
      title: 'Musyawarah Perencanaan Pembangunan Desa (Musrenbangdes) Tahun Anggaran 2025',
      summary: 'Warga bersama jajaran aparatur desa berkumpul menyusun prioritas infrastruktur pengaspalan jalan dusun dan peningkatan ketahanan pangan lokal.',
      content: `Pemerintah Desa Cikidang menggelar Musyawarah Perencanaan Pembangunan Desa (Musrenbangdes) dalam rangka penyusunan Rencana Kerja Pemerintah Desa (RKP-Desa) untuk Tahun Anggaran 2025 mendatang. Kegiatan ini bertempat di Balai Pertemuan Utama Kantor Kepala Desa.\n\nAcara dihadiri oleh Kepala Desa, jajaran BPD, Ketua RT/RW, tokoh masyarakat, perwakilan pemuda karang taruna, serta perwakilan kelompok tani. Pembahasan difokuskan pada pengalokasian dana desa untuk perbaikan jalan penghubung Dusun Krajan yang saat ini kondisinya berlubang, pemeliharaan saluran irigasi pertanian utama Kali Gede, serta penyediaan bibit bersubsidi untuk mendukung ketahanan pangan.\n\nKepala Desa Joko Susilo menegaskan bahwa prioritas pembangunan akan selalu mengedepankan asas kemanfaatan bagi warga terbanyak dan transparansi laporan anggaran keuangan. "Seluruh usulan dari RT akan kami saring berdasarkan tingkat kemendesakan," ujarnya dalam sambutan pembuka.`,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRDgXBMfGbH8RShlZvfwfl50kOo36ieDeT9GbK2klFTUb5ttkTsrYcNfY5Gc9O7x5-n4LuxLNJsl5wFXhpSK-zmasmevwgmgpsxlELo0YXbLv4kfPkBJtnOyFXRvX16vhPAUpTlOOsiJwW-9PqtCqiV2GpBJCpjL7sJBKENQ5rYlAWND64YGP3r8g6o-e_1ZdobFDKX884U8wmvWk5e5dAw_EeiRjCAhwHGdAaZbciV3EI16i-Du-deieoQyybWmsTWxBpBo3RjJhP',
      author: 'Sri Wahyuni (Sekdes)',
    },
    {
      id: 'news-2',
      category: 'Kegiatan Warga',
      date: '8 Maret 2024',
      title: 'Aksi Gotong Royong Massal Warga Bersihkan Saluran Irigasi Sambut Musim Tanam',
      summary: 'Ratusan petani turun langsung membersihkan gulma dan sedimen lumpur guna memastikan distribusi aliran air persawahan berjalan lancar.',
      content: `Menyambut datangnya musim tanam padi serentak pada bulan April, ratusan warga dari tiga rukun warga di Desa Cikidang kompak melaksanakan kerja bakti gotong royong massal membersihkan aliran irigasi Kali Gede sepanjang dua kilometer.\n\nKegiatan yang digagas oleh Gabungan Kelompok Tani (Gapoktan) bekerja sama dengan pemerintah desa ini bertujuan untuk membersihkan tumbuhan liar, sampah ranting kayu, serta menguras tumpukan sedimen lumpur yang menghambat kelancaran laju air. Aliran irigasi Kali Gede merupakan urat nadi pertanian utama yang mengairi sawah di wilayah Desa Cikidang.\n\n"Jika irigasi lancar, hasil panen padi melimpah dan risiko banjir luapan di musim penghujan dapat diantisipasi secara optimal," ungkap ketua Gapoktan. Gotong royong diakhiri dengan makan siang bersama tumpeng nasi kuning di pinggir pematang sawah yang mempererat tali silaturahmi antarwarga.`,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhsaCEOxh-1PrHvXmsH4E6u1MuB24oTsAOryyGwYxcF-zA7ZE-6qlkJ0FczGhqToTHekrQcpVc_uyPR2lIlBUQydPcuKkNfZC3jV_LcfcCyMGJOwZRFnj2wNCEa_2sSrrsnWvl6FqKKAjz60odA5cd0nVZhS0SOci4G43428rmSZ0VZxW6gsGgxNGqAj98YKY5ekGcv-Rnko4ZkT3htgogLqXrE8cb4WLwOYu6_AdYCSUfup5CnCkaLgW5yGgZXIcc9T4jClKiXCEC',
      author: 'Sri Wahyuni (Sekdes)',
    },
    {
      id: 'news-3',
      category: 'Kesehatan',
      date: '1 Maret 2024',
      title: 'Pemeriksaan Kesehatan Gratis di Posyandu Melati Lansia dan Balita Dusun Harapan',
      summary: 'Kader posyandu berkolaborasi dengan bidan puskesmas melakukan penimbangan balita, imunisasi dasar, serta tensi darah bagi lansia.',
      content: `Kegiatan rutin bulanan Posyandu Melati yang diselenggarakan di RW 03 Dusun Harapan berlangsung tertib dan meriah. Layanan kesehatan kali ini memfokuskan pada pemantauan tumbuh kembang balita untuk mencegah stunting, pemberian makanan tambahan (PMT) bergizi, serta pemeriksaan kesehatan dasar bagi warga lanjut usia (lansia).\n\nBidan Desa bersama para kader kesehatan memberikan layanan berupa penimbangan berat badan, pengukuran tinggi badan balita, imunisasi polio, serta penyuluhan gizi bagi ibu hamil. Sementara bagi warga lansia, disediakan layanan cek tekanan darah gratis, penimbangan, dan pembagian suplemen vitamin.\n\nKader posyandu mengapresiasi tingginya antusiasme ibu-ibu yang membawa bayinya. "Pencegahan stunting dimulai dari lingkungan terkecil yaitu keluarga sendiri. Kami siap mendampingi warga menjaga kesehatannya," tutur Bidan Desa.`,
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdg_m-hCltVFv-S-_8Jxg0GyOiCPlAVXfFdklccwGSC3lK1lTrFvk_RRSZDMeZT5DAU64t5iGn5STQzgAwdfBKJ1EMDI2AvaK3wtUO1Yb8SfnGoU9XO1EM5drsFylPJPoqY_uqc28fnHdmd9sTLVysC-ZqAri1nPEmK4uzzPIV-AqGOTCGh1TyXgfvldzeANXF0WdZTxTFuD9hIonmnjGzBzow4BD86J4-y_ptjGT-GbEdhPaCI4WmkJchoaLnBZ23xm_A-kud1BIR',
      author: 'Diana Lestari (Kasi Pelayanan)',
    },
  ];

  // Gallery items data
  const galleryItems: GalleryItem[] = [
    {
      id: 'gal-1',
      title: 'Gotong Royong Irigasi Kali Gede',
      description: 'Masyarakat bahu-membahu menyambut musim tanam padi dengan membersihkan sedimen lumpur saluran irigasi Kali Gede secara gotong royong.',
      category: 'gotong-royong',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhsaCEOxh-1PrHvXmsH4E6u1MuB24oTsAOryyGwYxcF-zA7ZE-6qlkJ0FczGhqToTHekrQcpVc_uyPR2lIlBUQydPcuKkNfZC3jV_LcfcCyMGJOwZRFnj2wNCEa_2sSrrsnWvl6FqKKAjz60odA5cd0nVZhS0SOci4G43428rmSZ0VZxW6gsGgxNGqAj98YKY5ekGcv-Rnko4ZkT3htgogLqXrE8cb4WLwOYu6_AdYCSUfup5CnCkaLgW5yGgZXIcc9T4jClKiXCEC',
    },
    {
      id: 'gal-2',
      title: 'Pentas Seni Tari Tradisional',
      description: 'Pelestarian warisan budaya lokal melalui kesenian tari nusantara yang dipentaskan oleh anak-anak desa pada perayaan malam kesenian HUT RI.',
      category: 'budaya',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRDgXBMfGbH8RShlZvfwfl50kOo36ieDeT9GbK2klFTUb5ttkTsrYcNfY5Gc9O7x5-n4LuxLNJsl5wFXhpSK-zmasmevwgmgpsxlELo0YXbLv4kfPkBJtnOyFXRvX16vhPAUpTlOOsiJwW-9PqtCqiV2GpBJCpjL7sJBKENQ5rYlAWND64YGP3r8g6o-e_1ZdobFDKX884U8wmvWk5e5dAw_EeiRjCAhwHGdAaZbciV3EI16i-Du-deieoQyybWmsTWxBpBo3RjJhP',
    },
    {
      id: 'gal-3',
      title: 'Pengaspalan Jalan Dusun Krajan',
      description: 'Pengaspalan akses jalan desa guna mempermudah mobilitas pertanian, sarana transportasi anak sekolah, dan kelancaran sirkulasi ekonomi warga.',
      category: 'infrastruktur',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwHKfy010NCaFwTyQyBzs8Wat75QcsjJS7dtkIWFrKy3D_8ufWlWC7SDUCN-Mb9ATJBHRlsDAgPP-YyXSbls9I3KDrAtqMS4YYLM2j6hThY_unpQ2AfV1z1pot6B-QLXKS5aD2fz9WRbvJQ_BlpGLrZrQYZhKYMMotgFxvEqV6e3gNz7qefwd1cJ0rOX7Fm4aJWnWEOFplxVNqoy5V8K59_qc4soXF6FQHKKRpen2dgvjUg2Vv4w0l9ghLDFpkNdmqihqN-DCbcYEe',
    },
    {
      id: 'gal-4',
      title: 'Layanan Imunisasi Balita Posyandu',
      description: 'Pemberian makanan tambahan (PMT) bergizi tinggi dan imunisasi polio berkala di Dusun Harapan untuk mewujudkan generasi desa bebas stunting.',
      category: 'pendidikan',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdg_m-hCltVFv-S-_8Jxg0GyOiCPlAVXfFdklccwGSC3lK1lTrFvk_RRSZDMeZT5DAU64t5iGn5STQzgAwdfBKJ1EMDI2AvaK3wtUO1Yb8SfnGoU9XO1EM5drsFylPJPoqY_uqc28fnHdmd9sTLVysC-ZqAri1nPEmK4uzzPIV-AqGOTCGh1TyXgfvldzeANXF0WdZTxTFuD9hIonmnjGzBzow4BD86J4-y_ptjGT-GbEdhPaCI4WmkJchoaLnBZ23xm_A-kud1BIR',
    },
    {
      id: 'gal-5',
      title: 'Pojok Baca Dusun Kreatif',
      description: 'Fasilitas perpustakaan kecil beralaskan tikar bambu untuk menumbuhkan minat membaca bagi anak-anak usia dini selepas pulang sekolah.',
      category: 'pendidikan',
      image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800&h=500',
    },
    {
      id: 'gal-6',
      title: 'Rapat Koordinasi RT dan RW Desa',
      description: 'Musyawarah kerukunan berkala tingkat rukun tetangga untuk membahas keamanan lingkungan malam hari dan iuran kebersihan mandiri.',
      category: 'gotong-royong',
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=500',
    },
  ];

  // Staff members data
  const staff: StaffMember[] = [
    {
      id: 'stf-1',
      name: 'Joko Susilo, S.Pd.',
      role: 'Kepala Desa',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200',
      description: 'Mewujudkan kemandirian pangan, ketertiban hukum, serta akuntabilitas tata laksana birokrasi pemerintahan Desa Cikidang yang berbudaya luhur.',
    },
    {
      id: 'stf-2',
      name: 'Sri Wahyuni, S.E.',
      role: 'Sekretaris Desa',
      image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200',
      description: 'Menyusun pelaporan keuangan terpadu, mengarsipkan surat menyurat resmi, serta menjembatani sinergi antar seksi kerja pelayanan publik.',
    },
    {
      id: 'stf-3',
      name: 'Bambang Wijaya',
      role: 'Kaur Keuangan',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200&h=200',
      description: 'Melaksanakan penganggaran Anggaran Pendapatan dan Belanja Desa (APBDes) secara teliti, transparan, serta menghindari risiko penyelewengan.',
    },
    {
      id: 'stf-4',
      name: 'Diana Lestari, A.Md.',
      role: 'Kasi Pelayanan',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200',
      description: 'Melayani urusan administrasi kependudukan harian warga (KTP, KK, Surat Pindah, SKTM) secara responsif, sopan, bersahabat, dan gratis.',
    },
  ];

  // Handle adding a simulated online service request
  const handleAddApplication = (newApp: ServiceApplication) => {
    const updated = [newApp, ...applications];
    setApplications(updated);
    try {
      localStorage.setItem('desa_mandiri_applications', JSON.stringify(updated));
    } catch (e) {
      console.error('Error saving application:', e);
    }
  };

  // Handle cancelling a simulated application
  const handleCancelApplication = (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin membatalkan/menghapus berkas pengajuan ini?')) {
      const updated = applications.filter((app) => app.id !== id);
      setApplications(updated);
      try {
        localStorage.setItem('desa_mandiri_applications', JSON.stringify(updated));
      } catch (e) {
        console.error('Error saving application:', e);
      }
    }
  };

  // Fuzzy Search results
  const getSearchResults = () => {
    if (!searchQuery.trim()) return [];
    const query = searchQuery.toLowerCase();
    
    const results: { type: string; title: string; desc: string; action: () => void }[] = [];

    // Search services
    services.forEach((s) => {
      if (s.title.toLowerCase().includes(query) || s.description.toLowerCase().includes(query)) {
        results.push({
          type: 'Layanan Publik',
          title: s.title,
          desc: s.description,
          action: () => {
            setActiveTab(ActiveTab.Layanan);
            setSelectedService(s);
            setSearchOpen(false);
          },
        });
      }
    });

    // Search news
    news.forEach((n) => {
      if (n.title.toLowerCase().includes(query) || n.summary.toLowerCase().includes(query)) {
        results.push({
          type: 'Kabar/Berita',
          title: n.title,
          desc: n.summary,
          action: () => {
            setActiveTab(ActiveTab.Beranda);
            setSearchOpen(false);
          },
        });
      }
    });

    // Search staff
    staff.forEach((st) => {
      if (st.name.toLowerCase().includes(query) || st.role.toLowerCase().includes(query)) {
        results.push({
          type: 'Aparatur Desa',
          title: st.name,
          desc: `Menjabat sebagai ${st.role}. "${st.description}"`,
          action: () => {
            setActiveTab(ActiveTab.Profil);
            setSearchOpen(false);
          },
        });
      }
    });

    return results;
  };

  const searchResults = getSearchResults();

  return (
    <div className="min-h-screen bg-background text-on-background font-sans batik-bg selection:bg-secondary/30 relative">
      
      {/* Top Navigation Bar & Announcement */}
      <Navigation
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onOpenContact={() => setContactOpen(true)}
        onOpenSearch={() => {
          setSearchQuery('');
          setSearchOpen(true);
        }}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />

      {/* Main Container spacing for fixed top bar (navbar height + top spacing + gap matching top spacing) */}
      <main className="pt-[120px] md:pt-[160px] pb-16 min-h-[calc(100vh-400px)]">
        {activeTab === ActiveTab.Beranda && (
          <HomeView
            setActiveTab={setActiveTab}
            services={services}
            news={news}
            onSelectService={(service) => setSelectedService(service)}
          />
        )}

        {activeTab === ActiveTab.Profil && (
          <ProfilView staff={staff} />
        )}

        {activeTab === ActiveTab.Layanan && (
          <LayananView
            services={services}
            applications={applications}
            onSelectService={(service) => setSelectedService(service)}
            onCancelApplication={handleCancelApplication}
          />
        )}

        {activeTab === ActiveTab.Galeri && (
          <GaleriView galleryItems={galleryItems} />
        )}
      </main>

      {/* Footer component */}
      <Footer
        setActiveTab={setActiveTab}
        onOpenContact={() => setContactOpen(true)}
      />

      {/* Contact Form Modal */}
      <ContactModal
        isOpen={contactOpen}
        onClose={() => setContactOpen(false)}
      />

      {/* Service Submission & Details Modal */}
      <ServiceDetailModal
        isOpen={selectedService !== null}
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onAddApplication={handleAddApplication}
      />

      {/* Interactive Global Search Overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[150] flex items-start justify-center p-4 pt-16 md:pt-24">
          <div className="bg-surface rounded-xl border border-outline-variant max-w-2xl w-full overflow-hidden shadow-2xl relative animate-scale-up flex flex-col max-h-[75vh]">
            
            {/* Search Input Area */}
            <div className="p-4 border-b border-outline-variant flex items-center gap-3">
              <Search className="w-5 h-5 text-primary shrink-0" />
              <input
                type="text"
                autoFocus
                placeholder="Cari berita, kependudukan, staf aparatur..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-grow bg-transparent text-sm md:text-base outline-none font-sans text-on-surface"
              />
              <button 
                onClick={() => setSearchOpen(false)}
                className="text-on-surface-variant hover:text-primary p-1.5 rounded-full hover:bg-surface-container-low transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Results Area */}
            <div className="p-4 overflow-y-auto flex-grow max-h-[50vh] bg-white">
              {searchQuery.trim() === '' ? (
                <div className="text-center py-8 text-on-surface-variant space-y-2">
                  <HelpCircle className="w-10 h-10 text-on-surface-variant/40 mx-auto" />
                  <p className="text-sm font-semibold">Mulai Mengetik untuk Mencari</p>
                  <p className="text-xs max-w-xs mx-auto">Tuliskan kata kunci seperti "Usaha", "Imunisasi", "Seksi Pelayanan", atau "KTP" untuk mencari berkas terkait.</p>
                </div>
              ) : searchResults.length === 0 ? (
                <div className="text-center py-8 text-on-surface-variant">
                  <p className="text-sm font-semibold">Tidak Ada Hasil yang Cocok</p>
                  <p className="text-xs mt-1">Coba sesuaikan ejaan kata kunci Anda atau hubungi langsung nomor kontak sekretariat.</p>
                </div>
              ) : (
                <div className="space-y-3">
                  <p className="text-[10px] font-black tracking-wider text-secondary uppercase px-1">Ditemukan {searchResults.length} Hasil</p>
                  {searchResults.map((result, idx) => (
                    <button
                      key={idx}
                      onClick={result.action}
                      className="w-full text-left p-3.5 rounded-lg border border-outline-variant hover:border-primary hover:bg-primary/5 transition-all flex justify-between items-center group cursor-pointer"
                    >
                      <div className="space-y-1 pr-4">
                        <span className="inline-block bg-primary/10 text-primary text-[9px] font-black px-2 py-0.5 rounded uppercase tracking-wider font-sans">
                          {result.type}
                        </span>
                        <h4 className="font-serif text-sm font-bold text-on-surface group-hover:text-primary transition-colors">
                          {result.title}
                        </h4>
                        <p className="font-sans text-xs text-on-surface-variant line-clamp-1">
                          {result.desc}
                        </p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all shrink-0" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="bg-surface-container-low p-3.5 border-t border-outline-variant text-center text-[10px] text-on-surface-variant/80 uppercase tracking-wider font-semibold">
              Gunakan Tombol ESC atau klik tombol X untuk menutup
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
