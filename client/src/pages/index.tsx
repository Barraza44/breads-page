import React from "react";
import Header from "../components/header";
import Bread from "../images/breads.jpg";
import Button from "../components/Button";
import Card from "../components/Card";
import cardData from "../cardData";
import {useInView} from "react-intersection-observer";

const Index: React.FC = () => {
  const [ref, inView] = useInView({threshold: 0.35});
  return (
    <>
      <Header inView={inView}/>
      <main className="flex flex-col justify-center items-center z-0">
        <section
          className="p-4 md:p-8 pt-20 lg:py-32 bg-gradient-to-br from-beige-light to-beige-dark flex flex-col justify-center h-screen w-full items-center lg:grid lg:grid-cols-2 lg:grid-rows-3">
          <h1 className="font-main text-6xl text-center col-start-1 col-end-2 font-bold lg:text-left lg:text-8xl">
            Panes para todos los <span className="font-main text-pinky">gustos</span>
          </h1>
          <img
            src={Bread}
            alt="A pair of bread loafs in a table"
            className="rounded-full w-80 h-80 my-5 md:my-10 md:w-96 md:h-96 lg:m-0 lg:col-start-2 lg:col-end-3 lg:row-span-full lg:self-baseline lg:justify-self-center"
          />
          <h2 className="font-secondary text-xl text-center lg:text-left md:text-2xl">Disfruta de una rica
            selección de panes artesanales y recién horneados</h2>
          <Button size="w-64 lg:w-72 lg:h-14" layout="row-start-3">
            Compra ahora
          </Button>
        </section>
        <section className="p-4 md:p-8 lg:pt-20" ref={ref}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl lg:mt-0 text-center font-main">¿Por qué Lolita's?</h2>
          <p className="text-xl md:text-center lg:text-2xl my-6 font-secondary">Descubre por que somos la elección favorita de nuestros
            clientes.</p>
          <div className="flex flex-col gap-10 md:flex-row ">
            {cardData.map((item) => (
              <Card
                key={item.id}
                text={item.text}
                src={item.src}
                title={item.title}
                alt={item.alt}/>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}

export default Index;
