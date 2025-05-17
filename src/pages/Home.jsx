import React, {
  useEffect,
  useState,
  useRef,
  lazy,
  Suspense
} from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import "../i18n";

// Componentes críticos
import SplashScreen from "../components/home/SplashScreen";
import Navbar from "../components/home/Navbar";
import Hero from "../components/home/Hero";
import Footer from "../components/home/Footer";
import WhatsAppButton from "../components/global/WhatsAppButton";

// Componentes diferidos (lazy load)
const ServiciosDestacados = lazy(() => import("../components/home/ServiciosDestacados"));
const SobreNosotros = lazy(() => import("../components/home/SobreNosotros"));
const Testimonios = lazy(() => import("../components/home/Testimonios"));
const Contacto = lazy(() => import("../components/home/Contacto"));

function Home({ lang }) {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("hero");
  const [status, setStatus] = useState(null);
  const [hideButton, setHideButton] = useState(false);
  const [activo, setActivo] = useState(null);
  const formRef = useRef(null);

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const toggleLanguage = () => {
    navigate(`/${lang === "es" ? "en" : "es"}`);
  };

  useEffect(() => {
    if (lang && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    AOS.init({ once: true });
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

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

  useEffect(() => {
    const handleScroll = () => {
      const footer = document.getElementById("footer");
      if (!footer) return;
      const footerTop = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      setHideButton(footerTop < windowHeight - 60);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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

  if (loading) return <SplashScreen />;

  return (
    <>
      <Helmet>
        <title>{t("meta.title")}</title>
        <meta name="description" content={t("meta.description")} />
        <meta property="og:title" content={t("meta.ogTitle")} />
        <meta property="og:description" content={t("meta.ogDescription")} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content={lang === "es" ? "es_CL" : "en_US"} />
      </Helmet>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="relative bg-[#02070f] text-white min-h-screen font-sans overflow-x-hidden scroll-smooth"
      >
        <Navbar
          activeSection={activeSection}
          toggleLanguage={toggleLanguage}
          lang={lang}
        />
        <main className="min-h-[1000px]">
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
          <Footer />
          <WhatsAppButton hide={hideButton} />
        </main>
      </motion.div>
    </>
  );
}

export default Home;
