import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Users, 
  Home as HomeIcon, 
  Map as MapIcon, 
  Store, 
  Image as ImageIcon, 
  ChevronRight, 
  Info, 
  User, 
  Compass, 
  Maximize2,
  TrendingUp,
  X,
  Building,
  Heart,
  GraduationCap,
  Sprout,
  Music,
  Droplets,
  Landmark,
  Paintbrush,
  Sparkles,
  Award,
  MapPin,
  ExternalLink
} from 'lucide-react';
import { dusunList, DusunData } from '../data/dusunData';

const importantLocations: Record<string, Array<{ name: string; type: string; desc: string; iconKey: string }>> = {
  cikidang: [
    { name: 'Kediaman Resmi Kepala Desa (Bpk. Joko Susilo)', type: 'Tokoh Utama', desc: 'Pusat koordinasi pelayanan warga Desa Cikidang secara umum dan tempat musyawarah utama.', iconKey: 'User' },
    { name: 'Kediaman Kepala Dusun Cikidang (Bpk. Sudarsono)', type: 'Tokoh Utama', desc: 'Tempat tinggal Kepala Dusun Cikidang untuk koordinasi administrasi wilayah Dusun Cikidang (Pusat).', iconKey: 'User' },
    { name: 'Kantor Balai Desa Cikidang', type: 'Pemerintahan', desc: 'Pusat pelayanan administrasi kependudukan terpadu dan balai pertemuan utama warga.', iconKey: 'Building' },
    { name: 'Puskesmas Pembantu Cikidang', type: 'Kesehatan', desc: 'Fasilitas layanan kesehatan utama bagi seluruh masyarakat dengan staf medis siaga.', iconKey: 'Heart' },
    { name: 'SDN 1 Cikidang', type: 'Pendidikan', desc: 'Sekolah dasar utama berakreditasi A dengan fasilitas ruang kelas serta sarana olahraga lengkap.', iconKey: 'GraduationCap' },
    { name: 'Pasar Rakyat Dusun Pusat', type: 'Ekonomi', desc: 'Sentra kegiatan dagang, jual beli hasil bumi, dan pemenuhan kebutuhan harian.', iconKey: 'Store' }
  ],
  mekarsari: [
    { name: 'Kediaman Kepala Dusun Mekarsari (Bpk. Hartono)', type: 'Tokoh Utama', desc: 'Pusat aduan warga, koordinasi kegiatan pertanian dusun, serta koordinasi wilayah RT di Mekarsari.', iconKey: 'User' },
    { name: 'Sawah Terasering Organik', type: 'Pertanian', desc: 'Sistem pertanian ramah lingkungan penghasil beras organik unggulan Desa Cikidang.', iconKey: 'Sprout' },
    { name: 'Posko Kelompok Tani "Kopi Harapan"', type: 'Pertanian', desc: 'Pusat pengolahan biji kopi pasca-panen, pengeringan, serta pembinaan kopi lereng bukit.', iconKey: 'Users' },
    { name: 'Masjid Jami\' Al-Hidayah Mekarsari', type: 'Keagamaan', desc: 'Pusat pembinaan keagamaan warga, pengajian rutin, serta kegiatan sosial kemasyarakatan.', iconKey: 'Building' }
  ],
  sukasari: [
    { name: 'Kediaman Kepala Dusun Sukasari (Bpk. Ahmad Fauzi)', type: 'Tokoh Utama', desc: 'Pusat pelayanan administratif dan pelestarian kesenian/anyaman tradisional di Dusun Sukasari.', iconKey: 'User' },
    { name: 'Hutan Bambu Adat Warisan', type: 'Konservasi', desc: 'Kawasan lindung bambu alami untuk menjaga kelestarian ekosistem dan mata air tanah.', iconKey: 'Compass' },
    { name: 'Balai Sanggar Seni & Karawitan', type: 'Kebudayaan', desc: 'Tempat pelestarian seni tari, alat musik tradisional gamelan, dan pertunjukan adat.', iconKey: 'Music' },
    { name: 'Gudang Kerajinan Anyaman Bambu', type: 'Ekonomi', desc: 'Tempat produksi dan ruang pameran produk tas, alat rumah tangga, dan hiasan bambu.', iconKey: 'Store' }
  ],
  pasirjaya: [
    { name: 'Kediaman Kepala Dusun Pasirjaya (Bpk. Sugeng)', type: 'Tokoh Utama', desc: 'Pusat koordinasi wilayah perikanan, posko tanggap bencana sungai, dan musyawarah Dusun Pasirjaya.', iconKey: 'User' },
    { name: 'Sentra Kolam Bioflok Lele & Nila', type: 'Perikanan', desc: 'Pusat budidaya ikan tawar bersih ramah lingkungan yang dikelola oleh Karang Taruna.', iconKey: 'Droplets' },
    { name: 'Jembatan Gantung Kali Gede', type: 'Infrastruktur', desc: 'Jembatan gantung penyeberangan vital untuk akses transportasi warga antar wilayah.', iconKey: 'Landmark' },
    { name: 'Destinasi Edukasi Kali Gede', type: 'Wisata', desc: 'Kawasan aliran sungai yang terjaga kebersihannya untuk wisata keluarga arung jeram mini.', iconKey: 'Compass' }
  ],
  margamulya: [
    { name: 'Kediaman Kepala Dusun Margamulya (Bpk. Rian Hidayat)', type: 'Tokoh Utama', desc: 'Kantor koordinasi pengrajin sandal kulit dan batik tulis lokal di Dusun Margamulya.', iconKey: 'User' },
    { name: 'Sanggar Batik Tulis Cikidang', type: 'Kesenian', desc: 'Tempat pembuatan batik tulis manual bermotif flora dan fauna khas pegunungan.', iconKey: 'Paintbrush' },
    { name: 'Workshop Sandal & Alas Kaki Kulit', type: 'Ekonomi', desc: 'Sentra perajin lokal pembuat sandal kulit berkualitas tinggi yang awet.', iconKey: 'Sparkles' },
    { name: 'PAUD Lestari Margamulya', type: 'Pendidikan', desc: 'Pendidikan anak usia dini untuk memfasilitasi kebutuhan bermain sambil belajar.', iconKey: 'GraduationCap' },
    { name: 'Lapangan Olahraga & Balai Dusun', type: 'Fasilitas Umum', desc: 'Fasilitas umum serbaguna untuk kegiatan olahraga, upacara adat, serta rapat dusun.', iconKey: 'Award' }
  ]
};

