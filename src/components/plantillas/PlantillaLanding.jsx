// src/components/plantillas/PlantillaLanding.jsx

import Navbar from '../../components/global/Navbar'
import Footer from '../../components/global/Footer'

const PlantillaLanding = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Encabezado global */}
      <Navbar />

      {/* Contenido central editable */}
      <main className="flex-1 px-4 py-8">
        <div className="max-w-6xl mx-auto w-full">
          {children}
        </div>
      </main>

      {/* Pie de página global */}
      <Footer />
    </div>
  );
};

export default PlantillaLanding;
