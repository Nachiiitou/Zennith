import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Testimonios = () => {
  const { t } = useTranslation();
  const keys = ["loreto", "ana"];

  return (
    <section
      aria-label={t("tituloTestimonios")}
      className="px-6 lg:px-24 py-16 z-10 relative"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 text-[#1de9b6]"
      >
        {t("tituloTestimonios")}
      </motion.h3>

      <div className="grid md:grid-cols-2 gap-10">
        {keys.map((key, i) => (
          <motion.div
            key={i}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            className="bg-[#101b26] p-6 rounded-xl shadow-md shadow-[#1de9b633]"
          >
            <p className="text-white italic mb-3">
              “{t(`testimonios.${key}.texto`)}”
            </p>
            <p className="text-[#1de9b6] font-semibold">
              – {t(`testimonios.${key}.nombre`)}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonios;
