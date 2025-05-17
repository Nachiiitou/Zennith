import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = ({ activeSection, toggleLanguage, lang }) => {
  const { t } = useTranslation();

  return (
    <nav className="flex justify-between items-center px-6 py-5 border-b border-[#1de9b6] bg-[#02070f]/90 backdrop-blur-sm z-10 relative">
      <div className="flex items-center gap-3">
        <img
          src="/Logo.svg"
          alt="Zennith Logo"
          width="40"
          height="40"
          className="h-10 w-auto"
        />
        <h1 className="text-3xl font-bold text-[#1de9b6] tracking-wide">ZENNITH</h1>
      </div>

      <ul className="hidden lg:flex gap-10 text-base">
        {["hero", "servicios", "nosotros", "contacto"].map((item, idx) => (
          <li
            key={idx}
            className={`cursor-pointer transition hover:scale-105 duration-200 ${
              activeSection === item ? "text-[#1de9b6] font-semibold" : "text-white"
            }`}
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
                onClick={() => {
                  document
                    .getElementById(item)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
                className="bg-transparent border-none p-0 m-0 text-inherit font-inherit cursor-pointer"
              >
                {t(`nav.${item}`)}
              </button>
            )}
          </li>
        ))}
      </ul>

      <button
        onClick={toggleLanguage}
        className="ml-4 text-sm border border-[#1de9b6] px-4 py-1 rounded-full text-[#1de9b6] hover:bg-[#1de9b6] hover:text-black transition"
      >
        {lang === "es" ? "ES" : "EN"}
      </button>
    </nav>
  );
};

export default Navbar;
