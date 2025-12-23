import { motion } from "framer-motion";
import Lottie from "lottie-react";
import tree from "../assets/tree.json";

export default function ChristmasTree() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 1.5, ease: "easeOut" }}
      className="mx-auto max-w-[800px] h-auto "
    >
      <Lottie
        animationData={tree}
        loop
        style={{
          width: "100%",
          height: "auto",
          maxHeight: "90vh", // ensures it fits most of the viewport
        }}
      />
    </motion.div>
  );
}
