import React, { lazy, Suspense, useState, useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useParams,
  useNavigate,
  useLocation,
  Outlet,
} from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./i18n";
import ScrollToTop from "./components/global/ScrollToTop";

// Componentes globales
import Navbar from "./components/global/Navbar";
import Footer from "./components/global/Footer";
import WhatsAppButton from "./components/global/WhatsAppButton";

// Páginas
import SobreNosotros from "./pages/SobreNosotros";
import Contacto from "./pages/Contacto";

const Home = lazy(() => import("./pages/Home"));
const Servicios = lazy(() => import("./pages/Servicios"));
const Automatizacion = lazy(() => import("./pages/servicios/Automatizacion"));
const SoporteTecnico = lazy(() => import("./pages/servicios/SoporteTecnico"));
const DesarrolloWeb = lazy(() => import("./pages/servicios/DesarrolloWeb"));
const MantenimientoWeb = lazy(() => import("./pages/servicios/MantenimientoWeb"));
const ConsultoriaTecnologica = lazy(() => import("./pages/servicios/ConsultoriaTecnologica"));
const IntegracionApis = lazy(() => import("./pages/servicios/IntegracionApis"));
const AgentesIA = lazy(() => import("./pages/servicios/AgentesIA"));
const BusinessIntelligence = lazy(() => import("./pages/servicios/BusinessIntelligence"));
const Chatbots = lazy(() => import("./pages/servicios/Chatbots"));

function LayoutWrapper() {
  const { lang } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang) {
      i18n.changeLanguage(lang);
      localStorage.setItem("lang", lang);
    }
  }, [lang, i18n]);

  const toggleLanguage = () => {
    const newLang = lang === "es" ? "en" : "es";
    localStorage.setItem("lang", newLang);
    const updatedPath = location.pathname.replace(/^\/(es|en)/, `/${newLang}`);
    navigate(updatedPath);
  };

  return (
    <div className="relative bg-[#02070f] text-white min-h-screen font-sans overflow-x-hidden scroll-smooth">
      <Navbar lang={lang} toggleLanguage={toggleLanguage} />
      <main className="min-h-[1000px]">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function AppWrapper() {
  const getBrowserLang = () => {
    const navLang = navigator.language.slice(0, 2);
    return navLang === "en" ? "en" : "es";
  };

  const initialLang = getBrowserLang();
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div className="h-screen bg-black" />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Navigate to={`/${initialLang}`} replace />} />
          <Route path="/:lang" element={<LayoutWrapper />}>
            <Route index element={<Home />} />
            <Route path="servicios" element={<Servicios />} />
            <Route path="servicios/automatizacion" element={<Automatizacion />} />
            <Route path="servicios/soporte-tecnico" element={<SoporteTecnico />} />
            <Route path="servicios/desarrollo-web" element={<DesarrolloWeb />} />
            <Route path="servicios/mantenimiento-web" element={<MantenimientoWeb />} />
            <Route path="servicios/consultoria-tecnologica" element={<ConsultoriaTecnologica />} />
            <Route path="servicios/integracion-apis" element={<IntegracionApis />} />
            <Route path="servicios/agentes-ia" element={<AgentesIA />} />
            <Route path="servicios/business-intelligence" element={<BusinessIntelligence />} />
            <Route path="servicios/chatbots" element={<Chatbots />} />
            <Route path="nosotros" element={<SobreNosotros />} />
            <Route path="contacto" element={<Contacto />} />
          </Route>
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
