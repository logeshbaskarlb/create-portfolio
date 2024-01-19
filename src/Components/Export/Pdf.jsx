import React from "react";
import "@progress/kendo-theme-material/dist/all.css";
import { useRef } from "react";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport } from "@progress/kendo-react-pdf";
import Home from "../../Pages/Home/Home";
import Home2 from "../../Pages/Home2/Home2";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Pdf() {

  const  pdfExportComponet  =useRef(null)

  const handleExportWithComponent = (event) => {
    pdfExportComponet.current.save();
  };
  
  const selectedHome = useSelector((state)=> state.root.selectedHome);
  console.log('selected Home :' ,selectedHome )


  return (
    <div className="app-content">
     
        <h1 className="text-2xl m-6 p-4 flex justify-center shadow ">
          Here You can covert your portfolio to PDF
          </h1>
      <div className="flex">
      <PDFExport ref={pdfExportComponet} paperSize ="auto">
      
      {
       selectedHome.selectedHome === "home1" ? <Home /> : <Home2 />
      }
      </PDFExport>
      </div>
    
       <div className="bg-primary m-0 p-0">
        <p className="text-white flex justify-center py-10">
          By clicking the button you can change to PDF</p>
      
          <div className=" absolute  text-white  justify-center mx-20 py-10">
          <Link to={"/admin"}>
            Edit
          </Link>
          </div>
          <div className="bg-primary flex justify-center pb-10">
          <Button
            primary={true}
            onClick={handleExportWithComponent}
            >
         Export Portfolio 
          </Button>
          </div>
            </div>
        </div>
  );
}

export default Pdf;