const getIcon = (key: string) => {
  switch (key) {
    case 'User': return <User className="w-5 h-5 text-indigo-600" />;
    case 'Building': return <Building className="w-5 h-5 text-primary" />;
    case 'Heart': return <Heart className="w-5 h-5 text-emerald-600" />;
    case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-sky-600" />;
    case 'Store': return <Store className="w-5 h-5 text-amber-600" />;
    case 'Sprout': return <Sprout className="w-5 h-5 text-emerald-600" />;
    case 'Users': return <Users className="w-5 h-5 text-teal-600" />;
    case 'Compass': return <Compass className="w-5 h-5 text-indigo-600" />;
    case 'Music': return <Music className="w-5 h-5 text-rose-600" />;
    case 'Droplets': return <Droplets className="w-5 h-5 text-sky-600" />;
    case 'Landmark': return <Landmark className="w-5 h-5 text-slate-600" />;
    case 'Paintbrush': return <Paintbrush className="w-5 h-5 text-purple-600" />;
    case 'Sparkles': return <Sparkles className="w-5 h-5 text-amber-500" />;
    case 'Award': return <Award className="w-5 h-5 text-yellow-600" />;
    default: return <MapPin className="w-5 h-5 text-slate-500" />;
  }
};

export default function InteractiveMap() {
  const [hoveredDusun, setHoveredDusun] = useState<DusunData | null>(null);
  const [selectedDusun, setSelectedDusun] = useState<DusunData>(dusunList[0]);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; visible: boolean }>({
    x: 0,
    y: 0,
    visible: false,
  });
  const [activeTab, setActiveTab] = useState<'info' | 'statistik' | 'umkm' | 'galeri'>('info');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    // Position the tooltip slightly offset from the mouse pointer
    setTooltip({
      x: e.clientX - rect.left + 15,
      y: e.clientY - rect.top + 15,
      visible: true,
    });
  };

  const handleMouseLeaveMap = () => {
    setHoveredDusun(null);
    setTooltip(prev => ({ ...prev, visible: false }));
  };

  const handleHoverDusun = (dusun: DusunData, e: React.MouseEvent) => {
    setHoveredDusun(dusun);
    handleMouseMove(e);
  };

  const selectDusun = (dusun: DusunData) => {
    setSelectedDusun(dusun);
    // Reset secondary tab inside details
    setActiveTab('info');
  };

  return (
    <div className="space-y-8">
      {/* Introduction Card */}
      <div className="bg-gradient-to-r from-primary/10 via-emerald-500/5 to-transparent p-6 rounded-2xl border border-primary/15 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="space-y-2">
          <h3 className="font-serif text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
            <Compass className="w-6 h-6 text-secondary animate-spin-slow" />
            <span>Peta Wilayah Desa Cikidang</span>
          </h3>
          <p className="font-sans text-sm text-on-surface-variant max-w-2xl leading-relaxed">
            Jelajahi wilayah administrasi desa secara interaktif. Klik wilayah dusun pada peta di bawah untuk melihat statistik penduduk lengkap, profil kepala dusun, produk unggulan UMKM lokal, serta galeri foto wilayah.
          </p>
        </div>
        <div className="flex gap-4 self-start md:self-auto text-xs font-semibold font-sans text-on-surface-variant">
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-outline-variant shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0a4c3e]" />
            <span>Pusat Administrasi</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-outline-variant shadow-sm">
            <span className="w-2.5 h-2.5 rounded-full bg-[#0a4c3e]/40" />
            <span>Wilayah Dusun</span>
          </div>
        </div>
      </div>

      {/* Main Grid: Interactive Map + Details Panel */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left: Map Card */}
        <div className="lg:col-span-7 flex flex-col justify-between bg-white rounded-2xl border border-outline-variant shadow-soft overflow-hidden p-6 relative">
          <div className="flex items-center justify-between mb-4 border-b border-outline-variant pb-3 z-10">
            <div className="flex items-center gap-2">
              <MapIcon className="w-5 h-5 text-primary" />
              <span className="font-serif font-bold text-base text-on-surface">Peta Administrasi Desa</span>
            </div>
          </div>

          {/* SVG Map Canvas */}
          <div 
            ref={containerRef}
            className="relative w-full aspect-[500/400] flex items-center justify-center bg-slate-50 rounded-xl border border-dashed border-outline-variant/60 overflow-hidden cursor-crosshair select-none"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeaveMap}
          >
            <svg 
              viewBox="0 0 500 400" 
              className="w-full h-full drop-shadow-md"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Grid Lines for technical styling */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,0,0,0.03)" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />

              {/* Polygons/Paths for Dusuns */}
              {dusunList.map((dusun) => {
                const isSelected = selectedDusun.id === dusun.id;
                const isHovered = hoveredDusun?.id === dusun.id;

                return (
                  <path
                    key={dusun.id}
                    d={dusun.svgPath}
                    className={`transition-all duration-300 stroke-[1.5] cursor-pointer ${dusun.color} ${
                      isSelected 
                        ? 'stroke-primary stroke-[3.5] filter drop-shadow-md fill-primary/35' 
                        : ''
                    }`}
                    onClick={() => selectDusun(dusun)}
                    onMouseEnter={(e) => handleHoverDusun(dusun, e)}
                    onMouseMove={(e) => handleHoverDusun(dusun, e)}
                  />
                );
              })}

              {/* Labels on Map */}
              {dusunList.map((dusun) => {
                const isSelected = selectedDusun.id === dusun.id;
                const isHovered = hoveredDusun?.id === dusun.id;

                return (
                  <g 
                    key={`label-${dusun.id}`}
                    transform={`translate(${dusun.textPosition.x}, ${dusun.textPosition.y})`}
                    className="pointer-events-none select-none"
                  >
                    {/* Clean flat labels for a modern minimalist look */}
                    <text
                      textAnchor="middle"
                      className="font-sans font-medium text-[10px] md:text-xs tracking-wider fill-slate-600"
                    >
                      {dusun.id === 'cikidang' ? 'Cikidang (Pusat)' : dusun.name.replace('Dusun ', '')}
                    </text>
                    {/* Highlight indicator if selected */}
                    {isSelected && (
                      <circle
                        cy="12"
                        r="3"
                        className="fill-secondary animate-pulse"
                      />
                    )}
                  </g>
                );
              })}
            </svg>

            {/* Custom Tooltip */}
            <AnimatePresence>
              {tooltip.visible && hoveredDusun && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.15 }}
                  style={{ 
                    position: 'absolute',
                    left: tooltip.x,
                    top: tooltip.y,
                    pointerEvents: 'none'
                  }}
                  className="bg-slate-900/95 text-white p-4 rounded-xl shadow-xl border border-white/10 text-xs font-sans max-w-[240px] z-30 backdrop-blur-sm space-y-2.5"
                >
                  <div className="border-b border-white/10 pb-1.5">
                    <p className="font-serif font-bold text-sm text-slate-100">{hoveredDusun.name}</p>
                    <p className="text-[10px] text-slate-400">Kepala: {hoveredDusun.headOfDusun}</p>
                  </div>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-[11px]">
                    <div className="text-slate-400">Penduduk:</div>
                    <div className="font-bold text-right text-slate-200">{hoveredDusun.population.toLocaleString('id-ID')} Jiwa</div>
                    <div className="text-slate-400">Kepala Keluarga:</div>
                    <div className="font-bold text-right text-slate-200">{hoveredDusun.kk} KK</div>
                    <div className="text-slate-400">Luas Wilayah:</div>
                    <div className="font-bold text-right text-slate-200">{hoveredDusun.area} Ha</div>
                  </div>
                  <div className="text-[9px] text-slate-400 font-medium bg-white/5 border border-white/10 px-2 py-0.5 rounded text-center">
                    Klik untuk detail lengkap
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Map Legend */}
          <div className="mt-4 grid grid-cols-5 gap-2 border-t border-outline-variant/50 pt-3 text-center">
            {dusunList.map((dusun) => (
              <button
                key={`legend-${dusun.id}`}
                onClick={() => selectDusun(dusun)}
                className={`flex flex-col items-center justify-center p-2 rounded-lg border transition-all cursor-pointer ${
                  selectedDusun.id === dusun.id
                    ? 'bg-primary/5 border-primary shadow-sm'
                    : 'bg-slate-50 border-transparent hover:bg-slate-100'
                }`}
              >
                <span className="text-[9px] font-bold truncate max-w-full text-on-surface font-sans">
                  {dusun.id === 'cikidang' ? 'Cikidang' : dusun.name.replace('Dusun ', '')}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Right: Details Panel */}
        <div className="lg:col-span-5 flex flex-col justify-between bg-white rounded-2xl border border-outline-variant shadow-soft overflow-hidden">
          
          {/* Panel Header */}
          <div className="p-5 bg-gradient-to-r from-primary to-emerald-800 text-on-primary">
            <h4 className="font-serif text-xl md:text-2xl font-bold text-white leading-tight">
              {selectedDusun.name}
            </h4>
            <div className="flex items-center gap-1.5 text-xs text-white/80 mt-1">
              <User className="w-3.5 h-3.5 text-secondary-fixed" />
              <span>Kepala Dusun: <strong className="text-white">{selectedDusun.headOfDusun}</strong></span>
            </div>
          </div>

          {/* Tab Switcher inside Panel */}
          <div className="flex border-b border-outline-variant/60 bg-surface-container-low">
            {(['info', 'statistik', 'umkm', 'galeri'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 font-sans text-xs font-bold py-3 text-center transition-all border-b-2 cursor-pointer capitalize ${
                  activeTab === tab
                    ? 'border-primary text-primary bg-white'
                    : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container-mid'
                }`}
              >
                {tab === 'umkm' ? 'Sentra UMKM' : tab}
              </button>
            ))}
          </div>

          {/* Panel Body (Content Area) */}
          <div className="p-6 flex-1 min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${selectedDusun.id}-${activeTab}`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="h-full space-y-4"
              >
                {/* 1. Tab Info Umum */}
                {activeTab === 'info' && (
                  <div className="space-y-4 font-sans text-sm text-on-surface-variant leading-relaxed">
                    <p className="text-justify">{selectedDusun.description}</p>
                    
                    <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-100">
                      <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                        <Users className="w-4 h-4 text-slate-600 mx-auto mb-1" />
                        <span className="text-[10px] text-slate-500 block">Penduduk</span>
                        <strong className="text-sm text-slate-800">{selectedDusun.population.toLocaleString('id-ID')} Jiwa</strong>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                        <HomeIcon className="w-4 h-4 text-slate-600 mx-auto mb-1" />
                        <span className="text-[10px] text-slate-500 block">Keluarga</span>
                        <strong className="text-sm text-slate-800">{selectedDusun.kk} KK</strong>
                      </div>
                      <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl text-center">
                        <Maximize2 className="w-4 h-4 text-slate-600 mx-auto mb-1" />
                        <span className="text-[10px] text-slate-500 block">Luas Wilayah</span>
                        <strong className="text-sm text-slate-800">{selectedDusun.area} Ha</strong>
                      </div>
                    </div>
                  </div>
                )}

                {/* 2. Tab Statistik Penduduk */}
                {activeTab === 'statistik' && (
                  <div className="space-y-4 font-sans text-sm">
                    <div className="flex items-center gap-1.5 text-xs text-primary font-bold uppercase tracking-wider pb-1.5 border-b border-outline-variant/40">
                      <TrendingUp className="w-4 h-4" />
                      <span>Data Demografi & Tenaga Kerja</span>
                    </div>

                    <div className="space-y-3">
                      {selectedDusun.statistics.map((stat, idx) => (
                        <div key={idx} className="space-y-1">
                          <div className="flex justify-between text-xs font-semibold text-on-surface-variant">
                            <span>{stat.label}</span>
                            <span>{stat.value.toLocaleString('id-ID')} ({stat.percentage}%)</span>
                          </div>
                          <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${stat.percentage}%` }}
                              transition={{ duration: 0.6, delay: idx * 0.1 }}
                              className="h-full bg-primary"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="bg-slate-50 border border-slate-100 p-3 rounded-xl flex items-start gap-2.5 mt-4">
                      <Info className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Data demografi di atas selalu diperbarui setiap semester melalui pendataan berkala rukun tetangga (RT) yang dikoordinasikan oleh Kepala Dusun.
                      </p>
                    </div>
                  </div>
                )}

                {/* 3. Tab Sentra UMKM */}
                {activeTab === 'umkm' && (
                  <div className="space-y-3 overflow-y-auto max-h-[300px] scrollbar-thin pr-1 font-sans">
                    <div className="flex items-center gap-1.5 text-xs text-primary font-bold uppercase tracking-wider pb-2 border-b border-outline-variant/40 mb-2">
                      <Store className="w-4 h-4 text-secondary" />
                      <span>Potensi Bisnis & Produk Lokal</span>
                    </div>
                    
                    {selectedDusun.umkm.length > 0 ? (
                      selectedDusun.umkm.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="bg-slate-50 border border-slate-100 rounded-xl p-3.5 space-y-1.5 hover:border-primary/20 transition-colors"
                        >
                          <div className="flex items-center justify-between">
                            <h5 className="font-serif font-bold text-sm text-primary">{item.name}</h5>
                            <span className="text-[10px] font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full uppercase">
                              {item.category}
                            </span>
                          </div>
                          <p className="text-xs text-on-surface-variant">{item.desc}</p>
                          <p className="text-[10px] text-on-surface-variant/70 italic">Pemilik: <span className="font-semibold text-on-surface">{item.owner}</span></p>
                        </div>
                      ))
                    ) : (
                      <p className="text-xs text-on-surface-variant/70 italic text-center py-6">Belum ada data UMKM terdaftar.</p>
                    )}
                  </div>
                )}

                {/* 4. Tab Galeri Foto Dusun */}
                {activeTab === 'galeri' && (
                  <div className="space-y-4 font-sans">
                    <div className="flex items-center gap-1.5 text-xs text-primary font-bold uppercase tracking-wider pb-2 border-b border-outline-variant/40">
                      <ImageIcon className="w-4 h-4" />
                      <span>Dokumentasi Wilayah</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3.5">
                      {selectedDusun.gallery.map((photo, idx) => (
                        <div 
                          key={idx}
                          className="group relative rounded-xl overflow-hidden border border-outline-variant/60 aspect-[4/3] bg-slate-100 cursor-zoom-in"
                          onClick={() => setLightboxImage(photo.image)}
                        >
                          <img 
                            src={photo.image} 
                            alt={photo.title}
                            className="w-full h-full object-cover transform scale-100 group-hover:scale-110 transition-transform duration-500"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                            <div className="space-y-0.5 text-white">
                              <p className="text-[10px] font-bold truncate">{photo.title}</p>
                              <p className="text-[8px] opacity-75 line-clamp-1">{photo.desc}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Panel Footer */}
          <div className="p-4 bg-slate-50 border-t border-outline-variant/60 flex items-center justify-between text-xs">
            <span className="text-on-surface-variant/70 font-sans">
              Koordinat pusat: <strong className="text-on-surface">{selectedDusun.area} Hektar</strong>
            </span>
            <div className="flex items-center gap-1 text-primary font-bold font-sans">
              <span>Desa Cikidang</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </div>

        </div>

      </div>

      {/* Lokasi Penting & Fasilitas Section */}
      <motion.div
        key={`locations-${selectedDusun.id}`}
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="bg-white rounded-2xl border border-outline-variant p-6 md:p-8 shadow-soft space-y-6"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-primary/5 rounded-xl border border-primary/10">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h4 className="font-serif text-xl font-bold text-on-surface">
                Lokasi Penting & Fasilitas di {selectedDusun.name}
              </h4>
              <p className="font-sans text-xs text-slate-500 mt-0.5">
                Titik pelayanan publik, kediaman tokoh penting, sarana pendidikan, sosial, kebudayaan, dan sentra kemasyarakatan.
              </p>
            </div>
          </div>
          <a
            href="https://www.google.com/maps/place/St+George's+Park+National+Football+Centre/@52.8075396,-1.7612551,17z/data=!3m1!4b1!4m6!3m5!1s0x487a05396f6da2fb:0x740a9acc4e54eb53!8m2!3d52.8075396!4d-1.7586802!16s%2Fg%2F11hbny7cdm?entry=tts&g_ep=EgoyMDI2MDcxMy4wIPu8ASoASAFQAw%3D%3D&skid=1238cb00-831c-4f52-b3a9-87349f7e4e97"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-primary text-white hover:bg-emerald-800 border border-primary/10 px-4 py-2.5 rounded-xl text-xs font-bold transition-all shadow-sm cursor-pointer whitespace-nowrap self-start sm:self-auto"
          >
            <Compass className="w-4 h-4" />
            <span>Lihat Peta Lengkap</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {importantLocations[selectedDusun.id]?.map((loc, idx) => (
            <div 
              key={idx}
              className="bg-slate-50 hover:bg-white rounded-xl border border-slate-100 p-4 flex flex-col justify-between gap-3 transition-all hover:border-primary/20 hover:shadow-sm"
            >
              <div className="flex gap-4">
                <div className="shrink-0 p-3 bg-white border border-slate-100 rounded-xl h-fit shadow-xs">
                  {getIcon(loc.iconKey)}
                </div>
                <div className="space-y-1">
                  <h5 className="font-sans font-bold text-sm text-slate-800 leading-tight">
                    {loc.name}
                  </h5>
                  <p className="font-sans text-xs text-slate-500 leading-relaxed text-justify">
                    {loc.desc}
                  </p>
                </div>
              </div>
              <div className="flex justify-end pt-2 border-t border-slate-100/50">
                <a
                  href="https://www.google.com/maps/place/St+George's+Park+National+Football+Centre/@52.8075396,-1.7612551,17z/data=!3m1!4b1!4m6!3m5!1s0x487a05396f6da2fb:0x740a9acc4e54eb53!8m2!3d52.8075396!4d-1.7586802!16s%2Fg%2F11hbny7cdm?entry=tts&g_ep=EgoyMDI2MDcxMy4wIPu8ASoASAFQAw%3D%3D&skid=1238cb00-831c-4f52-b3a9-87349f7e4e97"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-[11px] font-bold text-primary hover:text-emerald-800 px-2.5 py-1.5 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all cursor-pointer"
                >
                  <span>Petunjuk Arah</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Lightbox Modal for gallery photos */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-md z-[150] flex items-center justify-center p-4"
            onClick={() => setLightboxImage(null)}
          >
            <div className="relative max-w-3xl w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <button 
                onClick={() => setLightboxImage(null)}
                className="absolute top-4 right-4 text-white bg-black/40 hover:bg-black/60 p-2.5 rounded-full transition-colors z-10 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              <img 
                src={lightboxImage} 
                alt="Enlarged photo" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
