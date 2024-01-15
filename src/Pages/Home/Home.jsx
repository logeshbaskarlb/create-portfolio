import React from "react";
import Header from "../../Components/Header";
import Intro from "./Intro";
import About from "./About";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSide from "./LeftSide";
import { useSelector } from "react-redux";

function Home() {
  const { portfolioData} = useSelector((state)=>state.root)

  return (
    <div>
      <Header />
    {
      portfolioData  && (
        <div className="bg-primary px-40 sm:px-8">
        <Intro />
        <About />
        <Experiences />
        <Projects />
        <Contact />
        <Footer/>
        <LeftSide />
      </div>
      )
    }
    </div>
  );
}

export default Home;
