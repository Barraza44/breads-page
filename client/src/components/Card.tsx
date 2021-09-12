import React from "react";
import {motion, Variants} from "framer-motion";


export default function Card({variants, start, animate, exit, text, src, title, alt}: CardProps) {
  return (
    <motion.div
      variants={variants}
      initial={start}
      animate={animate}
      exit={exit}
      className="rounded-2xl shadow-xl py-5 px-4"
    >
      <img src={src} alt={alt} className="w-full max-h-60"/>
      <h3 className="text-xl font-secondary font-semibold my-5">{title}</h3>
      <p className="text-lg font-secondary">{text}</p>
    </motion.div>
  );
}

interface CardProps {
  variants?: Variants
  start?: string,
  animate?: string,
  exit?: string,
  text: string,
  src: string,
  title: string,
  alt: string
}
