import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { CheckCircle, Brain, Zap, Code2, ChevronDown } from "lucide-react";

const Hero = ({ onClickContacto }) => {
  const { t } = useTranslation();

  return (
    <section
      id="hero"
      role="region"
      aria-label="Sección principal de presentación"
      className="mt-6 relative flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-24 gap-16"
    >
      {/* Fondo radial sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,203,161,0.05)_0%,_transparent_70%)] z-0 pointer-events-none" />

      {/* Contenido */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center lg:text-left z-10"
      >
        {/* Etiqueta visual */}
        <span className="inline-block mb-4 px-4 py-1 text-sm rounded-full bg-[#1de9b610] text-[#1de9b6] font-semibold tracking-wide uppercase">
          {t("home.hero.tagline")}
        </span>

        {/* Título principal */}
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight mb-6 text-white">
          {t("home.hero.titulo.primera")}
          <br className="hidden sm:block" />
          <motion.span
            className="bg-gradient-to-r from-[#1de9b6] to-[#0fb] text-transparent bg-clip-text font-extrabold"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t("home.hero.titulo.destacada")}
          </motion.span>
        </h1>

        {/* Subtítulo */}
        <p className="text-gray-300 text-lg mb-6 leading-relaxed">
          {t("home.hero.subtitulo")}
        </p>

        {/* Botón */}
        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0 0 15px #1de9b6" }}
          className="bg-[#14cba1] hover:bg-[#0ed3a1] text-black px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300 cursor-pointer"
          onClick={onClickContacto}
        >
          {t("home.hero.boton")}
        </motion.button>

        {/* Lista de beneficios */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 p-5 rounded-xl border border-white/10"
        >
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm md:text-base text-gray-200">
            <li className="flex items-center gap-3">
              <CheckCircle className="text-[#1de9b6] w-5 h-5" />
              {t("home.hero.beneficios.lighthouse")}
            </li>
            <li className="flex items-center gap-3">
              <Brain className="text-[#1de9b6] w-5 h-5" />
              {t("home.hero.beneficios.ia")}
            </li>
            <li className="flex items-center gap-3">
              <Zap className="text-[#1de9b6] w-5 h-5" />
              {t("home.hero.beneficios.automatizacion")}
            </li>
            <li className="flex items-center gap-3">
              <Code2 className="text-[#1de9b6] w-5 h-5" />
              {t("home.hero.beneficios.codigo")}
            </li>
          </ul>
        </motion.div>
      </motion.div>

      {/* Imagen */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        whileHover={{ scale: 1.02 }}
        className="w-full max-w-4xl z-10"
      >
        <picture>
          <source
            srcSet="/pc-400.webp 400w, /pc-800.webp 800w, /pc-1200.webp 1200w"
            type="image/webp"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 50vw"
          />
          <img
            src="/pc-800.webp"
            alt="Mockup Zennith mostrando software personalizado"
            width="1200"
            height="800"
            decoding="async"
            className="w-full object-contain rounded-2xl transition-transform duration-300"
          />
        </picture>
      </motion.div>

      {/* Scroll-down animado */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[#1de9b6] opacity-50"
      >
        <ChevronDown size={24} />
      </motion.div>
    </section>
  );
};

export default Hero;
