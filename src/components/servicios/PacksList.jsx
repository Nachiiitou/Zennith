import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import Pack1 from "./modals/Pack1";
import PackEcommerce from "./modals/PackEcommerce";
import BaseModal from "./modals/BaseModal";

function PacksList() {
  const { t } = useTranslation();
  const packs = t("packs", { returnObjects: true });
  const packDev = packs.packDesarrollador;
  const packEcommerce = packs.packEcommerce;

  const [openModal, setOpenModal] = useState(null);

  return (
    <>
      <div className="grid md:grid-cols-3 gap-10">
        {/* CARD 1: Pack Presencia Digital */}
        <div className="bg-[#0e1a26] p-6 rounded-xl border border-[#1de9b6] shadow-lg shadow-[#1de9b622] ring-1 ring-[#1de9b6]/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[350px]">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold text-[#1de9b6] mb-4">
              Pack Presencia Digital
            </h3>
            <p className="text-gray-300 text-base mt-1 mb-2 leading-relaxed">
              🚀 Ideal para quienes están comenzando o quieren consolidar su{" "}
              <span className="text-white font-semibold">presencia online</span>.
            </p>
            <p className="text-gray-300 text-base mb-5 leading-relaxed">
              Elige entre{" "}
              <span className="font-semibold text-white">3 niveles escalables</span>, desde una landing funcional hasta un sitio completo con herramientas profesionales.
            </p>
            <div className="inline-block border border-[#1de9b6] text-[#1de9b6] font-bold px-6 py-2 rounded-full text-sm shadow-sm mb-5">
              Desde $270.000 a $620.000 CLP
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => setOpenModal("packDev")}
              className="bg-[#1de9b6] text-black font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#13c8a2] transition cursor-pointer"
            >
              {packDev.boton}
            </button>
          </div>
        </div>

        {/* CARD 2: Pack Ecommerce */}
        <div className="bg-[#0e1a26] p-6 rounded-xl border border-[#1de9b6] shadow-lg shadow-[#1de9b622] ring-1 ring-[#1de9b6]/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[350px]">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold text-[#1de9b6] mb-4">
              Pack Ecommerce
            </h3>
            <p className="text-gray-300 text-base mt-1 mb-2 leading-relaxed">
              Ideal para quienes quieren vender online con una solución moderna, rápida y adaptable.
            </p>
            <p className="text-gray-300 text-base mb-5 leading-relaxed">
              Elige entre <span className="font-semibold text-white">2 niveles</span> según tus necesidades: desde una tienda simple y funcional hasta una solución con <span className="font-semibold text-white">CRM</span>, <span className="font-semibold text-white">analítica</span> y <span className="font-semibold text-white">automatización</span>.
            </p>
            <div className="inline-block border border-[#1de9b6] text-[#1de9b6] font-bold px-6 py-2 rounded-full text-sm shadow-sm mb-5">
              Desde $690.000 a $950.000 CLP
            </div>
          </div>
          <div className="text-center mt-4">
            <button
              onClick={() => setOpenModal("packEcommerce")}
              className="bg-[#1de9b6] text-black font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#13c8a2] transition cursor-pointer"
            >
              {packEcommerce.boton}
            </button>
          </div>
        </div>

        {/* CARD 3: Pack Full (por definir) */}
        <div className="bg-[#0e1a26] p-6 rounded-xl border border-[#1de9b6] shadow-lg shadow-[#1de9b622] ring-1 ring-[#1de9b6]/20 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between min-h-[350px]">
          <div className="max-w-md mx-auto text-center">
            <h3 className="text-xl font-bold text-[#1de9b6] mb-4">
              {packs.pack3.nombre}
            </h3>
            <p className="text-gray-300 text-base mb-4">{packs.pack3.descripcion}</p>
            <div className="text-lg font-bold text-white mb-6">
              {packs.pack3.precio}
            </div>
          </div>
          <div className="text-center mt-4">
            <button className="bg-[#1de9b6] text-black font-semibold py-2 px-6 rounded-lg shadow-md hover:bg-[#13c8a2] transition cursor-pointer">
              {packDev.boton}
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
