import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";

export function Router() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
