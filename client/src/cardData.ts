import fresh from "./graphics/undraw_cooking_lyxy.svg";
import donut from "./graphics/undraw_donut_love_kau1.svg";
import shop from "./graphics/undraw_shopping_app_flsj.svg"

const cardData = [
  {
    id: 1,
    text: "Todos nuestros panes están horneados con frescos ingredientes que garantizan la máxima calidad de sabor y satisfacen hasta a los paladares más exigentes.",
    title: "Fresco",
    alt: "A chef hat, a fork and a spoon",
    src: fresh
  },
  {
    id: 2,
    text: "Contamos con una gran cantidad de deliciosas variedades de pan para cada tipo de situación. ¿Pan dulce para una tarde de café? ¿Baguettes para eventos? ¡Lo tenemos y más!",
    title: "Un sabor para todos",
    alt: "a donut shaped tree eaten by small cyclopes",
    src: donut
  },
  {
    id: 3,
    text: "Disponemos de mútliples opciones, para llegar desde el horno hasta tu mesa. Compra en nuestras tiendas, en línea a través de nuestro sitio o en tu aplicación de entregas favorita. Siempre llegamos a ti. ",
    title: "Flexible",
    alt: "A woman shopping online",
    src: shop
  }
]

export default cardData;
