import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";
import "./i18n";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/es" />} />
        <Route path="/es/*" element={<Home lang="es" />} />
        <Route path="/en/*" element={<Home lang="en" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
