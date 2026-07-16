import React, { useState } from 'react';
import { X, FileText, CheckCircle, Clock, Coins, Send, AlertCircle, Building } from 'lucide-react';
import { ServiceItem, ServiceApplication } from '../types';

interface ServiceDetailModalProps {
  isOpen: boolean;
  service: ServiceItem | null;
  onClose: () => void;
  onAddApplication: (app: ServiceApplication) => void;
}

export default function ServiceDetailModal({
  isOpen,
  service,
  onClose,
  onAddApplication,
}: ServiceDetailModalProps) {
  const [fullName, setFullName] = useState('');
  const [nik, setNik] = useState('');
  const [phone, setPhone] = useState('');
  const [additionalInfo, setAdditionalInfo] = useState('');
  const [activeTab, setActiveTab] = useState<'info' | 'apply'>('info');
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen || !service) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !nik || !phone) {
      alert('Mohon lengkapi semua field yang berbintang (*)');
      return;
    }

    if (nik.length < 16) {
      alert('NIK harus terdiri dari 16 digit angka.');
      return;
    }

    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      const newApp: ServiceApplication = {
        id: 'APP-' + Math.floor(100000 + Math.random() * 900000),
        serviceId: service.id,
        serviceTitle: service.title,
        fullName,
        nik,
        phone,
        additionalInfo,
        submittedAt: new Date().toLocaleDateString('id-ID', {
          day: 'numeric',
          month: 'long',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }) + ' WIB',
        status: 'Diproses',
        notes: 'Dokumen Anda sedang dalam tahap verifikasi administratif oleh Sekretariat Desa.',
      };

      onAddApplication(newApp);
      setIsSubmitting(false);
      
      // Reset form
      setFullName('');
      setNik('');
      setPhone('');
      setAdditionalInfo('');
      setActiveTab('info');
      onClose();

      alert(`Permohonan ${service.title} Anda berhasil dikirim secara online!\nNomor Pendaftaran: ${newApp.id}\n\nAnda dapat memantau status berkas Anda pada bagian 'Riwayat Pengajuan' di halaman Layanan.`);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-surface rounded-xl border border-outline-variant max-w-2xl w-full overflow-hidden shadow-2xl relative animate-scale-up flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="bg-primary text-on-primary p-6 flex justify-between items-center relative">
          <div className="absolute inset-0 batik-pattern opacity-10 pointer-events-none" />
          <div className="flex items-center gap-3 relative z-10">
            <div className="bg-white/10 p-2 rounded-full">
              <FileText className="w-6 h-6 text-secondary-fixed" />
            </div>
            <div>
              <h3 className="font-serif text-lg md:text-xl font-bold tracking-tight text-white">{service.title}</h3>
              <p className="text-xs text-white/80">{service.subtitle || 'Layanan Administrasi Desa'}</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="text-white hover:text-secondary-fixed p-2 rounded-full hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex border-b border-outline-variant bg-surface-container-low">
          <button
            onClick={() => setActiveTab('info')}
            className={`flex-1 py-3 text-center text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'info'
                ? 'border-primary text-primary bg-white'
                : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container'
            }`}
          >
            Persyaratan & Informasi
          </button>
          <button
            onClick={() => setActiveTab('apply')}
            className={`flex-1 py-3 text-center text-sm font-semibold border-b-2 transition-all cursor-pointer ${
              activeTab === 'apply'
                ? 'border-primary text-primary bg-white'
                : 'border-transparent text-on-surface-variant hover:text-primary hover:bg-surface-container'
            }`}
          >
            Ajukan Online (Uji Coba)
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 overflow-y-auto flex-grow bg-white">
          {activeTab === 'info' ? (
            <div className="space-y-6">
              <div>
                <h4 className="font-serif text-base font-bold text-primary mb-2">Deskripsi Layanan</h4>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {service.description}
                </p>
              </div>

              <div>
                <h4 className="font-serif text-base font-bold text-primary mb-3">Persyaratan Dokumen</h4>
                <ul className="space-y-2.5">
                  {service.requirements.map((req, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-on-surface-variant">
                      <CheckCircle className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-outline-variant">
                <div className="bg-surface-container-low p-4 rounded border border-outline-variant flex items-center gap-3">
                  <Clock className="w-5 h-5 text-primary shrink-0" />
                  <div>
                    <p className="text-xs text-on-surface-variant font-semibold uppercase tracking-wider">Durasi Proses</p>
                    <p className="text-sm font-bold text-on-surface">{service.duration}</p>
                  </div>
                </div>

                <div className="bg-surface-container-low p-4 rounded border border-outline-variant flex items-center gap-3">
                  <Coins className="w-5 h-5 text-secondary shrink-0" />
                  <div>
                    <p className="text-xs text-on-surface-variant font-semibold uppercase tracking-wider">Biaya Pelayanan</p>
                    <p className="text-sm font-bold text-primary">{service.cost}</p>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 p-4 rounded flex gap-3 text-amber-900">
                <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <p className="font-bold mb-1">Catatan Penting:</p>
                  <p>Semua dokumen fisik asli wajib dibawa ke Kantor Balai Desa untuk proses verifikasi akhir dan pengambilan surat jadi yang telah ditandatangani Kepala Desa.</p>
                </div>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="bg-primary/5 p-4 rounded border border-primary/20 flex gap-3 text-primary-container">
                <Building className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div className="text-xs leading-relaxed">
                  <p className="font-bold text-primary">Layanan Mandiri Online</p>
                  <p className="text-on-surface-variant">Isi data diri Anda di bawah ini secara lengkap untuk mengajukan permohonan. Berkas pengajuan akan masuk ke database simulasi lokal Anda.</p>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">
                  Nama Lengkap Sesuai KTP <span className="text-error">*</span>
                </label>
                <input 
                  type="text" 
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Contoh: Budi Setiawan"
                  className="w-full px-4 py-2 text-sm rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">
                  Nomor Induk Kependudukan (NIK - 16 Digit) <span className="text-error">*</span>
                </label>
                <input 
                  type="text" 
                  maxLength={16}
                  required
                  value={nik}
                  onChange={(e) => setNik(e.target.value.replace(/\D/g, ''))}
                  placeholder="3201xxxxxxxxxxxx"
                  className="w-full px-4 py-2 text-sm rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors font-mono"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">
                  Nomor HP / WhatsApp Aktif <span className="text-error">*</span>
                </label>
                <input 
                  type="tel" 
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Contoh: 081234567890"
                  className="w-full px-4 py-2 text-sm rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">
                  Keterangan Tambahan / Alasan Pengajuan
                </label>
                <textarea 
                  rows={3}
                  value={additionalInfo}
                  onChange={(e) => setAdditionalInfo(e.target.value)}
                  placeholder="Contoh: Mengajukan SKU untuk keperluan kredit pengembangan usaha warung kelontong..."
                  className="w-full px-4 py-2 text-sm rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-colors resize-none"
                />
              </div>

              <div className="pt-4 border-t border-outline-variant flex gap-4">
                <button
                  type="button"
                  onClick={() => setActiveTab('info')}
                  className="flex-1 py-2 rounded text-sm font-semibold border border-outline text-on-surface-variant hover:bg-surface-container transition-colors cursor-pointer text-center"
                >
                  Kembali
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex-1 bg-primary text-on-primary hover:bg-primary-container py-2 rounded text-sm font-semibold shadow transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Mengirim...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Kirim Berkas</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
}
