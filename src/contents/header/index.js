export const menuId = [
  {
    name: "Beranda",
    path: "/id",
  },
  {
    name: "Tentang Kami",
    path: "/id/profil",
    branch: true,
    submenu: [
      {
        name: "Visi Misi",
        path: "/id/profil/visi-misi",
      },
      {
        name: "Tugas Pokok",
        path: "/id/profil/tugas-pokok",
      },
      {
        name: "Tugas Wewenang",
        path: "/id/profil/tugas-wewenang",
      },
      {
        name: "Struktur Organisasi",
        path: "/id/profil/struktur-organisasi",
      },
      {
        name: "Sejarah Pemilu",
        path: "/id/profil/sejarah-pemilu",
      },
    ],
  },
  {
    name: "Informasi",
    path: "/id/informasi",
    branch: true,
    submenu: [
      {
        name: "Berita",
        path: "/id/informasi/berita",
      },
      {
        name: "Pengumuman",
        path: "/id/informasi/pengumuman",
      },
      {
        name: "Opini",
        path: "/id/informasi/opini",
      },
      {
        name: "Agenda",
        path: "/id/informasi/agenda",
      },
    ],
  },
  {
    name: "Publikasi",
    path: "/id/publikasi",
    branch: true,
    submenu: [
      {
        name: "Dokumen",
        path: "/id/publikasi/dokumen",
      },
      {
        name: "Galeri",
        path: "/id/publikasi/galeri",
      },
    ],
  },
  {
    name: "Statistik",
    path: "/id/statistik",
    branch: true,
    submenu: [
      {
        name: "Visualisasi",
        path: "/id/statistik/visualisasi",
      },
      {
        name: "Tabulasi",
        path: "/id/statistik/tabulasi",
      },
    ],
  },
  {
    name: "Pengaduan",
    path: "/id/pengaduan",
    branch: false,
  },
];

export const menuEn = [
  {
    name: "Home",
    path: "/en",
  },
  {
    name: "About Us",
    path: "/en/profil",
    branch: true,
    submenu: [
      {
        name: "Vision Mission",
        path: "/en/profil/visi-misi",
      },
      {
        name: "Main Tasks",
        path: "/en/profil/tugas-pokok",
      },
      {
        name: "Authority Tasks",
        path: "/en/profil/tugas-wewenang",
      },
      {
        name: "Organizational Structure",
        path: "/en/profil/struktur-organisasi",
      },
      {
        name: "Election History",
        path: "/en/profil/sejarah-pemilu",
      },
    ],
  },
  {
    name: "Information",
    path: "/en/informasi",
    branch: true,
    submenu: [
      {
        name: "News",
        path: "/en/informasi/berita",
      },
      {
        name: "Announcement",
        path: "/en/informasi/pengumuman",
      },
      {
        name: "Opinion",
        path: "/en/informasi/opini",
      },
      {
        name: "Agenda",
        path: "/en/informasi/agenda",
      },
    ],
  },
  {
    name: "Publication",
    path: "/en/publikasi",
    branch: true,
    submenu: [
      {
        name: "Document",
        path: "/en/publikasi/dokumen",
      },
      {
        name: "Gallery",
        path: "/en/publikasi/galeri",
      },
    ],
  },
  {
    name: "Statistic",
    path: "/en/statistik",
    branch: true,
    submenu: [
      {
        name: "Visualization",
        path: "/en/statistik/visualisasi",
      },
      {
        name: "Tabulation",
        path: "/en/statistik/tabulasi",
      },
    ],
  },
  {
    name: "Complaint",
    path: "/en/pengaduan",
    branch: false,
  },
];
