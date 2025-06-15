import React from 'react'
import {
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight
} from 'lucide-react'

const fonts = [
  { label: 'Arial', value: 'Arial, sans-serif' },
  { label: 'Georgia', value: 'Georgia, serif' },
  { label: 'Times New Roman', value: '"Times New Roman", serif' },
  { label: 'Courier New', value: '"Courier New", monospace' },
  { label: 'Verdana', value: 'Verdana, sans-serif' },
]

const sizes = [
  { label: '12px (Pequeño)', value: '12px' },
  { label: '14px', value: '14px' },
  { label: '16px (Texto base)', value: '16px' },
  { label: '20px (Subtítulo)', value: '20px' },
  { label: '24px', value: '24px' },
  { label: '32px (Título)', value: '32px' },
  { label: '40px', value: '40px' },
]

export default function FloatingToolbar({ editor }) {
  if (!editor) return null

  const { $from } = editor.state.selection
  const node = $from.node()

  const shouldShow = node.type.name === 'paragraph' || node.type.name.startsWith('heading')
  if (!shouldShow) return null

  const setFontFamily = (font) => {
    editor.chain().focus().setFontFamily(font).run()
  }

  const setFontSize = (size) => {
    editor.chain().focus().setFontSize(size).run()
  }

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 bg-[#0b0f1c] border border-[#1a1f2e] rounded-lg px-4 py-2 shadow-xl flex items-center gap-2 text-white">
      {/* Formato */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-1 rounded cursor-pointer transition ${
          editor.isActive('bold') ? 'text-[#00ffcc] bg-white/10' : 'hover:bg-white/10'
        }`}
      >
        <Bold size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-1 rounded cursor-pointer transition ${
          editor.isActive('italic') ? 'text-[#00ffcc] bg-white/10' : 'hover:bg-white/10'
        }`}
      >
        <Italic size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={`p-1 rounded cursor-pointer transition ${
          editor.isActive('underline') ? 'text-[#00ffcc] bg-white/10' : 'hover:bg-white/10'
        }`}
      >
        <Underline size={18} />
      </button>

      {/* Listas */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-1 rounded cursor-pointer transition ${
          editor.isActive('bulletList') ? 'text-[#00ffcc] bg-white/10' : 'hover:bg-white/10'
        }`}
      >
        <List size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={`p-1 rounded cursor-pointer transition ${
          editor.isActive('orderedList') ? 'text-[#00ffcc] bg-white/10' : 'hover:bg-white/10'
        }`}
      >
        <ListOrdered size={18} />
      </button>

      {/* Alineación */}
      <button
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
        className={`p-1 rounded cursor-pointer transition ${
          editor.isActive({ textAlign: 'left' }) ? 'text-[#00ffcc] bg-white/10' : 'hover:bg-white/10'
        }`}
      >
        <AlignLeft size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
        className={`p-1 rounded cursor-pointer transition ${
          editor.isActive({ textAlign: 'center' }) ? 'text-[#00ffcc] bg-white/10' : 'hover:bg-white/10'
        }`}
      >
        <AlignCenter size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
        className={`p-1 rounded cursor-pointer transition ${
          editor.isActive({ textAlign: 'right' }) ? 'text-[#00ffcc] bg-white/10' : 'hover:bg-white/10'
        }`}
      >
        <AlignRight size={18} />
      </button>

      {/* Selector de fuente */}
      <select
        onChange={(e) => setFontFamily(e.target.value)}
        defaultValue=""
        className="text-sm bg-transparent text-white border border-[#1a1f2e] rounded px-2 py-1 cursor-pointer hover:border-[#00ffcc] focus:outline-none"
      >
        <option value="" disabled>Fuente</option>
        {fonts.map((font) => (
          <option key={font.label} value={font.value} style={{ fontFamily: font.value }} className="text-black">
            {font.label}
          </option>
        ))}
      </select>

      {/* Selector de tamaño */}
      <select
        onChange={(e) => setFontSize(e.target.value)}
        defaultValue=""
        className="text-sm bg-transparent text-white border border-[#1a1f2e] rounded px-2 py-1 cursor-pointer hover:border-[#00ffcc] focus:outline-none"
      >
        <option value="" disabled>Tamaño</option>
        {sizes.map((s) => (
          <option key={s.value} value={s.value} className="text-black">
            {s.label}
          </option>
        ))}
      </select>
    </div>
  )
}

