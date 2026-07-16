import { MapPin, Phone, Mail, Share2, Globe, Clock, ShieldCheck, Facebook, Instagram, Youtube } from 'lucide-react';
import { ActiveTab } from '../types';
import LogoFooter from '../assets/images/logo-footer.png';

interface FooterProps {
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
}

export default function Footer({ setActiveTab, onOpenContact }: FooterProps) {
  const mapImageUrl = 'https://static-maps.yandex.ru/1.x/?ll=109.155455,-7.382017&z=13&l=sat,skl&size=450,250';

  return (
    <footer className="bg-[#0b0f12] border-t border-zinc-800/80 w-full text-zinc-300 pt-16 pb-8 mt-16 font-sans">
      <div className="max-w-7xl mx-auto px-6 md:px-16">
        
        {/* Main Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-zinc-800/60">
          
          {/* Col 1: Brand & Live Service Indicator */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5 md:gap-3">
              <img src={LogoFooter} className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-cover object-left transition-transform duration-300 group-hover:scale-105 drop-shadow-md" alt="Logo Kabupaten Banyumas" referrerPolicy="no-referrer" />
              <div className="flex flex-col justify-center font-poppins text-left">
                <span className="text-base md:text-lg lg:text-xl font-bold text-white leading-tight whitespace-nowrap">
                  Desa Cikidang
                </span>
                <span className="text-[11px] md:text-xs lg:text-sm font-medium text-zinc-400 leading-tight mt-0.5 whitespace-nowrap">
                  Cilongok Banyumas
                </span>
              </div>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="hidden md:block space-y-5">
            <h4 className="font-serif text-sm font-bold text-white tracking-wider uppercase">
              Tautan Cepat
            </h4>
            <ul className="space-y-3.5 text-sm">
              {[
                { label: 'Beranda Utama', tab: ActiveTab.Beranda },
                { label: 'Profil Wilayah', tab: ActiveTab.Profil },
                { label: 'Layanan Mandiri', tab: ActiveTab.Layanan },
                { label: 'Galeri Kegiatan', tab: ActiveTab.Galeri },
              ].map((link, idx) => (
                <li key={idx}>
                  <button
                    onClick={() => {
                      setActiveTab(link.tab);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="text-zinc-400 hover:text-white transition-colors duration-200 text-left cursor-pointer font-medium flex items-center"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => alert('Kebijakan Privasi Pemerintahan Desa Cikidang melindungi seluruh data kependudukan warga secara digital sesuai standar keamanan informasi.')}
                  className="text-zinc-400 hover:text-white transition-colors duration-200 text-left cursor-pointer font-medium flex items-center"
                >
                  Kebijakan Privasi
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Jam Kerja */}
          <div className="space-y-5">
            <h4 className="font-serif text-sm font-bold text-white tracking-wider uppercase">
              Kontak & Jam Kerja
            </h4>
            <address className="not-italic text-xs space-y-4 text-zinc-400 leading-relaxed">
              <div className="flex items-start gap-3">
                <MapPin className="w-4.5 h-4.5 text-white shrink-0 mt-0.5" />
                <span>Jl. Raya Cikidang No. 1, Kecamatan Cilongok, Kabupaten Banyumas, Jawa Tengah 53162</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <span>(0281) 657-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <span>kontak@cikidang.desa.id</span>
              </div>
              <div className="flex items-center gap-3 border-t border-zinc-800/40 pt-3.5 mt-3.5">
                <Clock className="w-4 h-4 text-white shrink-0" />
                <span>Senin - Jumat: 08:00 - 14:30 WIB</span>
              </div>
            </address>
          </div>

          {/* Col 4: Map CTA & Social Media */}
          <div className="space-y-5">
            <h4 className="font-serif text-sm font-bold text-white tracking-wider uppercase">
              Peta Wilayah
            </h4>
            
            <a 
              href="https://maps.app.goo.gl/rcfpGsehcKe2zajP8"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full h-32 rounded-xl overflow-hidden border border-zinc-800/80 hover:border-zinc-700/80 shadow-md relative cursor-pointer group transition-all duration-300"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-70 group-hover:opacity-90 group-hover:scale-105 transition-all duration-500" 
                style={{ backgroundImage: `url('${mapImageUrl}')` }}
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f12]/80 via-transparent to-transparent" />
              
              {/* Red glowing map pin in the middle */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <div className="relative flex flex-col items-center">
                  <span className="absolute -top-1 w-3 h-3 bg-red-500/30 rounded-full animate-ping" />
                  <MapPin className="w-6 h-6 text-red-500 drop-shadow-lg group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>

              {/* Floating label that appears on hover */}
              <div className="absolute inset-0 flex items-end justify-center pb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <span className="bg-zinc-950/90 text-white text-[10px] font-sans font-medium px-2 py-1 rounded border border-zinc-700/50 shadow-lg">
                  Buka di Google Maps
                </span>
              </div>
            </a>

            {/* Social Media Links */}
            <div className="flex items-center gap-2 pt-1">
              <button 
                onClick={onOpenContact}
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all duration-200 flex items-center justify-center cursor-pointer"
                title="Kirim Pesan"
              >
                <Mail className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => alert('Membagikan Portal Desa Cikidang')}
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all duration-200 flex items-center justify-center cursor-pointer"
                title="Bagikan Portal"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
              <button 
                onClick={() => {
                  setActiveTab(ActiveTab.Profil);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all duration-200 flex items-center justify-center cursor-pointer"
                title="Situs Profil"
              >
                <Globe className="w-3.5 h-3.5" />
              </button>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all duration-200 flex items-center justify-center cursor-pointer"
                title="Facebook Resmi"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all duration-200 flex items-center justify-center cursor-pointer"
                title="Instagram Resmi"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:bg-zinc-800 hover:text-white hover:border-zinc-700 transition-all duration-200 flex items-center justify-center cursor-pointer"
                title="YouTube Resmi"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500 text-center md:text-left">
          <div className="space-y-1">
            <p className="font-semibold text-zinc-400">
              © 2026 Pemerintah Desa Cikidang. Seluruh Hak Cipta Dilindungi.
            </p>
            <p className="text-[10px] text-zinc-600">
              Sistem Informasi Desa Cikidang v2.0 • Disertifikasi Resmi Kominfo Banyumas
            </p>
          </div>
          <div className="flex items-center justify-center gap-4">
            <div className="inline-flex items-center gap-2 px-1.5 py-0.5">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold text-emerald-500 tracking-wide">
                Layanan Online Aktif
              </span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
