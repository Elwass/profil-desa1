import { useState } from 'react';
import { Landmark, Users2, MapPin, Compass, ShieldCheck, Heart, History, Award, Quote, X, Calendar, Map, Sprout, Users } from 'lucide-react';
import { motion } from 'motion/react';
// @ts-ignore
import historyImageUrl from '../assets/images/village_twilight_1784134483476.jpg';
import { StaffMember } from '../types';
import InteractiveMap from './InteractiveMap';

interface ProfilViewProps {
  staff: StaffMember[];
}

export default function ProfilView({ staff }: ProfilViewProps) {
  const [activeTab, setActiveTab] = useState<'sejarah' | 'visi-misi' | 'struktur' | 'peta'>('sejarah');
  const [selectedStaff, setSelectedStaff] = useState<StaffMember | null>(null);

  const mapImageUrl = 'https://lh3.googleusercontent.com/aida-public/AB6AXuB0HhWFgLZNE1PVDQvHucTtI6LOnETQ4Elt4x0iJlKa1xJ9sHxWtVhxpJ_fZbg6YQeN6TcA84uSrUXWTfob5GY9ioTw8FvElo1xFPB_Axvhzp9jeGVOHKoJdDyVxhbsft8thU-n6G1a79DtV99tsA9QGbPm6jswTIK4MZZLHKDALnpmH4lFkqAeT_0C8hgkCS1R88tQM8DTbxgRD-L6mg-n7dJqzOg4Dn5GtsJQece5zpjD_9u0EBLZSbHXZubYovKdGQiz6jkvrIS1';

  // Sub-sections of History
  const historyTimeline = [
    { year: '1948', title: 'Pembentukan Desa', desc: 'Desa Cikidang resmi berdiri dipimpin oleh Bapak Ki Hajar Sutedjo sebagai Kepala Desa pertama.' },
    { year: '1975', title: 'Pembangunan Irigasi Utama', desc: 'Saluran irigasi Kali Gede selesai dibangun, mengairi lebih dari 150 hektar sawah tadah hujan.' },
    { year: '2012', title: 'Pelopor Mandiri Energi', desc: 'Menerima penghargaan nasional atas instalasi pembangkit mikro-hidro berbasis gotong royong.' },
    { year: '2024', title: 'Digitalisasi Pelayanan Publik', desc: 'Sistem Informasi Desa diresmikan untuk mempermudah pelayanan administrasi warga secara online.' },
  ];

  // Misi points
  const misiList = [
    { title: 'Pelayanan Responsif', text: 'Mewujudkan tata kelola pemerintahan desa yang bersih, transparan, dan berbasis teknologi informasi untuk pelayanan kependudukan yang cepat.' },
    { title: 'Kemandirian Ekonomi', text: 'Mengoptimalkan potensi pertanian, peternakan, dan BUMDes (Badan Usaha Milik Desa) untuk mendongkrak kesejahteraan ekonomi warga.' },
    { title: 'Infrastruktur Merata', text: 'Membangun prasarana jalan, sanitasi, dan akses air bersih yang berkualitas dan ramah lingkungan di setiap dusun.' },
    { title: 'Kelestarian Budaya', text: 'Memelihara kearifan lokal, adat gotong royong, serta membina kehidupan beragama yang harmonis dan rukun.' },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      
      {/* Header Profil */}
      <div className="text-center space-y-4">
        <span className="block font-sans text-xs font-bold text-secondary uppercase tracking-widest mb-2">
          Kenali Lebih Dekat
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary tracking-tight">
          Profil Resmi Desa Cikidang
        </h1>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Menjaga nilai sejarah, bersinergi dalam keragaman budaya, dan bergerak maju mewujudkan kemandirian masyarakat yang berkelanjutan.
        </p>
      </div>

      {/* Internal View Switcher */}
      <div className="grid grid-cols-2 md:flex md:flex-wrap md:justify-center gap-2 border-b border-outline-variant pb-1">
        <button
          onClick={() => setActiveTab('sejarah')}
          className={`font-sans text-sm font-bold px-4 py-3 rounded-t-lg transition-all border-b-2 cursor-pointer w-full md:w-auto flex justify-center items-center ${
            activeTab === 'sejarah'
              ? 'border-primary text-primary bg-white shadow-sm'
              : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <History className="w-4 h-4" /> Sejarah Desa
          </span>
        </button>
        <button
          onClick={() => setActiveTab('visi-misi')}
          className={`font-sans text-sm font-bold px-4 py-3 rounded-t-lg transition-all border-b-2 cursor-pointer w-full md:w-auto flex justify-center items-center ${
            activeTab === 'visi-misi'
              ? 'border-primary text-primary bg-white shadow-sm'
              : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <Compass className="w-4 h-4" /> Visi & Misi
          </span>
        </button>
        <button
          onClick={() => setActiveTab('struktur')}
          className={`font-sans text-sm font-bold px-4 py-3 rounded-t-lg transition-all border-b-2 cursor-pointer w-full md:w-auto flex justify-center items-center ${
            activeTab === 'struktur'
              ? 'border-primary text-primary bg-white shadow-sm'
              : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <Users2 className="w-4 h-4" /> Struktur Organisasi
          </span>
        </button>
        <button
          onClick={() => setActiveTab('peta')}
          className={`font-sans text-sm font-bold px-4 py-3 rounded-t-lg transition-all border-b-2 cursor-pointer w-full md:w-auto flex justify-center items-center ${
            activeTab === 'peta'
              ? 'border-primary text-primary bg-white shadow-sm'
              : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          <span className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4" /> Peta Wilayah
          </span>
        </button>
      </div>

      {/* Profil Tab Contents */}
      <div className="bg-white p-6 md:p-10 rounded-2xl border border-outline-variant shadow-soft">
        
        {/* Tab 1: Sejarah */}
        {activeTab === 'sejarah' && (
          <div className="space-y-16">
            {/* Bagian Atas: Babad Cerita & Foto Sejarah */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
              {/* Kolom Kiri: Narasi Sejarah (7/12) */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="lg:col-span-7 space-y-6"
              >
                <div className="space-y-2">
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary flex items-center gap-2">
                    <Landmark className="w-7 h-7 text-primary shrink-0" />
                    <span>Asal-Usul & Perkembangan Desa</span>
                  </h2>
                </div>
                
                {/* Paragraf 1 */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base font-bold text-secondary/90 tracking-wide">
                    1. Masa Perintisan & Babad Alas (1948)
                  </h3>
                  <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed text-justify">
                    Pada pertengahan tahun 1948, di bawah naungan semangat kemerdekaan Republik Indonesia yang baru bersemi, sekelompok pemuka masyarakat yang dipimpin oleh Bapak Ki Hajar Sutedjo meretas jalan di belantara lereng bukit curam. Wilayah yang kala itu berupa perbukitan kering bersemak belukar diubah secara bahu-membahu menjadi permukiman yang layak huni.
                  </p>
                </div>

                {/* Separator */}
                <div className="flex items-center gap-3 py-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant to-transparent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                  <div className="w-2 h-2 rotate-45 border border-primary/40 bg-white" />
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant to-transparent" />
                </div>

                {/* Paragraf 2 */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base font-bold text-secondary/90 tracking-wide">
                    2. Spirit Swadaya & Ikrar "Mandiri"
                  </h3>
                  <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed text-justify">
                    Pemberian nama <strong className="text-primary font-bold">"Desa Cikidang"</strong> dicetuskan bukan sekadar penanda geografis, melainkan sebuah ikrar sakral luhur para pendahulu. Nama ini menjadi tameng visi agar warga desa senantiasa berdaulat dalam pangan, teguh dalam gotong royong, mencukupi kebutuhan hidup secara kolektif, serta tidak rapuh bersandar pada bantuan luar.
                  </p>
                </div>

                {/* Separator */}
                <div className="flex items-center gap-3 py-2">
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant to-transparent" />
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                  <div className="w-2 h-2 rotate-45 border border-primary/40 bg-white" />
                  <div className="w-1.5 h-1.5 rounded-full bg-secondary/60" />
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-outline-variant to-transparent" />
                </div>

                {/* Paragraf 3 */}
                <div className="space-y-3">
                  <h3 className="font-serif text-base font-bold text-secondary/90 tracking-wide">
                    3. Era Kemakmuran Hijau & Kemandirian Energi
                  </h3>
                  <p className="font-sans text-sm md:text-base text-on-surface-variant leading-relaxed text-justify">
                    Titik balik kemakmuran tani tercapai pada tahun 1975 dengan selesainya pembangunan saluran irigasi Kali Gede yang mengairi lebih dari 150 hektar sawah tadah hujan. Selangkah lebih maju, pada tahun 2012, desa ini dinobatkan sebagai pelopor energi bersih nasional berkat instalasi pembangkit listrik mikro-hidro berbasis gotong royong warga, yang kini diintegrasikan ke sistem digital pelayanan warga.
                  </p>
                </div>
              </motion.div>

              {/* Kolom Kanan: Foto Arsip & Kutipan Sejarah (5/12) */}
              <div className="lg:col-span-5 space-y-6">
                {/* Foto Sejarah Vintage */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="bg-surface-container-low p-3 rounded-2xl border border-outline-variant shadow-soft group"
                >
                  <div className="relative h-64 md:h-72 rounded-xl overflow-hidden border border-primary/15">
                    {/* Dark filter & Vintage Sepia Tone */}
                    <div className="absolute inset-0 bg-primary/10 mix-blend-color z-10" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent z-10" />
                    <motion.img 
                      src={historyImageUrl} 
                      alt="Arsip Sejarah Desa" 
                      className="w-full h-full object-cover filter sepia-[20%] brightness-[95%] group-hover:scale-105 transition-transform duration-[6000ms]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-4 left-4 right-4 z-20 text-white space-y-1">
                      <h4 className="font-serif text-sm font-bold text-white">
                        Lanskap Desa Cikidang di Kala Senja
                      </h4>
                    </div>
                  </div>
                  <p className="font-sans text-[11px] text-on-surface-variant/80 italic mt-2.5 text-center leading-relaxed">
                    "Fotografi lanskap pegunungan dan persawahan subur Desa Cikidang, saksi sejarah perjuangan babad alas pendiri desa sejak tahun 1948."
                  </p>
                </motion.div>

                {/* Kutipan Sejarah Premium */}
                <motion.div 
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="bg-primary text-on-primary p-6 md:p-8 rounded-2xl border border-primary-container shadow-lg relative overflow-hidden group"
                >
                  {/* Decorative big quotation marks background */}
                  <Quote className="w-24 h-24 text-white/5 absolute -top-4 -left-3 pointer-events-none transform rotate-180 transition-transform duration-700 group-hover:scale-110" />
                  
                  <div className="relative z-10 space-y-4">
                    <Quote className="w-8 h-8 text-secondary-fixed shrink-0 transform rotate-180" />
                    
                    <p className="font-serif text-base md:text-lg italic leading-relaxed text-white/95">
                      "Kemandirian bukanlah tujuan akhir, melainkan jembatan emas bagi terwujudnya kesejahteraan anak cucu yang luhur budi pekertinya, kokoh jiwanya, dan merdeka hidupnya."
                    </p>
                    
                    <div className="pt-3 border-t border-white/10">
                      <h5 className="font-serif text-sm font-bold text-secondary-fixed">
                        Ki Hajar Sutedjo
                      </h5>
                      <p className="font-sans text-[10px] tracking-wider uppercase font-semibold text-white/70">
                        Pelopor & Pendiri Desa (Amanat Balai Desa, 1948)
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Separator Seksi */}
            <div className="border-t border-outline-variant/60 my-4" />

            {/* Bagian Tengah: Lini Masa Sejarah */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="block font-sans text-xs font-bold text-secondary uppercase tracking-widest">
                  Rentang Peristiwa
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary">
                  Lini Masa Kejayaan Desa
                </h3>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Telusuri momentum-momentum emas yang membentuk karakter, kemajuan, dan kemandirian Desa Cikidang dari masa ke masa.
                </p>
              </div>

              {/* Redesigned Vertical Staggered Timeline */}
              <div className="relative max-w-4xl mx-auto px-4 py-8">
                {/* Central line connector */}
                <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-slate-200/80 transform md:-translate-x-1/2" />

                <div className="space-y-12 relative">
                  {historyTimeline.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    return (
                      <motion.div 
                        key={idx}
                        initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className={`flex flex-col md:flex-row items-stretch relative group ${
                          isEven ? 'md:flex-row-reverse' : ''
                        }`}
                      >
                        {/* Empty Space for alignment on Desktop */}
                        <div className="hidden md:block w-1/2" />

                        {/* Node Marker */}
                        <div className="absolute left-4 md:left-1/2 top-[30px] -translate-x-1/2 flex items-center justify-center z-10">
                          <motion.div 
                            whileHover={{ scale: 1.25 }}
                            className="w-4 h-4 rounded-full bg-white border-2 border-slate-300 shadow-sm flex items-center justify-center cursor-pointer transition-colors duration-300 group-hover:border-[#0a4c3e]"
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#0a4c3e] transition-colors duration-300" />
                          </motion.div>
                        </div>

                        {/* Event Card Content */}
                        <div className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                          isEven ? 'md:pr-10 md:pl-0' : 'md:pl-10 md:pr-0'
                        }`}>
                          <motion.div 
                            whileHover={{ y: -6, scale: 1.01 }}
                            transition={{ duration: 0.3 }}
                            className="p-6 rounded-2xl border border-slate-100 bg-white shadow-soft hover:shadow-md transition-all relative overflow-hidden duration-300"
                          >
                            {/* Accent badge watermark */}
                            <div className={`absolute -right-4 -bottom-4 text-8xl font-black font-serif select-none pointer-events-none opacity-[0.03] transition-opacity group-hover:opacity-[0.06] ${
                              isEven ? 'text-primary' : 'text-secondary'
                            }`}>
                              {item.year}
                            </div>

                            <div className="flex flex-wrap items-center gap-2 mb-3">
                              <span className="font-sans text-[11px] font-bold tracking-wider uppercase px-2.5 py-0.5 rounded-full bg-slate-50 border border-slate-200 text-slate-600">
                                {item.year}
                              </span>
                              <span className="text-[11px] text-slate-400 font-semibold">
                                {idx === 0 ? 'Milestone Pendirian' : idx === 1 ? 'Era Swasembada' : idx === 2 ? 'Inovasi Nasional' : 'Transformasi Modern'}
                              </span>
                            </div>

                            <h4 className="font-serif text-base md:text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                              {item.title}
                            </h4>
                            
                            <p className="font-sans text-xs md:text-sm text-on-surface-variant mt-2 leading-relaxed text-justify">
                              {item.desc}
                            </p>
                          </motion.div>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Separator Seksi */}
            <div className="border-t border-outline-variant/60 my-4" />

            {/* Bagian Bawah: Fakta Desa */}
            <div className="space-y-8">
              <div className="text-center max-w-2xl mx-auto space-y-2">
                <span className="block font-sans text-xs font-bold text-secondary uppercase tracking-widest mb-2">
                  Data & Parameter
                </span>
                <h3 className="font-serif text-2xl md:text-3xl font-bold text-primary">
                  Fakta Menarik Desa Cikidang
                </h3>
                <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                  Informasi kunci, letak administrasi, jumlah kependudukan, dan sektor komoditas unggulan desa saat ini.
                </p>
              </div>

              {/* Statistics Bento Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { 
                    label: 'Tahun Berdiri', 
                    value: '1948', 
                    subtext: 'Pasca-Kemerdekaan RI', 
                    icon: Calendar,
                    color: 'primary' 
                  },
                  { 
                    label: 'Jumlah Dusun', 
                    value: '5 Dusun', 
                    subtext: 'Terintegrasi Mandiri', 
                    icon: MapPin,
                    color: 'secondary' 
                  },
                  { 
                    label: 'Jumlah Penduduk', 
                    value: '6.605 Jiwa', 
                    subtext: 'Sensus Penduduk Terbaru', 
                    icon: Users,
                    color: 'primary' 
                  },
                  { 
                    label: 'Luas Wilayah', 
                    value: '245 Ha', 
                    subtext: 'Lereng Bukit & Sawah', 
                    icon: Map,
                    color: 'secondary' 
                  },
                  { 
                    label: 'Komoditas Utama', 
                    value: 'Kopi & Padi', 
                    subtext: 'Pertanian & UMKM Kreatif', 
                    icon: Sprout,
                    color: 'primary' 
                  },
                ].map((stat, idx) => {
                  const IconComponent = stat.icon;
                  const isPrimaryColor = stat.color === 'primary';
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 15 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="bg-surface-container-low hover:bg-white rounded-2xl border border-outline-variant/60 p-5 flex flex-col justify-between shadow-soft hover:shadow-md hover:border-primary/30 transition-all text-left group"
                    >
                      <div className="space-y-4">
                        {/* Icon Badge */}
                        <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                          isPrimaryColor 
                            ? 'bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white' 
                            : 'bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white'
                        }`}>
                          <IconComponent className="w-5 h-5" />
                        </div>

                        {/* Label & Value */}
                        <div className="space-y-1">
                          <span className="font-sans text-[11px] font-bold text-on-surface-variant/70 uppercase tracking-wider block">
                            {stat.label}
                          </span>
                          <h4 className="font-serif text-lg md:text-xl font-bold text-on-surface group-hover:text-primary transition-colors">
                            {stat.value}
                          </h4>
                        </div>
                      </div>

                      {/* Subtext */}
                      <p className="font-sans text-[10px] text-on-surface-variant/85 italic border-t border-outline-variant/40 pt-2.5 mt-4">
                        {stat.subtext}
                      </p>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Tab 2: Visi & Misi */}
        {activeTab === 'visi-misi' && (
          <div className="space-y-10">
            {/* Visi */}
            <div className="bg-primary/5 p-6 md:p-8 rounded-xl border border-primary/10 text-center max-w-4xl mx-auto space-y-3">
              <span className="inline-block font-sans text-xs font-black text-primary uppercase tracking-widest mb-1">Visi Pembangunan Desa</span>
              <h3 className="font-serif text-xl md:text-3xl font-bold text-primary leading-tight">
                "Terwujudnya Desa Cikidang yang Maju, Sejahtera, Berkebudayaan, dan Transparan Berbasis Potensi Lokal pada Tahun 2029"
              </h3>
            </div>

            {/* Misi */}
            <div>
              <h3 className="font-serif text-xl md:text-2xl font-bold text-primary text-center mb-8 flex items-center justify-center gap-2">
                <ShieldCheck className="w-6 h-6 text-secondary" />
                <span>Misi Strategis Desa</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {misiList.map((misi, idx) => (
                  <div key={idx} className="bg-surface-container-low p-6 rounded-xl border border-outline-variant flex items-start gap-4">
                    <div className="bg-primary text-on-primary w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0">
                      {idx + 1}
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-serif text-base font-bold text-on-surface">{misi.title}</h4>
                      <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed">
                        {misi.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tab 3: Struktur Organisasi */}
        {activeTab === 'struktur' && (
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2">
              <h3 className="font-serif text-2xl font-bold text-primary">Aparatur Pemerintahan Desa</h3>
              <p className="font-sans text-xs md:text-sm text-on-surface-variant">
                Petugas administrasi desa yang berdedikasi melayani kepentingan warga masyarakat secara prima dan bertanggung jawab.
              </p>
            </div>

            {/* Staff Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
              {staff.map((member) => (
                <button
                  key={member.id}
                  onClick={() => setSelectedStaff(member)}
                  className="bg-surface-container-low hover:bg-white rounded-xl border border-outline-variant p-5 text-center transition-all group hover:border-primary hover:shadow-soft cursor-pointer text-left w-full flex flex-col justify-between"
                >
                  <div className="w-full flex flex-col items-center">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-outline-variant group-hover:border-primary transition-all mb-4">
                      <img 
                        src={member.image} 
                        alt={member.name}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h4 className="font-serif text-sm md:text-base font-bold text-on-surface group-hover:text-primary transition-colors">
                      {member.name}
                    </h4>
                    <p className="font-sans text-xs font-semibold text-secondary mt-1 uppercase tracking-wider">
                      {member.role}
                    </p>
                  </div>
                  <span className="font-sans text-[11px] font-bold text-primary underline mt-4 block mx-auto opacity-0 group-hover:opacity-100 transition-opacity">
                    Lihat Bio Singkat
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Tab 4: Peta Wilayah */}
        {activeTab === 'peta' && (
          <InteractiveMap />
        )}

      </div>

      {/* Staff Bio Modal */}
      {selectedStaff && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4">
          <div className="bg-surface rounded-xl border border-outline-variant max-w-md w-full overflow-hidden shadow-2xl relative animate-scale-up">
            <button 
              onClick={() => setSelectedStaff(null)}
              className="absolute top-4 right-4 text-on-surface-variant hover:text-primary hover:bg-surface-container-low p-2 rounded-full transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="bg-primary p-6 text-on-primary text-center relative">
              <div className="absolute inset-0 batik-pattern opacity-10 pointer-events-none" />
              <div className="w-20 h-20 rounded-full overflow-hidden border-2 border-secondary-fixed mx-auto mb-3">
                <img src={selectedStaff.image} alt={selectedStaff.name} className="w-full h-full object-cover" />
              </div>
              <h4 className="font-serif text-lg font-bold text-white">{selectedStaff.name}</h4>
              <p className="font-sans text-xs text-secondary-fixed font-semibold uppercase tracking-wider mt-1">{selectedStaff.role}</p>
            </div>
            <div className="p-6 bg-white space-y-4">
              <div className="flex items-start gap-2.5 text-primary">
                <Quote className="w-5 h-5 shrink-0 text-secondary mt-1 rotate-180" />
                <p className="text-sm italic text-on-surface-variant leading-relaxed font-sans">
                  "{selectedStaff.description}"
                </p>
              </div>
              <p className="text-xs text-on-surface-variant/80 text-justify leading-relaxed border-t border-outline-variant pt-3">
                Bertanggung jawab penuh atas tugas pelayanan publik kependudukan demi terciptanya integrasi data dan efisiensi birokrasi pemerintahan Desa Cikidang.
              </p>
            </div>
            <div className="p-4 bg-surface-container-low border-t border-outline-variant text-right">
              <button 
                onClick={() => setSelectedStaff(null)}
                className="bg-primary text-on-primary hover:bg-primary-container px-4 py-2 rounded text-xs font-semibold cursor-pointer"
              >
                Tutup
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
