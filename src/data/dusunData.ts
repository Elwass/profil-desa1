export interface UMKMItem {
  name: string;
  category: string;
  owner: string;
  desc: string;
}

export interface GalleryPhoto {
  title: string;
  desc: string;
  image: string;
}

export interface StatItem {
  label: string;
  value: number;
  percentage: number;
}

export interface DusunData {
  id: string;
  name: string;
  headOfDusun: string;
  color: string;
  hoverColor: string;
  population: number;
  kk: number;
  area: number; // in Hektar
  description: string;
  statistics: StatItem[];
  umkm: UMKMItem[];
  gallery: GalleryPhoto[];
  svgPath: string;
  textPosition: { x: number; y: number };
}

export const dusunList: DusunData[] = [
  {
    id: 'cikidang',
    name: 'Dusun Cikidang (Pusat)',
    headOfDusun: 'Bapak Sudarsono',
    color: 'fill-[#0a4c3e]/10 stroke-[#0a4c3e]/30 hover:fill-[#0a4c3e]/20',
    hoverColor: '#0a4c3e', // Primary Green
    population: 1845,
    kk: 520,
    area: 45,
    description: 'Dusun Cikidang merupakan pusat administratif dan ekonomi Desa Cikidang. Di sini terdapat Kantor Kepala Desa, gedung sekolah utama, puskesmas pembantu, serta pusat perdagangan warga yang aktif setiap hari.',
    statistics: [
      { label: 'Usia Produktif (15-64)', value: 1250, percentage: 67 },
      { label: 'Pertanian & Perkebunan', value: 450, percentage: 24 },
      { label: 'Pendidikan Terakhir SMA+', value: 890, percentage: 48 },
    ],
    umkm: [
      { name: 'Kripik Tempe Cikidang', category: 'Kuliner', owner: 'Ibu Ratna', desc: 'Produksi keripik tempe renyah dengan resep turun-temurun tanpa bahan pengawet.' },
      { name: 'Bengkel Mandiri Jaya', category: 'Jasa', owner: 'Pak Joko', desc: 'Pelayanan servis motor cepat, ganti oli, dan penyediaan suku cadang berkualitas.' },
      { name: 'Warung Kelontong Ibu Sri', category: 'Perdagangan', owner: 'Ibu Sri', desc: 'Menyediakan sembako dan kebutuhan rumah tangga harian dengan harga bersahabat.' }
    ],
    gallery: [
      { 
        title: 'Kantor Balai Desa Cikidang', 
        desc: 'Pelayanan administrasi warga yang ramah, nyaman, dan cepat di balai pertemuan utama.', 
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800&h=500' 
      },
      { 
        title: 'Pasar Rakyat Dusun Pusat', 
        desc: 'Aktivitas jual beli komoditas lokal dan kerajinan tangan hasil karya warga desa.', 
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDRDgXBMfGbH8RShlZvfwfl50kOo36ieDeT9GbK2klFTUb5ttkTsrYcNfY5Gc9O7x5-n4LuxLNJsl5wFXhpSK-zmasmevwgmgpsxlELo0YXbLv4kfPkBJtnOyFXRvX16vhPAUpTlOOsiJwW-9PqtCqiV2GpBJCpjL7sJBKENQ5rYlAWND64YGP3r8g6o-e_1ZdobFDKX884U8wmvWk5e5dAw_EeiRjCAhwHGdAaZbciV3EI16i-Du-deieoQyybWmsTWxBpBo3RjJhP' 
      }
    ],
    svgPath: 'M 160 220 L 250 180 L 320 220 L 280 290 L 240 295 L 180 300 Z',
    textPosition: { x: 240, y: 245 }
  },
  {
    id: 'mekarsari',
    name: 'Dusun Mekarsari',
    headOfDusun: 'Bapak Hartono',
    color: 'fill-[#0a4c3e]/15 stroke-[#0a4c3e]/30 hover:fill-[#0a4c3e]/25',
    hoverColor: '#0a4c3e', // Primary Green
    population: 1210,
    kk: 340,
    area: 58,
    description: 'Dusun Mekarsari terkenal sebagai lumbung padi organik di Desa Cikidang. Wilayah ini didominasi oleh sawah terasering yang subur dan dialiri oleh mata air pegunungan yang jernih, serta memiliki kelompok tani kopi yang maju.',
    statistics: [
      { label: 'Usia Produktif (15-64)', value: 780, percentage: 64 },
      { label: 'Petani Padi & Kopi', value: 850, percentage: 70 },
      { label: 'Pendidikan Terakhir SMA+', value: 410, percentage: 33 },
    ],
    umkm: [
      { name: 'Kopi Arabika Mekarsari', category: 'Perkebunan', owner: 'Pak Gunawan', desc: 'Biji kopi arabika pilihan dari perkebunan lereng bukit dengan proses pasca-panen higienis.' },
      { name: 'Beras Organik "Mekar Sari"', category: 'Pertanian', owner: 'Kelompok Tani 2', desc: 'Beras sehat tanpa pupuk kimia, sangat pulen, wangi, dan aman dikonsumsi harian.' },
    ],
    gallery: [
      { 
        title: 'Persawahan Terasering Indah', 
        desc: 'Hamparan sawah berundak yang menjadi paru-paru hijau sekaligus penyuplai pangan utama desa.', 
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhsaCEOxh-1PrHvXmsH4E6u1MuB24oTsAOryyGwYxcF-zA7ZE-6qlkJ0FczGhqToTHekrQcpVc_uyPR2lIlBUQydPcuKkNfZC3jV_LcfcCyMGJOwZRFnj2wNCEa_2sSrrsnWvl6FqKKAjz60odA5cd0nVZhS0SOci4G43428rmSZ0VZxW6gsGgxNGqAj98YKY5ekGcv-Rnko4ZkT3htgogLqXrE8cb4WLwOYu6_AdYCSUfup5CnCkaLgW5yGgZXIcc9T4jClKiXCEC' 
      },
      { 
        title: 'Panen Kopi Bersama', 
        desc: 'Para petani memilah buah kopi ceri merah berkualitas untuk didistribusikan ke tingkat kota.', 
        image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=800&h=500' 
      }
    ],
    svgPath: 'M 220 50 L 450 50 L 450 160 L 320 220 L 250 180 Z',
    textPosition: { x: 340, y: 120 }
  },
  {
    id: 'sukasari',
    name: 'Dusun Sukasari',
    headOfDusun: 'Bapak Ahmad Fauzi',
    color: 'fill-[#0a4c3e]/5 stroke-[#0a4c3e]/30 hover:fill-[#0a4c3e]/15',
    hoverColor: '#0a4c3e', // Primary Green
    population: 980,
    kk: 275,
    area: 52,
    description: 'Dusun Sukasari terletak di kawasan perbukitan utara. Dusun ini melestarikan hutan bambu adat yang rimbun dan memproduksi berbagai kerajinan anyaman bambu, gula aren tradisional, serta kesenian gamelan lokal.',
    statistics: [
      { label: 'Usia Produktif (15-64)', value: 610, percentage: 62 },
      { label: 'Pengrajin Bambu & Gula Aren', value: 390, percentage: 40 },
      { label: 'Pendidikan Terakhir SMA+', value: 340, percentage: 34 },
    ],
    umkm: [
      { name: 'Anyaman Bambu Sukasari', category: 'Kerajinan', owner: 'Ibu Aminah', desc: 'Tas, tampah, tudung saji, dan furniture dekoratif dari bambu apus pilihan berkualitas.' },
      { name: 'Gula Aren Semut Aren-Sari', category: 'Kuliner', owner: 'Pak Cecep', desc: 'Gula aren bubuk higienis yang mudah larut, sangat wangi, cocok untuk pemanis kopi modern.' }
    ],
    gallery: [
      { 
        title: 'Hutan Bambu Adat', 
        desc: 'Fasilitas pelestarian alam sekaligus sumber bahan baku kerajinan ramah lingkungan milik bersama.', 
        image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800&h=500' 
      },
      { 
        title: 'Proses Cetak Gula Aren', 
        desc: 'Pembuatan gula aren murni dari sadapan air nira kelapa secara tradisional menggunakan batok kelapa.', 
        image: 'https://images.unsplash.com/photo-1596450514735-111a2fe02935?auto=format&fit=crop&q=80&w=800&h=500' 
      }
    ],
    svgPath: 'M 50 50 L 220 50 L 250 180 L 160 220 L 50 180 Z',
    textPosition: { x: 140, y: 110 }
  },
  {
    id: 'pasirjaya',
    name: 'Dusun Pasirjaya',
    headOfDusun: 'Bapak Sugeng',
    color: 'fill-[#0a4c3e]/8 stroke-[#0a4c3e]/30 hover:fill-[#0a4c3e]/18',
    hoverColor: '#0a4c3e', // Primary Green
    population: 1150,
    kk: 310,
    area: 42,
    description: 'Dusun Pasirjaya membentang di sepanjang pinggiran aliran sungai utama. Dusun ini mengoptimalkan potensi perairan dengan budidaya ikan tawar seperti lele, mas, dan nila, serta mengelola destinasi wisata air sungai.',
    statistics: [
      { label: 'Usia Produktif (15-64)', value: 740, percentage: 64 },
      { label: 'Petambak & Nelayan Darat', value: 460, percentage: 40 },
      { label: 'Pendidikan Terakhir SMA+', value: 420, percentage: 36 },
    ],
    umkm: [
      { name: 'Abon Ikan Mas Pasirjaya', category: 'Kuliner', owner: 'Ibu Ningsih', desc: 'Abon gurih berprotein tinggi terbuat dari ikan mas segar bumbu rempah melimpah.' },
      { name: 'Budidaya Lele Sangkuriang', category: 'Perikanan', owner: 'Pak Slamet', desc: 'Penyedia bibit unggul dan lele siap konsumsi hasil kolam bioflok ramah lingkungan.' }
    ],
    gallery: [
      { 
        title: 'Kolam Bioflok Lele Dusun', 
        desc: 'Inovasi budidaya perikanan darat intensif yang bersih, efisien, dan dikelola karang taruna.', 
        image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCdg_m-hCltVFv-S-_8Jxg0GyOiCPlAVXfFdklccwGSC3lK1lTrFvk_RRSZDMeZT5DAU64t5iGn5STQzgAwdfBKJ1EMDI2AvaK3wtUO1Yb8SfnGoU9XO1EM5drsFylPJPoqY_uqc28fnHdmd9sTLVysC-ZqAri1nPEmK4uzzPIV-AqGOTCGh1TyXgfvldzeANXF0WdZTxTFuD9hIonmnjGzBzow4BD86J4-y_ptjGT-GbEdhPaCI4WmkJchoaLnBZ23xm_A-kud1BIR' 
      },
      { 
        title: 'Sungai Bersih Destinasi Edukasi', 
        desc: 'Komunitas peduli sungai menjaga kebersihan aliran air untuk wisata arung jeram mini.', 
        image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&q=80&w=800&h=500' 
      }
    ],
    svgPath: 'M 50 180 L 160 220 L 180 300 L 240 295 L 140 370 L 50 350 Z',
    textPosition: { x: 110, y: 280 }
  },
  {
    id: 'margamulya',
    name: 'Dusun Margamulya',
    headOfDusun: 'Bapak Rian Hidayat',
    color: 'fill-[#0a4c3e]/12 stroke-[#0a4c3e]/30 hover:fill-[#0a4c3e]/22',
    hoverColor: '#0a4c3e', // Primary Green
    population: 1420,
    kk: 395,
    area: 48,
    description: 'Dusun Margamulya merupakan episentrum UMKM kreatif di Desa Cikidang. Terkenal dengan pengrajin Batik Tulis khas Cikidang yang bermotif alam perbukitan, serta sentra pembuatan sandal kulit dan jajanan tradisional.',
    statistics: [
      { label: 'Usia Produktif (15-64)', value: 950, percentage: 67 },
      { label: 'Pelaku Usaha / Pengrajin', value: 540, percentage: 38 },
      { label: 'Pendidikan Terakhir SMA+', value: 580, percentage: 41 },
    ],
    umkm: [
      { name: 'Batik Tulis Khas Cikidang', category: 'Kerajinan', owner: 'Ibu Widya', desc: 'Batik halus dengan motif ornamen tanaman teh dan cengkeh khas pegunungan Cikidang.' },
      { name: 'Sandal Kulit Margamulya', category: 'Fashion', owner: 'Pak Hendra', desc: 'Sandal kulit sapi asli dikerjakan manual dengan jahitan rapi, awet, dan nyaman dipakai.' },
      { name: 'Kue Basah & Jajanan Pasar', category: 'Kuliner', owner: 'Ibu Tati', desc: 'Menyediakan aneka jajanan pasar higienis untuk konsumsi rapat desa dan acara keluarga.' }
    ],
    gallery: [
      { 
        title: 'Sentra Membatik Dusun', 
        desc: 'Pelatihan canting batik tulis yang dibina secara berkala untuk ibu-ibu PKK dusun.', 
        image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=800&h=500' 
      },
      { 
        title: 'Produksi Alas Kaki Kulit', 
        desc: 'Proses pengolahan bahan kulit sapi murni menjadi produk fesyen berkualitas berdaya saing tinggi.', 
        image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=800&h=500' 
      }
    ],
    svgPath: 'M 320 220 L 450 160 L 450 350 L 290 370 L 240 295 L 280 290 Z',
    textPosition: { x: 360, y: 290 }
  }
];
