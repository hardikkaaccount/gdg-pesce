import React from "react";
import {
  About,
  Hero,
  StarsCanvas,
  Footer,
  Navbar,
  NavigationBar
} from "../components";

const Home = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <div className="relative z-20 bg-no-repeat bg-center">
        <Hero />
        <StarsCanvas />
      </div>
      <div className="relative z-0">
        <About />
        <StarsCanvas />
      </div>
        <NavigationBar />
       <Footer />
    </div>
  );
};

export default Home;
