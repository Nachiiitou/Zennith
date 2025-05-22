import React, { lazy, Suspense, useEffect } from "react";
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

const getInitialLang = () => {
  const savedLang = localStorage.getItem("lang");
  if (savedLang) return savedLang;
  const browserLang = navigator.language.slice(0, 2);
  return ["es", "en"].includes(browserLang) ? browserLang : "es";
};

// Layout con Navbar y lógica de idioma
function LayoutWrapper() {
  const { lang } = useParams();
  const navigate = useNavigate();
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
    navigate(`/${newLang}`);
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

// App con rutas
function AppWrapper() {
  const initialLang = getInitialLang();
  const location = useLocation();

  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<div />}>
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
