import React from "react";
import Header from "../components/header";
import Bread from "../images/breads.jpg";
import { motion } from "framer-motion";

const Index: React.FC = () => {
  return(
    <div className="bg-beige-light from-beige-light to-beige-dark h-auto lg:h-screen">
      <Header />
      <main className="p-4 md:p-8 flex flex-col justify-center items-center">
        <h1 className="font-main text-6xl text-center ">Panes para todos los <span className="font-main text-pinky">gustos</span></h1>
        <img src={Bread} alt="A pair of bread loafs in a table" className="rounded-full border w-80 h-80 my-5"/>
        <h2 className="font-secondary text-xl text-center">Disfruta de una rica selección de panes artesanales y recién horneados</h2>
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
          className="w-64 p-2.5 rounded-xl font-secondary text-base font-medium"
        >
          Compra ahora
        </motion.button>
      </main>
    </div>
  );
}

export default Index;
