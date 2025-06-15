import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Configuracion() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#02070f] text-white p-10 font-sans">
      {/* Flecha de regreso */}
      <div
        className="flex items-center gap-2 text-[#00ffcc] hover:text-white transition cursor-pointer mb-8 w-fit"
        onClick={() => navigate("/admin/dashboard")}
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Volver al panel</span>
      </div>

      {/* Título */}
      <h1 className="text-3xl font-bold mb-4">Configuración</h1>

      {/* Contenido futuro */}
      <div className="bg-[#0b0f1c] border border-[#1a1f2e] rounded-xl p-6">
        <p className="text-white/70 italic text-center">
          Configuraciones generales del panel próximamente.
        </p>
      </div>
    </div>
  );
}

export default Configuracion;
