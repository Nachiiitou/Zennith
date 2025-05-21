import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function ServicioCard({ id, index, lang }) {
  const { t } = useTranslation();

  const titulo = t(`servicios.${id}.titulo`, { defaultValue: null });
  const desc = t(`servicios.${id}.desc`, { defaultValue: null });
  const imagen = t(`servicios.${id}.imagen`, { defaultValue: null });
  const verMas = t("verMas");

  // Validación por si falta el contenido en el .json
  if (!titulo || !desc) return null;

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-[#101b26] rounded-xl p-6 shadow-md shadow-[#1de9b633] z-0"
    >
      {imagen && (
        <div className="w-full aspect-[16/9] mb-4 rounded-lg overflow-hidden">
          <img
            src={imagen}
            alt={titulo}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <h3 className="text-xl font-semibold text-[#00ffc3] mb-2">{titulo}</h3>

      <p className="text-gray-300 mb-4">{desc}</p>

      <Link
        to={`/${lang}/servicios/${id}`}
        className="text-[#1de9b6] font-medium hover:underline"
      >
        {verMas}
      </Link>
    </motion.div>
  );
}

export default ServicioCard;
