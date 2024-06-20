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
    path: "/en/about-us",
    branch: true,
    submenu: [
      {
        name: "Vision Mission",
        path: "/en/about-us/vision-mission",
      },
      {
        name: "Main Tasks",
        path: "/en/about-us/main-tasks",
      },
      {
        name: "Authority Tasks",
        path: "/en/about-us/authority-tasks",
      },
      {
        name: "Organizational Structure",
        path: "/en/about-us/organizational-structure",
      },
      {
        name: "Election History",
        path: "/en/about-us/election-history",
      },
    ],
  },
  {
    name: "Information",
    path: "/en/information",
    branch: true,
    submenu: [
      {
        name: "News",
        path: "/en/information/news",
      },
      {
        name: "Announcement",
        path: "/en/information/announcement",
      },
      {
        name: "Opinion",
        path: "/en/information/opinion",
      },
      {
        name: "Agenda",
        path: "/en/information/agenda",
      },
    ],
  },
  {
    name: "Publication",
    path: "/en/publication",
    branch: true,
    submenu: [
      {
        name: "Document",
        path: "/en/publication/document",
      },
      {
        name: "Gallery",
        path: "/en/publication/gallery",
      },
    ],
  },
  {
    name: "Statistic",
    path: "/en/statistic",
    branch: true,
    submenu: [
      {
        name: "Visualization",
        path: "/en/statistic/vizualization",
      },
      {
        name: "Tabulation",
        path: "/en/statistic/tabulation",
      },
    ],
  },
  {
    name: "Complaint",
    path: "/en/complaint",
    branch: false,
  },
];
