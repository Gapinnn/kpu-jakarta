import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Beranda from "./pages/Beranda";
import StrukturOrganisasi from "./pages/StrukturOrganisasi";
import Sejarah from "./pages/Sejarah";
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
import PdfView from "./pages/PdfView";
import Pengaduan from "./pages/Pengaduan";
import Dumas from "./pages/Dumas";
import Whistleblowing from "./pages/Whistleblowing";
import ButtonToTop from "./components/ButtonToTop";
import Agenda from "./pages/Agenda";
import getLanguage from "./hooks/getLanguage";
import HalamanOpini from "./pages/HalamanOpini";
import HalamanPengumuman from "./pages/HalamanPengumuman";

function App() {
  const lang = getLanguage();
  return (
    <BrowserRouter>
      <Header />
      <ButtonToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/id" />} />
        <Route path="/id" element={<Beranda />} />
        <Route path="/id/profil/visi-misi" element={<VisiMisi />} />
        <Route path="/id/profil/tugas-pokok" element={<Tupoksi />} />
        <Route path="/id/profil/tugas-wewenang" element={<TugasWewenang />} />
        <Route path="/id/profil/sejarah-pemilu" element={<Sejarah />} />
        <Route path="/id/sop" elemen t={<Sop />} />
        <Route
          path="/id/profil/struktur-organisasi"
          element={<StrukturOrganisasi />}
        />
        <Route path="/id/publikasi/dokumen" element={<PublikasiDokumen />} />
        <Route path="/id/publikasi/galeri" element={<PublikasiGaleri />} />
        <Route path="/id/informasi/berita" element={<BeritaTerkini />} />
        <Route
          path="/id/informasi/berita/:idBerita"
          element={<HalamanBerita />}
        />
        <Route path="/id/informasi/opini" element={<BeritaOpini />} />
        <Route path="/id/informasi/opini/:idOpini" element={<HalamanOpini />} />
        <Route path="/id/informasi/pengumuman" element={<Pengumuman />} />
        <Route
          path="/id/informasi/pengumuman/:idPengumuman"
          element={<HalamanPengumuman />}
        />
        <Route path="/id/informasi/agenda" element={<Agenda />} />
        <Route path="/id/statistik/visualisasi" element={<Visualisasi />} />
        <Route path="/id/statistik/tabulasi" element={<Tabulasi />} />
        <Route path="/id/pengaduan" element={<Pengaduan />} />
        <Route path="/id/pengaduan/dumas" element={<Dumas />} />
        <Route
          path="/id/pengaduan/whistleblowing"
          element={<Whistleblowing />}
        />
        <Route path="/pdf-viewer" Component={PdfView} />
        <Route path="*" element={<Navigate to={`/id`} />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
