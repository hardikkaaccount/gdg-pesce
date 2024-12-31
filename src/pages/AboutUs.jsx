import React from "react";
import {
  About,
  StarsCanvas,
  Navbar,
  Footer,
  NavigationBar,
} from "../components";

const AboutUs = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <div className="relative z-0">
        <About />
        <StarsCanvas />
      </div>
      <NavigationBar />
        <Footer />
    </div>
  );
};

export default AboutUs;
