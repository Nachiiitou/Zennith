import React, {
  useEffect,
  useState,
  useRef,
  lazy,
  Suspense
} from "react";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../i18n";

// Componentes críticos
import SplashScreen from "../components/home/SplashScreen";
import Hero from "../components/home/Hero";

// Componentes diferidos
const ServiciosDestacados = lazy(() => import("../components/home/ServiciosDestacados"));
const SobreNosotros = lazy(() => import("../components/home/SobreNosotros"));
const Testimonios = lazy(() => import("../components/home/Testimonios"));
const Contacto = lazy(() => import("../components/home/Contacto"));

function Home({ lang }) {
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const [showSplash, setShowSplash] = useState(() => {
    return sessionStorage.getItem("splashShown") !== "true";
  });

  const [status, setStatus] = useState(null);
  const [activo, setActivo] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const formRef = useRef(null);

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    if (showSplash) {
      AOS.init({ once: true });

      const timer = setTimeout(() => {
        sessionStorage.setItem("splashShown", "true");
        setShowSplash(false);
      }, 1500);

      return () => clearTimeout(timer);
    }
  }, [showSplash]);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timeout);
    }
  }, [status]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(formRef.current);

    try {
      const res = await fetch("https://formspree.io/f/mblozapl", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: formData,
      });

      if (res.ok) {
        setStatus("success");
        formRef.current.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const scrollToContacto = () => {
    const contacto = document.getElementById("contacto");
    if (contacto) {
      contacto.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={lang === "es" ? "es_CL" : "en_US"} />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                position: 1,
                name: lang === "es" ? "Inicio" : "Home",
                item: lang === "es"
                  ? "https://www.zennith.cl/es"
                  : "https://www.zennith.cl/en"
              }
            ]
          })}
        </script>
      </Helmet>

      <AnimatePresence>
        {showSplash && (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[9999] bg-black flex items-center justify-center"
          >
            <SplashScreen />
          </motion.div>
        )}
      </AnimatePresence>

      {!showSplash && (
        <>
          <Hero onClickContacto={scrollToContacto} />
          <Suspense fallback={<div className="h-[1000px]" />}>
            <ServiciosDestacados activo={activo} setActivo={setActivo} />
            <SobreNosotros />
            <Testimonios />
            <Contacto
              formRef={formRef}
              handleSubmit={handleSubmit}
              status={status}
            />
          </Suspense>
        </>
      )}
    </>
  );
}

export default Home;
