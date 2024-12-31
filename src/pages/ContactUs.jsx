import React from "react";
import {
  Contact,
  Footer,
  Navbar,
  NavigationBar,
  StarsCanvas,
} from "../components";

const ContactUs = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="relative z-0">
        <Navbar />
        <Contact />
        <StarsCanvas />
        <NavigationBar />
        <Footer />
      </div>
    </div>
  );
};

export default ContactUs;
