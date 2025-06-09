import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import Contact from "./pages/Contact";
import OurServices from "./pages/OurServices";

export function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<OurServices />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}
