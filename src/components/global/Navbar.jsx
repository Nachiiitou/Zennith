import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Menu, X } from "lucide-react";
import Logo from '../../assets/Logo.svg?react';





const Navbar = ({ activeSection, toggleLanguage, lang }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (item) => {
    if (item === "hero") {
      if (window.location.pathname === `/${lang}`) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        navigate(`/${lang}`, { state: { skipAnimation: true } });
      }
      return;
    }

    const section = document.getElementById(item);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="flex justify-between items-center px-6 py-5 border-b border-[#1de9b6] bg-[#02070f]/90 backdrop-blur-sm z-10 relative">
      {/* Logo e inicio */}
      <div
        className="flex items-center gap-3 cursor-pointer"
        onClick={() => {
          if (window.location.pathname === `/${lang}`) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            navigate(`/${lang}`, { state: { skipAnimation: true } });
          }
        }}
      >
        <Logo className="h-10 w-10 min-w-[40px] min-h-[40px]" />

  
        <h1 className="text-3xl font-bold text-[#1de9b6] tracking-wide">ZENNITH</h1>
      </div>

      {/* Navegación desktop */}
      <ul className="hidden lg:flex gap-10 text-base">
        {["hero", "servicios", "nosotros", "contacto"].map((item, idx) => {
          const isServiciosPage = window.location.pathname.includes("/servicios");
          const isActive =
            item === "servicios"
              ? isServiciosPage || activeSection === "servicios"
              : activeSection === item;

          const activeClass = isActive
            ? "text-[#1de9b6] font-semibold"
            : "text-white";

          return (
            <li
              key={idx}
              className={`cursor-pointer transition hover:scale-105 duration-200 ${activeClass}`}
            >
              {item === "servicios" ? (
                <Link
                  to={`/${lang}/servicios`}
                  className="bg-transparent border-none p-0 m-0 text-inherit font-inherit"
                >
                  {t(`nav.${item}`)}
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

      {/* Botón idioma (escritorio) */}
      <div className="hidden lg:flex">
        <button
          onClick={toggleLanguage}
          className="ml-4 text-sm border border-[#1de9b6] px-4 py-1 rounded-full text-[#1de9b6] hover:bg-[#1de9b6] hover:text-black transition"
        >
          {lang === "es" ? "ES" : "EN"}
        </button>
      </div>

      {/* Botones móviles: idioma + hamburguesa */}
      <div className="flex lg:hidden items-center gap-3">
        <button
          onClick={toggleLanguage}
          className="text-sm border border-[#1de9b6] px-3 py-1 rounded-full text-[#1de9b6]"
        >
          {lang === "es" ? "ES" : "EN"}
        </button>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-[#1de9b6]"
          aria-label="Abrir menú"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="absolute top-full left-0 w-full bg-[#02070f] text-white px-6 py-6 shadow-lg z-40 flex flex-col gap-6 lg:hidden">
          {["hero", "servicios", "nosotros", "contacto"].map((item, idx) => (
            <div key={idx}>
              {item === "servicios" ? (
                <Link
                  to={`/${lang}/servicios`}
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-left text-lg"
                >
                  {t(`nav.${item}`)}
                </Link>
              ) : (
                <button
                  onClick={() => {
                    handleClick(item);
                    setTimeout(() => setMenuOpen(false), 300);
                  }}
                  className="block w-full text-left text-lg"
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
