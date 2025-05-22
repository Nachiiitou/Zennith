import { Dialog } from "@headlessui/react";

export default function BaseModal({ isOpen, onClose, children }) {
  return (
    <Dialog open={isOpen} onClose={onClose} className="relative z-50">
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" aria-hidden="true" />

      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className="relative bg-[#0e1a26] text-white rounded-2xl px-6 py-8 w-full max-w-4xl min-h-[500px] max-h-[90vh] overflow-y-auto border border-[#1de9b6] shadow-xl"
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-6 text-white text-2xl hover:text-[#1de9b6] transition"
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
