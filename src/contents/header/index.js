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
    name: "Pengaduan",
    path: "/id/pengaduan",
    branch: false,
  },
];

export const menuEn = [
  {
    name: "Beranda",
    path: "/en",
  },
  {
    name: "Tentang Kami",
    path: "/en/profil",
  },
  {
    name: "Berita",
    path: "/en/berita",
  },
  {
    name: "Visualisasi",
    path: "/en/visualisasi",
  },
  {
    name: "Publikasi",
    path: "/en/publikasi",
  },
];
