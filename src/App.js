import React from "react";
import Navbar from "./Component/NavBar/Navbar";
import Hero from "./Component/Hero/Hero";
import WeAre from "./Component/WeAre/WeAre";
import Service from "./Component/Service/Service";
import Portfolio from "./Component/Portfolio/Portfolio";
import Clients from "./Component/Clients/Clients";
import ExperienceFile from "./Component/Experience/ExperienceFile";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WeAre />
      <Service />
      <Portfolio />
      <Clients />
      <ExperienceFile />
    </>
  );
};

export default App;
