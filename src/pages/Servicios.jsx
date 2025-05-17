import React from "react";
import { useTranslation } from "react-i18next";

const Servicios = () => {
  const { t } = useTranslation();

  const servicios = t("servicios", { returnObjects: true });
  const packs = t("packs.lista", { returnObjects: true });

  return (
    <div className="p-6 max-w-6xl mx-auto">
      {/* Título principal */}
      <h1 className="text-3xl font-bold mb-6">{t("tituloServicios")}</h1>

      {/* Servicios individuales */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {Object.entries(servicios).map(([key, servicio]) => (
          <div key={key} className="border p-5 rounded-xl shadow-md bg-white">
            <h2 className="text-xl font-semibold mb-2">{servicio.titulo}</h2>
            <p className="text-sm text-gray-600 mb-2">{servicio.desc}</p>
            <p className="text-sm text-gray-700">{servicio.detalle}</p>
          </div>
        ))}
      </div>

      {/* Planes y packs */}
      <h2 className="text-2xl font-bold mb-6">{t("packs.titulo")}</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {packs.map((pack, idx) => (
          <div key={idx} className="border p-5 rounded-xl shadow-md bg-white">
            <h3 className="text-lg font-bold mb-2">{pack.nombre}</h3>
            <p className="text-sm text-gray-600 mb-2">{pack.descripcion}</p>
            <ul className="list-disc list-inside text-sm text-gray-700 mb-3">
              {pack.incluye.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
            <p className="font-bold text-blue-700 mb-2">{pack.precio}</p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
              {t("packs.botonSolicitar")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Servicios;
