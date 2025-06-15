import { useEffect, useState } from "react";
import { auth } from "../../firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate, Link, useLocation } from "react-router-dom";
import {
  FileText,
  BarChart2,
  Settings,
  LogOut,
} from "lucide-react";
import { motion } from "framer-motion";

function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (firebaseUser) {
        setUser(firebaseUser);
      } else {
        navigate("/admin/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/admin/login");
  };

  const getDisplayName = () => {
    const username = user?.email?.split("@")[0];
    return username.toLowerCase() === "admin"
      ? "Admin"
      : username.charAt(0).toUpperCase() + username.slice(1);
  };

  // 🔒 No renderizar nada si aún no se sabe si hay usuario
  if (!user) return null;

  return (
    <div className="min-h-screen bg-[#02070f] text-white flex font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0b0f1c] border-r border-[#1a1f2e] min-h-screen flex flex-col justify-between p-6">
        <div>
          <div className="flex items-center gap-3 mb-8">
            <img src="/Logo.svg" alt="Zennith logo" className="h-8" />
            <span className="text-[#00ffcc] font-bold text-lg">Zennith Admin</span>
          </div>
          <nav className="flex flex-col gap-5 text-base">
            <Link
              to="/admin/dashboard"
              className={`flex items-center gap-3 hover:text-[#00ffcc] transition ${
                location.pathname === "/admin/dashboard" ? "text-[#00ffcc]" : "text-white"
              }`}
            >
              <FileText size={20} />
              Entradas
            </Link>
            <Link
              to="/admin/analytics"
              className={`flex items-center gap-3 hover:text-[#00ffcc] transition ${
                location.pathname === "/admin/analytics" ? "text-[#00ffcc]" : "text-white"
              }`}
            >
              <BarChart2 size={20} />
              Analytics
            </Link>
            <Link
              to="/admin/configuracion"
              className={`flex items-center gap-3 hover:text-[#00ffcc] transition ${
                location.pathname === "/admin/configuracion" ? "text-[#00ffcc]" : "text-white"
              }`}
            >
              <Settings size={20} />
              Configuración
            </Link>
          </nav>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded text-white hover:bg-red-500 transition"
        >
          <LogOut size={18} />
          Cerrar sesión
        </button>
      </aside>

      {/* Contenido principal */}
      <main className="flex-1 p-10">
        <motion.h1
          className="text-3xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Bienvenido, {getDisplayName()}!
        </motion.h1>

        <motion.div
          className="mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <Link
            to="/admin/nueva"
            className="inline-block bg-[#00ffcc] text-black px-6 py-2 rounded-lg font-semibold hover:opacity-90 transition cursor-pointer"
          >
            + Nueva entrada
          </Link>
        </motion.div>

        <motion.div
          className="bg-[#0b0f1c] border border-[#1a1f2e] rounded-xl p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <p className="text-white/70 text-sm text-center italic">
            Aún no hay entradas del blog creadas.
          </p>
        </motion.div>
      </main>
    </div>
  );
}

export default Dashboard;
