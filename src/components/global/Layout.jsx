import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import WhatsAppButton from "./WhatsAppButton";
import Navbar from "./Navbar";

const Layout = ({ lang, toggleLanguage, activeSection }) => {
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
