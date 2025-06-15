import React, { useState } from 'react'
import { Rnd } from 'react-rnd'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import TextAlign from '@tiptap/extension-text-align'
import TextStyle from '@tiptap/extension-text-style'
import Underline from '@tiptap/extension-underline'
import FontSize from '../../extensions/FontSize'
import FontFamily from '../../extensions/FontFamily'
import { Move, Lock, Unlock, Trash2 } from 'lucide-react'

export default function BloqueTextoEditable({ onDelete }) {
  const [isLocked, setIsLocked] = useState(false)
  const [isMoving, setIsMoving] = useState(false)

  const editor = useEditor({
    editable: true,
    extensions: [
      StarterKit,
      Underline,
      TextStyle,
      FontSize,
      FontFamily,
      TextAlign.configure({ types: ['heading', 'paragraph'] })
    ],
    content: '<p>Escribe tu texto aquí...</p>'
  })

  const canDragAndResize = !isLocked

  if (!editor) return null

  return (
    <Rnd
      default={{ x: 100, y: 100, width: 500, height: 200 }}
      bounds="parent"
      disableDragging={!canDragAndResize}
      enableResizing={canDragAndResize}
      dragHandleClassName="handle"
      onDragStart={() => setIsMoving(true)}
      onDragStop={() => setIsMoving(false)}
      onResizeStart={() => setIsMoving(true)}
      onResizeStop={() => setIsMoving(false)}
      className={`border rounded-md shadow flex flex-col bg-white ${
        isLocked ? 'border-gray-400' : 'border-blue-400'
      }`}
    >
      {/* Barra superior */}
      <div
        className={`handle flex items-center justify-between px-3 py-1 text-white rounded-t-md ${
          isLocked ? 'bg-gray-700 cursor-not-allowed' : 'bg-[#0b0f1c] cursor-move'
        }`}
      >
        <div className="flex gap-2 items-center">
          {/* Botón lock/unlock */}
          <button
            onClick={() => setIsLocked(!isLocked)}
            className="text-white hover:text-[#00ffcc] cursor-pointer"
            title={isLocked ? 'Desbloquear movimiento' : 'Bloquear movimiento'}
          >
            {isLocked ? <Lock size={16} /> : <Unlock size={16} />}
          </button>

          {/* Botón eliminar */}
          <button
            onClick={onDelete}
            className="text-white hover:text-red-500 cursor-pointer"
            title="Eliminar bloque"
          >
            <Trash2 size={16} />
          </button>
        </div>
        <Move size={16} className="text-gray-300" />
      </div>

      {/* Contenido */}
      <div
        className={`flex-1 p-4 overflow-auto prose max-w-none text-black outline-none ${
          isLocked ? 'select-none pointer-events-none opacity-70' : ''
        }`}
      >
        {isLocked || isMoving ? (
          <div
            dangerouslySetInnerHTML={{ __html: editor.getHTML() }}
            className="opacity-70 select-none pointer-events-none"
          />
        ) : (
          <EditorContent editor={editor} className="outline-none" />
        )}
      </div>
    </Rnd>
  )
}
