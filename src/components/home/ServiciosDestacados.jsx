import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const ServiciosDestacados = ({ activo, setActivo }) => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  const servicioKeys = [
    "automatizacion",
    "soporte-tecnico",
    "desarrollo-web",
    "mantenimiento-web",
    "consultoria-tecnologica",
    "integracion-apis",
    "agentes-ia",
    "business-intelligence",
    "chatbots"
  ];

  const servicios = servicioKeys.map((key) => ({
    titulo: t(`servicios.${key}.titulo`),
    desc: t(`servicios.${key}.desc`),
    resumen: t(`servicios.${key}.resumen`)
  }));

  return (
    <section
      id="servicios"
      aria-label={t("tituloServicios")}
      className="px-6 lg:px-24 py-12 z-10 relative scroll-mt-2000000"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-10 text-[#00e6b8]"
      >
        {t("tituloServicios")}
      </motion.h3>

      <div className="grid md:grid-cols-3 gap-10">
        {servicios.map((servicio, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-[#101b26] rounded-xl p-6 shadow-md shadow-[#1de9b633] cursor-pointer"
            onClick={() => setActivo(activo === i ? null : i)}
          >
            <h4 className="text-xl font-semibold mb-2 text-[#00e6b8]">
              {servicio.titulo}
            </h4>
            <p className="text-white">{servicio.desc}</p>

            <AnimatePresence mode="wait">
              {activo === i && (
                <motion.div
                  key="detalle"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1, marginTop: 16 }}
                  exit={{ height: 0, opacity: 0, marginTop: 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden text-sm text-gray-300"
                >
                  <div>{servicio.resumen}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Link
          to={`/${lang}/servicios`}
          className="inline-block bg-[#1de9b6] text-black font-semibold py-3 px-6 rounded-full hover:bg-[#14cba1] transition"
        >
          Conoce todos nuestros servicios
        </Link>
      </div>
    </section>
  );
};

export default ServiciosDestacados;
