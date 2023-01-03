// Import Third-Party Modules
import React, { useState } from "react";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

// Import User-Defined Modules
import "./NavigationBar.scss";
import { logo } from "../../constants";
import { INavigationBarProps } from "../../types/components/NavigationBar.interface";

// Navigation Bar Items Array
const navigationBarItemsArray = ["home", "about", "work", "skills", "contact"];

export const NavigationBar: React.FC<INavigationBarProps> = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="app__navbar-links">
        {navigationBarItemsArray.map((item: string) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }} // X position value is 300px
            transition={{ duration: 0.85, ease: "easeOut" }} // Adding transistion
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {navigationBarItemsArray.map((item: string) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};
