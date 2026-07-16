import { useState, useEffect } from 'react';
import { Search, Menu, X, PhoneCall } from 'lucide-react';
import { ActiveTab } from '../types';
import LogoNavbar from '../assets/images/logo-navbar.png';

interface NavigationProps {
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  onOpenContact: () => void;
  onOpenSearch: () => void;
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (open: boolean) => void;
}

export default function Navigation({
  activeTab,
  setActiveTab,
  onOpenContact,
  onOpenSearch,
  mobileMenuOpen,
  setMobileMenuOpen,
}: NavigationProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* TopNavBar */}
      <nav className={`fixed left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] md:w-[calc(100%-4rem)] max-w-7xl z-50 transition-all duration-300 border rounded-2xl ${
        scrolled 
        ? 'bg-surface/85 backdrop-blur-md border-outline-variant/35 shadow-lg py-1 top-3 md:top-4' 
        : 'bg-surface/70 backdrop-blur-md border-outline-variant/20 shadow-md py-2 top-4 md:top-6'
      }`}>
        <div className={`flex justify-between items-center px-4 md:px-16 max-w-7xl mx-auto w-full transition-all duration-300 ${
          scrolled ? 'py-1.5 md:py-2' : 'py-3 md:py-4'
        }`}>
          <button
            onClick={() => {
              setActiveTab(ActiveTab.Beranda);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center cursor-pointer group text-left"
            id="nav-logo"
          >
            <div className="flex items-center gap-2.5 md:gap-3">
              <img src={LogoNavbar} className="h-12 w-12 md:h-14 md:w-14 lg:h-16 lg:w-16 object-cover object-left transition-transform duration-300 group-hover:scale-105" alt="Logo Kabupaten Banyumas" referrerPolicy="no-referrer" />
              <div className="flex flex-col justify-center font-poppins text-left">
                <span className="text-base md:text-lg lg:text-xl font-bold text-zinc-950 leading-tight">
                  Desa Cikidang
                </span>
                <span className="text-[11px] md:text-xs lg:text-sm font-medium text-zinc-600 leading-tight mt-0.5">
                  Cilongok Banyumas
                </span>
              </div>
            </div>
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Beranda);
                setMobileMenuOpen(false);
              }}
              className={`font-sans text-sm font-semibold px-3 py-2 rounded transition-all cursor-pointer ${
                activeTab === ActiveTab.Beranda
                  ? 'text-primary border-b-2 border-primary rounded-b-none'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
              }`}
              id="nav-home"
            >
              Beranda
            </button>
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Profil);
                setMobileMenuOpen(false);
              }}
              className={`font-sans text-sm font-semibold px-3 py-2 rounded transition-all cursor-pointer ${
                activeTab === ActiveTab.Profil
                  ? 'text-primary border-b-2 border-primary rounded-b-none'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
              }`}
              id="nav-profile"
            >
              Profil
            </button>
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Layanan);
                setMobileMenuOpen(false);
              }}
              className={`font-sans text-sm font-semibold px-3 py-2 rounded transition-all cursor-pointer ${
                activeTab === ActiveTab.Layanan
                  ? 'text-primary border-b-2 border-primary rounded-b-none'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
              }`}
              id="nav-services"
            >
              Layanan
            </button>
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Galeri);
                setMobileMenuOpen(false);
              }}
              className={`font-sans text-sm font-semibold px-3 py-2 rounded transition-all cursor-pointer ${
                activeTab === ActiveTab.Galeri
                  ? 'text-primary border-b-2 border-primary rounded-b-none'
                  : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
              }`}
              id="nav-gallery"
            >
              Galeri
            </button>
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              className="text-on-surface-variant hover:text-primary p-2 rounded-full hover:bg-surface-container-low transition-colors cursor-pointer"
              aria-label="Cari informasi"
              id="nav-search-btn"
            >
              <Search className="w-5 h-5" />
            </button>

            {/* Contact Trigger (Desktop) */}
            <button
              onClick={onOpenContact}
              className="hidden md:inline-flex bg-slate-100/75 hover:bg-slate-200/75 border border-slate-200/60 backdrop-blur-md text-slate-700 px-4 py-2 rounded-lg font-sans text-sm font-semibold transition-all duration-200 cursor-pointer items-center gap-2 shadow-sm"
              id="nav-contact-btn"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Kontak</span>
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-on-surface-variant p-2 rounded-lg hover:bg-surface-container-low transition-colors"
              id="nav-mobile-toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-surface/90 backdrop-blur-lg border-t border-outline-variant/25 py-4 px-4 shadow-lg space-y-2 animate-fade-in">
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Beranda);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left font-sans text-sm font-semibold px-4 py-3 rounded ${
                activeTab === ActiveTab.Beranda
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              Beranda
            </button>
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Profil);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left font-sans text-sm font-semibold px-4 py-3 rounded ${
                activeTab === ActiveTab.Profil
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              Profil
            </button>
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Layanan);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left font-sans text-sm font-semibold px-4 py-3 rounded ${
                activeTab === ActiveTab.Layanan
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              Layanan
            </button>
            <button
              onClick={() => {
                setActiveTab(ActiveTab.Galeri);
                setMobileMenuOpen(false);
              }}
              className={`block w-full text-left font-sans text-sm font-semibold px-4 py-3 rounded ${
                activeTab === ActiveTab.Galeri
                  ? 'bg-primary/10 text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-low'
              }`}
            >
              Galeri
            </button>

            <div className="pt-4 border-t border-outline-variant">
              <button
                onClick={() => {
                  onOpenContact();
                  setMobileMenuOpen(false);
                }}
                className="w-full bg-slate-100/75 hover:bg-slate-200/75 border border-slate-200/60 backdrop-blur-md text-slate-700 py-3 rounded-lg font-sans text-sm font-semibold transition-all duration-200 flex items-center justify-center gap-2 shadow-sm cursor-pointer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Hubungi Kontak Desa</span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </>
  );
}
