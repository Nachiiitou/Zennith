import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import Navbar from "./Navbar";
import SplashScreen from "../components/home/SplashScreen"; // asegúrate de esta ruta

const Layout = ({ lang, toggleLanguage, activeSection }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="bg-black min-h-screen text-white">
        <SplashScreen />
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen text-white">
      <Navbar
        lang={lang}
        toggleLanguage={toggleLanguage}
        activeSection={activeSection}
      />

      <main className="min-h-[1500px]">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
