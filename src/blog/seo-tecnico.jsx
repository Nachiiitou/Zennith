import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function SeoTecnico() {
  useEffect(() => {
    document.title = "¿Qué es el SEO técnico y por qué tu web lo necesita? | Blog Zennith";

    const link = document.createElement("link");
    link.rel = "canonical";
    link.href = "https://www.zennith.cl/es/blog/seo-tecnico";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <div className="bg-white text-neutral-900 pb-20">
      {/* HERO */}
      <section className="px-6 md:px-12 pt-24 pb-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          ¿Qué es el SEO técnico y por qué tu web lo necesita?
        </h1>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Publicado el 24 de junio de 2025 por Zennith
        </p>
        <figure className="w-full overflow-hidden rounded-2xl shadow-lg my-6">
          <img
            src="/assets/blog/seo-tecnico.webp"
            alt="Ilustración representando el SEO técnico con íconos de rendimiento y Google"
            className="w-full aspect-video object-cover transition duration-500 hover:scale-[1.01]"
          />
        </figure>
        <p className="text-lg text-neutral-700 leading-relaxed">
          El SEO técnico es la base silenciosa pero esencial de cualquier sitio web que aspire a destacar en Google.
          No importa cuán bueno sea tu contenido: si tu sitio no está técnicamente bien construido, Google lo ignorará.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className="px-6 md:px-12 py-10 max-w-3xl mx-auto space-y-8 text-neutral-800 leading-loose text-[1.07rem]">
        <p>
          Cuando hablamos de SEO, la mayoría piensa en palabras clave o contenido optimizado. Pero hay otra cara igual de importante:
          el SEO técnico. Se trata de todos los aspectos invisibles que permiten a Google rastrear, entender y mostrar tu sitio correctamente.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">¿Qué incluye el SEO técnico?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Velocidad de carga optimizada (Google prioriza sitios rápidos).</li>
            <li>Diseño adaptado a dispositivos móviles.</li>
            <li>Uso de HTTPS (seguridad del sitio).</li>
            <li>Arquitectura de URLs clara y lógica.</li>
            <li>Mapas del sitio (sitemap.xml) y archivos robots.txt bien configurados.</li>
            <li>Etiquetas HTML correctas (títulos, descripciones, encabezados, etc.).</li>
          </ul>
        </div>

        <p>
          Si tu web falla en alguno de estos puntos, Google podría no mostrarla correctamente en los resultados de búsqueda, o directamente ignorarla.
          El SEO técnico es como la estructura de una casa: invisible por fuera, pero vital por dentro.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">¿Cómo lo abordamos en Zennith?</h2>
          <p>
            Desde el diseño inicial, aplicamos prácticas de SEO técnico para que tu sitio tenga una base sólida.
            Optimizamos la estructura, limpiamos el código, mejoramos la velocidad y nos aseguramos de que Google pueda rastrear cada página.
          </p>
        </div>

        <p>
          El resultado: sitios rápidos, seguros, estructurados y listos para escalar. Porque una buena web no solo se ve bien, también funciona bien para Google.
        </p>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto text-center bg-gradient-to-br from-[#f3f4f6] to-white rounded-2xl shadow-xl mt-24">
        <h3 className="text-3xl font-bold mb-4">
          ¿No sabes si tu web cumple con el SEO técnico?
        </h3>
        <p className="text-neutral-600 text-lg mb-6 max-w-xl mx-auto">
          Te ayudamos a revisarla gratis y te mostramos cómo mejorar tu visibilidad en Google desde la base.
        </p>
        <Link
          to="/es/contacto"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Revisar mi sitio
        </Link>
      </section>
    </div>
  );
}
