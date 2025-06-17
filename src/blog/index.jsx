import { Link, useParams } from "react-router-dom";
import { meta as lighthouse } from "./como-saber-si-una-web-es-buena-para-google";

export default function BlogHome() {
  const { lang } = useParams();

  const post = {
    ...lighthouse,
    link: `/${lang}/blog/${lighthouse.slug}`,
  };

  return (
    <div className="min-h-screen text-neutral-900 px-6 md:px-12 py-20 max-w-5xl mx-auto">
      {/* ENCABEZADO */}
      <header className="mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 text-white">
          Blog Zennith
        </h1>
        <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto">
          Publicamos ideas, casos reales y consejos para mejorar tu presencia digital cada semana.
        </p>
      </header>

      {/* CARD ÚNICA */}
      <Link
        to={post.link}
        className="block group overflow-hidden rounded-xl hover:shadow-xl transition duration-300 bg-white border border-neutral-200"
      >
        {/* Imagen en tamaño natural */}
        <img
          src={post.imagen}
          alt={post.titulo}
          className="w-full h-auto transition-transform duration-300 group-hover:scale-[1.01]"
        />

        {/* Contenido */}
        <div className="px-4 py-5">
          <h2 className="text-xl font-semibold mb-1 group-hover:text-indigo-600 transition-colors">
            {post.titulo}
          </h2>
          <p className="text-sm text-neutral-500 mb-2">{post.fecha}</p>
          <p className="text-sm md:text-base text-neutral-700 leading-snug">
            {post.resumen}
          </p>
        </div>
      </Link>
    </div>
  );
}
