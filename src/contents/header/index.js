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
        name: "Tupoksi",
        path: "/id/profil/tupoksi",
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
    name: "Visualisasi",
    path: "/id/visualisasi",
    branch: false,
  },
  {
    name: "Publikasi",
    path: "/id/publikasi",
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
