import React from "react";
import { Navbar, Footer, Team, NavigationBar } from "../components";

const TeamPage = () => {
  return (
    <div className="relative z-0 bg-primary">
      <Navbar />
      <Team />
      <NavigationBar />
      <Footer />
    </div>
  );
};

export default TeamPage;
