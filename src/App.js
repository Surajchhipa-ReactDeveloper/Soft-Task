import React from "react";
import Navbar from "./Component/NavBar/Navbar";
import Hero from "./Component/Hero/Hero";
import WeAre from "./Component/WeAre/WeAre";
import Service from "./Component/Service/Service";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <WeAre />
      <Service/>
    </>
  );
};

export default App;
