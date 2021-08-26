import React from "react";
import Header from "../components/header";
import Bread from "../images/breads.jpg";
import Button from "../components/Button";

const Index: React.FC = () => {
  return(
    <div className="bg-beige-light from-beige-light to-beige-dark h-auto lg:h-screen">
      <Header />
      <main className="p-4 md:p-8 flex flex-col justify-center items-center">
        <h1 className="font-main text-6xl text-center ">Panes para todos los <span className="font-main text-pinky">gustos</span></h1>
        <img src={Bread} alt="A pair of bread loafs in a table" className="rounded-full border w-80 h-80 my-5"/>
        <h2 className="font-secondary text-xl text-center">Disfruta de una rica selección de panes artesanales y recién horneados</h2>
        <Button size={"w-64"} >
          Compra ahora
        </Button>
      </main>
    </div>
  );
}

export default Index;
