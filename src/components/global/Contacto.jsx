import React from "react";
import { useTranslation } from "react-i18next";

function Contacto() {
  const { t } = useTranslation();

  return (
    <div>
      <h3 className="text-2xl font-bold mb-6 text-center text-[#1de9b6]">
        {t("contactoFormulario.titulo")}
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {/* Formulario */}
        <form
          action="https://formspree.io/f/mblozapl"
          method="POST"
          className="space-y-4 w-full"
        >
          <input
            type="text"
            name="nombre"
            placeholder={t("contactoFormulario.form.nombre")}
            className="w-full p-3 rounded bg-[#111827] border border-gray-700 text-white"
            required
          />
          <input
            type="email"
            name="email"
            placeholder={t("contactoFormulario.form.email")}
            className="w-full p-3 rounded bg-[#111827] border border-gray-700 text-white"
            required
          />
          <textarea
            name="mensaje"
            placeholder={t("contactoFormulario.form.mensaje")}
            rows="4"
            className="w-full p-3 rounded bg-[#111827] border border-gray-700 text-white"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-[#1de9b6] text-black py-2 rounded font-semibold hover:bg-[#14cba1] transition"
          >
            {t("contactoFormulario.form.boton")}
          </button>
        </form>

        {/* WhatsApp */}
        <div className="bg-[#111827] p-6 rounded-xl border border-gray-700 flex flex-col justify-center items-center text-center">
          <p className="mb-4">{t("contactoFormulario.whatsapp.texto")}</p>
          <a
            href="https://wa.me/56962341655?text=Hola!%20Estoy%20interesado%20en%20los%20servicios%20de%20Zennith"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#25D366] text-white font-semibold px-6 py-3 rounded-full hover:bg-green-500 transition"
          >
            {t("contactoFormulario.whatsapp.boton")}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contacto;
