import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
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
  const isHomePage = location.pathname === `/${lang}` || location.pathname === "/";

  return (
    <nav className="relative flex items-center px-6 py-4 bg-[#02070f]/90 backdrop-blur-sm z-10">
      {/* Logo animado */}
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

      {/* Menú desktop */}
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
              : location.pathname.includes("/blog");

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
                  to={item === "blog" ? "#" : `/${lang}/${item}`}
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

      {/* Lado derecho: idioma y menú móvil */}
      <div className="flex gap-3 items-center flex-none ml-auto">
        <button
          onClick={toggleLanguage}
          className="hidden lg:block text-sm border border-[#1de9b6] px-4 py-1 rounded-full text-[#1de9b6] hover:bg-[#1de9b6] hover:text-black transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1de9b6] cursor-pointer"
        >
          {lang === "es" ? "ES" : "EN"}
        </button>

        {/* Botones móviles */}
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

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#02070f] text-white px-6 py-6 shadow-lg z-40 flex flex-col gap-6 lg:hidden">
          {["hero", "servicios", "nosotros", "contacto", "blog"].map((item, idx) => (
            <div key={idx}>
              {["servicios", "nosotros", "contacto", "blog"].includes(item) ? (
                <Link
                  to={item === "blog" ? "#" : `/${lang}/${item}`}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-left text-lg cursor-pointer"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              ) : (
                <button
                  onClick={() => {
                    handleClick(item);
                    setTimeout(() => setMenuOpen(false), 300);
                  }}
                  className="block w-full text-left text-lg cursor-pointer"
                >
                  {t(`nav.${item}`)}
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;