import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

export function Router() {
  return (
    <BrowserRouter>
      <div className="h-dvh flex flex-col">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        {/* Main content fills remaining space */}
        <main className="flex-1 container mx-auto p-4 w-full">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>

        {/* Sticky Footer */}
        <footer className="sticky bottom-0 z-50">
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}
