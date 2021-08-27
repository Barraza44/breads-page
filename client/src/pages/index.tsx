import React from "react";
import Header from "../components/header";
import Bread from "../images/breads.jpg";
import Button from "../components/Button";

const Index: React.FC = () => {
  return(
    <div className="bg-gradient-to-br from-beige-light to-beige-dark h-auto lg:h-screen">
      <Header />
      <main className="p-4 md:p-8 lg:mt-16 flex flex-col justify-center items-center lg:h-4/6 lg:grid lg:grid-cols-2 lg:grid-rows-3">
        <h1 className="font-main text-6xl text-center col-start-1 col-end-2 font-bold lg:text-left lg:text-8xl">
          Panes para todos los <span className="font-main text-pinky">gustos</span>
        </h1>
        <img
          src={Bread}
          alt="A pair of bread loafs in a table"
          className="rounded-full w-80 h-80 my-5 lg:w-96 lg:h-96 lg:m-0 lg:col-start-2 lg:col-end-3 lg:row-span-full lg:self-baseline lg:justify-self-center"
        />
        <h2 className="font-secondary text-xl text-center lg:text-left lg:text-2xl lg:mt-3">Disfruta de una rica selección de panes artesanales y recién horneados</h2>
        <Button size="w-64 lg:w-72 lg:h-14" layout="row-start-3 lg:mb-30">
          Compra ahora
        </Button>
      </main>
    </div>
  );
}

export default Index;
