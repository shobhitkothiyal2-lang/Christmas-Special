import { motion } from "framer-motion";
import { useEffect, useState } from "react";

function generateHearts(count = 30) {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 90 + "%", // random horizontal position
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 4,
    size: 14 + Math.random() * 20,
  }));
}

export default function Letter() {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    setHearts(generateHearts(40));
  }, []);

  return (
    <div className="relative mt-20 flex justify-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
        className="relative max-w-xl text-center z-10"
      >
        <h2 className="text-4xl md:text-5xl mb-6 font-bold animate-pulse">
          A Letter for You My Sweetheart 💌
        </h2>

        {/* Existing Letter Container */}
        <div className="relative bg-white/10 p-8 rounded-2xl shadow-xl backdrop-blur-sm overflow-hidden md:h-[800px]">
          
          {/* Floating hearts inside the container (behind text) */}
          {hearts.map((heart) => (
            <motion.div
              key={heart.id}
              className="absolute text-pink-400"
              style={{ left: heart.left, fontSize: heart.size, top: "-20px" }}
              animate={{ y: ["-20px", "100%"], rotate: [0, 360] }}
              transition={{
                repeat: Infinity,
                duration: heart.duration,
                delay: heart.delay,
                ease: "linear",
              }}
            >
              ❤️
            </motion.div>
          ))}

          {/* Letter Text */}
 <p className="text-lg md:text-1xl leading-relaxed relative z-10">
  My Dearest Love PAYAL❤️💌, <br /><br />
  Every single thought of you makes my heart skip a beat 💓. 
  Your smile is my sunrise 🌅, your laughter my favorite song 🎶, 
  and just knowing you exist makes my world sparkle ✨. 
  <br /><br />
  Sometimes I catch myself daydreaming about your soft hugs 🤗, 
  your playful teasing 😏, and the way you make even ordinary days feel like magic ✨🌹. 
  You are my sweetest addiction 🍫💖, my guilty pleasure 😘, 
  and the only person I want beside me forever. 💑
  <br /><br />
  This Christmas, I just want you to know — <br />
  <span className="text-pink-300 font-bold text-3xl animate-pulse">
    You are my ultimate gift,and my sweetest baby. I LOVE YOU SOO MUCH DARLING❤️🎁🔥
  </span>
  <br /><br />
  I can’t wait to hold you close, steal your kisses 😘💋, 
  and whisper how crazy in love I am with you every single day 💖💫.
  <br /><br />
  Forever yours, <br />
  <span className="font-bold text-pink-200 text-2xl">Shobhit 💕</span>
</p>

        </div>
      </motion.div>
    </div>
  );
}
