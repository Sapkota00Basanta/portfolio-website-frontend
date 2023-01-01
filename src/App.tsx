// Import Third-party Modules
import React from "react";

// Import User-Defined Modules
import "./App.scss";
import { About, Footer, Header, Skill, Testimonial, Work } from "./containers";
import { NavigationBar } from "./components";

export const App = () => {
  return (
    <div className="app">
      <NavigationBar />
      <Header />
      <About />
      <Work />
      <Skill />
      <Testimonial />
      <Footer />
    </div>
  );
};
