import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { UserRound } from "lucide-react";

const Testimonios = () => {
  const { t } = useTranslation();
  const keys = ["loreto", "ana"];

  return (
    <section
      aria-label={t("tituloTestimonios")}
      className="relative px-6 lg:px-24 py-20 scroll-mt-24"
    >
      {/* Fondo sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(20,203,161,0.03)_0%,_transparent_80%)] pointer-events-none z-0" />

      <motion.h3
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center mb-14 text-[#1de9b6] z-10 relative"
      >
        {t("tituloTestimonios")}
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-10 z-10 relative">
        {keys.map((key, i) => (
          <motion.div
            key={key}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            className="bg-[#101b26] p-6 rounded-xl shadow-md shadow-[#1de9b633] border border-transparent hover:border-[#1de9b6]/20 transition"
          >
            <div className="flex items-center gap-3 mb-4">
              <UserRound className="text-[#1de9b6] w-6 h-6" />
              <p className="text-[#1de9b6] font-semibold text-sm md:text-base">
                {t(`testimonios.${key}.nombre`)}
              </p>
            </div>

            <p className="italic text-white text-base md:text-lg leading-relaxed relative">
              <span className="text-[#1de9b6] text-2xl mr-1">“</span>
              {t(`testimonios.${key}.texto`)}
              <span className="text-[#1de9b6] text-2xl ml-1">”</span>
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
