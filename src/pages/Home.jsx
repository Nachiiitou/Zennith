import React, { useEffect, useState, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import AOS from "aos";
import { useTranslation } from "react-i18next";
import "../i18n";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import { loadSlim } from "tsparticles-slim";








function Home({ lang }) {
    // Estados de control generales
    const [menuOpen, setMenuOpen] = useState(false); // Control del menú mobile
    const [loading, setLoading] = useState(true); // Carga inicial
    const [formSent, setFormSent] = useState(false); // Control de envío de formulario
    const [activeSection, setActiveSection] = useState("hero"); // Sección activa para scrollspy
    const [status, setStatus] = useState(null); // Estado del formulario: null | "success" | "error"
    const formRef = useRef(null); // Referencia al formulario
  
    const { t, i18n } = useTranslation();
    
    const navigate = useNavigate();

const toggleLanguage = () => {
  const newLang = lang === "es" ? "en" : "es";
  navigate(`/${newLang}`);
};
  
    useEffect(() => {
      if (lang && i18n.language !== lang) {
        i18n.changeLanguage(lang);
      }
    }, [lang, i18n]);
  
    // Inicialización de partículas
    const particlesInit = async (engine) => {
        await loadSlim(engine);
      };
      
      
  
    // Configuración de partículas animadas (fondo)
    const particlesOptions = {
      fullScreen: { enable: false },
      background: { color: "#02070f" },
      particles: {
        number: { value: 50 },
        color: { value: "#1de9b6" },
        links: { enable: true, color: "#1de9b6", distance: 150 },
        move: { enable: true, speed: 2 },
        size: { value: 2 },
      },
      detectRetina: true,
    };
  
    // Envío de formulario (con Formspree)
    const handleSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData(formRef.current);
  
      try {
        const res = await fetch("https://formspree.io/f/mblozapl", {
          method: "POST",
          headers: {
            Accept: "application/json",
          },
          body: formData,
        });
  
        const data = await res.json();
  
        if (res.ok) {
          setStatus("success");
          formRef.current.reset();
        } else {
          setStatus("error");
        }
      } catch (error) {
        setStatus("error");
      }
    };
  
    // Scroll suave hacia la sección de contacto
    const scrollToContacto = () => {
      const contacto = document.getElementById("contacto");
      if (contacto) {
        contacto.scrollIntoView({ behavior: "smooth" });
      }
    };
  
    // Estado para mostrar u ocultar el botón flotante (según visibilidad del footer)
    const [hideButton, setHideButton] = useState(false);
  
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
  
    const [activo, setActivo] = useState(null); // Servicio activo
  
    // ✅ Traducciones dinámicas de servicios
    const servicios = [
      "desarrolloWeb",
      "soporteTecnico",
      "automatizacion",
      "integracionApis",
      "mantenimientoWeb",
      "consultoria",
    ].map((key) => ({
      titulo: t(`servicios.${key}.titulo`),
      desc: t(`servicios.${key}.desc`),
      detalle: t(`servicios.${key}.detalle`),
    }));

    
// Efecto de carga inicial + inicialización de AOS
useEffect(() => {
    AOS.init({ once: true });
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);
  
  // Observador para detectar la sección visible (scrollspy)
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
  
  // Resetea el estado del formulario tras 5 segundos
  useEffect(() => {
    if (status) {
      const timeout = setTimeout(() => setStatus(null), 5000);
      return () => clearTimeout(timeout);
    }
  }, [status]);
  
  // Pantalla de carga
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-[#02070f]">
        <motion.img
          src="/logo.png"
          alt="Logo de carga Zennith"
          initial={{ scale: 0 }}
          animate={{ scale: 1.1 }}
          transition={{ repeat: Infinity, duration: 1, repeatType: "reverse" }}
          className="h-60 w-auto"
        />
      </div>
    );
  }
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative bg-[#02070f] text-white min-h-screen font-sans overflow-x-hidden scroll-smooth"
    >
      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      </div>
  
      <main>
       
       
       
        {/* Navbar */}
        <nav className="flex justify-between items-center px-6 py-5 border-b border-[#1de9b6] bg-[#02070f]/90 backdrop-blur-sm z-10 relative">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="Zennith Logo" className="h-14 w-auto" />
            <h1 className="text-3xl font-bold text-[#1de9b6] tracking-wide">ZENNITH</h1>
          </div>
  
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              <svg className="w-6 h-6 fill-[#1de9b6]" viewBox="0 0 24 24">
                <path d="M4 5h16M4 12h16M4 19h16" />
              </svg>
            </button>
          </div>
  
          <ul className="hidden lg:flex gap-10 text-base">
                    {["hero", "servicios", "nosotros", "contacto"].map((item, idx) => (
            <li
                key={idx}
                className={`cursor-pointer transition hover:scale-105 duration-200 ${
                activeSection === item ? "text-[#1de9b6] font-semibold" : "text-white"
                }`}
            >
                <a href={`#${item}`}>
                {t(`nav.${item}`)}
                </a>
            </li>
            ))}
                        




          </ul>

          <button
  onClick={toggleLanguage}
  className="ml-4 text-sm border border-[#1de9b6] px-4 py-1 rounded-full text-[#1de9b6] hover:bg-[#1de9b6] hover:text-black transition"
>
  {lang === "es" ? "ES" : "EN"}
</button>

  
          {menuOpen && (
            <div className="absolute top-full left-0 w-full bg-[#0f1c2e] flex flex-col items-center py-4 lg:hidden z-20">
              {["hero", "servicios", "nosotros", "contacto"].map((item, idx) => (
                <a
                  key={idx}
                  href={`#${item}`}
                  className="py-2 text-white hover:text-[#1de9b6] transition"
                  onClick={() => setMenuOpen(false)}
                >
                  {t(`nav.${item}`)}
                </a>
              ))}
            </div>
          )}
        </nav>
        
  
        {/* Sección Hero */}
        <section
          id="hero"
          aria-label="Sección principal Zennith"
          className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-24 gap-16 z-10 relative"
        >
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center lg:text-left"
          >
            <h2 className="text-5xl font-extrabold leading-tight mb-6 text-white">
  {t("tituloHero")
    .split(" ")
    .slice(0, -1)
    .join(" ")}{" "}
  <br className="hidden lg:block" />
  <span className="text-[#1de9b6]">
    {t("tituloHero").split(" ").slice(-1).join(" ")}
  </span>
</h2>
  
            <p className="text-gray-300 text-lg mb-10 leading-relaxed">
              {t("subtituloHero")}
            </p>
  
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0px 0px 15px #1de9b6" }}
              className="bg-[#1de9b6] text-black px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300"
              onClick={scrollToContacto}
            >
              {t("botonHero")}
            </motion.button>
          </motion.div>
  
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.02 }}
            className="w-full max-w-4xl"
          >
            <img
              src="/pc.png"
              alt="Mockup Zennith mostrando software"
              className="w-full object-contain rounded-2xl transition-transform duration-300"
            />
          </motion.div>
        </section>

