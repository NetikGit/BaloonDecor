"use client";
import { motion } from "framer-motion";

export default function BalloonsBackground() {
  const balloons = [20, 40, 60, 80]; // X positions

  return (
    <div className="fixed inset-0 overflow-hidden -z-10">
      {balloons.map((x, i) => (
        <motion.div
          key={i}
          className="absolute bottom-[-100px] w-12 h-16 rounded-full"
          style={{
            left: `${x}%`,
            background: i % 2 === 0 ? "radial-gradient(circle, #ff6ec7, #ff1493)" : "radial-gradient(circle, #6ec6ff, #1e90ff)"
          }}
          animate={{ y: ["0%", "-120vh"], opacity: [1, 0] }}
          transition={{
            duration: 10 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
        />
      ))}
    </div>
  );
}
