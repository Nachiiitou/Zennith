import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const Contacto = ({ formRef, handleSubmit, status }) => {
  const { t } = useTranslation();

  return (
    <section
      id="contacto"
      aria-label="Formulario de contacto"
      className="px-6 lg:px-24 py-16 z-10 relative text-center"
    >
      <motion.h3
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold mb-6 text-[#1de9b6]"
      >
        {t("tituloContacto")}
      </motion.h3>

      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto space-y-4"
      >
        <input
          name="nombre"
          type="text"
          required
          placeholder={t("placeholders.nombre")}
          className="w-full p-3 rounded bg-[#0f1c2e] text-white"
        />
        <input
          name="email"
          type="email"
          required
          placeholder={t("placeholders.correo")}
          className="w-full p-3 rounded bg-[#0f1c2e] text-white"
        />
        <textarea
          name="mensaje"
          rows="4"
          required
          placeholder={t("placeholders.mensaje")}
          className="w-full p-3 rounded bg-[#0f1c2e] text-white"
        ></textarea>

        <button
  type="submit"
  className="bg-[#1de9b6] text-black px-10 py-3 rounded-full font-semibold hover:scale-105 transition-transform cursor-pointer"
>
  {t("botonEnviar")}
</button>

        {/* Mensaje de estado de envío */}
        {status === "success" && (
          <p className="text-green-400 font-medium">{t("mensajeExito")}</p>
        )}
        {status === "error" && (
          <p className="text-red-500 font-medium">{t("mensajeError")}</p>
        )}
      </form>
    </section>
  );
};

export default Contacto;
