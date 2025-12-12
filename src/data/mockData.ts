// Mock Data untuk KMS SMAN 2 Salatiga

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'staff' | 'guru' | 'siswa';
  status: 'active' | 'inactive';
  avatar?: string;
  createdAt: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
  icon: string;
  articleCount: number;
  color: string;
}

export interface Knowledge {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  categoryId: string;
  category: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  views: number;
  tags: string[];
}

export interface Comment {
  id: string;
  knowledgeId: string;
  author: string;
  content: string;
  createdAt: string;
}

export const users: User[] = [
  {
    id: '1',
    name: 'Dr. Siti Rahayu, M.Pd.',
    email: 'siti.rahayu@sman2salatiga.sch.id',
    role: 'admin',
    status: 'active',
    createdAt: '2024-01-15',
  },
  {
    id: '2',
    name: 'Budi Santoso, S.Pd.',
    email: 'budi.santoso@sman2salatiga.sch.id',
    role: 'guru',
    status: 'active',
    createdAt: '2024-02-10',
  },
  {
    id: '3',
    name: 'Dewi Lestari, S.Pd.',
    email: 'dewi.lestari@sman2salatiga.sch.id',
    role: 'guru',
    status: 'active',
    createdAt: '2024-03-05',
  },
  {
    id: '4',
    name: 'Agus Prasetyo',
    email: 'agus.prasetyo@sman2salatiga.sch.id',
    role: 'staff',
    status: 'active',
    createdAt: '2024-01-20',
  },
  {
    id: '5',
    name: 'Rina Wulandari',
    email: 'rina.wulandari@sman2salatiga.sch.id',
    role: 'staff',
    status: 'inactive',
    createdAt: '2024-04-12',
  },
  {
    id: '6',
    name: 'Ahmad Hidayat, S.Pd.',
    email: 'ahmad.hidayat@sman2salatiga.sch.id',
    role: 'guru',
    status: 'active',
    createdAt: '2024-02-28',
  },
];

export const categories: Category[] = [
  {
    id: 'profil-sekolah',
    name: 'Profil Sekolah',
    description: 'Informasi lengkap tentang Visi Misi, Sejarah, dan Latar Belakang SMAN 2 Salatiga',
    icon: 'School',
    articleCount: 8,
    color: 'primary',
  },
  {
    id: 'administrasi',
    name: 'Administrasi',
    description: 'Panduan prosedur administrasi, pendaftaran, surat-menyurat, dan layanan sekolah',
    icon: 'FileText',
    articleCount: 15,
    color: 'success',
  },
  {
    id: 'ekstrakurikuler',
    name: 'Ekstrakurikuler',
    description: 'Informasi kegiatan ekskul, jadwal, dan prestasi siswa SMAN 2 Salatiga',
    icon: 'Trophy',
    articleCount: 12,
    color: 'accent',
  },
  {
    id: 'bank-materi',
    name: 'Bank Materi Guru',
    description: 'Kumpulan materi pembelajaran untuk kelas X, XI, dan XII semua mata pelajaran',
    icon: 'BookOpen',
    articleCount: 45,
    color: 'warning',
  },
];

