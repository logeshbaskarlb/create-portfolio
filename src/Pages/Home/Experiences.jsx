import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import { useSelector } from "react-redux";

function Experiences() {
  const { portfolioData } = useSelector((state) => state.root);
  const { experiences } = portfolioData;

  return (
    <div>
      <SectionTitle title="Experience" />

      <div className="mx-20 flex py-0 justify-evenly gap-20 w-3/4  md:flex-col">
        <div className="flex flex-wrap gap-10  md:flex-col ">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-gray-800 p-4 rounded-sm w-full  ">
              <h1 className="text-xl text-white">{exp.period}</h1>
              <h1 className="text-secondary text-xl">{exp.title}</h1>
              <h1 className="text-tertiary text-xl">{exp.company}</h1>
              <h1 className="text-white text-xl">{exp.description}</h1>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiences;
