import React from "react";
import "@progress/kendo-theme-material/dist/all.css";
import { useRef } from "react";

import { Button } from "@progress/kendo-react-buttons";
import { PDFExport, savePDF } from "@progress/kendo-react-pdf";
import Home from "../../Pages/Home/Home";

function Pdf() {


  const  pdfExportComponet  =useRef(null)
  const contentArea = useRef(null);

  const handleExportWithComponent = (event) => {
    console.log("Clicked");
    pdfExportComponet.current.save();
  };
  

  return (
    <div className="app-content">
     
        <h1 className="text-2xl m-6 p-4 flex justify-center shadow hover:first-letter:text-orange-600">
          Here You can covert your portfolio to PDF</h1>


      <div className="flex flex-column ">
      <PDFExport ref={pdfExportComponet} paperSize ="A4">
        <Home  />
      </PDFExport>
      </div>

       <div className="bg-primary m-0 p-0">
          <Button
            primary={true}
            onClick={handleExportWithComponent}
            >
         Export with Component 
          </Button>
            </div>
        </div>
  );
}

export default Pdf;
