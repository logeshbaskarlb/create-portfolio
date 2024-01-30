import React from "react";
import Header from "../../Components/Header";
import { Tabs } from "antd";
import AdminIntro from "../Admin/AdminIntro";
import AdminAbout from "../Admin/AdminAbout";
import { useSelector } from "react-redux";
import AdminExperiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";
import AdminContact from "./AdminContact";
import LoadingPage from "../../Loading/LoadingPage"
import { useNavigate } from "react-router-dom";
import { logout } from "../../Components/Protect/AuthService";

const items = [
  {
    key: "1",
    label: "Intro",
    children: <AdminIntro />,
  },
  {
    key: "2",
    label: "About",
    children: <AdminAbout />,
  },
  {
    key: "3",
    label: "Experience",
    children: <AdminExperiences />,
  },
  {
    key: "4",
    label: "Projects",
    children: <AdminProjects />,
  },
  {
    key: "5",
    label: "Contacts",
    children: <AdminContact />,
  },
 
];
function Admin() {
  const { portfolioData } = useSelector((state) => state.root);
  const navigate = useNavigate()
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return ( 
    <>

      <Header />  
      <div className="flex gap-10 items-center px-5 py-2 justify-between">
        <div className="flex gap-10 items-center justify-evenly">
          <h1 className="text-3xl text-primary">Portfolio Admin</h1>
          <div className="w-60 h-[1px] bg-gray-500 md:hidden"></div>
        <h1
          className="underline flex justify-end  text-secondary bg-primary rounded p-3 text-xl cursor-pointer"
          onClick={handleLogout}
        >
          Logout
        </h1>
        </div>
      </div>
   {portfolioData ? (
        <div  className="px-5">
          <Tabs  defaultActiveKey="1" items={items}  />
        </div>
      ): 
      (
        <LoadingPage />
      )
      }
    </>
  ); 
}

export default Admin;
