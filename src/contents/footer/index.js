import getLanguage from "../../hooks/getLanguage";

const lang = getLanguage();
export const tentang = [
  {
    name: "KPU Jakarta",
    path: `/${lang}`,
  },
  {
    name: "Visi Misi",
    path: `/${lang}/profil/visi-misi`,
  },
  {
    name: "Tugas Pokok",
    path: `/${lang}/profil/tugas-pokok`,
  },
  {
    name: "Tugas Wewenang",
    path: `/${lang}/profil/tugas-wewenang`,
  },
  {
    name: "Struktur Organisasi",
    path: `/${lang}/profil/struktur-organisasi`,
  },
  {
    name: "Sejarah Pemilu",
    path: `/${lang}/profil/sejarah-pemilu`,
  },
];

export const tautan = [
  {
    name: "Komisi Pemilihan Umum",
    href: "https://kpu.go.id",
  },
  {
    name: "Informasi Pemilihan Umum",
    href: "https://infopemilu.kpu.go.id",
  },
  {
    name: "Cek DPT Pemilihan Umum",
    href: "https://cekdptonline.kpu.go.id/",
  },
  {
    name: "Badan Pengawas Pemilu",
    href: "https://bawaslu.go.id",
  },
  {
    name: "Dewan Kehormatan Penyelenggara Pemilu",
    href: "https://dkpp.go.id",
  },
  {
    name: "JDIH Komisi Pemilihan Umum",
    href: "https://jdih.kpu.go.id",
  },
];
