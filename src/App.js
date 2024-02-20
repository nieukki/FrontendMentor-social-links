import React from "react";
import Content from "./components/Content";
import CircleImage from "./components/CircleImage";
import NameHeading from "./components/NameHeading";
import Location from "./components/Location";
import AboutMe from "./components/AboutMe";
import LinksSection from "./components/LinksSection";

const App = () => {
  return (
    <section className="w-screen h-screen flex justify-center items-center bg-offBlackColor font-Inter">
      <Content>
        <CircleImage />
        <NameHeading />
        <Location />
        <AboutMe />
        <LinksSection />
      </Content>
    </section>
  );
};

export default App;
