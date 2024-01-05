import React from "react";
import Navbar from "./Component/NavBar/Navbar";
import Hero from "./Component/Hero/Hero";
import WeAre from "./Component/WeAre/WeAre";
import Service from "./Component/Service/Service";
import Portfolio from "./Component/Portfolio/Portfolio";
import Clients from "./Component/Clients/Clients";
import ExperienceFile from "./Component/Experience/ExperienceFile";
import Award from "./Component/Award/Award";
import Blog from "./Component/Blog/Blog";
import Form from "./Component/Form/Form";
import Join from "./Component/JoinClub/Join";
import Footer from "./Component/Footer/Footer";
import Try from "./Try/Try";

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
      <Award />
      <Blog />
      <Form />
      <Join />
      <Footer />
      {/* <Try /> */}
    </>
  );
};

export default App;
