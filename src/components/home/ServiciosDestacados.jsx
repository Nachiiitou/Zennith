import { motion, AnimatePresence } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  Cpu,
  ShieldCheck,
  MonitorSmartphone,
  Wrench,
  Lightbulb,
  Share2,
  Bot,
  BarChart3,
  MessageSquare,
  ArrowRight,
} from "lucide-react";

const ServiciosDestacados = ({ activo = [], setActivo }) => {
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
    "chatbots",
  ];

  const iconClass =
    "text-[#1de9b6] w-5 h-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110";

  const iconMap = {
    "automatizacion": <Cpu className={iconClass} />,
    "soporte-tecnico": <Wrench className={iconClass} />,
    "desarrollo-web": <MonitorSmartphone className={iconClass} />,
    "mantenimiento-web": <ShieldCheck className={iconClass} />,
    "consultoria-tecnologica": <Lightbulb className={iconClass} />,
    "integracion-apis": <Share2 className={iconClass} />,
    "agentes-ia": <Bot className={iconClass} />,
    "business-intelligence": <BarChart3 className={iconClass} />,
    "chatbots": <MessageSquare className={iconClass} />,
  };

  const servicios = servicioKeys.map((key) => ({
    key,
    titulo: t(`servicios.${key}.titulo`),
    desc: t(`servicios.${key}.desc`),
    resumen: t(`servicios.${key}.resumen`),
  }));

  const toggleActivo = (index) => {
    setActivo((prev) => {
      const safePrev = Array.isArray(prev) ? prev : [];
      return safePrev.includes(index)
        ? safePrev.filter((i) => i !== index)
        : [...safePrev, index];
    });
  };

  return (
    <section
      id="servicios"
      aria-label={t("tituloServicios")}
      className="relative px-6 lg:px-24 py-20 scroll-mt-24"
    >
      {/* Fondo visual sutil */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(20,203,161,0.04)_0%,_transparent_80%)] pointer-events-none z-0" />

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-center mb-4 text-[#00e6b8] z-10 relative"
      >
        {t("tituloServicios")}
      </motion.h3>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mb-10 z-10 relative text-[15px] leading-relaxed">
        {t("servicios.descripcion")}
      </p>

      <div className="grid md:grid-cols-3 gap-8 relative z-10">
        {servicios.map((servicio, i) => {
          const isActive = Array.isArray(activo) ? activo.includes(i) : false;

          return (
            <motion.div
              key={i}
              whileHover={{ scale: 1.03 }}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group bg-[#101b26] rounded-xl p-6 shadow-md shadow-[#1de9b633] cursor-pointer border border-transparent hover:border-[#1de9b6]/30 transition-colors duration-300 ${
                isActive ? "ring-2 ring-[#1de9b6]/40" : ""
              }`}
              onClick={() => toggleActivo(i)}
            >
              <div className="flex items-center gap-3 mb-2">
                {iconMap[servicio.key]}
                <h4 className="text-lg font-semibold text-[#00e6b8]">
                  {servicio.titulo}
                </h4>
              </div>
              <p className="text-white text-sm md:text-base">
                {servicio.desc}
              </p>

              <AnimatePresence mode="wait">
                {isActive && (
                  <motion.div
                    key={`detalle-${i}`}
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
          );
        })}
      </div>

      <div className="text-center mt-14 relative z-10">
        <Link
          to={`/${lang}/servicios`}
          className="inline-flex items-center gap-2 bg-[#1de9b6] text-black font-semibold py-3 px-6 rounded-full hover:bg-[#14cba1] hover:shadow-lg hover:shadow-[#1de9b6]/30 transition"
        >
          {t("servicios.boton")}
          <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
};

export default ServiciosDestacados;
