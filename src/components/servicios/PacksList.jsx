import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Pack1 from "./modals/Pack1";
import PackEcommerce from "./modals/PackEcommerce";
import BaseModal from "./modals/BaseModal";

function destacarPalabras(texto, palabrasClave) {
  if (!texto || typeof texto !== "string") return null;

  const partes = texto.split(new RegExp(`(${palabrasClave.join("|")})`, "gi"));
  return partes.map((parte, i) =>
    palabrasClave.some(p => p.toLowerCase() === parte.toLowerCase()) ? (
      <span key={i} className="text-white font-semibold">{parte}</span>
    ) : (
      <React.Fragment key={i}>{parte}</React.Fragment>
    )
  );
}

function PacksList() {
  const { t, i18n } = useTranslation();
  const packs = t("packs", { returnObjects: true });

  const packDev = packs.packDesarrollador;
  const packEcommerce = packs.packEcommerce;

  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-2 gap-10">
        {/* CARD 1: Pack Desarrollador */}
        <div className="bg-[#0e1a26] p-6 rounded-xl border border-[#1de9b6] shadow-lg flex flex-col min-h-[400px]">
          <div className="flex-1 text-center">
            <h3 className="text-xl font-bold text-[#1de9b6] mb-4">{packDev?.nombre}</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-3">
              {destacarPalabras(packDev?.descripcion, [
                i18n.language === "es" ? "solución escalable" : "scalable solution",
                i18n.language === "es" ? "crecimiento digital" : "digital growth",
                i18n.language === "es" ? "primera página web" : "first website",
                i18n.language === "es" ? "presencia online profesional" : "professional online presence"
              ])}
            </p>
          </div>
          <div className="text-center mt-2">
            <div className="inline-block border border-[#1de9b6] text-[#1de9b6] font-bold px-6 py-2 rounded-full text-sm shadow-sm mb-3">
              {packDev?.precioResumen}
            </div>
            <button
              onClick={() => setOpenModal("packDev")}
              className="bg-[#1de9b6] text-black font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#13c8a2] transition cursor-pointer"
            >
              {packDev?.boton}
            </button>
          </div>
        </div>

        {/* CARD 2: Pack Ecommerce */}
        <div className="bg-[#0e1a26] p-6 rounded-xl border border-[#1de9b6] shadow-lg flex flex-col min-h-[400px]">
          <div className="flex-1 text-center">
            <h3 className="text-xl font-bold text-[#1de9b6] mb-4">{packEcommerce?.nombre}</h3>
            <p className="text-gray-300 text-base leading-relaxed mb-3">
              {destacarPalabras(packEcommerce?.descripcion, [
                i18n.language === "es" ? "emprendedores" : "entrepreneurs",
                i18n.language === "es" ? "vender" : "sell",
                i18n.language === "es" ? "sin complicaciones" : "without complications"
              ])}
            </p>
          </div>
          <div className="text-center mt-2">
            <div className="inline-block border border-[#1de9b6] text-[#1de9b6] font-bold px-6 py-2 rounded-full text-sm shadow-sm mb-3">
              {packEcommerce?.precioResumen}
            </div>
            <button
              onClick={() => setOpenModal("packEcommerce")}
              className="bg-[#1de9b6] text-black font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#13c8a2] transition cursor-pointer"
            >
              {packEcommerce?.boton}
            </button>
          </div>
        </div>
      </div>

      {/* MODALS */}
      <BaseModal isOpen={openModal === "packDev"} onClose={() => setOpenModal(null)}>
        <div className="text-white">
          <Pack1 data={packDev} />
        </div>
      </BaseModal>

      <BaseModal isOpen={openModal === "packEcommerce"} onClose={() => setOpenModal(null)}>
        <div className="text-white">
          <PackEcommerce data={packEcommerce} />
        </div>
      </BaseModal>
    </>
  );
}

export default PacksList;
