import React from "react";
import SectionTile2 from "../../Components/SectionTile2";
import { useSelector } from "react-redux";

function Experience2() {
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  return (
    <div>
      <SectionTile2 title="Experience" />

      <div className="mx-20 flex justify-evenly py-10 gap-20 w-3/4  md:flex-col">
        <div className="flex flex-wrap gap-10  md:flex-col ">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-white p-4 rounded-sm">
              <h1 className="text-xl text-sixth">{exp.period}</h1>
              <h1 className="text-black text-xl">{exp.title}</h1>
              <h1 className="text-sixth text-xl">{exp.company}</h1>
              <h1 className="text-black text-xl">{exp.description}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience2;
