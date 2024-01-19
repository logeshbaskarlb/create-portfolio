import React from "react";
import Header from "../../Components/Header";
import { Tabs } from "antd";
import AdminIntro from "../Admin/AdminIntro";
import AdminAbout from "../Admin/AdminAbout";
import { useSelector } from "react-redux";
import AdminExperiences from "./AdminExperiences";
import AdminProjects from "./AdminProjects";
import AdminContact from "./AdminContact";
// import AdminSocialMedia from "./AdminSocialMedia";

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

  return (
    <>
      <Header />
   <div className="flex">
        <h1 className="text-2xl px-5 py-2 text-primary">Portfolio Admin</h1>
       <div className="text-2xl px-5 py-2 text-primary flex justify-end">
       </div>
   </div>
      {portfolioData && (
        <div className="px-5">
          <Tabs defaultActiveKey="1" items={items}  />
        </div>
      )}
    </>
  ); 
}

export default Admin;
