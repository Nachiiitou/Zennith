import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Hero = ({ onClickContacto }) => {
  const { t } = useTranslation();

  const titulo = t("tituloHero");
  const primeraParte = titulo.split(" ").slice(0, -1).join(" ");
  const ultimaPalabra = titulo.split(" ").slice(-1).join(" ");

  return (
    <section
      id="hero"
      aria-label="Sección principal Zennith"
      className="mt-20 flex flex-col-reverse lg:flex-row items-center justify-between px-6 lg:px-24 py-24 gap-16 relative"
    >
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-xl text-center lg:text-left"
      >
        <h2 className="text-5xl font-extrabold leading-tight mb-6 text-white">
          {primeraParte} <br className="hidden lg:block" />
          <span className="text-[#1de9b6]">{ultimaPalabra}</span>
        </h2>

        <p className="text-gray-300 text-lg mb-10 leading-relaxed">
          {t("subtituloHero")}
        </p>

        <motion.button
          whileHover={{ scale: 1.08, boxShadow: "0px 0px 15px #1de9b6" }}
          className="bg-[#1de9b6] text-[#0a0a0a] px-10 py-3 rounded-full text-lg font-semibold transition-all duration-300"
          onClick={onClickContacto}
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
        <picture>
          <source
            srcSet="/pc-400.webp 400w, /pc-800.webp 800w, /pc-1200.webp 1200w"
            type="image/webp"
            sizes="(max-width: 768px) 90vw, (max-width: 1200px) 60vw, 50vw"
          />
          <img
            src="/pc-800.webp"
            alt="Mockup Zennith mostrando software"
            width="1200"
            height="800"
            decoding="async"
            className="w-full object-contain rounded-2xl transition-transform duration-300"
          />
        </picture>
      </motion.div>
    </section>
  );
};

export default Hero;
