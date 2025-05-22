import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer
      id="footer"
      className="bg-[#0f1c2e] py-10 px-6 lg:px-24 mt-10 z-10 relative"
      aria-label="Pie de página"
    >
      {/* Desktop */}
      <div className="hidden md:flex flex-col md:flex-row justify-between items-center gap-6 text-gray-500">
        <div className="flex items-center gap-3">
          <img src="/Logo.svg" alt="Logo pequeño de Zennith" className="h-8 w-8" />
          <span className="text-[#1de9b6] font-semibold text-xl">ZENNITH</span>
        </div>

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

        <p className="text-sm text-right text-gray-500">{t("footer")}</p>
      </div>

      {/* Mobile */}
      <div className="block md:hidden text-center flex flex-col items-center gap-6 text-gray-500">
        <div className="flex items-center gap-3 justify-center">
          <img src="/Logo.svg" alt="Logo pequeño de Zennith" className="h-10 w-10" />
        </div>
        <div className="flex justify-center gap-8">
          <a href="mailto:contacto@zennith.cl" aria-label="Email" className="hover:text-[#00BFFF] hover:scale-110 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
              <rect x="2" y="4" width="20" height="16" rx="2" />
            </svg>
          </a>
          <a href="https://instagram.com/zennith_cl" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-[#E1306C] hover:scale-110 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
          </a>
          <a href="https://www.linkedin.com/company/zennith-chile" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-[#0077B5] hover:scale-110 transition-transform duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" />
              <circle cx="4" cy="4" r="2" />
            </svg>
          </a>
        </div>
        <p className="text-sm text-gray-500">{t("footer")}</p>
      </div>
    </footer>
  );
};

export default Footer;
