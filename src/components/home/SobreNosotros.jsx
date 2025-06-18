import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowRight, Bot, Code, Expand } from "lucide-react";

const SobreNosotros = () => {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "es";

  const iconClass = "w-5 h-5 text-[#1de9b6] transition-transform duration-300 group-hover:rotate-6";

  const beneficios = [
    {
      icono: <Bot className={iconClass} />,
      titulo: t("nosotros.item1.titulo"),
      texto: t("nosotros.item1.texto"),
    },
    {
      icono: <Code className={iconClass} />,
      titulo: t("nosotros.item2.titulo"),
      texto: t("nosotros.item2.texto"),
    },
    {
      icono: <Expand className={iconClass} />,
      titulo: t("nosotros.item3.titulo"),
      texto: t("nosotros.item3.texto"),
    },
  ];

  const textoDividido = t("nosotros.descripcion").split("Zennith");

  return (
    <section
      id="nosotros"
      className="relative px-6 lg:px-24 py-24 text-center scroll-mt-24 z-10"
    >
      {/* Fondo sutil radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(20,203,161,0.07)_0%,_transparent_80%)] pointer-events-none z-0" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h3 className="text-4xl font-bold text-[#1de9b6] mb-6">
          {t("tituloNosotros")}
        </h3>

        <p className="text-gray-300 max-w-4xl mx-auto text-lg leading-relaxed mb-16">
          {textoDividido[0]}
          <span className="text-white font-semibold">Zennith</span>
          {textoDividido[1]}
        </p>

        {/* Frase motivacional destacada */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto text-lg text-[#1de9b6] italic mb-16"
        >
          <span className="block border-l-4 border-[#1de9b6] pl-4 text-left text-white/90">
            <strong className="text-[#1de9b6] font-semibold mr-2">→</strong>
            {t("nosotros.motivacion")}
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10 text-left max-w-6xl mx-auto">
          {beneficios.map((b, i) => (
            <div key={i} className="group">
              <div className="flex items-center gap-3 mb-2">
                {b.icono}
                <h4 className="font-semibold text-white text-base">{b.titulo}</h4>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">{b.texto}</p>
            </div>
          ))}
        </div>

        <div className="pt-12 flex justify-center">
          <Link
            to={`/${lang}/nosotros`}
            className="inline-flex items-center gap-2 text-[#1de9b6] hover:underline hover:gap-3 transition-all duration-200 text-base"
          >
            {t("cta_nosotros")}
            <ArrowRight size={18} strokeWidth={2} />
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default SobreNosotros;
