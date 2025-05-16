import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./i18n";

// ⏳ Carga diferida de la página principal
const Home = lazy(() => import("./pages/Home"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
      
      >
        <Routes>
          <Route path="/" element={<Navigate to="/es" />} />
          <Route path="/es/*" element={<Home lang="es" />} />
          <Route path="/en/*" element={<Home lang="en" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
