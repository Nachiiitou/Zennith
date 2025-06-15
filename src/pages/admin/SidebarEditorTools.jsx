import React from 'react'
import {
  Heading,
  ImageIcon,
  Menu,
  ArrowLeft,
  Text,
  PlusSquare
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function SidebarEditorTools({
  visible,
  onInsertTitulo,
  onInsertParrafo,
  onInsertImagen,
  onInsertCita,
  onInsertCodigo,
  onInsertVideo,
  onInsertBloqueTexto, // <- NUEVO
  onPublicar,
  onToggle
}) {
  const navigate = useNavigate()

  if (!visible) return null

  return (
    <motion.div
      initial={{ x: -250, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -250, opacity: 0 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className="fixed top-0 left-0 h-full w-[220px] bg-[#0b0f1c] text-white p-4 z-40 shadow-2xl rounded-tr-2xl rounded-br-2xl flex flex-col justify-between"
    >
      <div>
        {/* Botón cerrar */}
        <button
          onClick={onToggle}
          className="absolute top-4 right-4 text-black bg-[#00ffcc] p-1 rounded-full hover:opacity-80 cursor-pointer"
          title="Cerrar menú"
        >
          <Menu size={16} />
        </button>

        {/* Volver */}
        <div
          className="flex items-center gap-2 mb-6 cursor-pointer hover:text-[#00ffcc]"
          onClick={() => navigate('/admin/dashboard')}
        >
          <ArrowLeft size={18} />
          <span className="text-sm font-semibold">Volver</span>
        </div>

        <h2 className="text-lg font-bold mb-4">Herramientas</h2>

        <div className="flex flex-col gap-3">
          <button
            onClick={onInsertTitulo}
            className="bg-[#00ffcc] text-black font-medium py-2 px-4 rounded-xl hover:opacity-90 flex items-center gap-2 shadow cursor-pointer"
          >
            <Heading size={16} />
            Título
          </button>

          <button
            onClick={onInsertParrafo}
            className="bg-[#00ffcc] text-black font-medium py-2 px-4 rounded-xl hover:opacity-90 flex items-center gap-2 shadow cursor-pointer"
          >
            <Text size={16} />
            Texto
          </button>

          <button
            onClick={onInsertImagen}
            className="bg-[#00ffcc] text-black font-medium py-2 px-4 rounded-xl hover:opacity-90 flex items-center gap-2 shadow cursor-pointer"
          >
            <ImageIcon size={16} />
            Imagen
          </button>

          {/* NUEVO: Añadir bloque visual */}
          <button
            onClick={onInsertBloqueTexto}
            className="bg-[#00ffcc] text-black font-medium py-2 px-4 rounded-xl hover:opacity-90 flex items-center gap-2 shadow cursor-pointer"
          >
            <PlusSquare size={16} />
            Bloque de texto
          </button>
        </div>
      </div>

      {/* Botón publicar abajo */}
      <div className="mt-6">
        <button
          onClick={onPublicar}
          className="bg-[#00ffcc] text-black font-semibold w-full py-2 rounded-xl hover:opacity-90 transition cursor-pointer shadow"
        >
          Publicar
        </button>
      </div>
    </motion.div>
  )
}
