// Import Third-party Modules
import React from "react";
import { motion } from "framer-motion";

// Import User-Defined Modules
import "./Header.scss";
import {
  profile,
  circle,
  typescript,
  react,
  node,
} from "../../constants";
import { IHeaderProps } from "../../types/containers/Header.interface";

// Defining Variants for div motion
const scaleVaraints = {
  whileInView: {
    scale: [0, 1],
    opacity: [0, 1],
    transition: {
      duration: 1,
      ease: "easeInOut",
    },
  },
};

export const Header: React.FC<IHeaderProps> = () => {
  return (
    <div id="home" className="app__header app__flex">
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }} // here opacity value states to move from transparent to visible
        transition={{ duration: 0.5 }}
        className="app__header-info"
      >
        <div className="app__header-badge">
          <div className="badge-cmp app_flex">
            <span>👋</span>
            <div style={{ marginLeft: 20 }}>
              <p className="p-text"> Hi, I am </p>
              <h1 className="head-text">Basanta</h1>
            </div>
          </div>

          <div className="tag-cmp app__flex">
            <p className="p-text">Software Engineer</p>
            <p className="p-text">FreeLancer</p>
          </div>
        </div>
      </motion.div>

      <motion.div
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delayChildren: 0.5 }} // Div element loads first and then only the element inside it loads
        className="app__header-img"
      >
        <img src={profile} alt="profile_bg" />
        <motion.img
          whileInView={{ scale: [0, 1] }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          src={circle}
          alt="profile_circle"
          className="overlay_circle"
        />
      </motion.div>

      <motion.div
        variants={scaleVaraints} // Defining varaint scale properties to be used by multiple other motion properties
        whileInView={scaleVaraints.whileInView}
        className="app__header-circles"
      >
        {
          // Rendering the component for each tech symbol
          [typescript, node, react].map((item) => (
            <div className="circle-cmp app__flex" key={`cirlce-${item}`}>
              <img src={item} alt="circle" />
            </div>
          ))
        }
      </motion.div>
    </div>
  );
};
