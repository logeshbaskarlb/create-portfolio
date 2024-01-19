import React, { useRef } from "react";
import Intro from "./Intro";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSide from "./LeftSide";
import { useSelector } from "react-redux";
import About from "./About";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Button } from "antd";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);
  const pdfExportComponent = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <div>
      {portfolioData && (
        <PDFExport ref={pdfExportComponent} paperSize={"auto"}>
          <div className="bg-primary px-40 sm:px-8 sm:py-5">
            <Intro />
            <About />
            <Experiences />
            <Projects />
            <Contact />
            <Footer />
            <LeftSide />
          </div>
        </PDFExport>
      )}
      <div className="flex justify-center m-10 pb-5">
        <Button primary={true} 
        className=" bg-primary text-white"
        onClick={handleExportWithComponent}>
          Export Portfolio
        </Button>
      </div>
    </div>
  );
}

export default Home;
