import { Dialog } from "@headlessui/react";

export default function BaseModal({ isOpen, onClose, children }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      {/* Fondo desenfocado */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

      {/* Contenedor modal */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className="relative bg-[#0e1a26] text-white rounded-2xl px-6 py-8 w-full max-w-4xl min-h-[500px] max-h-[90vh] overflow-y-auto border border-[#1de9b6] shadow-xl"
        >
          {/* Botón de cierre */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-white text-2xl hover:text-[#1de9b6] hover:bg-white/10 rounded-full transition cursor-pointer z-50"
            aria-label="Cerrar modal"
          >
            ×
          </button>

          {children}
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
