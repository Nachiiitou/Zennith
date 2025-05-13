import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Home from "./pages/Home";
import "./i18n";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/es" />} />
          <Route path="/es/*" element={<Home lang="es" />} />
          <Route path="/en/*" element={<Home lang="en" />} />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
