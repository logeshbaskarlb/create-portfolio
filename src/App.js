import '@progress/kendo-theme-material/dist/all.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, SetPortfolioData, Showloading } from "./redux/rootSlice";
import Admin from "./Pages/Admin/Admin";
import Dashboard from "./Dashboard/Dashboard";
import Pdf from "./Components/Export/Pdf";
import Home2 from "./Pages/Home2/Home2";
import PageNotFound from "./PageNotFound/PageNotFound";
import Login from "./Authentication/Login"
import Registration from "./Authentication/Registration"
import ForgetPassword from "./Authentication/ForgetPassword"
import ResetPassword from "./Authentication/ResetPassword"
import Pdf2 from "./PDF2/Pdf2";
import { ToastContainer } from 'react-toastify';
import {config} from './config/Config'

function App() {
    
  const dispatch  = useDispatch();
  const {  portfolioData , reloadData } = useSelector((state) => state.root);

  const getPortfolioData = async () => {
    try {
      dispatch(Showloading(true));
      const response = await axios.get(
      `${config.userApi}/api/portfolio/get-portfolio-data`);      
      dispatch(SetPortfolioData(response.data));
      dispatch(ReloadData(false));
      dispatch(HideLoading());
    } catch (error) {
      dispatch(HideLoading());
    }
  };
  useEffect(() => {
    console.log(portfolioData)
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  useEffect(()=>{
    if(reloadData){
      getPortfolioData();
    }
  },[reloadData])

  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/forget-Password" element={<ForgetPassword />} />
          <Route path="/reset-Password/:token" element={<ResetPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/home" element={<Home />} />
          <Route path="/home2" element={<Home2 />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/pdf" element={<Pdf/>} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/select-template" element={<Pdf2 />} />
        </Routes>
      </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;
