import { Link } from "react-router-dom";

export default function BlogLayout({ children }) {
  return (
    <div className="flex max-w-7xl mx-auto px-6 md:px-12 gap-10">
      {/* Contenido principal */}
      <div className="flex-1 min-w-0">{children}</div>

      {/* Lateral promocional */}
      <aside className="hidden lg:block w-[220px] sticky top-24 self-start">
        <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-4 shadow-md text-sm text-neutral-900 space-y-3">
          <h3 className="font-semibold text-indigo-700 text-lg leading-snug">
            ¿Quieres una web rápida y optimizada?
          </h3>
          <p>
            Mejoramos el rendimiento, SEO y diseño de tu sitio. Solicita una auditoría gratuita hoy.
          </p>
          <Link
            to="/es/contacto"
            className="inline-block mt-2 bg-indigo-600 text-white px-4 py-2 rounded-lg text-center hover:bg-indigo-700 transition w-full"
          >
            Solicitar ahora
          </Link>
        </div>
      </aside>
    </div>
  );
}
