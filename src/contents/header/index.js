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
    ],
  },
  {
    name: "Berita",
    path: "/id/berita",
    branch: true,
    submenu: [
      {
        name: "Berita Terkini",
        path: "/id/berita/terkini",
      },
      {
        name: "Pengumuman",
        path: "/id/berita/pengumuman",
      },
      {
        name: "Opini",
        path: "/id/berita/opini",
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
