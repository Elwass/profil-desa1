/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export enum ActiveTab {
  Beranda = 'beranda',
  Profil = 'profil',
  Layanan = 'layanan',
  Galeri = 'galeri',
}

export interface NewsItem {
  id: string;
  category: string;
  date: string;
  title: string;
  summary: string;
  content: string;
  image: string;
  author: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  requirements: string[];
  duration: string;
  cost: string;
  iconName: 'file-text' | 'home' | 'users' | 'alert-circle';
}

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  category: 'gotong-royong' | 'budaya' | 'infrastruktur' | 'pendidikan';
  image: string;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  image: string;
  description: string;
}

export interface ServiceApplication {
  id: string;
  serviceId: string;
  serviceTitle: string;
  fullName: string;
  nik: string;
  phone: string;
  additionalInfo: string;
  submittedAt: string;
  status: 'Diproses' | 'Disetujui' | 'Ditolak';
  notes?: string;
}
