import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaChartLine, FaBolt, FaArrowLeft } from "react-icons/fa";
import Contacto from "../../components/global/Contacto";

function SoporteTecnico() {
  const { lang } = useParams();
  const { t } = useTranslation();
  const data = t("servicios.soporte-tecnico", { returnObjects: true });
  const [showModal, setShowModal] = useState(false);

  return (
    <>


      <section className="bg-[#02070f] text-white py-20 px-6 lg:px-32">
        <div className="max-w-7xl mx-auto">
          {/* Volver a Servicios */}
          <Link
            to={`/${lang}/servicios`}
            className="inline-flex items-center text-[#1de9b6] hover:text-white mb-10 transition"
          >
            <FaArrowLeft className="mr-2" /> Volver a Servicios
          </Link>

          {/* Imagen y descripción principal */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-xl overflow-hidden shadow-lg"
            >
              <img
                src={data.imagen}
                alt={data.titulo}
                className="w-full object-cover rounded-xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl font-bold text-[#1de9b6] mb-4">
                {data.titulo}
              </h1>
              <p className="text-lg text-gray-300 font-medium mb-4">
                {data.desc}
              </p>
              <p className="text-gray-400 whitespace-pre-line text-base">
                {data.detalle}
              </p>
            </motion.div>
          </div>

          {/* Beneficios */}
          {data.beneficios && (
            <div className="mb-20">
              <h2 className="text-2xl font-semibold text-[#1de9b6] mb-6">
                Beneficios del soporte técnico
              </h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {data.beneficios.map((b, i) => (
                  <div
                    key={i}
                    className="bg-[#0a101a] p-6 rounded-xl shadow border border-gray-700 flex gap-4 items-start"
                  >
                    <FaChartLine className="text-[#1de9b6] text-xl mt-1" />
                    <p className="text-gray-300 font-medium">{b}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Ejemplos */}
          {data.ejemplos && (
            <div className="mb-20">
              <h2 className="text-2xl font-semibold text-[#1de9b6] mb-6">
                Casos comunes que resolvemos
              </h2>
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
                {data.ejemplos.map((e, i) => (
                  <div
                    key={i}
                    className="bg-[#0a101a] p-6 rounded-xl shadow border border-gray-700 flex gap-4 items-start"
                  >
                    <FaBolt className="text-[#1de9b6] text-xl mt-1" />
                    <p className="text-gray-300 font-medium">{e}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Caso de éxito */}
          {/*
          {data.caso && (
            <div className="mb-20">
              <h2 className="text-2xl font-semibold text-[#1de9b6] mb-6">
                {data.caso.titulo}
              </h2>
              <p className="text-gray-400 whitespace-pre-line text-base">
                {data.caso.contenido}
              </p>
            </div>
          )}
          */}

          {/* CTA final */}
          <div className="bg-[#0a101a] p-12 rounded-xl shadow-lg text-center mt-20">
            <h3 className="text-3xl font-bold text-[#1de9b6] mb-4">
              ¿Necesitas asistencia técnica inmediata?
            </h3>
            <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
              Agenda una asesoría gratuita y solucionemos tu problema de forma rápida y profesional.
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#1de9b6] hover:bg-[#14cba1] text-black font-semibold py-3 px-8 rounded-full transition text-lg"
            >
              Agenda tu asesoría
            </button>
          </div>
        </div>
      </section>

      {/* Modal de contacto */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50 px-4">
          <div className="bg-[#0b111d] p-6 rounded-xl max-w-3xl w-full relative text-white">
            <button
              className="absolute top-4 right-4 text-gray-400 hover:text-white text-xl"
              onClick={() => setShowModal(false)}
            >
              &times;
            </button>
            <Contacto />
          </div>
        </div>
      )}

    </>
  );
}

export default SoporteTecnico;
