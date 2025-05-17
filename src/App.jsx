import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./i18n";

// Lazy load de las páginas principales
const Home = lazy(() => import("./pages/Home"));
const Servicios = lazy(() => import("./pages/Servicios"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div />}>
        <Routes>
          {/* Redirección raíz */}
          <Route path="/" element={<Navigate to="/es" />} />

          {/* Rutas en español */}
          <Route path="/es" element={<Home lang="es" />} />
          <Route path="/es/servicios" element={<Servicios lang="es" />} />

          {/* Rutas en inglés */}
          <Route path="/en" element={<Home lang="en" />} />
          <Route path="/en/servicios" element={<Servicios lang="en" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
