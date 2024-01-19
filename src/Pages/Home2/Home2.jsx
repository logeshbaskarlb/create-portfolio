import React, { useRef } from "react";
import { useSelector } from "react-redux";
import About2 from "./About2";
import Contact2 from "./Contact2";
import Experience2 from "./Experience2";
import Footer2 from "./Footer2";
import Intro2 from "./Intro2";
import LeftSide2 from "./LeftSide2";
import Project2 from "./Project2";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Button } from "antd";

function Home2() {
  const { portfolioData } = useSelector((state) => state.root);
  const pdfExportComponent = useRef(null);
  const handleExportWithComponent = (event) => {
    pdfExportComponent.current.save();
  };

  return (
    <div>
      {portfolioData && (
        <PDFExport ref={pdfExportComponent} paperSize={"auto"}>
          <div className="bg-fourth  px-40 sm:px-8">
            <Intro2 />
            <About2 />
            <Experience2 />
            <Project2 />
            <Contact2 />
            <Footer2 />
            <LeftSide2 />
          </div>
        </PDFExport>
      )}
       <div className="flex justify-center m-10 pb-5">
        <Button primary={true} 
        className=" bg-sixth text-white"
        onClick={handleExportWithComponent}>
          Export Portfolio
        </Button>
      </div>
    </div>
  );
}

export default Home2;
