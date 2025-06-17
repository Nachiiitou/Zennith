import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import {
  Mail,
  MessageCircle,
  Instagram,
  Linkedin,
} from "lucide-react";
import { motion } from "framer-motion";

const Contacto = () => {
  const { t } = useTranslation();
  const [enviado, setEnviado] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const data = new FormData(form);

    fetch("https://formspree.io/f/mblozapl", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    }).then((res) => {
      if (res.ok) {
        setEnviado(true);
        form.reset();
        setTimeout(() => setEnviado(false), 4000);
      } else {
        alert("Hubo un error al enviar. Intenta de nuevo.");
      }
    });
  };

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen flex items-center justify-center px-4 py-20 text-white"
    >
      <div className="w-full max-w-3xl bg-[#11161d] rounded-2xl shadow-lg p-10 relative">
        {/* Toast */}
        {enviado && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-[#1de9b6] text-black px-6 py-3 rounded-md shadow-md z-10"
          >
            ✅ {t("contacto.exito") || "Mensaje enviado con éxito"}
          </motion.div>
        )}

        {/* Título y descripción */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-[#1de9b6] mb-2">
            {t("contacto.titulo")}
          </h1>
          <p className="text-gray-400">{t("contacto.descripcion")}</p>
        </div>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="grid gap-5">
          <input
            type="text"
            name="name"
            placeholder={t("contacto.nombre")}
            required
            className="p-4 bg-transparent border border-[#1de9b6] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1de9b6] transition"
          />
          <input
            type="email"
            name="email"
            placeholder={t("contacto.email")}
            required
            className="p-4 bg-transparent border border-[#1de9b6] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1de9b6] transition"
          />
          <textarea
            name="message"
            rows="5"
            placeholder={t("contacto.mensaje")}
            required
            className="p-4 bg-transparent border border-[#1de9b6] rounded-md placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#1de9b6] transition resize-none"
          />
          <button
            type="submit"
            className="bg-[#1de9b6] text-black font-semibold py-3 rounded-md hover:scale-105 transition"
          >
            {t("contacto.enviar")}
          </button>
        </form>

        {/* Contacto directo y redes */}
        <div className="mt-10 text-center space-y-4">
          <a
            href="https://wa.me/56923901646?text=Hola!%20Estoy%20interesado%20en%20los%20servicios%20de%20Zennith"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-lg text-[#1de9b6] hover:text-white transition"
            aria-label="Contacto por WhatsApp"
            title="Enviar mensaje por WhatsApp"
          >
            <MessageCircle className="w-5 h-5" /> Enviar mensaje por WhatsApp
          </a>

          <a
            href={`mailto:${t("contacto.correo")}`}
            className="flex justify-center items-center gap-2 text-gray-300 hover:text-[#1de9b6] transition"
            aria-label="Correo electrónico"
          >
            <Mail className="w-5 h-5" /> {t("contacto.correo")}
          </a>

          <div className="flex justify-center gap-6 text-2xl pt-4">
            <a
              href={t("contacto.instagram")}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#e1306c]"
              aria-label="Instagram"
            >
              <Instagram />
            </a>
            <a
              href={t("contacto.linkedin")}
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#0077b5]"
              aria-label="LinkedIn"
            >
              <Linkedin />
            </a>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contacto;
