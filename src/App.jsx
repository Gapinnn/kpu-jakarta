import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VisiMisi from "./pages/VisiMisi";
import Tupoksi from "./pages/Tupoksi";
import TugasWewenang from "./pages/TugasWewenang";
import Sop from "./pages/Sop";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/id" element={<Beranda />} />
        <Route path="/id/visi-misi" element={<VisiMisi />} />
        <Route path="/id/tupoksi" element={<Tupoksi />} />
        <Route path="/id/tugas-wewenang" element={<TugasWewenang />} />
        <Route path="/id/sop" element={<Sop />} />
        <Route path="/en" element={<Beranda />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
