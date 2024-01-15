import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { HideLoading, ReloadData, SetPortfolioData, Showloading } from "./redux/rootSlice";
import Admin from "./Pages/Admin/Admin";
import Login from "./Authentication/Login";
import Register from "./Authentication/Register";
import './Authentication/Login.css'

// import { config } from './config/Config';
function App() {
  const dispatach = useDispatch();
  const { loading, portfolioData , reloadData } = useSelector((state) => state.root);

  const getPortfolioData = async () => {
    try {
      dispatach(Showloading(true));
      const respose = await axios.get("/api/portfolio/get-portfolio-data");
      dispatach(SetPortfolioData(respose.data));
      dispatach(ReloadData(false))
      dispatach(HideLoading());
    } catch (error) {
      dispatach(HideLoading);
    }
  };

  useEffect(() => {
    if (!portfolioData) {
      getPortfolioData();
    }
  }, [portfolioData]);

  useEffect(()=>{
    if(reloadData){
      getPortfolioData();
    }
  },[reloadData])

  const [isLoginForm , setIsLoginForm] = useState(true);

    const toggleForm = () =>{
        setIsLoginForm((prev) => !prev)
    }
  return (
    <>
      <BrowserRouter>
        {loading ? <Loader /> : null}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element= {<Login />}/>
{/* //      //     //{} isLoginForm ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />
//         }  */}

        </Routes>
       
      </BrowserRouter>
    </>
  );
}

export default App;
