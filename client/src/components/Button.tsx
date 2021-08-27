import React from "react";
import { motion } from "framer-motion";

const Button = ({size, children, layout}: btnProps) => {
  return (
    <motion.button
      initial={{
        backgroundColor: "rgb(39, 39, 39)",
        color: "#FFFFFF"
      }}
      whileHover={{
        backgroundColor: "rgb(238, 66, 102)",
        scale: 1.1
      }}
      whileTap={{
        scale: 0.85,
      }}
      className={`${size} p-2.5 rounded-xl font-secondary text-base lg:text-xl font-medium mt-4 ${layout}`}
    >
      {children}
    </motion.button>
  );
}
export default Button;

interface btnProps {
  size: string,
  children: string,
  layout: string
}
