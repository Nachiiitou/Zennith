import { useState } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import { Dialog } from "@headlessui/react";

export default function SobreNosotros() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [openImage, setOpenImage] = useState(false);
  const [openLighthouse, setOpenLighthouse] = useState(false);
  const imagenSrc = t("sobreNosotros.artesanal.imagen");

  return (
    <section className="px-6 lg:px-24 py-20 bg-[#02070f] text-white">
      <Helmet>
        <title>{t("sobreNosotros.meta.title")}</title>
        <meta name="description" content={t("sobreNosotros.meta.description")} />
      </Helmet>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl lg:text-5xl font-bold text-[#1de9b6] tracking-wide mb-10 text-center drop-shadow"
      >
        {t("sobreNosotros.titulo")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto text-center text-lg text-gray-300 mb-20 leading-relaxed"
      >
        {t("sobreNosotros.descripcion")}
      </motion.p>

      {/* Sección reusable */}
      {[
        { key: "filosofia", isList: false },
        { key: "stack", isList: true },
        { key: "metodo", isList: true, isOrdered: true },
        { key: "queNo", isList: true },
      ].map((section, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group max-w-5xl mx-auto rounded-2xl p-10 mb-24 border border-[#1de9b6]/20 shadow-xl 
            bg-gradient-to-br from-[#0e1a26] via-[#101f30] to-[#0e1a26] transition-all hover:shadow-2xl 
            hover:border-[#1de9b6]/40 duration-300"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#1de9b6] mb-4">
            {t(`sobreNosotros.${section.key}.titulo`)}
          </h3>
          {section.isList ? (
            section.isOrdered ? (
              <ol className="list-decimal list-inside text-gray-300 space-y-1">
                {t(`sobreNosotros.${section.key}.pasos`, { returnObjects: true }).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ol>
            ) : (
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                {t(`sobreNosotros.${section.key}.lista`, { returnObjects: true }).map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )
          ) : (
            <p className="text-gray-300 leading-relaxed whitespace-pre-line">
              {t(`sobreNosotros.${section.key}.descripcion`)}
            </p>
          )}
        </motion.div>
      ))}

      {/* Código artesanal + imagen */}
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-24">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#1de9b6]">
            {t("sobreNosotros.artesanal.titulo")}
          </h3>
          <p className="text-gray-300 leading-relaxed">
            {t("sobreNosotros.artesanal.descripcion")}
          </p>
          <ul className="list-disc list-inside text-gray-300">
            {t("sobreNosotros.artesanal.lista", { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <img
            src={imagenSrc}
            alt="Código artesanal Zennith"
            className="rounded-xl shadow-xl border border-[#1de9b6]/20 cursor-pointer transition hover:scale-105 duration-300"
            onClick={() => setOpenImage(true)}
          />
          <p className="text-sm text-gray-400 mt-3 italic">
            Web hecha a mano con React + Tailwind. Sin WordPress. Sin plantillas.
          </p>
        </motion.div>
      </div>

      {/* Modal Imagen */}
      <Dialog open={openImage} onClose={() => setOpenImage(false)} className="z-50 relative">
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <Dialog.Panel className="relative max-w-5xl w-full">
            <button
              onClick={() => setOpenImage(false)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-[#1de9b6] transition"
              aria-label="Cerrar"
            >
              ×
            </button>
            <img
              src={imagenSrc}
              alt="Código ampliado"
              className="w-full rounded-xl border border-[#1de9b6]/20 shadow-2xl"
            />
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Rendimiento garantizado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto rounded-2xl p-10 mb-24 border border-[#1de9b6]/20 shadow-xl 
          bg-gradient-to-br from-[#0e1a26] via-[#101f30] to-[#0e1a26] text-center"
      >
        <h3 className="text-2xl lg:text-3xl font-semibold text-[#1de9b6] mb-4">
          +95 en Lighthouse garantizado
        </h3>
        <p className="text-gray-300 mb-6">
          Nuestros sitios alcanzan entre 95 y 100 puntos en rendimiento, accesibilidad, SEO y buenas prácticas.
          <br />
          <span className="text-sm text-gray-400">
            * Aplica en proyectos estándar sin integraciones externas que comprometan el puntaje.
          </span>
        </p>
        <div className="flex justify-center mb-4">
          <img
            src="/images/lighthouse-example.png"
            alt="Ejemplo Lighthouse Zennith"
            className="rounded-lg border border-[#1de9b6]/20 shadow-md max-w-md"
          />
        </div>
        <button
          onClick={() => setOpenLighthouse(true)}
          className="mt-2 text-sm underline text-[#1de9b6] hover:text-[#13c8a2] transition"
        >
          ¿Qué es Lighthouse?
        </button>
      </motion.div>

      {/* Modal Lighthouse */}
      <Dialog open={openLighthouse} onClose={() => setOpenLighthouse(false)} className="z-50 relative">
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <Dialog.Panel className="relative max-w-lg w-full bg-[#0e1a26] text-white p-6 rounded-xl shadow-xl border border-[#1de9b6]/20">
            <button
              onClick={() => setOpenLighthouse(false)}
              className="absolute top-3 right-4 text-white text-2xl hover:text-[#1de9b6]"
            >
              ×
            </button>
            <h4 className="text-xl font-semibold text-[#1de9b6] mb-3">¿Qué es Google Lighthouse?</h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              Lighthouse es una herramienta de Google que analiza tu sitio web y lo califica en 4 áreas clave:
              <strong> rendimiento, accesibilidad, SEO y buenas prácticas.</strong> En Zennith, optimizamos todo para sobresalir en cada una.
            </p>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* CTA Final */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-32"
      >
        <h4 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
          {t("sobreNosotros.proyectos.titulo")}
        </h4>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          {t("sobreNosotros.proyectos.descripcion")}
        </p>
        <Link
          to={`/${lang}/contacto`}
          className="inline-block bg-[#1de9b6] text-black px-8 py-3 rounded-full text-lg font-bold hover:bg-[#13c8a2] transition-all shadow-lg hover:scale-105"
        >
          {t("sobreNosotros.proyectos.boton")}
        </Link>
      </motion.div>
    </section>
  );
}
