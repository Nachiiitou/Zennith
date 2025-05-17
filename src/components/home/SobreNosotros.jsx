import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const SobreNosotros = () => {
  const { t } = useTranslation();

  return (
    <section
      id="nosotros"
      className="px-6 lg:px-24 py-12 text-center z-10 relative"
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h3 className="text-4xl font-bold text-[#1de9b6] mb-6">
          {t("tituloNosotros")}
        </h3>
        <div className="text-gray-400 max-w-3xl mx-auto text-lg leading-relaxed space-y-6">
          <p>
            {t("nosotros1_parte1")}
            <span className="text-white font-semibold">
              {t("nosotros1_zennith")}
            </span>
            {t("nosotros1_parte2")}
          </p>
          <p>{t("nosotros2_texto")}</p>
        </div>
      </motion.div>
    </section>
  );
};

export default SobreNosotros;