export const knowledgeItems: Knowledge[] = [
  {
    id: '1',
    title: 'Pendaftaran di SMAN 2 Salatiga',
    excerpt: 'Panduan lengkap prosedur pendaftaran siswa baru di SMAN 2 Salatiga tahun ajaran 2024/2025.',
    content: `
# Pendaftaran Peserta Didik Baru SMAN 2 Salatiga

## Persyaratan Umum
1. Lulusan SMP/MTs atau sederajat
2. Berusia maksimal 21 tahun pada tanggal 1 Juli tahun berjalan
3. Memiliki ijazah atau surat keterangan lulus
4. Memiliki SKHUN atau surat keterangan nilai

## Dokumen yang Diperlukan
- Fotokopi ijazah SMP/MTs yang dilegalisir (2 lembar)
- Fotokopi SKHUN yang dilegalisir (2 lembar)
- Fotokopi Kartu Keluarga (2 lembar)
- Fotokopi Akta Kelahiran (2 lembar)
- Pas foto 3x4 berwarna (6 lembar)
- Surat keterangan sehat dari dokter

## Tahapan Pendaftaran
### 1. Pendaftaran Online
Kunjungi website resmi PPDB Jawa Tengah dan lakukan pendaftaran online dengan mengisi data yang diperlukan.

### 2. Verifikasi Berkas
Setelah pendaftaran online, datang ke SMAN 2 Salatiga untuk verifikasi berkas asli.

### 3. Pengumuman Hasil Seleksi
Hasil seleksi akan diumumkan melalui website PPDB dan papan pengumuman sekolah.

### 4. Daftar Ulang
Bagi yang diterima, wajib melakukan daftar ulang sesuai jadwal yang ditentukan.

## Kontak Informasi
- Telepon: (0298) 123456
- Email: info@sman2salatiga.sch.id
- Alamat: Jl. Tentara Pelajar No. 10, Salatiga, Jawa Tengah
    `,
    categoryId: 'administrasi',
    category: 'Administrasi',
    author: 'Dr. Siti Rahayu, M.Pd.',
    createdAt: '2024-03-15',
    updatedAt: '2024-03-20',
    views: 1250,
    tags: ['pendaftaran', 'PPDB', 'siswa baru'],
  },
  {
    id: '2',
    title: 'Visi dan Misi SMAN 2 Salatiga',
    excerpt: 'Visi dan Misi SMAN 2 Salatiga sebagai sekolah unggulan di Kota Salatiga.',
    content: `
# Visi dan Misi SMAN 2 Salatiga

## Visi
"Menjadi sekolah unggul yang menghasilkan lulusan beriman, berakhlak mulia, cerdas, terampil, dan berwawasan lingkungan."

## Misi
1. Mengembangkan pendidikan karakter berbasis nilai-nilai agama dan budaya bangsa
2. Menyelenggarakan pembelajaran yang aktif, kreatif, efektif, dan menyenangkan
3. Mengembangkan potensi akademik dan non-akademik siswa secara optimal
4. Membangun budaya literasi dan inovasi dalam pembelajaran
5. Menciptakan lingkungan sekolah yang bersih, sehat, dan nyaman

## Tujuan
- Meningkatkan prestasi akademik dan non-akademik siswa
- Membentuk karakter siswa yang berakhlak mulia
- Menghasilkan lulusan yang siap melanjutkan ke perguruan tinggi
- Mengembangkan kompetensi guru dan tenaga kependidikan
    `,
    categoryId: 'profil-sekolah',
    category: 'Profil Sekolah',
    author: 'Dr. Siti Rahayu, M.Pd.',
    createdAt: '2024-01-10',
    updatedAt: '2024-01-10',
    views: 890,
    tags: ['visi', 'misi', 'profil'],
  },
  {
    id: '3',
    title: 'Kegiatan Ekstrakurikuler Pramuka',
    excerpt: 'Informasi lengkap tentang kegiatan Pramuka di SMAN 2 Salatiga.',
    content: `
# Ekstrakurikuler Pramuka SMAN 2 Salatiga

## Deskripsi
Pramuka adalah kegiatan ekstrakurikuler wajib yang bertujuan membentuk karakter siswa menjadi mandiri, disiplin, dan bertanggung jawab.

## Jadwal Latihan
- Hari: Jumat
- Waktu: 14.00 - 17.00 WIB
- Tempat: Lapangan SMAN 2 Salatiga

## Prestasi
- Juara 1 Lomba Tingkat Kwarcab Salatiga 2024
- Juara 2 Jambore Nasional 2023
- Penggalang Tergiat Tingkat Kota 2024
    `,
    categoryId: 'ekstrakurikuler',
    category: 'Ekstrakurikuler',
    author: 'Budi Santoso, S.Pd.',
    createdAt: '2024-02-20',
    updatedAt: '2024-02-25',
    views: 456,
    tags: ['pramuka', 'ekskul', 'kegiatan siswa'],
  },
  {
    id: '4',
    title: 'Materi Matematika Kelas X - Persamaan Kuadrat',
    excerpt: 'Materi lengkap tentang Persamaan Kuadrat untuk siswa kelas X.',
    content: `
# Persamaan Kuadrat

## Pengertian
Persamaan kuadrat adalah persamaan polynomial berorde dua dalam satu variabel.

## Bentuk Umum
ax² + bx + c = 0, dimana a ≠ 0

## Metode Penyelesaian
1. Pemfaktoran
2. Melengkapkan kuadrat sempurna
3. Rumus ABC

## Rumus ABC
x = (-b ± √(b² - 4ac)) / 2a

## Contoh Soal
Selesaikan: x² - 5x + 6 = 0
    `,
    categoryId: 'bank-materi',
    category: 'Bank Materi Guru',
    author: 'Ahmad Hidayat, S.Pd.',
    createdAt: '2024-03-01',
    updatedAt: '2024-03-10',
    views: 789,
    tags: ['matematika', 'kelas X', 'persamaan kuadrat'],
  },
  {
    id: '5',
    title: 'Prosedur Pengajuan Surat Keterangan',
    excerpt: 'Panduan langkah-langkah mengajukan surat keterangan di SMAN 2 Salatiga.',
    content: `
# Prosedur Pengajuan Surat Keterangan

## Jenis Surat yang Dapat Diajukan
- Surat Keterangan Aktif Sekolah
- Surat Keterangan Pindah Sekolah
- Surat Rekomendasi
- Surat Keterangan Lulus

## Langkah-langkah
1. Mengisi formulir pengajuan di TU
2. Melampirkan dokumen pendukung
3. Menunggu proses verifikasi (1-3 hari kerja)
4. Mengambil surat yang sudah jadi
    `,
    categoryId: 'administrasi',
    category: 'Administrasi',
    author: 'Agus Prasetyo',
    createdAt: '2024-02-15',
    updatedAt: '2024-02-15',
    views: 345,
    tags: ['administrasi', 'surat', 'prosedur'],
  },
  {
    id: '6',
    title: 'Sejarah SMAN 2 Salatiga',
    excerpt: 'Perjalanan sejarah SMAN 2 Salatiga dari awal berdiri hingga sekarang.',
    content: `
# Sejarah SMAN 2 Salatiga

## Awal Berdiri
SMAN 2 Salatiga didirikan pada tahun 1975 sebagai upaya pemerintah untuk memperluas akses pendidikan menengah atas di Kota Salatiga.

## Perkembangan
Seiring waktu, SMAN 2 Salatiga terus berkembang menjadi salah satu sekolah unggulan di Jawa Tengah.

## Prestasi Sekolah
- Akreditasi A
- Sekolah Adiwiyata Mandiri
- Berbagai juara olimpiade sains
    `,
    categoryId: 'profil-sekolah',
    category: 'Profil Sekolah',
    author: 'Dr. Siti Rahayu, M.Pd.',
    createdAt: '2024-01-05',
    updatedAt: '2024-01-05',
    views: 567,
    tags: ['sejarah', 'profil', 'sekolah'],
  },
];

export const comments: Comment[] = [
  {
    id: '1',
    knowledgeId: '1',
    author: 'Putri Ayu',
    content: 'Terima kasih informasinya, sangat membantu untuk persiapan PPDB!',
    createdAt: '2024-03-18',
  },
  {
    id: '2',
    knowledgeId: '1',
    author: 'Bapak Darmawan',
    content: 'Apakah ada jalur prestasi untuk pendaftaran?',
    createdAt: '2024-03-19',
  },
  {
    id: '3',
    knowledgeId: '1',
    author: 'Admin',
    content: 'Ya, tersedia jalur prestasi akademik dan non-akademik. Silakan cek website PPDB untuk info lebih lanjut.',
    createdAt: '2024-03-19',
  },
];

export const dashboardStats = {
  totalArticles: 80,
  totalCategories: 4,
  totalUsers: 150,
  totalViews: 12500,
};
