import React from "react";
import { CheckCircle, XCircle, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

export default function TablaComparativa({ data, onClose }) {
  const nivelesOriginal = data.niveles;

  // Herencia de niveles
  const basico = [...nivelesOriginal.basico.detalles];

  const intermedio = nivelesOriginal.intermedio.detalles.includes("Todo lo del Nivel Básico")
    ? [...basico, ...nivelesOriginal.intermedio.detalles.filter(f => f !== "Todo lo del Nivel Básico")]
    : [...nivelesOriginal.intermedio.detalles];

  const premium = nivelesOriginal.premium.detalles.includes("Todo lo del Nivel Intermedio")
    ? [...intermedio, ...nivelesOriginal.premium.detalles.filter(f => f !== "Todo lo del Nivel Intermedio")]
    : [...nivelesOriginal.premium.detalles];

  const niveles = { basico, intermedio, premium };

  const headers = ["Funcionalidad", "Básico", "Intermedio", "Premium"];
  const allFeatures = new Set([...basico, ...intermedio, ...premium]);
  const featureList = Array.from(allFeatures);

  return (
    <motion.div
      className="text-white w-full"
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4 }}
    >
      {/* Flecha volver */}
      <div
        className="flex items-center gap-2 mb-4 cursor-pointer hover:text-[#1de9b6] transition"
        onClick={onClose}
      >
        <ArrowLeft size={20} />
        <span className="text-sm font-medium">Volver</span>
      </div>

      {/* Título */}
      <h2 className="text-2xl font-bold text-[#1de9b6] mb-4 text-center">
        Comparativa entre niveles
      </h2>

      {/* Tabla */}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border border-[#1de9b6]/20 rounded-lg overflow-hidden">
          <thead className="bg-[#0f1d27] text-[#1de9b6] text-center">
            <tr>
              {headers.map((header, i) => (
                <th key={i} className="px-4 py-3 border border-[#1de9b6]/10 font-semibold">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {featureList.map((feature, i) => (
              <tr
                key={i}
                className={`${
                  i % 2 === 0 ? "bg-[#101d2b]" : "bg-[#0e1a26]"
                } hover:bg-[#142330] transition`}
              >
                <td className="px-4 py-2 border border-[#1de9b6]/10 text-left text-gray-200">
                  {feature}
                </td>
                {["basico", "intermedio", "premium"].map((nivelKey, j) => (
                  <td key={j} className="px-4 py-2 text-center border border-[#1de9b6]/10">
                    {niveles[nivelKey].includes(feature) ? (
                      <CheckCircle className="text-[#1de9b6] mx-auto" size={20} />
                    ) : (
                      <XCircle className="text-gray-500 mx-auto" size={20} />
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Precios al pie */}
      <div className="flex justify-around mt-6 flex-wrap gap-4">
        {["basico", "intermedio", "premium"].map(nivelKey => (
          <div
            key={nivelKey}
            className="bg-[#1de9b6] text-black font-bold px-4 py-2 rounded-full shadow-md text-sm"
          >
            {nivelKey.charAt(0).toUpperCase() + nivelKey.slice(1)}:{" "}
            {data.niveles[nivelKey].precio}
          </div>
        ))}
      </div>
    </motion.div>
  );
}
