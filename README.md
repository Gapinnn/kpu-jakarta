# Desain Ulang Situs Web KPU Jakarta

Repositori ini berisi kode sumber untuk desain ulang situs web KPU Jakarta. Redesain ini dilakukan oleh Kelompok 5 Kelas 3Si2 Politeknik Statistika STIS. Berikut anggota:
1. Gavin Atha Wisesa
2. Lilis Dwiyanti
3. Sultan Hadi Prabowo
4. Syakira Rizky Andini

**Tujuan Desain Ulang**:
_Hasil  dari penelitian  ini  adalah  prototype  tampilan website KPU yang baru dan pedoman UI. Hasil dari penelitian ini diharapkan dapat memberikan kontribusi dalam meningkatkan kualitas layanan dan kepuasan pengguna terhadap website KPU DKI Jakarta._

## Struktur Proyek

```
kpu-jakarta/
│
├── .env
├── .gitignore
├── README.md
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vercel.json
├── vite.config.js
│
├── public/
|   ├── file/
|   ├── images/
|   └── videos/
|   └── vite.svg
|
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   ├── assets/
│   │   ├── react.svg
│   │   └── vite.svg
│   ├── components/
│   │   ├── Beranda/
│   │   ├── Icon/
│   │   ├── Informasi/
│   │   ├── Logo/
│   │   ├── Pdf/
│   │   ├── Pengaduan/
│   │   ├── Publikasi/
│   │   ├── Sejarah/
│   │   ├── StrukturOrganisasi/
│   │   ├── Tabulasi/
│   │   ├── TugasPokok/
│   │   ├── TugasWewenang/
│   │   ├── VisiMisi/
│   │   ├── Visualisasi/
│   │   ├── ButtonToTop.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── Loading.jsx
│   │   └── SpeechRecognition.jsx
│   ├── contents/
│   │   ├── agenda/
│   │   ├── filter/
│   │   ├── footer/
│   │   ├── galeri/
│   │   ├── header/
│   │   ├── hero/
│   │   ├── informasi/
│   │   ├── modul/
│   │   ├── pedoman/
│   │   ├── sejarah/
│   │   ├── sosialisasi/
│   │   ├── tabulasi/
│   │   └── visualisasi/
│   ├── hooks/
│   │   ├── getLanguage.js
│   │   ├── getPath.js
│   │   └── useSpeechToText.jsx
│   ├── pages/
│   │   ├── Agenda.jsx
│   │   ├── AgendaEn.jsx
│   │   ├── Beranda.jsx
│   │   ├── BerandaEn.jsx
│   │   ├── BeritaOpini.jsx
│   │   ├── BeritaOpiniEn.jsx
│   │   ├── BeritaTerkini.jsx
│   │   ├── BeritaTerkiniEn.jsx
│   │   ├── Dumas.jsx
│   │   ├── DumasEn.jsx
│   │   ├── HalamanBerita.jsx
│   │   ├── HalamanBeritaEn.jsx
│   │   ├── HalamanOpini.jsx
│   │   ├── HalamanOpiniEn.jsx
│   │   ├── HalamanPengumuman.jsx
│   │   ├── HalamanPengumumanEn.jsx
│   │   ├── PdfView.jsx
│   │   ├── Pengaduan.jsx
│   │   ├── PengaduanEn.jsx
│   │   ├── Pengumuman.jsx
│   │   ├── PengumumanEn.jsx
│   │   ├── PublikasiDokumen.jsx
│   │   ├── PublikasiDokumenEn.jsx
│   │   ├── PublikasiGaleri.jsx
│   │   ├── PublikasiGaleriEn.jsx
│   │   ├── Sejarah.jsx
│   │   ├── SejarahEn.jsx
│   │   ├── Sop.jsx
│   │   ├── StrukturOrganisasi.jsx
│   │   ├── StrukturOrganisasiEn.jsx
│   │   ├── Tabulasi.jsx
│   │   ├── TabulasiEn.jsx
│   │   ├── TugasWewenang.jsx
│   │   ├── TugasWewenangEn.jsx
│   │   ├── Tupoksi.jsx
│   │   ├── TupoksiEn.jsx
│   │   ├── VisiMisi.jsx
│   │   └── VisiMisiEn.jsx
│   ├── app.css
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
```

