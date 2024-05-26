import { BrowserRouter, Routes, Route } from "react-router-dom";
import Beranda from "./pages/Beranda";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/id" element={<Beranda />} />
        <Route path="/en" element={<Beranda />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
