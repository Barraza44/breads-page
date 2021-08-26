import React, {PropsWithChildren} from "react";
import { motion } from "framer-motion";

// @ts-ignore
const Button = ({size, children}: PropsWithChildren<btnProps>) => {
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
      className={`${size} p-2.5 rounded-xl font-secondary text-base font-medium`}
    >
      {children}
    </motion.button>
  );
}
export default Button;

interface btnProps {
  size: string,
  children: string
}
