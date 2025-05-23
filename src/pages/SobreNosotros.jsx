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

  const imagenArtesanal = t("sobreNosotros.artesanal.imagen");
  const imagenMetodo = t("sobreNosotros.metodo.imagen");
  const imagenLighthouse = t("sobreNosotros.lighthouse.imagen");
  const fraseInspiradora = t("sobreNosotros.frase");

  return (
    <section className="px-6 lg:px-24 py-16 bg-[#02070f] text-white">
      <Helmet>
        <title>{t("sobreNosotros.meta.title")}</title>
        <meta name="description" content={t("sobreNosotros.meta.description")} />
      </Helmet>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl lg:text-5xl font-bold text-[#1de9b6] tracking-wide mb-10 text-center"
      >
        {t("sobreNosotros.titulo")}
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-3xl mx-auto text-center text-lg text-gray-300 mb-20"
      >
        {t("sobreNosotros.descripcion")}
      </motion.p>

      {/* Filosofía */}
      <div className="max-w-5xl mx-auto rounded-xl p-8 mb-20 shadow-lg border border-[#1de9b6]/10 bg-gradient-to-br from-[#0e1a26] to-[#0a131c]">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl lg:text-3xl font-semibold text-[#1de9b6] mb-4"
        >
          {t("sobreNosotros.filosofia.titulo")}
        </motion.h3>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">
          {t("sobreNosotros.filosofia.descripcion")}
        </p>
      </div>

      {/* Stack tecnológico */}
      <div className="max-w-5xl mx-auto rounded-xl p-8 mb-20 shadow-lg border border-[#1de9b6]/10 bg-gradient-to-br from-[#0e1a26] to-[#0a131c]">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl lg:text-3xl font-semibold text-[#1de9b6] mb-4"
        >
          {t("sobreNosotros.stack.titulo")}
        </motion.h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {t("sobreNosotros.stack.lista", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Frase inspiracional */}
      <motion.blockquote
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center max-w-3xl mx-auto text-xl italic text-[#1de9b6] my-20"
      >
        {fraseInspiradora}
      </motion.blockquote>

      {/* Código artesanal + imagen */}
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
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
          <ul className="list-disc list-inside text-gray-300 space-y-1">
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
            src={imagenArtesanal}
            alt="Código artesanal Zennith"
            className="rounded-xl shadow-xl border border-[#1de9b6]/20 cursor-pointer transition hover:scale-105 duration-300"
            onClick={() => setOpenImage(true)}
          />
          <p className="text-sm text-gray-400 mt-3 italic">
            {t("sobreNosotros.artesanal.subtexto")}
          </p>
        </motion.div>
      </div>

      {/* Modal imagen artesanal */}
      <Dialog open={openImage} onClose={() => setOpenImage(false)} className="z-50 relative">
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <Dialog.Panel className="relative max-w-5xl w-full">
            <button
              onClick={() => setOpenImage(false)}
              className="absolute top-4 right-4 text-white text-3xl hover:text-[#1de9b6] transition"
              aria-label="Cerrar"
            >
              ×
            </button>
            <img
              src={imagenArtesanal}
              alt="Código ampliado"
              className="w-full rounded-xl border border-[#1de9b6]/20 shadow-2xl"
            />
          </Dialog.Panel>
        </div>
      </Dialog>
      {/* Rendimiento garantizado */}
      <div className="max-w-5xl mx-auto rounded-xl p-8 mb-20 shadow-lg border border-[#1de9b6]/10 bg-gradient-to-br from-[#0e1a26] to-[#0a131c] text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl lg:text-3xl font-semibold text-[#1de9b6] mb-4"
        >
          {t("sobreNosotros.lighthouse.titulo")}
        </motion.h3>
        <p className="text-gray-300 mb-6">
          {t("sobreNosotros.lighthouse.descripcion")}
          <br />
          <span className="text-sm text-gray-400">
            {t("sobreNosotros.lighthouse.nota")}
          </span>
        </p>
        <div className="flex justify-center mb-4">
          <img
            src={imagenLighthouse}
            alt="Ejemplo Lighthouse Zennith"
            className="rounded-lg border border-[#1de9b6]/20 shadow-md max-w-md"
          />
        </div>
        <button
          onClick={() => setOpenLighthouse(true)}
          className="mt-2 text-sm underline text-[#1de9b6] hover:text-[#13c8a2] transition"
        >
          {t("sobreNosotros.lighthouse.boton")}
        </button>
      </div>

      {/* Modal Lighthouse */}
      <Dialog open={openLighthouse} onClose={() => setOpenLighthouse(false)} className="z-50 relative">
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50">
          <Dialog.Panel className="relative max-w-lg w-full bg-[#0e1a26] text-white p-6 rounded-xl shadow-xl border border-[#1de9b6]/20">
            <button
              onClick={() => setOpenLighthouse(false)}
              className="absolute top-3 right-4 text-white text-2xl hover:text-[#1de9b6]"
            >
              ×
            </button>
            <h4 className="text-xl font-semibold text-[#1de9b6] mb-3">
              {t("sobreNosotros.lighthouse.modal.titulo")}
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed">
              {t("sobreNosotros.lighthouse.modal.descripcion")}
            </p>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Cómo trabajamos */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0e1a26] to-[#0a131c] p-8 rounded-xl shadow-lg border border-[#1de9b6]/10"
        >
          <h3 className="text-2xl lg:text-3xl font-semibold text-[#1de9b6] mb-4">
            {t("sobreNosotros.metodo.titulo")}
          </h3>
          <ol className="list-decimal list-inside text-gray-300 space-y-2">
            {t("sobreNosotros.metodo.pasos", { returnObjects: true }).map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ol>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="hidden md:block"
        >
          {imagenMetodo && (
  <img
    src={imagenMetodo}
    alt="Método Zennith"
    className="rounded-xl shadow-lg border border-[#1de9b6]/20 max-w-full h-auto"
    onError={() => console.warn("No se pudo cargar imagen:", imagenMetodo)}
  />
)}

        </motion.div>
      </div>

      {/* Lo que evitamos */}
      <div className="max-w-5xl mx-auto rounded-xl p-8 mb-20 shadow-lg border border-[#1de9b6]/10 bg-gradient-to-br from-[#0e1a26] to-[#0a131c]">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl lg:text-3xl font-semibold text-[#1de9b6] mb-4"
        >
          {t("sobreNosotros.queNo.titulo")}
        </motion.h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2">
          {t("sobreNosotros.queNo.lista", { returnObjects: true }).map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </div>

      {/* CTA Final */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center mt-20"
      >
        <h4 className="text-2xl font-semibold text-white mb-2">
          {t("sobreNosotros.proyectos.titulo")}
        </h4>
        <p className="text-gray-400 mb-4">
          {t("sobreNosotros.proyectos.descripcion")}
        </p>
        <Link
          to={`/${lang}/contacto`}
          className="inline-block bg-[#1de9b6] text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#13c8a2] transition"
        >
          {t("sobreNosotros.proyectos.boton")}
        </Link>
      </motion.div>
    </section>
  );
}
