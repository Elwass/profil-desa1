import { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, FileText, Home, Users, Building, Users2, Map as MapIcon, Landmark, TrendingUp, Calendar, BookOpen, X } from 'lucide-react';
import { ActiveTab, ServiceItem, NewsItem } from '../types';
// @ts-ignore
import heroBgUrl from '../assets/images/village_twilight_1784134483476.jpg';

interface HomeViewProps {
  setActiveTab: (tab: ActiveTab) => void;
  services: ServiceItem[];
  news: NewsItem[];
  onSelectService: (service: ServiceItem) => void;
}

export default function HomeView({
  setActiveTab,
  services,
  news,
  onSelectService,
}: HomeViewProps) {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Find three key services to display in the home bento grid
  const homeServices = services.slice(0, 3);

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative w-full max-w-7xl mx-auto px-4 md:px-8">
        <div className="relative w-full h-[380px] md:h-[460px] flex items-center justify-center overflow-hidden rounded-2xl md:rounded-3xl shadow-lg">
          <div 
            className="absolute inset-0 bg-cover bg-center w-full h-full transform scale-100 hover:scale-105 transition-transform duration-10000" 
            style={{ backgroundImage: `url('${heroBgUrl}')` }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/45" />
          <div className="relative z-10 text-center px-4 md:px-16 max-w-3xl mx-auto text-on-primary">
            <h1 className="font-serif text-3xl md:text-5xl font-bold mb-4 text-white drop-shadow-md leading-tight animate-fade-in-up">
              Selamat Datang di Desa Cikidang
            </h1>
            <p className="font-sans text-xs md:text-base mb-8 text-white/90 drop-shadow max-w-2xl mx-auto leading-relaxed">
              Membangun komunitas yang sejahtera, lestari, dan berbudaya melalui transparansi dan gotong royong.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                onClick={() => {
                  setActiveTab(ActiveTab.Profil);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="bg-primary-fixed text-on-primary-fixed px-6 py-3 rounded-lg font-sans text-sm font-semibold hover:bg-primary-fixed-dim transition-all w-full sm:w-auto text-center shadow-lg cursor-pointer"
              >
                Jelajahi Profil
              </button>
              <button
                onClick={() => {
                  setActiveTab(ActiveTab.Layanan);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-sans text-sm font-semibold hover:bg-white/15 transition-all w-full sm:w-auto text-center cursor-pointer shadow-md"
              >
                Lihat Layanan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Kabar Desa */}
      <section className="py-8 px-4 md:px-16 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
            <div>
              <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary mb-2">Kabar Desa Terbaru</h2>
              <p className="font-sans text-sm text-on-surface-variant">Informasi dan pengumuman terkini seputar kegiatan Desa Cikidang.</p>
            </div>
            <button
              onClick={() => alert('Anda saat ini melihat berita teratas. Fitur pencarian berita tersedia di modul pencarian.')}
              className="font-sans text-xs font-bold text-primary border border-primary px-4 py-2 rounded-lg hover:bg-primary/5 transition-all cursor-pointer self-start sm:self-auto shadow-sm"
            >
              Lihat Semua Berita
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {news.map((item) => (
              <article
                key={item.id}
                onClick={() => setSelectedNews(item)}
                className="bg-white rounded-xl shadow-soft border border-outline-variant overflow-hidden flex flex-col group cursor-pointer hover:shadow-md transition-all"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={item.image}
                    alt={item.title}
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-black/40 backdrop-blur-md border border-white/20 text-white px-3 py-1 rounded-full text-[10px] font-bold font-sans uppercase tracking-wider shadow-md">
                    {item.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow relative bg-surface-container-lowest">
                  <span className="font-sans text-xs text-on-surface-variant mb-2 block font-semibold">{item.date}</span>
                  <h3 className="font-serif text-base md:text-lg font-bold text-on-surface mb-3 group-hover:text-primary transition-colors line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs text-on-surface-variant mb-4 flex-grow line-clamp-3 leading-relaxed">
                    {item.summary}
                  </p>
                  <span className="font-sans text-xs font-bold text-secondary flex items-center gap-1 mt-auto">
                    Baca Selengkapnya
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Layanan Populer (Bento Grid) */}
      <section className="py-12 px-4 md:px-16 bg-surface-container-low batik-pattern rounded-2xl max-w-7xl mx-auto border border-outline-variant/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-primary mb-3">Layanan Administrasi Cepat</h2>
            <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-xl mx-auto">
              Akses mudah untuk berbagai keperluan administrasi kependudukan Anda secara transparan.
            </p>
          </div>

          <div className="flex flex-row items-stretch w-full gap-4 md:gap-6 overflow-x-auto md:overflow-x-visible pb-4 md:pb-0 scrollbar-none snap-x snap-mandatory">
            {homeServices.map((service, index) => {
              const isHovered = hoveredIndex === index;
              const isAnyHovered = hoveredIndex !== null;

              const flexClass = isAnyHovered
                ? (isHovered 
                    ? `flex-[1.8] min-w-[300px] md:min-w-[420px] bg-white ${index === 1 ? 'border-secondary/50 shadow-md' : 'border-primary/50 shadow-md'}` 
                    : 'flex-[0.6] min-w-[180px] md:min-w-[220px] bg-white/75 border-outline-variant/60 opacity-80')
                : 'flex-1 min-w-[260px] md:min-w-[320px] bg-white border-outline-variant';

              const iconBgClass = isHovered || !isAnyHovered
                ? (index === 1 ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary')
                : 'bg-on-surface-variant/5 text-on-surface-variant/60';

              return (
                <motion.button
                  key={service.id}
                  layout
                  transition={{ type: 'spring', stiffness: 350, damping: 32 }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                  onClick={() => onSelectService(service)}
                  className={`flex-shrink-0 p-6 transition-all duration-300 rounded-xl shadow-soft border text-left group relative overflow-hidden flex flex-col justify-between cursor-pointer snap-start h-auto ${flexClass}`}
                >
                  <div className="w-full">
                    {/* Watermark icon on the bottom right */}
                    <div className={`absolute -bottom-6 -right-6 text-primary pointer-events-none transition-all duration-300 ${
                      isHovered ? 'opacity-[0.05] scale-110' : 'opacity-[0.02] scale-100'
                    }`}>
                      {service.iconName === 'file-text' && <FileText className="w-48 h-48" />}
                      {service.iconName === 'home' && <Home className="w-48 h-48" />}
                      {service.iconName === 'users' && <Users className="w-48 h-48" />}
                    </div>

                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 transition-colors duration-300 ${iconBgClass}`}>
                      {service.iconName === 'file-text' && <FileText className="w-6 h-6" />}
                      {service.iconName === 'home' && <Home className="w-6 h-6" />}
                      {service.iconName === 'users' && <Users className="w-6 h-6" />}
                    </div>

                    <h3 className="font-serif font-bold text-on-surface text-lg md:text-xl mb-2 transition-colors duration-300 line-clamp-2">
                      {service.title}
                    </h3>
                    
                    <p className={`font-sans text-xs md:text-sm text-on-surface-variant mb-6 transition-all duration-300 ${
                      isAnyHovered && !isHovered ? 'line-clamp-2 opacity-75' : 'line-clamp-3'
                    }`}>
                      {service.description}
                    </p>
                  </div>

                  <div className="w-full mt-auto">
                    <span className={`font-sans text-xs font-bold flex items-center gap-1 group-hover:underline ${
                      index === 1 ? 'text-secondary' : 'text-primary'
                    }`}>
                      {index === 0 ? 'Ajukan Sekarang' : index === 1 ? 'Lihat Syarat' : 'Mulai Proses'}
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </motion.button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Statistik Desa */}
      <section className="py-12 px-4 md:px-16 bg-primary text-on-primary rounded-2xl max-w-7xl mx-auto border border-primary-container shadow-lg">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="font-serif text-2xl md:text-4xl font-bold text-white mb-3">Statistik Desa Cikidang</h2>
            <p className="font-sans text-sm md:text-base text-white/80 max-w-lg mx-auto">
              Gambaran umum demografi dan wilayah administrasi desa dalam angka tahun anggaran terbaru.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 border-l-2 border-primary-fixed/30 hover:bg-white/5 transition-colors rounded-r-lg">
              <Users2 className="w-10 h-10 text-primary-fixed mx-auto mb-2" />
              <h4 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">3.450</h4>
              <span className="font-sans text-xs text-white/80 font-semibold tracking-wider uppercase">Total Penduduk</span>
            </div>

            <div className="p-4 border-l-2 border-primary-fixed/30 hover:bg-white/5 transition-colors rounded-r-lg">
              <Home className="w-10 h-10 text-primary-fixed mx-auto mb-2" />
              <h4 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">980</h4>
              <span className="font-sans text-xs text-white/80 font-semibold tracking-wider uppercase">Kepala Keluarga</span>
            </div>

            <div className="p-4 border-l-2 border-primary-fixed/30 hover:bg-white/5 transition-colors rounded-r-lg">
              <MapIcon className="w-10 h-10 text-primary-fixed mx-auto mb-2" />
              <h4 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">245</h4>
              <span className="font-sans text-xs text-white/80 font-semibold tracking-wider uppercase">Luas Wilayah (Ha)</span>
            </div>

            <div className="p-4 border-l-2 border-primary-fixed/30 hover:bg-white/5 transition-colors rounded-r-lg">
              <Building className="w-10 h-10 text-primary-fixed mx-auto mb-2" />
              <h4 className="font-serif text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-1">4</h4>
              <span className="font-sans text-xs text-white/80 font-semibold tracking-wider uppercase">Rukun Warga (RW)</span>
            </div>
          </div>
        </div>
      </section>

      {/* News Detail Modal */}
      {selectedNews && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[110] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-surface rounded-xl border border-outline-variant max-w-2xl w-full overflow-hidden shadow-2xl relative animate-scale-up max-h-[90vh] flex flex-col">
            <button 
              onClick={() => setSelectedNews(null)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors z-10 cursor-pointer"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="h-64 md:h-80 w-full overflow-hidden relative">
              <img 
                src={selectedNews.image} 
                alt={selectedNews.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="inline-block px-2.5 py-1 bg-primary text-xs font-bold rounded mb-2 font-sans">{selectedNews.category}</span>
                <h3 className="font-serif text-lg md:text-2xl font-bold">{selectedNews.title}</h3>
              </div>
            </div>
            <div className="p-6 overflow-y-auto flex-grow bg-white space-y-4">
              <div className="flex justify-between items-center text-xs text-on-surface-variant font-semibold border-b border-outline-variant pb-3">
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {selectedNews.date}</span>
                <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> Penulis: {selectedNews.author}</span>
              </div>
              <p className="text-sm font-semibold text-primary leading-relaxed italic">
                "{selectedNews.summary}"
              </p>
              <div className="text-sm text-on-surface-variant leading-relaxed whitespace-pre-line space-y-2">
                {selectedNews.content}
              </div>
            </div>
            <div className="p-4 bg-surface-container-low border-t border-outline-variant text-right">
              <button 
                onClick={() => setSelectedNews(null)}
                className="bg-primary text-on-primary hover:bg-primary-container px-5 py-2 rounded text-xs font-semibold cursor-pointer"
              >
                Tutup Berita
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
