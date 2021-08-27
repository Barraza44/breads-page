import React from "react";
import { Link } from "react-router-dom";
import Bag from "../icons/bag-outline.svg";

const Header: React.FC = () => {
  return (
    <nav className="flex flex-row justify-between text-4xl p-4">
      <h1 className="font-main ml-4 md:text-5xl">
        <Link to="/">Lolita's</Link>
      </h1>
      <img src={Bag} alt="A shopping bag" className="h-7 md:h-10 self-center"/>
    </nav>
  )
}

export default Header;
