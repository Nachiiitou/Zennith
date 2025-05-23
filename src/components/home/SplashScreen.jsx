import { motion } from "framer-motion";

const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#02070f] w-screen h-screen">
      <motion.img
        src="/Logo.svg"
        alt="Logo de carga Zennith"
        initial={{ scale: 0 }}
        animate={{ scale: 1.1 }}
        transition={{ repeat: Infinity, duration: 0.9, repeatType: "reverse" }}
        className="h-60 w-auto"
      />
    </div>
  );
};

export default SplashScreen;