{/*-- Sección de Servicios */}
<section id="servicios" aria-label={t("tituloServicios")} className="px-6 lg:px-24 py-12 z-10 relative">
  {/* Título animado */}
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold text-center mb-10 text-[#1de9b6]"
  >
    {t("tituloServicios")}
  </motion.h3>

  {/* Tarjetas de servicios con animación */}
  <div className="grid md:grid-cols-3 gap-10">
    {servicios.map((servicio, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="bg-[#101b26] rounded-xl p-6 shadow-md shadow-[#1de9b633] cursor-pointer"
        onClick={() => setActivo(activo === i ? null : i)}
      >
        {/* Título y descripción del servicio */}
        <h4 className="text-xl font-semibold mb-2 text-[#1de9b6]">{servicio.titulo}</h4>
        <p className="text-white">{servicio.desc}</p>

        {/* Detalle expandible al hacer clic */}
        <AnimatePresence mode="wait">
          {activo === i && (
            <motion.div
              key="detalle"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1, marginTop: 16 }}
              exit={{ height: 0, opacity: 0, marginTop: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="overflow-hidden text-sm text-gray-300"
            >
              <div>{servicio.detalle}</div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    ))}
  </div>
</section>

{/* Sección Sobre Nosotros */}
<section id="nosotros" className="px-6 lg:px-24 py-12 text-center z-10 relative">
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
  >
    <h3 className="text-4xl font-bold text-[#1de9b6] mb-6">{t("tituloNosotros")}</h3>
    <div className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed space-y-6">
      <p>{t("textoNosotros1")}</p>
      <p>{t("textoNosotros2")}</p>
    </div>
  </motion.div>
</section>

{/* Sección de Testimonios */}
<section aria-label={t("tituloTestimonios")} className="px-6 lg:px-24 py-16 z-10 relative">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold text-center mb-10 text-[#1de9b6]"
  >
    {t("tituloTestimonios")}
  </motion.h3>

  <div className="grid md:grid-cols-2 gap-10">
    {[ "loreto", "ana" ].map((key, i) => (
      <motion.div
        key={i}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        className="bg-[#101b26] p-6 rounded-xl shadow-md shadow-[#1de9b633]"
      >
        <p className="text-white italic mb-3">“{t(`testimonios.${key}.texto`)}”</p>
        <p className="text-[#1de9b6] font-semibold">– {t(`testimonios.${key}.nombre`)}</p>
      </motion.div>
    ))}
  </div>
</section>

{/* Sección de Contacto */}
<section id="contacto" aria-label="Formulario de contacto" className="px-6 lg:px-24 py-16 z-10 relative text-center">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-4xl font-bold mb-6 text-[#1de9b6]"
  >
    {t("tituloContacto")}
  </motion.h3>

  {/* Formulario de contacto */}
  <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-4">
    <input
      name="nombre"
      type="text"
      required
      placeholder={t("placeholders.nombre")}
      className="w-full p-3 rounded bg-[#0f1c2e] text-white"
    />
    <input
      name="email"
      type="email"
      required
      placeholder={t("placeholders.correo")}
      className="w-full p-3 rounded bg-[#0f1c2e] text-white"
    />
    <textarea
      name="mensaje"
      rows="4"
      required
      placeholder={t("placeholders.mensaje")}
      className="w-full p-3 rounded bg-[#0f1c2e] text-white"
    ></textarea>
    <button
      type="submit"
      className="bg-[#1de9b6] text-black px-10 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
    >
      {t("botonEnviar")}
    </button>

    {/* Mensaje de estado de envío */}
    {status === "success" && (
      <p className="text-green-400 font-medium">{t("mensajeExito")}</p>
    )}
    {status === "error" && (
      <p className="text-red-500 font-medium">{t("mensajeError")}</p>
    )}
  </form>
</section>

{/*Footer general */}
<footer id="footer" className="bg-[#0f1c2e] py-10 px-6 lg:px-24 mt-10 z-10 relative" aria-label="Pie de página">
  {/* Versión para escritorio */}
  <div className="hidden md:flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">
    {/* Logo izquierdo */}
    <div className="flex items-center gap-3">
      <img src="/logo.png" alt="Logo pequeño de Zennith" className="h-20 w-20" />
      <span className="text-[#1de9b6] font-semibold text-xl">ZENNITH</span>
    </div>

    {/* Centro: Redes sociales */}
    <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center gap-6">
      {/* Email */}
      <a href="mailto:contacto@zennith.cl" aria-label="Email" className="hover:text-[#00BFFF] hover:scale-110 transition-transform duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
      </a>

      {/* Instagram */}
      <a href="https://instagram.com/zennith_cl" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#E1306C] hover:scale-110 transition-transform duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/company/zennith-chile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#0077B5] hover:scale-110 transition-transform duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
    </div>

    {/* Derechos reservados */}
    <p className="text-sm text-right">{t("footer")}</p>
  </div>

  {/* Versión para móviles */}
  <div className="block md:hidden text-center flex flex-col items-center gap-6 text-gray-500">
    {/* Logo centrado */}
    <div className="flex items-center gap-3 justify-center">
      <img src="/logo.png" alt="Logo pequeño de Zennith" className="h-20 w-20" />
    </div>

    {/* Redes sociales */}
    <div className="flex justify-center gap-8">
      {/* Email */}
      <a href="mailto:contacto@zennith.cl" aria-label="Email" className="hover:text-[#00BFFF] hover:scale-110 transition-transform duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
          <rect x="2" y="4" width="20" height="16" rx="2" />
        </svg>
      </a>

      {/* Instagram */}
      <a href="https://instagram.com/zennith_cl" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#E1306C] hover:scale-110 transition-transform duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
        </svg>
      </a>

      {/* LinkedIn */}
      <a href="https://www.linkedin.com/company/zennith-chile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#0077B5] hover:scale-110 transition-transform duration-200">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect width="4" height="12" x="2" y="9" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      </a>
    </div>

    {/* Derechos reservados */}
    <p className="text-sm text-gray-400">{t("footer")}</p>
  </div>
</footer>

{/*Botón flotante de WhatsApp */}
<a
  href="https://wa.me/56962341655"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chatea por WhatsApp"
  className={`fixed right-5 bottom-5 z-50 bg-[#25D366] hover:bg-[#1de9b6] p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 ${
    hideButton ? 'opacity-0 pointer-events-none' : 'opacity-100'
  }`}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 32 32"
    fill="white"
  >
    <path d="M16.004 2.403c-7.45 0-13.515 6.062-13.515 13.515 0 2.384.627 4.707 1.816 6.75l-1.917 7.004 7.178-1.883a13.447 13.447 0 006.438 1.605c7.45 0 13.514-6.063 13.514-13.514S23.455 2.403 16.004 2.403zm0 24.724a11.13 11.13 0 01-5.658-1.545l-.405-.24-4.261 1.116 1.137-4.152-.265-.425a11.132 11.132 0 01-1.74-6.004c0-6.135 4.996-11.13 11.13-11.13 6.135 0 11.13 4.995 11.13 11.13s-4.996 11.13-11.13 11.13zm6.086-8.275c-.332-.168-1.961-.969-2.266-1.08-.305-.112-.527-.168-.75.169-.224.336-.861 1.08-1.055 1.304-.194.224-.388.25-.72.084-.332-.169-1.403-.516-2.67-1.645-.986-.88-1.65-1.969-1.843-2.3-.194-.336-.021-.517.147-.686.15-.148.336-.388.504-.582.167-.194.224-.336.336-.56.111-.224.056-.42-.028-.583-.083-.168-.749-1.804-1.027-2.47-.27-.648-.544-.56-.748-.56-.194 0-.416-.028-.639-.028-.224 0-.583.084-.889.42s-1.167 1.14-1.167 2.773c0 1.633 1.194 3.208 1.361 3.431.167.224 2.349 3.58 5.694 5.021.796.343 1.416.547 1.899.7.797.252 1.521.216 2.091.131.637-.095 1.961-.799 2.238-1.569.278-.77.278-1.429.194-1.57-.083-.14-.305-.223-.637-.391z" />
  </svg>
</a>

</main>
    </motion.div>
  );
}

export default Home;



