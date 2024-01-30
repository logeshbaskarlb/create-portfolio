import React, { useEffect, useState } from "react";
import "@progress/kendo-theme-material/dist/all.css";
import { Button } from "@progress/kendo-react-buttons";
import { PDFExport } from "@progress/kendo-react-pdf";
import Home from "../../Pages/Home/Home";
import Home2 from "../../Pages/Home2/Home2";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Pdf() {
  const [pdfKey, setPdfKey] = useState(0);
  const [shouldRerender, setShouldRerender] = useState(false);
  const setNewValue = useSelector((state) => state.root.selectedHome);
  const location = useLocation();
  const updatedContact = location.state?.updatedContact;
  const [selectHome] = useState(updatedContact ? "home2" : "home1");
  console.log("selected Home :", selectHome);

  let pdfExportComponent;

  useEffect(() => {
    setPdfKey((prev) => prev + 1);
    // Set shouldRerender to true after one second
    const timeoutId = setTimeout(() => {
      setShouldRerender(true);
    }, 0);

    // Clean up the timeout to avoid memory leaks
    return () => clearTimeout(timeoutId);
  }, [location.state?.pdfKey,updatedContact]);

  // Use shouldRerender state to trigger re-render
  useEffect(() => {
    if (shouldRerender) {
      // Set shouldRerender back to false to avoid unnecessary re-renders
      setShouldRerender(false);
      // Force a re-render by updating pdfKey
      setPdfKey((prev) => prev + 1);
    }
  }, [shouldRerender]);

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await axios.get("api/api/portfolio/update-contact");
        const data = await response.json();
        setNewValue(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  },[updatedContact])

  const handleExportWithComponent = () => {
    // Save the PDFExport component
    if (pdfExportComponent) {
      pdfExportComponent.save();
    }
  };

  return (
    <div className="app-content">
      <h1 className="text-2xl m-6 p-4 flex justify-center shadow ">
        Here You can convert your portfolio to PDF
      </h1>
      <div className="flex">
        <PDFExport paperSize="auto" key={pdfKey} fileName={`portfolio_${selectHome}.pdf`} ref={(component) => (pdfExportComponent = component)}>
          {selectHome === "home1" ? <Home /> : <Home2 />}
        </PDFExport>
      </div>
      <div className="bg-primary m-0 p-0">
        <p className="text-white flex justify-center py-10">By clicking the button you can change to PDF</p>
        <div className="flex justify-evenly items-center pb-20">
          <Button primary={true} onClick={handleExportWithComponent}>
            Export Portfolio
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Pdf;
