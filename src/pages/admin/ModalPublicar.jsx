// src/pages/admin/ModalPublicar.jsx
import React, { useEffect, useState } from 'react'
import { collection, query, where, getDocs } from 'firebase/firestore'
import { db } from '../../firebaseConfig'

export default function ModalPublicar({ open, onClose, onConfirm, slug, setSlug, fecha, setFecha }) {
  const [publicarAhora, setPublicarAhora] = useState(true)
  const [slugExiste, setSlugExiste] = useState(false)
  const [verificando, setVerificando] = useState(false)

  // Validar slug en Firestore en vivo
  useEffect(() => {
    if (!slug) return

    const checkSlug = async () => {
      setVerificando(true)
      const q = query(collection(db, 'posts'), where('slug', '==', slug))
      const snapshot = await getDocs(q)
      setSlugExiste(!snapshot.empty)
      setVerificando(false)
    }

    const delayDebounce = setTimeout(checkSlug, 500)
    return () => clearTimeout(delayDebounce)
  }, [slug])

  const handleConfirm = () => {
    const fechaFinal = publicarAhora ? new Date().toISOString() : fecha
    onConfirm(fechaFinal)
  }

  if (!open) return null

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-[#0f111a] p-8 rounded-3xl shadow-2xl w-full max-w-lg border border-[#00f5c4]/20 text-white">
        <h2 className="text-2xl font-bold mb-6">¿Listo para publicar?</h2>

        <label className="block text-sm font-medium mb-1 text-gray-300">Nombre de la URL</label>
        <input
          type="text"
          value={slug}
          onChange={(e) => setSlug(e.target.value.trim().toLowerCase())}
          placeholder="ej: mi-articulo-increible"
          className={`w-full p-3 mb-2 bg-[#151a24] border ${slugExiste ? 'border-red-500' : 'border-[#00f5c4]/30'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f5c4] text-white placeholder-gray-500`}
        />
        {slug && (
          <p className={`text-sm mb-4 ${slugExiste ? 'text-red-500' : 'text-green-400'}`}>
            {verificando ? 'Verificando...' : slugExiste ? 'Este slug ya está en uso.' : 'Slug disponible ✓'}
          </p>
        )}

        <label className="block text-sm font-medium mb-2 text-gray-300">¿Cuándo publicar?</label>
        <div className="flex gap-4 mb-4">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="publicacion"
              checked={publicarAhora}
              onChange={() => setPublicarAhora(true)}
            />
            <span className="text-sm">Ahora</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="radio"
              name="publicacion"
              checked={!publicarAhora}
              onChange={() => setPublicarAhora(false)}
            />
            <span className="text-sm">Seleccionar fecha</span>
          </label>
        </div>

        {!publicarAhora && (
          <input
            type="datetime-local"
            value={fecha}
            onChange={(e) => setFecha(e.target.value)}
            className="w-full p-3 mb-6 bg-[#151a24] border border-[#00f5c4]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00f5c4] text-white [&::-webkit-calendar-picker-indicator]:invert"
          />
        )}

        <div className="flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-600 text-white hover:bg-gray-500 transition cursor-pointer"
          >
            Cancelar
          </button>
          <button
            onClick={handleConfirm}
            disabled={!slug || slugExiste || (!publicarAhora && !fecha)}
            className={`px-4 py-2 rounded-lg font-semibold transition cursor-pointer ${(!slug || slugExiste || (!publicarAhora && !fecha)) ? 'bg-gray-400 text-white cursor-not-allowed' : 'bg-[#00f5c4] hover:bg-[#02ddb0] text-black'}`}
          >
            Confirmar y Publicar
          </button>
        </div>
      </div>
    </div>
  )
}