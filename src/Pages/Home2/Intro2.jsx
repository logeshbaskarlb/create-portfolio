import React from "react";
import { useSelector } from "react-redux";

function Intro2() {
  const { portfolioData } = useSelector((state) => state.root);
  const { intro } = portfolioData;
  const { firstName, lastName, welcomeText, description, caption } = intro;

  return (
    <div className="mx-20 pt-20 h-[80vh] bg-fourth flex flex-col items-start justify-center gap-5 py-10 ">
      <h1 className="text-fifth text-xl">{welcomeText || ""}</h1>
      <h1 className="text-7xl sm:text-4xl text-sixth   font-semibold">
        {firstName || ""} {lastName || ""}
      </h1>
      <h1 className="text-7xl sm:text-3xl text-fifth  font-semibold">
        {caption || ""}
      </h1>
      <p className="text-fifth w-2/3 sm:text-sm ">{description || ""}s</p>
      <button className="border-2 border-sixth text-sixth px-10 py-3 rounded">
        Here you Go
      </button>
    </div>
  );
}

export default Intro2;
