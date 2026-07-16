import { useState } from 'react';
import { Camera, Video, Play, X, ChevronLeft, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { GalleryItem } from '../types';

interface GaleriViewProps {
  galleryItems: GalleryItem[];
}

export default function GaleriView({ galleryItems }: GaleriViewProps) {
  const [selectedCategory, setSelectedCategory] = useState<'semua' | 'gotong-royong' | 'budaya' | 'infrastruktur' | 'pendidikan'>('semua');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [visibleCount, setVisibleCount] = useState(4); // Default to show 4, "Load More" shows more

  // Filter items based on category
  const filteredItems = galleryItems.filter((item) => {
    if (selectedCategory === 'semua') return true;
    return item.category === selectedCategory;
  });

  // Paginated/visible items
  const visibleItems = filteredItems.slice(0, visibleCount);

  // Lightbox handlers
  const openLightbox = (itemIndexInFiltered: number) => {
    // Find the original index of this item in the filteredItems array
    setLightboxIndex(itemIndexInFiltered);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
  };

  const loadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      
      {/* Header Galeri */}
      <div className="text-center space-y-4">
        <span className="block font-sans text-xs font-bold text-secondary uppercase tracking-widest mb-2">
          Dokumentasi Desa
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary tracking-tight">
          Galeri Kegiatan Desa Cikidang
        </h1>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Visualisasi kebersamaan warga, kearifan tradisi adat, serta derap langkah pembangunan infrastruktur di lingkungan Desa Cikidang.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap justify-center gap-2 border-b border-outline-variant pb-1">
        <button
          onClick={() => {
            setSelectedCategory('semua');
            setVisibleCount(4);
          }}
          className={`font-sans text-xs md:text-sm font-bold px-4 py-2.5 rounded-t-lg transition-all border-b-2 cursor-pointer ${
            selectedCategory === 'semua'
              ? 'border-primary text-primary bg-white'
              : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          Semua Dokumentasi
        </button>
        <button
          onClick={() => {
            setSelectedCategory('gotong-royong');
            setVisibleCount(4);
          }}
          className={`font-sans text-xs md:text-sm font-bold px-4 py-2.5 rounded-t-lg transition-all border-b-2 cursor-pointer ${
            selectedCategory === 'gotong-royong'
              ? 'border-primary text-primary bg-white'
              : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          Gotong Royong
        </button>
        <button
          onClick={() => {
            setSelectedCategory('budaya');
            setVisibleCount(4);
          }}
          className={`font-sans text-xs md:text-sm font-bold px-4 py-2.5 rounded-t-lg transition-all border-b-2 cursor-pointer ${
            selectedCategory === 'budaya'
              ? 'border-primary text-primary bg-white'
              : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          Seni & Budaya
        </button>
        <button
          onClick={() => {
            setSelectedCategory('infrastruktur');
            setVisibleCount(4);
          }}
          className={`font-sans text-xs md:text-sm font-bold px-4 py-2.5 rounded-t-lg transition-all border-b-2 cursor-pointer ${
            selectedCategory === 'infrastruktur'
              ? 'border-primary text-primary bg-white'
              : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          Pembangunan
        </button>
        <button
          onClick={() => {
            setSelectedCategory('pendidikan');
            setVisibleCount(4);
          }}
          className={`font-sans text-xs md:text-sm font-bold px-4 py-2.5 rounded-t-lg transition-all border-b-2 cursor-pointer ${
            selectedCategory === 'pendidikan'
              ? 'border-primary text-primary bg-white'
              : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container'
          }`}
        >
          Pendidikan & Kesehatan
        </button>
      </div>

      {/* Main Video Banner Section */}
      <section className="bg-surface-container-low border border-outline-variant rounded-2xl p-6 md:p-8 space-y-6">
        <h3 className="font-serif text-lg md:text-xl font-bold text-primary flex items-center gap-2">
          <Video className="w-5 h-5 text-secondary" />
          <span>Profil Video & Dokumenter Desa</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
          <div className="md:col-span-7">
            <div 
              onClick={() => setVideoModalOpen(true)}
              className="w-full h-64 md:h-[340px] rounded-xl overflow-hidden border border-outline-variant shadow relative group cursor-pointer"
            >
              <img 
                src="https://img.youtube.com/vi/nhWGjwIYcNg/maxresdefault.jpg" 
                alt="Profil Video Desa Cikidang" 
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white shadow-lg flex items-center justify-center hover:scale-110 hover:bg-white/30 hover:border-white/40 transition-all duration-300">
                  <Play className="w-8 h-8 fill-white stroke-none ml-1" />
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 space-y-4">
            <h4 className="font-serif text-lg md:text-xl font-bold text-on-surface">Video Dokumenter: Harmoni Alam & Kemandirian</h4>
            <p className="font-sans text-xs md:text-sm text-on-surface-variant leading-relaxed text-justify">
              Saksikan cuplikan video dokumenter resmi mengenai sejarah, pesona alam pesawahan, kearifan lokal warga dalam melestarikan budaya, serta derap kemajuan pembangunan digital terintegrasi di Desa Cikidang.
            </p>
          </div>
        </div>
      </section>

      {/* Grid Photos */}
      <section className="space-y-6">
        <h3 className="font-serif text-lg md:text-xl font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
          <Camera className="w-5 h-5 text-secondary" />
          <span>Galeri Foto Kegiatan</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {visibleItems.map((item, idx) => (
            <div 
              key={item.id}
              onClick={() => openLightbox(idx)}
              className="bg-white rounded-xl border border-outline-variant overflow-hidden group hover:border-primary shadow-soft hover:shadow-md transition-all cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-md border border-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider font-sans shadow-md">
                  {item.category.replace('-', ' ')}
                </div>
              </div>

              <div className="p-4 bg-surface-container-lowest">
                <h4 className="font-serif text-sm font-bold text-on-surface group-hover:text-primary transition-colors line-clamp-1">
                  {item.title}
                </h4>
                <p className="font-sans text-xs text-on-surface-variant line-clamp-2 mt-1 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {filteredItems.length > visibleCount && (
          <div className="text-center pt-6">
            <button
              onClick={loadMore}
              className="font-sans text-xs font-bold text-primary border border-primary hover:bg-primary/5 px-6 py-2.5 rounded-lg transition-all shadow-sm cursor-pointer"
            >
              Muat Lebih Banyak Foto
            </button>
          </div>
        )}
      </section>

      {/* Photo Lightbox Modal */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 bg-black/95 z-[120] flex flex-col justify-between p-4">
          
          {/* Lightbox Header */}
          <div className="flex justify-between items-center text-white px-4 py-2">
            <div>
              <span className="text-[10px] uppercase font-black tracking-widest text-secondary-fixed block mb-0.5">
                {filteredItems[lightboxIndex].category.replace('-', ' ')}
              </span>
              <h3 className="font-serif text-sm md:text-base font-bold">
                {filteredItems[lightboxIndex].title}
              </h3>
            </div>
            
            <button 
              onClick={() => setLightboxIndex(null)}
              className="text-white hover:text-secondary-fixed p-2.5 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Main Image & Navigation */}
          <div className="flex items-center justify-between flex-grow max-h-[70vh] relative">
            <button 
              onClick={handlePrev}
              className="text-white hover:text-secondary-fixed p-3 bg-black/40 hover:bg-black/60 rounded-full transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="max-w-4xl w-full h-full flex items-center justify-center p-2">
              <img 
                src={filteredItems[lightboxIndex].image} 
                alt={filteredItems[lightboxIndex].title} 
                className="max-w-full max-h-full object-contain rounded shadow-2xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <button 
              onClick={handleNext}
              className="text-white hover:text-secondary-fixed p-3 bg-black/40 hover:bg-black/60 rounded-full transition-colors cursor-pointer"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Lightbox Footer Info */}
          <div className="text-center text-white max-w-xl mx-auto px-4 py-4 space-y-1">
            <p className="font-sans text-xs md:text-sm text-white/80 leading-relaxed">
              {filteredItems[lightboxIndex].description}
            </p>
            <span className="font-sans text-[10px] text-white/40 block">
              Foto {lightboxIndex + 1} dari {filteredItems.length} dalam Kategori
            </span>
          </div>

        </div>
      )}

      {/* Simulated Video Player Modal */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/90 z-[120] flex items-center justify-center p-4">
          <div className="bg-surface rounded-xl border border-outline-variant max-w-4xl w-full overflow-hidden shadow-2xl relative animate-scale-up">
            <button 
              onClick={() => setVideoModalOpen(false)}
              className="absolute top-4 right-4 bg-black/60 hover:bg-black/80 text-white p-2 rounded-full transition-colors z-10 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="aspect-video w-full bg-black relative">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/nhWGjwIYcNg?autoplay=1"
                title="Profil Video Desa Cikidang"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
