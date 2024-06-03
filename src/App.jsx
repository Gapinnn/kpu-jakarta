import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Header from "./components/Header";
import Footer from "./components/Footer";
import VisiMisi from "./components/VisiMisi";
import Tupoksi from "./components/Tupoksi";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/id" element={<Beranda />} />
        <Route path="/visi-misi" element={<VisiMisi />} />
        <Route path="/tupoksi" element={<Tupoksi />} />
        <Route path="/en" element={<Beranda />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
