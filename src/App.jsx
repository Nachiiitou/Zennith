import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [formSent, setFormSent] = useState(false);

  const [activeSection, setActiveSection] = useState("hero");


  const particlesInit = async (main) => {
    await loadFull(main);
  };

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

  {/* Desktop menu */}
  <ul className="hidden lg:flex gap-10 text-base">
    {["hero", "servicios", "nosotros", "contacto"].map((item, idx) => (
      <li
        key={idx}
        className={`cursor-pointer transition hover:scale-105 duration-200 ${
          activeSection === item ? "text-[#1de9b6] font-semibold" : "text-white"
        }`}
      >
        <a href={`#${item}`}>
          {item === "hero" ? "Inicio" : item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      </li>
    ))}
  </ul>

  {/* Mobile menu */}
  {menuOpen && (
    <div className="absolute top-full left-0 w-full bg-[#0f1c2e] flex flex-col items-center py-4 lg:hidden z-20">
      {["hero", "servicios", "nosotros", "contacto"].map((item, idx) => (
        <a
          key={idx}
          href={`#${item}`}
          className="py-2 text-white hover:text-[#1de9b6] transition"
          onClick={() => setMenuOpen(false)}
        >
          {item === "hero" ? "Inicio" : item.charAt(0).toUpperCase() + item.slice(1)}
        </a>
      ))}
    </div>
  )}
</nav>


        {/* Hero */}
        <section id="hero" aria-label="Sección principal Zennith" className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-24 gap-16 z-10 relative">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="max-w-xl text-center lg:text-left"
          >
            <h2 className="text-5xl font-extrabold leading-tight mb-6">
              Soluciones digitales <br className="hidden lg:block" /> inteligentes
            </h2>
            <p className="text-white text-lg mb-10 leading-relaxed">
              Desarrollamos software, brindamos soporte técnico y potenciamos tu negocio con tecnología.
            </p>
            <motion.button
              whileHover={{ scale: 1.08, boxShadow: "0px 0px 15px #1de9b6" }}
              className="bg-[#1de9b6] text-black px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300"
            >
              Solicita tu asesoría
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-5xl"
          >
            <img
              src="/pc.png"
              alt="Mockup Zennith mostrando software"
              className="w-xxl object-contain rounded-xl shadow-[#1de9b633]"
            />
          </motion.div>
        </section>

        
        <section id="servicios" aria-label="Nuestros Servicios" className="px-6 lg:px-24 py-16 z-10 relative">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center mb-10 text-[#1de9b6]"
  >
    Nuestros Servicios
  </motion.h3>
  <div className="grid md:grid-cols-3 gap-10">
    {[
      { titulo: "Desarrollo Web", desc: "Sitios modernos, rápidos y responsivos." },
      { titulo: "Soporte Técnico", desc: "Asistencia rápida y eficaz para tus sistemas." },
      { titulo: "Automatización", desc: "Soluciones para mejorar la eficiencia de tu negocio." },
    ].map((servicio, i) => (
      <motion.div
        key={i}
        whileHover={{ scale: 1.05 }}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="bg-[#101b26] rounded-xl p-6 shadow-md shadow-[#1de9b633]"
      >
        <h4 className="text-xl font-semibold mb-2 text-[#1de9b6]">{servicio.titulo}</h4>
        <p className="text-white">{servicio.desc}</p>
      </motion.div>
    ))}
  </div>
</section>

<section id="nosotros" aria-label="Sobre Nosotros" className="px-6 lg:px-24 py-16 z-10 relative text-center">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold mb-6 text-[#1de9b6]"
  >
    Sobre Nosotros
  </motion.h3>
  <p className="text-gray-400 max-w-3xl mx-auto text-lg">
    En Zennith combinamos innovación y experiencia para llevar tu negocio al siguiente nivel. Somos un equipo apasionado por la tecnología y comprometido con tus resultados.
  </p>
</section>

<section aria-label="Testimonios de Clientes" className="px-6 lg:px-24 py-16 z-10 relative">
  <motion.h3
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="text-3xl font-bold text-center mb-10 text-[#1de9b6]"
  >
    Lo que dicen nuestros clientes
  </motion.h3>
  <div className="grid md:grid-cols-2 gap-10">
    {[
      { nombre: "Ana Torres", texto: "Zennith potenció nuestro sistema. ¡Servicio 10/10!" },
      { nombre: "Carlos Vega", texto: "Rápidos, profesionales y confiables. 100% recomendados." },
    ].map((testimonio, i) => (
      <motion.div
        key={i}
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: 30 }}
        transition={{ duration: 0.5, delay: i * 0.2 }}
        className="bg-[#101b26] p-6 rounded-xl shadow-md"
      >
        <p className="text-white italic mb-3">“{testimonio.texto}”</p>
        <p className="text-[#1de9b6] font-semibold">– {testimonio.nombre}</p>
      </motion.div>
    ))}
  </div>
</section>














        {/* Contacto */}
        <section id="contacto" aria-label="Formulario de contacto" className="px-6 lg:px-24 py-16 z-10 relative text-center">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold mb-6 text-[#1de9b6]"
          >
            Contáctanos
          </motion.h3>
          <form className="max-w-2xl mx-auto space-y-4">
            <input name="nombre" type="text" required placeholder="Nombre" className="w-full p-3 rounded bg-[#0f1c2e] text-white" />
            <input name="correo" type="email" required placeholder="Correo" className="w-full p-3 rounded bg-[#0f1c2e] text-white" />
            <textarea name="mensaje" rows="4" required placeholder="Mensaje" className="w-full p-3 rounded bg-[#0f1c2e] text-white"></textarea>
            <button type="submit" className="bg-[#1de9b6] text-black px-10 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
              Enviar mensaje
            </button>
          </form>
        </section>

        {/* Footer y botón flotante puedes dejarlos igual, solo asegúrate de mantener los alt y aria-label bien puestos */}
        <footer className="bg-[#0f1c2e] py-10 px-6 lg:px-24 mt-10 z-10 relative" aria-label="Pie de página">
  <div className="flex flex-col md:flex-row justify-between items-center gap-4">
    <div className="flex items-center gap-2">
      <img src="/logo.png" alt="Logo pequeño de Zennith" className="h-8 w-8" />
      <span className="text-[#1de9b6] font-semibold">ZENNITH</span>
    </div>
    <p className="text-gray-500 text-sm">© 2025 Zennith. Todos los derechos reservados.</p>
  </div>
</footer>

      </main>
    </motion.div>
  );
}

export default App;
