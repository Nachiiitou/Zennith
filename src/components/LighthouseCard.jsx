import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import imagenZennith from "../assets/lighthouse.webp";
import imagenCompetencia from "../assets/competencia-censurada.webp";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Info, ArrowLeft, ArrowRight } from "lucide-react";

const LighthouseCard = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [zoom, setZoom] = useState(false);
  const [slide, setSlide] = useState(0);

  const stats = t("sobreNosotros.lighthouse.stats", { returnObjects: true });

  const slides = [
    {
      src: imagenZennith,
      alt: "Auditoría Zennith",
      leyenda: t("sobreNosotros.lighthouse.modal.leyenda")
    },
    {
      src: imagenCompetencia,
      alt: "Ejemplo competencia",
      leyenda: t("sobreNosotros.lighthouse.modal.leyenda2")
    }
  ];

  const handlePrev = () => {
    setSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <div className="max-w-5xl mx-auto rounded-xl p-8 mb-20 shadow-lg border border-[#1de9b6]/10 bg-gradient-to-br from-[#0e1a26] to-[#0a131c] text-center">
        <motion.h3
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-2xl lg:text-3xl font-semibold text-[#1de9b6] mb-4"
        >
          {t("sobreNosotros.lighthouse.titulo")}
        </motion.h3>

        <p className="text-gray-300 mb-4">
          {t("sobreNosotros.lighthouse.descripcion")}
        </p>
        <p className="text-sm text-gray-400 mb-6">
          {t("sobreNosotros.lighthouse.nota")}
        </p>

        {/* Métricas con mejor separación y alineación */}
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 mb-6">
          {stats.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col items-center justify-between min-h-[100px] group"
            >
              <div className="w-16 h-16 flex items-center justify-center rounded-full border-4 border-[#1de9b6] text-[#1de9b6] text-lg font-bold transition duration-300 group-hover:shadow-[0_0_10px_#1de9b6]">
                {item.valor}
              </div>
              <p className="text-sm text-gray-300 mt-2">{item.label}</p>
            </motion.div>
          ))}
        </div>

        <button
          onClick={() => setOpen(true)}
          className="mt-2 cursor-pointer inline-flex items-center gap-1 text-sm underline text-[#1de9b6] hover:text-[#13c8a2] transition"
        >
          <Info className="w-4 h-4" />
          {t("sobreNosotros.lighthouse.boton")}
        </button>
      </div>

      {/* Modal principal */}
      <Dialog open={open} onClose={() => setOpen(false)} className="z-50 relative">
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center p-4 z-50 overflow-auto">
          <Dialog.Panel className="relative max-w-xl w-full bg-[#0e1a26] text-white p-6 rounded-xl shadow-xl border border-[#1de9b6]/20">
            <button
              onClick={() => setOpen(false)}
              className="absolute top-3 right-4 text-white text-2xl hover:text-[#1de9b6] cursor-pointer"
              aria-label="Cerrar modal"
            >
              ×
            </button>

            <h4 className="text-xl font-semibold text-[#1de9b6] mb-4">
              {t("sobreNosotros.lighthouse.modal.titulo")}
            </h4>

            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {t("sobreNosotros.lighthouse.modal.descripcion")}
            </p>

            <div className="relative text-center">
              <img
                onClick={() => setZoom(true)}
                src={slides[slide].src}
                alt={slides[slide].alt}
                className="cursor-zoom-in rounded-lg border border-[#1de9b6]/10 shadow-md mx-auto mb-3 transition-all duration-300"
              />
              <p className="text-sm text-[#1de9b6] font-medium mb-2">
                {slides[slide].leyenda}
              </p>

              <div className="flex justify-center gap-6 mt-2">
                <button onClick={handlePrev} aria-label="Anterior" className="cursor-pointer">
                  <ArrowLeft className="w-5 h-5 text-white hover:text-[#1de9b6] transition" />
                </button>
                <button onClick={handleNext} aria-label="Siguiente" className="cursor-pointer">
                  <ArrowRight className="w-5 h-5 text-white hover:text-[#1de9b6] transition" />
                </button>
              </div>
            </div>
          </Dialog.Panel>
        </div>
      </Dialog>

      {/* Modal de zoom (lightbox) */}
      <Dialog open={zoom} onClose={() => setZoom(false)} className="z-60 relative">
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center p-4 z-60">
          <Dialog.Panel className="relative max-w-5xl w-full">
            <button
              onClick={() => setZoom(false)}
              className="absolute top-4 right-6 text-white text-2xl hover:text-[#1de9b6] cursor-pointer z-50"
              aria-label="Cerrar zoom"
            >
              ×
            </button>
            <img
              src={slides[slide].src}
              alt={slides[slide].alt}
              className="rounded-lg max-h-[90vh] mx-auto"
            />
          </Dialog.Panel>
        </div>
      </Dialog>
    </>
  );
};

export default LighthouseCard;
