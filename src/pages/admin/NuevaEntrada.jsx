import React, { useState } from 'react'
import { Menu } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '../../firebaseConfig'
import PlantillaLanding from '../../components/plantillas/PlantillaLanding'
import { motion, AnimatePresence } from 'framer-motion'
import ModalPublicar from './ModalPublicar'
import SidebarEditorTools from './SidebarEditorTools'
import BloqueTextoEditable from './BloqueTextoEditable'

export default function NuevaEntrada() {
  const [showModal, setShowModal] = useState(false)
  const [slug, setSlug] = useState('')
  const [fecha, setFecha] = useState('')
  const [menuAbierto, setMenuAbierto] = useState(true)
  const [bloques, setBloques] = useState([{ id: crypto.randomUUID() }])
  const navigate = useNavigate()

  // Métodos que puedes implementar más adelante
  const insertarTitulo = () => {}
  const insertarParrafo = () => {}
  const insertarImagen = () => {}
  const insertarCita = () => {}
  const insertarCodigo = () => {}
  const insertarVideo = () => {}
  const insertarImagenDesdeArchivo = (e) => {}

  const handlePublicar = () => {
    setShowModal(true)
  }

  const confirmarPublicacion = async (fechaFinal) => {
    const nuevoPost = {
      slug,
      contenido: 'guardar estructura visual más adelante',
      fecha: fechaFinal,
      publicado: true,
      creadoPor: 'admin'
    }

    try {
      await addDoc(collection(db, 'posts'), nuevoPost)
      alert('Entrada publicada exitosamente ✅')
      setShowModal(false)
      setSlug('')
      setFecha('')
    } catch (error) {
      console.error('Error al publicar:', error)
      alert('Hubo un error al publicar. Revisa consola.')
    }
  }

  return (
    <PlantillaLanding>
      <div className="flex bg-white min-h-[80vh] relative">
        <AnimatePresence>
          {menuAbierto && (
            <SidebarEditorTools
              visible={menuAbierto}
              onToggle={() => setMenuAbierto(false)}
              onInsertTitulo={insertarTitulo}
              onInsertParrafo={insertarParrafo}
              onInsertImagen={insertarImagen}
              onInsertCita={insertarCita}
              onInsertCodigo={insertarCodigo}
              onInsertVideo={insertarVideo}
              onInsertBloqueTexto={() =>
                setBloques((prev) => [...prev, { id: crypto.randomUUID() }])
              }
              onPublicar={handlePublicar}
            />
          )}
        </AnimatePresence>

        <div className="flex-1 px-6 py-8 overflow-y-auto relative space-y-6">
          {!menuAbierto && (
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMenuAbierto(true)}
              className="fixed top-20 left-4 bg-white text-black border border-gray-300 shadow-lg rounded-xl p-2 z-50 hover:bg-[#00ffcc] hover:text-black transition-colors cursor-pointer"
              title="Abrir menú"
            >
              <Menu size={20} />
            </motion.button>
          )}

          {/* 🧱 Bloques de texto */}
          {bloques.map((bloque) => (
            <BloqueTextoEditable
              key={bloque.id}
              onDelete={() =>
                setBloques((prev) => prev.filter((b) => b.id !== bloque.id))
              }
            />
          ))}
        </div>
      </div>

      {/* 📅 Modal para publicar */}
      <ModalPublicar
        open={showModal}
        onClose={() => setShowModal(false)}
        onConfirm={confirmarPublicacion}
        slug={slug}
        setSlug={setSlug}
        fecha={fecha}
        setFecha={setFecha}
      />
    </PlantillaLanding>
  )
}
