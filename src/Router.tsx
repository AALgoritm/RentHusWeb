import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export function Router() {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
