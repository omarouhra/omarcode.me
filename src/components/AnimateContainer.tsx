import { motion } from "framer-motion";
import React, { ReactNode } from "react";
type TContainer = {
  children: ReactNode;
};

function AnimateContainer({ children }: TContainer) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

export default AnimateContainer;
