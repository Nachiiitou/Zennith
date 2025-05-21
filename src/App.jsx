// App.jsx
import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
  useLocation
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";
import ScrollToTop from "./components/global/ScrollToTop";


// Páginas principales
const Home = lazy(() => import("./pages/Home"));
const Servicios = lazy(() => import("./pages/Servicios"));

// Páginas individuales de servicios
const Automatizacion = lazy(() => import("./pages/servicios/Automatizacion"));
const SoporteTecnico = lazy(() => import("./pages/servicios/SoporteTecnico"));
const DesarrolloWeb = lazy(() => import("./pages/servicios/DesarrolloWeb"));
const MantenimientoWeb = lazy(() => import("./pages/servicios/MantenimientoWeb"));
const ConsultoriaTecnologica = lazy(() => import("./pages/servicios/ConsultoriaTecnologica"));
const IntegracionApis = lazy(() => import("./pages/servicios/IntegracionApis"));
const AgentesIA = lazy(() => import("./pages/servicios/AgentesIA"));
const BusinessIntelligence = lazy(() => import("./pages/servicios/BusinessIntelligence"));
const Chatbots = lazy(() => import("./pages/servicios/Chatbots"));

const getInitialLang = () => {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) return savedLang;
  const browserLang = navigator.language.slice(0, 2);
  return ["es", "en"].includes(browserLang) ? browserLang : "es";
};

function Wrapper({ Component }) {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { lang } = useParams();
  const [currentLang, setCurrentLang] = useState(lang);

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
      setCurrentLang(lang);
      localStorage.setItem("lang", lang);
    }
  }, [lang, i18n]);

  const toggleLanguage = () => {
    const newLang = currentLang === "es" ? "en" : "es";
    localStorage.setItem("lang", newLang);
    navigate(`/${newLang}`);
  };

  return <Component lang={currentLang} toggleLanguage={toggleLanguage} />;
}

function AppWrapper() {
  const initialLang = getInitialLang();
  const location = useLocation();

  return (
   <>
      <ScrollToTop /> {/* 👈 Esto se asegura de hacer scroll al top en cada ruta */}
      <Suspense fallback={<div />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to={`/${initialLang}`} replace />} />
          <Route path="/:lang" element={<Wrapper Component={Home} />} />
          <Route path="/:lang/servicios" element={<Wrapper Component={Servicios} />} />

          {/* Rutas individuales para cada servicio */}
          <Route path="/:lang/servicios/automatizacion" element={<Wrapper Component={Automatizacion} />} />
          <Route path="/:lang/servicios/soporte-tecnico" element={<Wrapper Component={SoporteTecnico} />} />
          <Route path="/:lang/servicios/desarrollo-web" element={<Wrapper Component={DesarrolloWeb} />} />
          <Route path="/:lang/servicios/mantenimiento-web" element={<Wrapper Component={MantenimientoWeb} />} />
          <Route path="/:lang/servicios/consultoria-tecnologica" element={<Wrapper Component={ConsultoriaTecnologica} />} />
          <Route path="/:lang/servicios/integracion-apis" element={<Wrapper Component={IntegracionApis} />} />
          <Route path="/:lang/servicios/agentes-ia" element={<Wrapper Component={AgentesIA} />} />
          <Route path="/:lang/servicios/business-intelligence" element={<Wrapper Component={BusinessIntelligence} />} />
          <Route path="/:lang/servicios/chatbots" element={<Wrapper Component={Chatbots} />} />
        </Routes>
      </Suspense>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppWrapper />
    </BrowserRouter>
  );
}

export default App;
