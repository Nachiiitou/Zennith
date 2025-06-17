import { Link } from "react-router-dom";

export const meta = {
  slug: "como-medir-lighthouse",
  titulo: "¿Cómo saber si tu web es buena para Google?",
  resumen:
    "Te explicamos cómo se mide la calidad técnica de un sitio web y qué significa tener 100/100 en Lighthouse.",
  fecha: "Junio 2025",
  imagen: "/assets/blog/lighthouse.webp",
};

export default function ComoMedirLighthouse() {
  return (
    <div className="bg-white text-neutral-900 pb-20">
      {/* HERO */}
      <section className="px-6 md:px-12 pt-24 pb-10 max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight tracking-tight">
          {meta.titulo}
        </h1>
        <p className="text-neutral-500 text-base md:text-lg mb-4">
          Publicado el 16 de junio de 2025
        </p>

        <div className="w-full overflow-hidden rounded-2xl shadow-lg my-6">
          <img
            src={meta.imagen}
            alt="Gráfico de puntuación Lighthouse"
            className="w-full h-auto object-contain transition duration-500"
          />
        </div>

        <p className="text-lg text-neutral-700 leading-relaxed">
          En Zennith nos tomamos el rendimiento web en serio. Cuando prometemos que tu sitio va a obtener entre 95 y 100 en Lighthouse, no es un número al azar. Es el resultado de un enfoque artesanal, técnico y profundamente optimizado para lo que Google valora.
        </p>
      </section>

      {/* CONTENIDO */}
      <section className="px-6 md:px-12 py-10 max-w-3xl mx-auto space-y-8 text-neutral-800 leading-loose text-[1.07rem]">
        <p>
          Lighthouse es una herramienta oficial de Google que evalúa cuatro aspectos críticos en cualquier sitio web: rendimiento, accesibilidad, buenas prácticas y SEO. Es como una prueba técnica que te indica si tu sitio es rápido, accesible, seguro y amigable para los motores de búsqueda.
        </p>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">¿Por qué importa?</h2>
          <p>
            Porque Google no solo indexa contenido: también evalúa la experiencia técnica. Una web que carga rápido, es fácil de navegar, está bien codificada y sigue estándares de accesibilidad tiene muchas más probabilidades de posicionarse arriba en los resultados de búsqueda.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">¿Cómo logramos puntajes perfectos?</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Diseñamos y codificamos cada proyecto desde cero, sin plantillas genéricas.</li>
            <li>Eliminamos scripts innecesarios y aplicamos carga inteligente (lazy load).</li>
            <li>Optimizamos imágenes, íconos y fuentes sin comprometer calidad visual.</li>
            <li>Aplicamos buenas prácticas de accesibilidad y estructura semántica.</li>
            <li>Seguimos principios de performance desde la primera línea de código.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">¿Y si mi web es compleja?</h2>
          <p>
            No todos los proyectos pueden alcanzar 100 en todos los indicadores, y eso está bien. Lo importante es que sepas por qué, dónde y cómo optimizar. En Zennith te explicamos cada métrica y te ayudamos a tomar decisiones inteligentes entre funcionalidad y velocidad.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-3 text-indigo-700">Beneficios de un buen Lighthouse</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Mejores rankings en Google (especialmente en móvil).</li>
            <li>Mayor tiempo de permanencia en tu sitio.</li>
            <li>Más conversiones: formularios, ventas o contactos.</li>
            <li>Menor tasa de rebote (menos abandonos).</li>
            <li>Reputación técnica ante clientes y buscadores.</li>
          </ul>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="px-6 md:px-12 py-16 max-w-4xl mx-auto text-center bg-gradient-to-br from-[#f3f4f6] to-white rounded-2xl shadow-xl mt-24">
        <h3 className="text-3xl font-bold mb-4">
          ¿Te gustaría saber qué puntaje tiene tu sitio actual?
        </h3>
        <p className="text-neutral-600 text-lg mb-6 max-w-xl mx-auto">
          Podemos hacer una auditoría gratuita y mostrarte exactamente cómo mejorar el rendimiento de tu web para Google y tus usuarios.
        </p>
        <Link
          to="/es/contacto"
          className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-xl font-semibold hover:bg-indigo-700 transition"
        >
          Solicitar Auditoría
        </Link>
      </section>
    </div>
  );
}
