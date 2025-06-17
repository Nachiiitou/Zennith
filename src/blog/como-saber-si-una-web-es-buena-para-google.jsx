import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import { meta } from "./meta/como-saber-si-una-web-es-buena";

export default function ComoMedirLighthouse() {
  const canonicalUrl = `https://www.zennith.cl/es/blog/${meta.slug}`;

  return (
    <div className="bg-white text-neutral-900 pb-20">
      {/* SEO Meta Tags */}
      <Helmet>
        <title>{meta.titulo} | Blog Zennith</title>
        <meta name="description" content={meta.resumen} />
        <link rel="canonical" href={canonicalUrl} />
        <meta property="og:title" content={meta.titulo} />
        <meta property="og:description" content={meta.resumen} />
        <meta property="og:image" content={`https://www.zennith.cl${meta.imagen}`} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:type" content="article" />
      </Helmet>

      {/* HERO */}
      <section className="px-6 md:px-12 pt-24 pb-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          {meta.titulo}
        </h1>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Publicado el 17 de junio de 2025 por Zennith
        </p>
        <figure className="w-full overflow-hidden rounded-2xl shadow-lg my-6">
          <img
            src={meta.imagen}
            alt="Ilustración sobre rendimiento web medido con Lighthouse"
            className="w-full aspect-video object-cover transition duration-500 hover:scale-[1.01]"
          />
        </figure>
        <p className="text-lg text-neutral-700 leading-relaxed">
          En Zennith nos tomamos el rendimiento web en serio. Cuando prometemos que tu sitio va a obtener entre 95 y 100 en Lighthouse, no es un número al azar. Es el resultado de un enfoque artesanal y técnico.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className="px-6 md:px-12 py-10 max-w-3xl mx-auto space-y-8 text-neutral-800 leading-loose text-[1.07rem]">
        <p>
          Lighthouse es una herramienta de Google que evalúa el rendimiento, accesibilidad, buenas prácticas y SEO de un sitio web. Es uno de los estándares más confiables para medir calidad técnica.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">¿Cómo logramos puntajes perfectos?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Optimizamos cada línea de código (sin plantillas pesadas ni builders).</li>
            <li>Reducimos scripts innecesarios y usamos carga diferida (lazy load).</li>
            <li>Comprimimos imágenes y recursos sin perder calidad.</li>
            <li>Usamos prácticas de accesibilidad desde el diseño inicial.</li>
          </ul>
        </div>

        <p>
          Esto no solo mejora la experiencia del usuario, sino también tu posicionamiento en Google. Sitios rápidos y bien construidos retienen más visitas y convierten mejor.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">¿Y qué pasa si mi sitio necesita algo más complejo?</h2>
          <p>
            En esos casos, te explicamos dónde se pueden ver afectadas las métricas y buscamos el equilibrio entre funcionalidad y rendimiento. Pero incluso así, garantizamos resultados por sobre el promedio.
          </p>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto text-center bg-gradient-to-br from-[#f3f4f6] to-white rounded-2xl shadow-xl mt-24">
        <h3 className="text-3xl font-bold mb-4">
          ¿Quieres que tu web cargue en menos de 1 segundo?
        </h3>
        <p className="text-neutral-600 text-lg mb-6 max-w-xl mx-auto">
          Escríbenos y te mostramos cómo mejorar tu presencia digital hoy mismo.
        </p>
        <Link
          to="/es/contacto"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Contáctanos
        </Link>
      </section>
    </div>
  );
}
