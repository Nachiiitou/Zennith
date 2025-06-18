import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from '../../assets/Logo.svg?react';

const Navbar = ({ activeSection, toggleLanguage, lang }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (item) => {
    const goToSection = () => {
      const section = document.getElementById(item);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    };

    const isInHome = location.pathname === `/${lang}` || location.pathname === "/";

    if (item === "hero") {
      if (isInHome) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(`/${lang}`, { state: { skipAnimation: true } });
      }
      return;
    }

    if (isInHome) {
      goToSection();
    } else {
      navigate(`/${lang}`, { state: { skipAnimation: true } });
      setTimeout(() => {
        goToSection();
      }, 300);
    }
  };

  const isServiciosPage = location.pathname.includes("/servicios");
  const isNosotrosPage = location.pathname.includes("/nosotros");
  const isContactoPage = location.pathname.includes("/contacto");
  const isBlogPage = location.pathname.includes("/blog");
  const isHomePage = location.pathname === `/${lang}` || location.pathname === "/";

  return (
    <>
      {/* Barra superior fija */}
      <nav className="relative flex items-center px-6 py-4 bg-[#02070f]/90 backdrop-blur-sm z-50">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer flex-none group"
          onClick={() => {
            if (isHomePage) {
              window.scrollTo({ top: 0, behavior: "smooth" });
            } else {
              navigate(`/${lang}`, { state: { skipAnimation: true } });
            }
          }}
        >
          <Logo className="h-10 w-10 min-w-[40px] min-h-[40px] transition-transform duration-300 group-hover:rotate-12" />
          <h1 className="text-3xl font-bold text-[#1de9b6] tracking-wide">ZENNITH</h1>
        </div>

        {/* Menú Desktop */}
        <ul className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 gap-10 text-base">
          {["hero", "servicios", "nosotros", "contacto", "blog"].map((item, idx) => {
            const isActive =
              item === "hero"
                ? isHomePage || activeSection === "hero"
                : item === "servicios"
                ? isServiciosPage || activeSection === "servicios"
                : item === "nosotros"
                ? isNosotrosPage
                : item === "contacto"
                ? isContactoPage
                : isBlogPage;

            const activeClass = isActive
              ? "text-[#1de9b6] font-semibold border-b-2 border-[#1de9b6] pb-1"
              : "text-white hover:text-[#1de9b6] transition-colors duration-200";

            const isLink = ["servicios", "nosotros", "contacto", "blog"].includes(item);

            return (
              <li
                key={idx}
                className={`cursor-pointer transition duration-200 ${activeClass}`}
              >
                {isLink ? (
                  <Link
                    to={`/${lang}/${item}`}
                    className="bg-transparent border-none p-0 m-0 text-inherit font-inherit cursor-pointer"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                ) : (
                  <button
                    onClick={() => handleClick(item)}
                    className="bg-transparent border-none p-0 m-0 text-inherit font-inherit cursor-pointer"
                  >
                    {t(`nav.${item}`)}
                  </button>
                )}
              </li>
            );
          })}
        </ul>

        {/* Lado derecho: idioma + menú móvil */}
        <div className="flex gap-3 items-center flex-none ml-auto">
          {/* Botón idioma desktop */}
          <button
            onClick={toggleLanguage}
            className="hidden lg:block text-sm border border-[#1de9b6] px-4 py-1 rounded-full text-[#1de9b6] hover:bg-[#1de9b6] hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1de9b6] cursor-pointer"
          >
            {lang === "es" ? "ES" : "EN"}
          </button>

          {/* Botón menú móvil */}
          <div className="flex lg:hidden items-center gap-3">
            <button
              onClick={toggleLanguage}
              className="text-sm border border-[#1de9b6] px-3 py-1 rounded-full text-[#1de9b6] cursor-pointer"
            >
              {lang === "es" ? "ES" : "EN"}
            </button>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-[#1de9b6] cursor-pointer"
              aria-label="Abrir menú"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Menú móvil animado */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[9998] bg-[#02070f]/95 backdrop-blur-md px-6 py-8 flex flex-col gap-8 lg:hidden overflow-y-auto"
          >
            {/* Encabezado con logo y cerrar */}
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <Logo className="h-8 w-8 text-[#1de9b6]" />
                <span className="text-2xl font-bold text-[#1de9b6]">ZENNITH</span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-[#1de9b6] hover:rotate-90 transition-transform duration-200 cursor-pointer"
                aria-label="Cerrar menú"
              >
                <X size={28} />
              </button>
            </div>

            {/* Navegación */}
            <nav className="flex flex-col gap-6 mt-6 text-lg font-medium">
              {["hero", "servicios", "nosotros", "contacto", "blog"].map((item, idx) => (
                <div key={idx}>
                  {["servicios", "nosotros", "contacto", "blog"].includes(item) ? (
                    <Link
                      to={`/${lang}/${item}`}
                      onClick={() => setMenuOpen(false)}
                      className="text-white hover:text-[#1de9b6] transition-colors"
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1)}
                    </Link>
                  ) : (
                    <button
                      onClick={() => {
                        handleClick(item);
                        setTimeout(() => setMenuOpen(false), 300);
                      }}
                      className="text-white hover:text-[#1de9b6] transition-colors"
                    >
                      {t(`nav.${item}`)}
                    </button>
                  )}
                </div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
