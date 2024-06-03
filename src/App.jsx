import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import Publikasi from "./pages/Publikasi";
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

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/id" element={<Beranda />} />
        <Route path="/id/profil/visi-misi" element={<VisiMisi />} />
        <Route path="/id/profil/tupoksi" element={<Tupoksi />} />
        <Route path="/id/profil/tugas-wewenang" element={<TugasWewenang />} />
        <Route path="/id/sop" element={<Sop />} />
        <Route
          path="/id/profil/struktur-organisasi"
          element={<StrukturOrganisasi />}
        />
        <Route path="/en" element={<Beranda />} />
        <Route path="/id/publikasi" element={<Publikasi />} />
        <Route path="/en/publikasi" element={<Publikasi />} />
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
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
