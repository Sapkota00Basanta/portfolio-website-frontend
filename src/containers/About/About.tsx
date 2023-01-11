// Import Third-party Modules
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Import User-Defined Modules
import "./About.scss";
import {
  IAboutProps,
  IAboutData,
} from "../../types/containers/About.interface";
import { sanityClientConfig, urlFor } from "../../common/sanity.client";

export const About: React.FC<IAboutProps> = () => {
  // Define a state to hold the about details value
  const [aboutArrayData, setAboutArrayData] = useState<Array<IAboutData>>([]);

  // Using useEffect hook to fetch data from sanity only
  useEffect(() => {
    try {
      const sanityQuery = '*[_type == "abouts"]';
      sanityClientConfig
        .fetch(sanityQuery)
        .then((fetchedAboutData: Array<IAboutData>) => {
          setAboutArrayData(fetchedAboutData);
        })
        .catch((error: any) => {
          return new Error("Error while fetching about section data", error);
        });
    } catch (error) {
      console.log("Error while fetching data from sanity", error);
    }
  }, []);

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
        {aboutArrayData.map((aboutItem, index) => (
          <motion.div
            whileInView={{ opacity: 1 }} // Maintaing the visibility value
            whileHover={{ scale: 1.1 }} // Size of any element
            transition={{ duration: 0.5, type: "tween" }} // Duration based time animation
            className="app__profile-item"
            key={aboutItem.title + index}
          >
            <img src={urlFor(aboutItem.imageURL)} alt={aboutItem.title} />
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
