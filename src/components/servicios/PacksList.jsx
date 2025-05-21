import React from "react";
import { useTranslation } from "react-i18next";

function PacksList() {
  const { t } = useTranslation();
  const packs = t("packs", { returnObjects: true });
  const keys = Object.keys(packs);

  return (
    <div className="grid md:grid-cols-3 gap-10">
      {keys.map((key) => {
        const pack = packs[key];
        return (
          <div
            key={key}
            className="bg-[#0e1a26] p-6 rounded-xl shadow-md border border-[#1de9b6] hover:scale-105 transition-transform"
          >
            <h3 className="text-xl font-semibold text-[#1de9b6] mb-3">{pack.nombre}</h3>
            <p className="text-gray-300 mb-4">{pack.descripcion}</p>
            <p className="text-lg font-bold text-white mb-6">{pack.precio}</p>
            <button className="bg-[#1de9b6] text-black font-medium py-2 px-4 rounded hover:bg-[#13c8a2] transition-colors">
              {t("packs.boton", "Solicitar este Pack")}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default PacksList;
