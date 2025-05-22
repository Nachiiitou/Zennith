import { useState } from "react";
import { CheckCircle, BarChart2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TablaComparativa from "./TablaComparativa";
import BaseModal from "./BaseModal";

export default function PackEcommerce({ data }) {
  const nivelesKeys = ["inicio", "premium"];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showComparison, setShowComparison] = useState(false);

  const nivel = data.niveles[nivelesKeys[currentIndex]];

  return (
    <div className="text-white flex flex-col items-center gap-6 relative">
      {/* Selector de niveles */}
      <div className="flex justify-center gap-3 flex-wrap">
        {nivelesKeys.map((key, index) => (
          <button
            key={key}
            onClick={() => setCurrentIndex(index)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
              index === currentIndex
                ? "bg-gradient-to-r from-[#1de9b6] to-[#13c8a2] text-black shadow"
                : "border border-[#1de9b6] text-white hover:bg-[#1de9b610]"
            }`}
          >
            {data.niveles[key].nombre}
          </button>
        ))}
      </div>

      {/* Botón comparativa (desktop) */}
      <div className="hidden md:flex justify-center w-full mt-1">
        <button
          onClick={() => setShowComparison(true)}
          className="flex items-center gap-2 text-sm text-[#1de9b6] hover:text-[#13c8a2] transition"
        >
          <BarChart2 size={16} />
          Ver tabla comparativa
        </button>
      </div>

      {/* Contenido dinámico por nivel */}
      <div className="w-full max-w-3xl h-[460px] overflow-y-auto px-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={nivel.nombre}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35 }}
            className="space-y-6"
          >
            {/* Título y descripción */}
            <div>
              <h2 className="text-2xl font-bold text-[#1de9b6] mb-1">{data.nombre}</h2>
              <h3 className="text-xl font-semibold text-white">{nivel.nombre}</h3>
              <p className="text-gray-400 italic">{nivel.descripcion}</p>
            </div>

            {/* Lista de beneficios */}
            <div className="grid gap-3">
              {nivel.detalles.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 bg-[#111e2b] rounded-lg px-4 py-2 border border-[#1de9b6]/10 shadow-sm"
                >
                  <CheckCircle size={20} className="text-[#1de9b6]" />
                  <span className="text-sm text-gray-200">{item}</span>
                </div>
              ))}
            </div>

            {/* Precio y CTA */}
            <div className="flex justify-between items-center flex-wrap gap-4 mt-6">
              <div className="bg-[#1de9b6] text-black font-bold px-6 py-2 rounded-full text-lg shadow-md">
                {nivel.precio}
              </div>
              <button className="bg-[#1de9b6] hover:bg-[#13c8a2] text-black font-semibold py-2 px-6 rounded-full shadow-md transition">
                {data.boton}
              </button>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Modal comparativa */}
      <BaseModal isOpen={showComparison} onClose={() => setShowComparison(false)}>
        <TablaComparativa data={data} onClose={() => setShowComparison(false)} />
      </BaseModal>

      {/* Botón flotante en mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setShowComparison(true)}
          className="bg-[#1de9b6] text-black p-3 rounded-full shadow-lg hover:bg-[#13c8a2] transition"
          title="Comparar niveles"
        >
          <BarChart2 size={20} />
        </button>
      </div>
    </div>
  );
}
