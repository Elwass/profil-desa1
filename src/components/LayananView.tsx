import { useState } from 'react';
import { Search, FileText, ArrowRight, ClipboardList, Clock, CheckCircle, HelpCircle, AlertCircle, Phone } from 'lucide-react';
import { ServiceItem, ServiceApplication } from '../types';

interface LayananViewProps {
  services: ServiceItem[];
  applications: ServiceApplication[];
  onSelectService: (service: ServiceItem) => void;
  onCancelApplication: (id: string) => void;
}

export default function LayananView({
  services,
  applications,
  onSelectService,
  onCancelApplication,
}: LayananViewProps) {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter services by search query
  const filteredServices = services.filter((service) => {
    return service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           service.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 space-y-12">
      
      {/* Header Layanan */}
      <div className="text-center space-y-4">
        <span className="block font-sans text-xs font-bold text-secondary uppercase tracking-widest mb-2">
          Transparan & Akuntabel
        </span>
        <h1 className="font-serif text-3xl md:text-5xl font-bold text-primary tracking-tight">
          Layanan Publik Administrasi Desa
        </h1>
        <p className="font-sans text-sm md:text-base text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Kini pengurusan surat keterangan dan dokumen administrasi desa menjadi lebih cepat, teratur, dan gratis 100% tanpa pungutan liar.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="bg-white p-5 rounded-xl border border-outline-variant shadow-soft flex flex-col md:flex-row gap-4 items-center justify-between">
        
        {/* Search Input */}
        <div className="relative w-full">
          <Search className="w-5 h-5 text-on-surface-variant/70 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input 
            type="text" 
            placeholder="Cari layanan (Contoh: SKU, Kartu Keluarga)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-2.5 text-sm rounded-lg border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all bg-surface-container-low"
          />
        </div>

      </div>

      {/* Services Grid */}
      <div className="space-y-6">
        <h3 className="font-serif text-xl font-bold text-primary border-b border-outline-variant pb-2 flex items-center gap-2">
          <ClipboardList className="w-5 h-5 text-secondary" />
          <span>Daftar Layanan Tersedia ({filteredServices.length})</span>
        </h3>

        {filteredServices.length === 0 ? (
          <div className="bg-surface-container-low border border-outline-variant p-10 text-center rounded-xl">
            <HelpCircle className="w-12 h-12 text-on-surface-variant/50 mx-auto mb-3" />
            <h4 className="font-serif text-lg font-bold text-on-surface">Layanan Tidak Ditemukan</h4>
            <p className="font-sans text-xs md:text-sm text-on-surface-variant mt-1">Coba gunakan kata kunci pencarian lain atau pilih kategori yang berbeda.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredServices.map((service) => (
              <button
                key={service.id}
                onClick={() => onSelectService(service)}
                className="bg-white p-6 rounded-xl border border-outline-variant hover:border-primary shadow-soft hover:shadow-md transition-all text-left flex items-start gap-4 cursor-pointer group w-full"
              >
                <div className="bg-primary/10 text-primary p-3 rounded-lg shrink-0 group-hover:bg-primary group-hover:text-on-primary transition-all">
                  <FileText className="w-5 h-5" />
                </div>
                
                <div className="space-y-2 flex-grow">
                  <h4 className="font-serif text-base md:text-lg font-bold text-on-surface group-hover:text-primary transition-colors">
                    {service.title}
                  </h4>
                  <p className="font-sans text-xs text-on-surface-variant line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-x-4 gap-y-1.5 pt-2 text-[11px] font-semibold text-on-surface-variant/80 uppercase tracking-wider">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-primary" /> {service.duration}</span>
                    <span className="flex items-center gap-1"><CheckCircle className="w-3.5 h-3.5 text-secondary" /> {service.cost}</span>
                  </div>
                </div>

                <div className="shrink-0 self-center text-primary-container opacity-40 group-hover:opacity-100 group-hover:translate-x-1 transition-all">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Riwayat Pengajuan Online (Simulasi Lokal) */}
      <div className="bg-surface-container-low rounded-xl border border-outline-variant p-6 md:p-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-outline-variant pb-4">
          <div>
            <h3 className="font-serif text-xl font-bold text-primary flex items-center gap-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span>Simulasi Pengajuan & Status Berkas</span>
            </h3>
            <p className="font-sans text-xs text-on-surface-variant mt-1">Data disimpan secara lokal di peramban Anda untuk simulasi interaktif.</p>
          </div>
          <span className="bg-secondary/15 text-secondary px-3 py-1.5 rounded-full text-xs font-bold font-sans self-start sm:self-auto uppercase tracking-wide">
            {applications.length} Pengajuan Aktif
          </span>
        </div>

        {applications.length === 0 ? (
          <div className="text-center py-10 space-y-2">
            <AlertCircle className="w-10 h-10 text-on-surface-variant/50 mx-auto" />
            <h4 className="font-serif text-base font-bold text-on-surface">Belum Ada Pengajuan Online</h4>
            <p className="font-sans text-xs text-on-surface-variant max-w-sm mx-auto">
              Silakan pilih salah satu layanan di atas dan klik tab <strong>"Ajukan Online"</strong> untuk melakukan uji coba simulasi.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {applications.map((app) => (
              <div 
                key={app.id} 
                className="bg-white p-5 rounded-lg border border-outline-variant shadow-sm flex flex-col md:flex-row justify-between items-start md:items-center gap-4 hover:border-outline transition-colors"
              >
                <div className="space-y-1.5 flex-grow">
                  <div className="flex items-center gap-2">
                    <span className="font-sans text-xs font-bold text-primary font-mono bg-primary/5 px-2.5 py-0.5 rounded border border-primary/10">{app.id}</span>
                    <h4 className="font-serif text-sm md:text-base font-bold text-on-surface">{app.serviceTitle}</h4>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-0.5 text-xs text-on-surface-variant">
                    <p><strong>Pemohon:</strong> {app.fullName}</p>
                    <p><strong>NIK:</strong> {app.nik}</p>
                    <p><strong>Tanggal Kirim:</strong> {app.submittedAt}</p>
                    <p><strong>Kontak HP:</strong> {app.phone}</p>
                  </div>

                  {app.notes && (
                    <div className="bg-surface-container-low p-2.5 rounded border border-outline-variant/50 mt-2 text-xs text-on-surface-variant">
                      <strong>Catatan Petugas:</strong> {app.notes}
                    </div>
                  )}
                </div>

                <div className="flex sm:flex-row md:flex-col items-end gap-3 w-full md:w-auto shrink-0 justify-between md:justify-center border-t md:border-t-0 pt-3 md:pt-0 border-outline-variant">
                  <span className={`px-3 py-1 rounded text-xs font-bold font-sans ${
                    app.status === 'Diproses' ? 'bg-amber-100 text-amber-800' :
                    app.status === 'Disetujui' ? 'bg-green-100 text-green-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    ● {app.status}
                  </span>

                  <button
                    onClick={() => onCancelApplication(app.id)}
                    className="text-xs text-error hover:underline font-semibold cursor-pointer"
                  >
                    Batalkan Pengisian
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Support Banner */}
      <div className="bg-primary text-on-primary rounded-xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 border border-primary-container shadow-md relative overflow-hidden">
        <div className="absolute inset-0 batik-pattern opacity-10 pointer-events-none" />
        <div className="space-y-2 relative z-10 text-center md:text-left">
          <h4 className="font-serif text-lg md:text-xl font-bold text-white">Butuh bantuan mendesak atau konsultasi berkas?</h4>
          <p className="font-sans text-xs md:text-sm text-white/80 max-w-xl">
            Hubungi sekretariat desa melalui WhatsApp Pelayanan untuk respon langsung terkait kelengkapan administrasi Anda.
          </p>
        </div>
        <button
          onClick={() => alert('Membuka simulasi WhatsApp Chat Pelayanan Desa Cikidang... Nomor: 0812-3456-7890')}
          className="bg-white text-[#0a4c3e] hover:bg-emerald-50 hover:text-emerald-800 px-6 py-3 rounded-lg font-sans text-xs md:text-sm font-bold flex items-center gap-2 cursor-pointer shadow-md relative z-10 transition-colors whitespace-nowrap"
        >
          <Phone className="w-4 h-4" />
          <span>WhatsApp Pelayanan</span>
        </button>
      </div>

    </div>
  );
}
