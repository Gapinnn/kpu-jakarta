import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import BeritaTerkini from "./pages/BeritaTerkini";
import Pengumuman from "./pages/Pengumuman";
import BeritaOpini from "./pages/BeritaOpini";
import HalamanBerita from "./pages/HalamanBerita";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VisiMisi from "./pages/VisiMisi";
import Tupoksi from "./pages/Tupoksi";
import TugasWewenang from "./pages/TugasWewenang";
import Sop from "./pages/Sop";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Visualisasi from "./pages/Visualisasi";
import PublikasiDokumen from "./pages/PublikasiDokumen";
import PublikasiGaleri from "./pages/PublikasiGaleri";
import Tabulasi from "./pages/Tabulasi";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/id" element={<Beranda />} />
        <Route path="/id/profil/visi-misi" element={<VisiMisi />} />
        <Route path="/id/profil/tugas-pokok" element={<Tupoksi />} />
        <Route path="/id/profil/tugas-wewenang" element={<TugasWewenang />} />
        <Route path="/id/sop" element={<Sop />} />
        <Route
          path="/id/profil/struktur-organisasi"
          element={<StrukturOrganisasi />}
        />
        <Route path="/en" element={<Beranda />} />
        <Route path="/id/publikasi/dokumen" element={<PublikasiDokumen />} />
        <Route path="/en/publikasi/dokumen" element={<PublikasiDokumen />} />
        <Route path="/id/publikasi/galeri" element={<PublikasiGaleri />} />
        <Route path="/en/publikasi/galeri" element={<PublikasiGaleri />} />
        <Route path="/en/halamanberita" element={<HalamanBerita />} />
        <Route path="/id/halamanberita" element={<HalamanBerita />} />
        <Route path="/id/berita/terkini" element={<BeritaTerkini />} />
        <Route path="/en/berita/terkini" element={<BeritaTerkini />} />
        <Route path="/id/berita/opini" element={<BeritaOpini />} />
        <Route path="/en/berita/opini" element={<BeritaOpini />} />
        <Route path="/id/berita/pengumuman" element={<Pengumuman />} />
        <Route path="/en/berita/pengumuman" element={<Pengumuman />} />
        <Route path="/id/statistik/visualisasi" element={<Visualisasi />} />
        <Route path="/en/statistik/visualisasi" element={<Visualisasi />} />
        <Route path="/id/statistik/tabulasi" element={<Tabulasi />} />
        <Route path="/en/statistik/tabulasi" element={<Tabulasi />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
