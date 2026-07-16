import React, { useState } from 'react';
import { X, Send, Check, Phone, Mail, Clock, MapPin, MessageSquare } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [category, setCategory] = useState('Pertanyaan Umum');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !message) return;

    // Simulate submission
    setSubmitted(true);
    setTimeout(() => {
      // Clear fields and close
      setFullName('');
      setEmail('');
      setMessage('');
      setSubmitted(false);
      onClose();
      alert('Pesan Anda berhasil terkirim ke Kantor Desa Cikidang! Petugas kami akan segera memproses laporan/pertanyaan Anda.');
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-surface rounded-xl border border-outline-variant max-w-4xl w-full overflow-hidden shadow-2xl flex flex-col md:flex-row relative animate-scale-up">
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-primary hover:bg-surface-container-low p-2 rounded-full transition-colors z-10 cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Side: Contact Info */}
        <div className="bg-primary text-on-primary p-8 md:w-5/12 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Batik background overlay */}
          <div className="absolute inset-0 batik-pattern opacity-10 pointer-events-none" />
          
          <div className="space-y-6 relative z-10">
            <h3 className="font-serif text-2xl font-bold tracking-tight text-white">Hubungi Kami</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Kami siap melayani Anda. Silakan hubungi kontak resmi kami atau sampaikan aduan/aspirasi Anda melalui form di samping.
            </p>

            <div className="space-y-4 pt-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary-fixed shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-white">Kantor Kepala Desa</p>
                  <p className="text-white/80">Jl. Raya Cikidang No. 1, Kecamatan Cilongok, Kabupaten Banyumas, Jawa Tengah 53162</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-secondary-fixed shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-white">Telepon</p>
                  <p className="text-white/80">(0281) 6841234</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-secondary-fixed shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold text-white">Email Resmi</p>
                  <p className="text-white/80">info@desacikidang.go.id</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-secondary-fixed shrink-0 mt-0.5" />
                <div className="text-sm">
                  <p className="font-semibold text-white">Jam Pelayanan</p>
                  <p className="text-white/80">Senin - Jumat: 08:00 - 15:00 WIB</p>
                  <p className="text-xs text-secondary-fixed font-semibold mt-1">Ramadhan: 08:00 - 14:00 WIB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-8 text-xs text-white/60 relative z-10">
            Desa Cikidang - Responsif, Transparan, Akuntabel.
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:w-7/12 flex flex-col justify-center">
          <h4 className="font-serif text-xl font-bold text-primary mb-2 flex items-center gap-2">
            <MessageSquare className="w-5 h-5" />
            <span>Kirim Aspirasi & Aduan</span>
          </h4>
          <p className="text-xs text-on-surface-variant mb-6">
            Laporan atau pertanyaan Anda akan diteruskan langsung ke sekretariat desa untuk segera ditindaklanjuti.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">
                Nama Lengkap <span className="text-error">*</span>
              </label>
              <input 
                type="text" 
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Contoh: Ahmad Fauzi"
                className="w-full px-4 py-2 text-sm rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary bg-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">
                Alamat Email (Opsional)
              </label>
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Contoh: fauzi@example.com"
                className="w-full px-4 py-2 text-sm rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary bg-white outline-none transition-colors"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">
                Kategori Pesan
              </label>
              <select 
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full px-4 py-2 text-sm rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary bg-white outline-none transition-colors"
              >
                <option value="Pertanyaan Umum">Pertanyaan Umum</option>
                <option value="Pelayanan Administrasi">Pelayanan Administrasi</option>
                <option value="Pengaduan Lingkungan/Infrastruktur">Pengaduan Lingkungan / Infrastruktur</option>
                <option value="Saran & Aspirasi">Saran & Aspirasi</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider mb-1">
                Isi Laporan / Pesan <span className="text-error">*</span>
              </label>
              <textarea 
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tuliskan pesan Anda secara jelas dan lengkap..."
                className="w-full px-4 py-2 text-sm rounded border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary bg-white outline-none transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full bg-primary text-on-primary hover:bg-primary-container font-semibold text-sm py-2.5 rounded shadow hover:shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
            >
              {submitted ? (
                <>
                  <Check className="w-5 h-5 animate-pulse" />
                  <span>Mengirimkan Pesan...</span>
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  <span>Kirim Pesan</span>
                </>
              )}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}
