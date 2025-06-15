import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import { User, Mail, MessageSquare } from "lucide-react";

const Contacto = ({ formRef, handleSubmit, status }) => {
  const { t } = useTranslation();

  return (
    <section
      id="contacto"
      aria-label="Formulario de contacto"
      className="relative px-6 lg:px-24 py-24 text-center scroll-mt-24"
    >
      {/* Fondo sutil radial */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(20,203,161,0.04)_0%,_transparent_80%)] pointer-events-none z-0" />

      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-4 text-[#1de9b6] z-10 relative"
      >
        {t("tituloContacto")}
      </motion.h3>

      <p className="text-gray-400 max-w-xl mx-auto mb-10 text-[15px] leading-relaxed z-10 relative">
        {t("descripcionContacto")}
      </p>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#0d1a28]/40 p-8 rounded-xl shadow-xl max-w-2xl mx-auto backdrop-blur-md z-10 relative"
      >
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          {/* Nombre */}
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1de9b6] w-4 h-4" />
            <input
              name="nombre"
              type="text"
              required
              placeholder={t("placeholders.nombre")}
              className="w-full pl-10 p-3 rounded bg-[#0f1c2e] text-white outline-none transition focus:ring-2 focus:ring-[#1de9b6]/40 hover:ring-1 hover:ring-[#1de9b6]/20"
            />
          </div>

          {/* Correo */}
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#1de9b6] w-4 h-4" />
            <input
              name="email"
              type="email"
              required
              placeholder={t("placeholders.correo")}
              className="w-full pl-10 p-3 rounded bg-[#0f1c2e] text-white outline-none transition focus:ring-2 focus:ring-[#1de9b6]/40 hover:ring-1 hover:ring-[#1de9b6]/20"
            />
          </div>

          {/* Mensaje */}
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 text-[#1de9b6] w-4 h-4" />
            <textarea
              name="mensaje"
              rows="4"
              required
              placeholder={t("placeholders.mensaje")}
              className="w-full pl-10 p-3 pt-4 rounded bg-[#0f1c2e] text-white outline-none transition focus:ring-2 focus:ring-[#1de9b6]/40 hover:ring-1 hover:ring-[#1de9b6]/20"
            ></textarea>
          </div>

          {/* Botón */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 15 }}
            className="min-w-[150px] bg-[#1de9b6] text-black px-8 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#1de9b6]/30 transition-all"
          >
            {t("botonEnviar")}
          </motion.button>

          {/* Feedback */}
          {status === "success" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-green-400 font-medium pt-2"
            >
              {t("mensajeExito")}
            </motion.p>
          )}
          {status === "error" && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-red-500 font-medium pt-2"
            >
              {t("mensajeError")}
            </motion.p>
          )}
        </form>
      </motion.div>
    </section>
  );
};

export default Contacto;
