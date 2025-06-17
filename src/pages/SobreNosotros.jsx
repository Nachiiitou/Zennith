import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";
import { Dialog } from "@headlessui/react";
import LighthouseCard from "../components/LighthouseCard";
import Contacto from "../components/global/Contacto";

export default function SobreNosotros() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [openImage, setOpenImage] = useState(false);
  const [openLighthouse, setOpenLighthouse] = useState(false);
  const [openContacto, setOpenContacto] = useState(false);
  const formRef = useRef();
  const [status, setStatus] = useState(null);

  const imagenArtesanal = t("sobreNosotros.artesanal.imagen");
  const imagenMetodo = t("sobreNosotros.metodo.imagen");
  const fraseInspiradora = t("sobreNosotros.frase");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    try {
      // Lógica de envío aquí
      setStatus("success");
    } catch (error) {
      setStatus("error");
    }
  };

  // Reemplazo de Helmet con useEffect
  useEffect(() => {
    document.title = t("sobreNosotros.meta.title");
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", t("sobreNosotros.meta.description"));
    } else {
      const desc = document.createElement("meta");
      desc.name = "description";
      desc.content = t("sobreNosotros.meta.description");
      document.head.appendChild(desc);
    }
  }, [t]);

  return (
    <section className="px-6 lg:px-24 py-16 bg-[#02070f] text-white">
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

      <LighthouseCard onOpenModal={() => setOpenLighthouse(true)} />

      {/* Método Zennith + Cómo trabajamos */}
      <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="rounded-xl p-6 border border-white/5"
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
            />
          )}
        </motion.div>
      </div>

      {/* Código artesanal */}
      <div className="grid md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-6 rounded-xl p-6 border border-white/5"
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
        <p className="text-gray-400 mb-4 ">
          {t("sobreNosotros.proyectos.descripcion")}
        </p>
        <button
  onClick={() => setOpenContacto(true)}
  className="inline-block bg-[#1de9b6] text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-[#13c8a2] transition cursor-pointer"
>
  {t("sobreNosotros.proyectos.boton")}
</button>

<Dialog open={openContacto} onClose={() => setOpenContacto(false)} className="z-50 relative">
  <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-auto">
    <Dialog.Panel className="relative max-w-2xl w-full bg-[#0e1a26] text-white p-6 rounded-xl shadow-xl border border-[#1de9b6]/20">
      <button
        onClick={() => setOpenContacto(false)}
        className="absolute top-3 right-4 text-white text-2xl hover:text-[#1de9b6] cursor-pointer"
        aria-label="Cerrar contacto"
      >
        ×
      </button>
      <Contacto
        formRef={formRef}
        handleSubmit={handleSubmit}
        status={status}
      />
    </Dialog.Panel>
  </div>
</Dialog>

      </motion.div>
    </section>
  );
}
