import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import ServicioCard from "../components/servicios/ServicioCard";
import PacksList from "../components/servicios/PacksList";
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

function Servicios() {
  const { t } = useTranslation();
  const { lang } = useParams();
  const [activeTab, setActiveTab] = useState("servicios");

  const servicios = t("servicios", { returnObjects: true });
  const keys = Object.keys(servicios);

  return (
    <>
      <Navbar lang={lang} />
      <section className="px-6 lg:px-24 py-16 bg-[#02070f] text-white">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-[#1de9b6] mb-6 text-center"
        >
          {t("tituloServicios")}
        </motion.h2>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <button
            onClick={() => setActiveTab("servicios")}
            className={`min-w-[140px] px-4 py-2 mx-2 rounded-md font-semibold transition-colors duration-300 ${
              activeTab === "servicios"
                ? "bg-[#1de9b6] text-black"
                : "bg-[#0c151e] text-gray-400 hover:text-white"
            }`}
          >
            {t("tabs.servicios")}
          </button>
          <button
            onClick={() => setActiveTab("packs")}
            className={`min-w-[140px] px-4 py-2 mx-2 rounded-md font-semibold transition-colors duration-300 ${
              activeTab === "packs"
                ? "bg-[#1de9b6] text-black"
                : "bg-[#0c151e] text-gray-400 hover:text-white"
            }`}
          >
            {t("tabs.packs")}
          </button>
        </div>

        {activeTab === "servicios" ? (
          <>
            {/* Fila 1 */}
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {keys.slice(0, 3).map((key, i) => (
                <ServicioCard key={key} index={i} id={key} lang={lang} />
              ))}
            </div>

            {/* Fila 2 */}
            <div className="grid md:grid-cols-3 gap-10 mb-16">
              {keys.slice(3, 6).map((key, i) => (
                <ServicioCard key={key} index={i + 3} id={key} lang={lang} />
              ))}
            </div>

            {/* Fila 3 */}
            <div className="grid md:grid-cols-3 gap-10">
              {keys.slice(6, 9).map((key, i) => (
                <ServicioCard key={key} index={i + 6} id={key} lang={lang} />
              ))}
            </div>
          </>
        ) : (
          <PacksList lang={lang} />
        )}
      </section>
      <Footer />
    </>
  );
}

export default Servicios;
