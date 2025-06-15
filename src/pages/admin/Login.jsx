import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/global/Navbar";
import Footer from "../../components/global/Footer";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/admin/dashboard");
    } catch (err) {
      setError("Correo o contraseña incorrectos");
      console.error(err);
    }
  };

  return (
    <div className="bg-[#02070f] text-white min-h-screen flex flex-col justify-between">
      {/* Navbar Zennith sin idioma */}
      <Navbar lang="es" toggleLanguage={() => {}} />

      <main className="flex flex-1 items-center justify-center px-4">
        <form
          onSubmit={handleLogin}
          className="w-full max-w-md bg-[#0b0f1c] p-10 rounded-2xl shadow-2xl space-y-6 border border-[#1f273d] transition-all"
        >
          <h2 className="text-3xl font-bold text-center text-[#00ffcc] tracking-wide">
            Zennith Admin
          </h2>

          {error && (
            <p className="text-red-500 text-sm text-center font-medium">{error}</p>
          )}

          <div className="space-y-1">
            <label className="block text-sm font-medium text-white">Correo electrónico</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-[#141926] text-white border border-[#2c334a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ffcc] transition"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="admin@zennith.cl"
            />
          </div>

          <div className="space-y-1">
            <label className="block text-sm font-medium text-white">Contraseña</label>
            <input
              type="password"
              className="w-full px-4 py-2 bg-[#141926] text-white border border-[#2c334a] rounded-md focus:outline-none focus:ring-2 focus:ring-[#00ffcc] transition"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-[#00ffcc] text-black font-semibold rounded-md hover:brightness-110 transition cursor-pointer"
          >
            Ingresar
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}

export default Login;
