import { BrowserRouter, Routes } from "react-router-dom";

export function Router() {
  return (
    <BrowserRouter>
      <div className="container mx-auto p-4">
        <Routes></Routes>
      </div>
    </BrowserRouter>
  );
}
