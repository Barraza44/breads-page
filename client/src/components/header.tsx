import React from "react";
import { Link } from "react-router-dom";
import Bag from "../icons/Hero.png";

const Header: React.FC = () => {
  return (
    <div>
      <h1 className="font-main md:text-5xl">
        <Link to="/">Lolita's</Link>
      </h1>
      <img src={Bag} alt="A shopping bag"/>
    </div>
  )
}

export default Header;
