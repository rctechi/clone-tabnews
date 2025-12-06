import { motion } from "framer-motion";
import { Heart } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-rose-300 p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center bg-white/40 backdrop-blur-xl p-10 rounded-2xl shadow-xl max-w-lg"
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex justify-center mb-4"
        >
          <Heart className="w-16 h-16" />
        </motion.div>

        <h1 className="text-3xl font-bold text-rose-700 mb-4">
          MC, meu amor… 💖
        </h1>
        <p className="text-lg text-rose-800 font-medium">
          Se você me ama de verdade, dá uma risadinha aí 😏✨
        </p>
      </motion.div>
    </div>
  );
}