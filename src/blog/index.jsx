import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export default function BlogHome() {
  const { lang } = useParams();

  const post = {
    slug: "como-saber-si-tu-web-es-buena",
    titulo: "¿Cómo saber si tu web es buena para Google?",
    resumen:
      "Te explicamos cómo se mide la calidad técnica de un sitio web y qué significa tener 100/100 en Lighthouse.",
    fecha: "Junio 2025",
    imagen: "/assets/blog/lighthouse.webp",
    link: `/${lang}/blog/como-saber-si-tu-web-es-buena`,
  };

  return (
    <div className="min-h-screen text-neutral-900 px-6 md:px-12 py-20 max-w-5xl mx-auto">
      {/* METADATOS */}
      <Helmet>
        <title>Blog | Zennith</title>
        <meta
          name="description"
          content="Publicamos ideas, casos reales y consejos para mejorar tu presencia digital cada semana."
        />
        <meta property="og:title" content="Blog | Zennith" />
        <meta
          property="og:description"
          content="Ideas, casos reales y consejos sobre desarrollo web, rendimiento y más."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://www.zennith.cl/${lang}/blog`} />
        <meta property="og:image" content={`https://www.zennith.cl${post.imagen}`} />
      </Helmet>

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
        <div className="aspect-[16/9] w-full overflow-hidden">
          <motion.img
            src={post.imagen}
            alt={post.titulo}
            initial={{ opacity: 0, scale: 1.01 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="w-full h-full object-cover"
          />
        </div>

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
