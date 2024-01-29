import React, { useEffect, useRef } from "react";
import Intro from "./Intro";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
import LeftSide from "./LeftSide";
import About from "./About";
import { useSelector } from "react-redux";
import { PDFExport } from "@progress/kendo-react-pdf";
import { Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Home() {
  const { portfolioData } = useSelector((state) => state.root);

  const pdfExportComponent = useRef(null);

  useEffect(() => {
    toast.warning("Refresh the page to get the data , Updated !", {
      position: toast.POSITION.TOP_CENTER,
      autoClose: 3000, // 3 seconds
    });
  }, []);
  const navigate = useNavigate();
  const EditButton = () => {
    navigate("/admin");
  };

  const handleExportWithComponent = () => {
    pdfExportComponent.current.save();
  };

  return (
    <div>
      <ToastContainer />
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
        <Button
          primary={true}
          className=" bg-primary text-white"
          onClick={handleExportWithComponent}
        >
          Export Portfolio
        </Button>
        <Button className=" bg-primary text-white" onClick={EditButton}>
          Edit
        </Button>
      </div>
    </div>
  );
}

export default Home;
