// Import Third-party Modules
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import User-Defined Modules
import "./About.scss";
import {
  IAboutProps,
  IAboutDemoData,
} from "../../types/containers/About.interface";
import { about01, about02, about03, about04 } from "../../constants";

// Demo About Section array details
const aboutDetails: Array<IAboutDemoData> = [
  {
    title: "Frontend Developer",
    description:
      "Well Knowleged frontend developer using React, styling libraries like SCSS, tailwind, MaterialUI",
    imageURL: about01,
  },
  {
    title: "Backend Developer",
    description: "Proper knowledge in Typescript with Express Framework",
    imageURL: about02,
  },
  {
    title: "Software Engineer",
    description: "Overall well knowledge about software development cycle.",
    imageURL: about03,
  },
  {
    title: "Security Focused Developer",
    description:
      "Gained some experience as previously worked in a cybersecurity company as software developer",
    imageURL: about04,
  },
];

export const About: React.FC<IAboutProps> = () => {
  return (
    <>
      <h2 className="head-text">
        I know that
        <span> Structured Development </span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {aboutDetails.map((aboutItem, index) => (
          <motion.div
            whileInView={{ opacity: 1 }} // Maintaing the visibility value
            whileHover={{ scale: 1.1 }} // Size of any element
            transition={{ duration: 0.5, type: "tween" }} // Duration based time animation
            className="app__profile-item"
            key={aboutItem.title + index}
          >
            <img src={aboutItem.imageURL} alt={aboutItem.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {aboutItem.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {aboutItem.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};
