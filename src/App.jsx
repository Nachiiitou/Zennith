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
  const [activeSection, setActiveSection] = useState("inicio");

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

  // Observador para sección activa en navbar
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
          alt="Loader"
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
      {/* SEO Meta Tags */}
      <head>
        <title>Zennith - Soluciones Digitales</title>
        <meta name="description" content="Desarrollo web y soporte técnico de alta calidad" />
        <link rel="icon" type="image/png" href="/favicon.png" />
      </head>

      {/* Fondo animado */}
      <div className="absolute inset-0 -z-10">
        <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
      </div>

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
          {["inicio", "servicios", "nosotros", "contacto"].map((item, idx) => (
            <li
              key={idx}
              className={`cursor-pointer transition hover:scale-105 duration-200 ${
                activeSection === item ? "text-[#1de9b6] font-semibold" : "text-white"
              }`}
            >
              <a href={`#${item}`}>{item.charAt(0).toUpperCase() + item.slice(1)}</a>
            </li>
          ))}
        </ul>

        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-[#0f1c2e] flex flex-col items-center py-4 lg:hidden z-20">
            {["inicio", "servicios", "nosotros", "contacto"].map((item, idx) => (
              <a
                key={idx}
                href={`#${item}`}
                className="py-2 text-white hover:text-[#1de9b6] transition"
                onClick={() => setMenuOpen(false)}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </a>
            ))}
          </div>
        )}
      </nav>

      {/* Hero */}
      <section id="hero" className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-24 gap-16 z-10 relative">
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
            alt="Mockup Zennith"
            className="w-xxl object-contain rounded-xl  shadow-[#1de9b633]"
          />
        </motion.div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="px-6 lg:px-24 py-16 z-10 relative">
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

      {/* Nosotros */}
      <section id="nosotros" className="px-6 lg:px-24 py-16 z-10 relative text-center">
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

      {/* Testimonios */}
      <section className="px-6 lg:px-24 py-16 z-10 relative">
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
      <section id="contacto" className="px-6 lg:px-24 py-16 z-10 relative text-center">
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold mb-6 text-[#1de9b6]"
        >
          Contáctanos
        </motion.h3>
        <form className="max-w-2xl mx-auto space-y-4">
          <input type="text" placeholder="Nombre" className="w-full p-3 rounded bg-[#0f1c2e] text-white" />
          <input type="email" placeholder="Correo" className="w-full p-3 rounded bg-[#0f1c2e] text-white" />
          <textarea rows="4" placeholder="Mensaje" className="w-full p-3 rounded bg-[#0f1c2e] text-white"></textarea>
          <button type="submit" className="bg-[#1de9b6] text-black px-10 py-3 rounded-full font-semibold hover:scale-105 transition-transform">
            Enviar mensaje
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-[#0f1c2e] py-10 px-6 lg:px-24 mt-10 z-10 relative">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="Zennith Logo" className="h-8 w-8" />
            <span className="text-[#1de9b6] font-semibold">ZENNITH</span>
          </div>
          <p className="text-gray-500 text-sm">© 2025 Zennith. Todos los derechos reservados.</p>
        </div>
      </footer>

      {/* Botón WhatsApp flotante */}
      <a
        href="https://wa.me/56912345678"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 bg-[#1de9b6] rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-300"
        aria-label="Chatea por WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          fill="white"
          className="w-6 h-6"
        >
          <path d="M256.1 0C114.6 0 0 114.6 0 256c0 45.4 12 89.4 34.8 128.2L0 512l131.2-34.5C170.6 500.1 213 512 256 512h.1c141.5 0 256-114.6 256-256S397.6 0 256.1 0zM256 472c-39 0-77.2-10.6-110.6-30.6l-7.9-4.7-77.9 20.5 20.8-76.1-5.2-8.2C53.1 339.5 40 298.5 40 256 40 132.3 132.3 40 256 40s216 92.3 216 216-92.3 216-216 216zm121.6-160.3c-6.6-3.3-39-19.2-45-21.4-6-2.2-10.3-3.3-14.7 3.3s-16.8 21.4-20.6 25.8c-3.8 4.3-7.6 4.9-14.2 1.6-6.6-3.3-28-10.3-53.3-32.9-19.7-17.6-33-39.3-36.9-45.9-3.8-6.6-.4-10.1 2.9-13.3 3-2.9 6.6-7.6 9.8-11.4 3.3-3.8 4.3-6.6 6.6-11 2.2-4.3 1.1-8.2-.5-11.4-1.6-3.3-14.7-35.5-20.2-48.7-5.3-12.6-10.7-10.9-14.7-11.1-3.8-.2-8.2-.2-12.6-.2s-11.4 1.6-17.4 8.2c-6 6.6-22.8 22.3-22.8 54.3s23.3 63 26.6 67.3c3.3 4.3 45.9 70.2 111.4 98.4 15.6 6.7 27.8 10.7 37.3 13.7 15.7 5 30 4.3 41.3 2.6 12.6-1.9 39-15.9 44.5-31.2 5.5-15.3 5.5-28.5 3.8-31.2-1.6-2.6-6-4.3-12.6-7.6z" />
        </svg>
      </a>
    </motion.div>
  );
}

export default App;
