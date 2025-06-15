import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import { useCallback } from "react";
import { Upload } from "lucide-react";

const MenuBar = ({ editor }) => {
  if (!editor) return null;

  const addImage = useCallback(() => {
    const url = window.prompt("Pega la URL de la imagen:");
    if (url) editor.chain().focus().setImage({ src: url }).run();
  }, [editor]);

  return (
    <div className="flex flex-wrap gap-2 border-b border-[#1a1f2e] pb-2 mb-4">
      <button onClick={() => editor.chain().focus().toggleBold().run()} className="btn-editor">Negrita</button>
      <button onClick={() => editor.chain().focus().toggleItalic().run()} className="btn-editor">Cursiva</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()} className="btn-editor">H1</button>
      <button onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} className="btn-editor">H2</button>
      <button onClick={() => editor.chain().focus().toggleBulletList().run()} className="btn-editor">Lista</button>
      <button onClick={addImage} className="btn-editor flex items-center gap-1">
        <Upload size={14} /> Imagen
      </button>
    </div>
  );
};

export default function Editor({ content, setContent }) {
  const editor = useEditor({
    extensions: [StarterKit, Image],
    content,
    onUpdate: ({ editor }) => setContent(editor.getHTML()),
    editorProps: {
      attributes: {
        class: "min-h-[300px] px-4 py-2 bg-[#141926] text-white border border-[#2c334a] rounded-md focus:outline-none",
      },
    },
  });

  return (
    <div>
      <MenuBar editor={editor} />
      <EditorContent editor={editor} />
    </div>
  );
}
