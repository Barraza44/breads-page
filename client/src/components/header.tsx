import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import Bag from "../icons/bag-outline.svg";
import { motion } from "framer-motion";

const Header: React.FC<headerProps> = ({inView}: headerProps) => {
  const [background, setBackground] = useState("rgba(0, 0, 0, 0)");
  const [shadow, setShadow] = useState("")

  useEffect(() => {
   if (inView) {
     setBackground("rgba(255, 255, 255, 1)");
     setShadow("shadow-lg");
   } else {
     setBackground("rgba(0, 0, 0, 0)");
     setShadow("");
   }
  }, [inView])

  
  return (
    <motion.nav
      className={`flex flex-row justify-between w-full text-4xl p-4 fixed top-0 z-10 transition ${shadow} duration-150 ease-in-out`}
      style={{backgroundColor: background}}
    >
      <h1 className="font-main ml-4 md:text-5xl">
        <Link to="/">Lolita's</Link>
      </h1>
      <img src={Bag} alt="A shopping bag" className="h-7 md:h-10 self-center"/>
    </motion.nav>
  )
}

export default Header;

interface headerProps {
  inView: boolean
}