### Direktori Utama

- **.env**: File ini berisi variabel lingkungan untuk proyek, seperti URL API atau kunci rahasia.
- **.gitignore**: File ini menentukan file dan direktori yang harus diabaikan oleh Git, seperti node_modules dan file konfigurasi lokal.
- **vercel.json**: File konfigurasi hosting dengan menggunakan Vercel
- **README.md**: File ini memberikan gambaran umum dan instruksi untuk proyek.
- **index.html**: File HTML utama yang menjadi pintu masuk aplikasi web.
- **package.json**: Berisi metadata proyek dan daftar dependensi yang diperlukan.
- **postcss.config.js**: Konfigurasi untuk PostCSS, alat yang digunakan untuk mengolah CSS.
- **tailwind.config.js**: Konfigurasi untuk Tailwind CSS, framework CSS yang digunakan dalam proyek ini.
- **vite.config.js**: Konfigurasi untuk Vite, alat pembangunan proyek yang cepat.

### Direktori `src/`

- **App.jsx**: Komponen utama aplikasi React yang merangkum seluruh bagian aplikasi.
- **main.jsx**: Titik masuk utama untuk aplikasi, digunakan untuk merender `App.jsx`.
- **assets/**: Direktori ini berisi aset-aset statis seperti gambar, font, dan ikon.
  - **images/**: Subdirektori untuk menyimpan gambar.
  - **fonts/**: Subdirektori untuk menyimpan font.
- **components/**: Direktori ini berisi komponen React yang dapat digunakan kembali di berbagai bagian aplikasi.
  - **Header.jsx**: Komponen untuk bagian header situs.
  - **Footer.jsx**: Komponen untuk bagian footer situs.
- **pages/**: Direktori ini berisi komponen halaman untuk berbagai rute dalam aplikasi.
  - **HomePage.jsx**: Komponen untuk halaman beranda.
  - **AboutPage.jsx**: Komponen untuk halaman tentang.
- **styles/**: Direktori ini berisi file-file gaya global dan spesifik komponen.
  - **global.css**: File CSS untuk gaya global.
  - **componentStyles.css**: File CSS untuk gaya komponen tertentu.
 
#### Direktori `src/pages/`

- **Beranda.jsx**: File yang menampilkan halaman untuk halaman utama situs web yang menampilkan informasi umum dan akses ke berbagai fitur dan konten situs web.
- **StrukturOrganisasi.jsx**: File yang menampilkan halaman untuk struktur organisasi KPU Jakarta, termasuk diagram dan deskripsi posisi dan peran.
- **Sejarah.jsx**: File yang menampilkan halaman untuk informasi tentang sejarah pemilu di Jakarta, termasuk tonggak penting dan perkembangan dari waktu ke waktu.
- **BeritaTerkini.jsx**: File yang menampilkan halaman untuk berita terbaru yang terkait dengan kegiatan dan informasi KPU Jakarta.
- **Pengumuman.jsx**: File yang menampilkan halaman untuk pengumuman resmi dari KPU Jakarta, seperti pemberitahuan tentang jadwal pemilu dan perubahan peraturan.
- **BeritaOpini.jsx**: File yang menampilkan halaman untuk artikel opini dan analisis terkait isu-isu pemilu dan demokrasi di Jakarta.
- **HalamanBerita.jsx**: File yang menampilkan halaman untuk detail lengkap dari berita yang dipilih oleh pengguna.
- **VisiMisi.jsx**: File yang menampilkan halaman untuk menjelaskan visi dan misi KPU Jakarta, termasuk tujuan jangka panjang dan prinsip dasar yang dipegang.
- **Tupoksi.jsx**: File yang menampilkan halaman untuk menjelaskan tugas pokok dan fungsi (tupoksi) KPU Jakarta.
- **TugasWewenang.jsx**: File yang menampilkan halaman untuk menjelaskan tugas dan wewenang yang dimiliki oleh KPU Jakarta.
- **Sop.jsx**: File yang menampilkan halaman untuk standar operasional prosedur (SOP) yang digunakan oleh KPU Jakarta.
- **Visualisasi.jsx**: File yang menampilkan halaman untuk menyajikan data statistik dalam bentuk visualisasi seperti grafik dan diagram untuk memudahkan pemahaman.
- **PublikasiDokumen.jsx**: File yang menampilkan halaman untuk dokumen publikasi resmi dari KPU Jakarta yang dapat diunduh oleh pengguna.
- **PublikasiGaleri.jsx**: File yang menampilkan halaman untuk galeri foto dan video dari kegiatan KPU Jakarta.
- **Tabulasi.jsx**: File yang menampilkan halaman untuk data tabulasi hasil pemilu dalam format tabel.
- **PdfView.jsx**: File yang menampilkan halaman untuk melihat file PDF yang relevan dengan informasi atau dokumen yang diterbitkan oleh KPU.
- **Pengaduan.jsx**: File yang menampilkan halaman untuk formulir dan informasi untuk pengaduan masyarakat terkait pelaksanaan pemilu dan kegiatan KPU.
- **Dumas.jsx**: File yang menampilkan halaman untuk layanan pengaduan masyarakat umum tentang berbagai isu yang terkait dengan pemilu.
- **Whistleblowing.jsx**: File yang menampilkan halaman untuk saluran pelaporan untuk whistleblowing tentang pelanggaran dan penyalahgunaan dalam proses pemilu.
- **Agenda.jsx**: File yang menampilkan halaman untuk jadwal kegiatan dan acara yang akan datang yang diadakan atau diikuti oleh KPU Jakarta.
- **HalamanOpini.jsx**: File yang menampilkan halaman untuk detail lengkap dari artikel opini yang dipilih oleh pengguna.
- **HalamanPengumuman.jsx**: File yang menampilkan halaman untuk detail lengkap dari pengumuman yang dipilih oleh pengguna.

#### Direktori `src/components/`

- **Beranda/**: Berisi komponen yang terkait dengan halaman beranda situs web, seperti header, slider, dan fitur utama yang ditampilkan di beranda.
- **Icon/**: Berisi file ikon yang digunakan di berbagai bagian situs web untuk meningkatkan antarmuka pengguna.
- **Informasi/**: Berisi komponen yang menampilkan informasi penting, seperti berita, pengumuman, dan artikel terkait KPU Jakarta.
- **Logo/**: Berisi file logo KPU dan logo lainnya yang mungkin digunakan di situs web.
- **Pdf/**: Berisi file PDF yang bisa diunduh pengguna, seperti laporan atau dokumen resmi.
- **Pengaduan/**: Berisi komponen untuk formulir pengaduan dan informasi terkait pengaduan masyarakat.
- **Publikasi/**: Berisi komponen yang menampilkan publikasi resmi KPU, seperti buletin, laporan, dan artikel.
- **Sejarah/**: Berisi komponen yang menampilkan sejarah dan latar belakang KPU Jakarta.
- **StrukturOrganisasi/**: Berisi komponen yang menampilkan struktur organisasi KPU Jakarta.
- **Tabulasi/**: Berisi komponen untuk menampilkan data tabulasi hasil pemilu atau survei.
- **TugasPokok/**: Berisi komponen yang menjelaskan tugas pokok KPU Jakarta.
- **TugasWewenang/**: Berisi komponen yang menjelaskan tugas dan wewenang KPU Jakarta.
- **VisiMisi/**: Berisi komponen yang menampilkan visi dan misi KPU Jakarta.
- **Visualisasi/**: Berisi komponen untuk visualisasi data, seperti grafik dan diagram.
- **ButtonToTop.jsx**: Berisi komponen JavaScript untuk tombol yang memungkinkan pengguna kembali ke atas halaman dengan cepat.
- **Footer.jsx**: Berisi komponen footer situs web, termasuk informasi kontak dan tautan penting.
- **Header.jsx**: Berisi komponen header situs web, termasuk logo dan menu navigasi utama.

#### Direktori `src/contents/`

- **agenda/**: Berisi data tentang jadwal kegiatan atau acara yang akan datang dan telah berlangsung, termasuk rapat, sosialisasi, dan pemilihan umum.
- **filter/**: Berisi skrip atau komponen untuk memfilter data yang ditampilkan, seperti pencarian atau penyortiran.
- **footer/**: Berisi informasi yang ditampilkan di bagian bawah setiap halaman situs, termasuk informasi kontak, tautan penting, dan hak cipta.
- **galeri/**: Berisi koleksi gambar atau video yang berkaitan dengan kegiatan KPU, seperti dokumentasi acara atau pemilu.
- **header/**: Berisi elemen-elemen yang muncul di bagian atas setiap halaman situs, termasuk logo, navigasi utama, dan tautan penting.
- **hero/**: Berisi elemen tampilan utama pada halaman beranda yang biasanya menarik perhatian pengguna, seperti banner besar atau slider gambar.
- **informasi/**: Berisi data penting yang perlu disampaikan kepada publik, seperti berita terbaru, pengumuman, dan artikel.
- **modul/**: Berisi modul-modul atau paket fungsionalitas yang dapat digunakan kembali dalam berbagai bagian situs web.
- **pedoman/**: Berisi dokumen-dokumen panduan yang menjelaskan prosedur dan aturan yang berlaku di KPU.
- **sejarah/**: Berisi informasi tentang sejarah dan latar belakang pembentukan serta perkembangan KPU.
- **sosialisasi/**: Berisi data dan materi yang digunakan untuk kegiatan sosialisasi kepada masyarakat mengenai pemilu dan peran KPU.
- **tabulasi/**: Berisi data tabulasi hasil pemilu atau survei yang disajikan dalam bentuk tabel.
- **visualisasi/**: Berisi skrip dan komponen untuk visualisasi data, seperti grafik, diagram, dan peta interaktif.

#### Direktori `src/hooks/`
- **Deskripsi**:
  Folder ini berisi custom hooks untuk React, yang merupakan fungsi khusus untuk memanfaatkan fitur state dan efek di dalam komponen fungsional React.
- **Konten**:
  getLanguage.js: Hook yang digunakan untuk mengambil atau mengatur bahasa yang digunakan dalam aplikasi, sehingga aplikasi bisa mendukung multiple bahasa (seperti Bahasa Indonesia dan Bahasa Inggris).

### Direktori `public/`

1. **file**:
   - **Deskripsi**: Folder ini berisi berbagai file yang digunakan oleh situs web, seperti dokumen, PDF, atau file lain yang dapat diunduh oleh pengguna.
   - **Konten**: File dokumen yang digunakan sebagai sumber data atau informasi yang terkait dengan konten situs.

2. **images**:
   - **Deskripsi**: Folder ini berisi semua gambar yang digunakan di situs web.
   - **Konten**: Gambar untuk antarmuka pengguna, ilustrasi, foto kegiatan, logo, dan gambar lain yang diperlukan untuk tampilan visual situs.

3. **videos**:
   - **Deskripsi**: Folder ini berisi semua video yang digunakan di situs web.
   - **Konten**: Video dokumentasi, tutorial, rekaman kegiatan, dan konten video lain yang mendukung informasi di situs.

## Setup dan Instalasi

1. Clone repositori:
   ```bash
   git clone https://github.com/Gapinnn/kpu-jakarta.git
   ```

2. Masuk ke direktori proyek:
   ```bash
   cd kpu-jakarta
   ```

3. Instal dependensi:
   ```bash
   npm install
   ```

4. Jalankan server pengembangan:
   ```bash
   npm run dev
   ```

## Penggunaan

Proyek ini menggunakan Vite sebagai alat pembangunan dan Tailwind CSS untuk styling. Komponen-komponen diatur dalam direktori `src/` untuk modularitas dan dapat digunakan kembali.

Silakan berkontribusi dengan membuka issue atau mengirimkan pull request.

## Lisensi

Proyek ini dilisensikan di bawah Lisensi MIT.
