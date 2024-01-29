import React from "react";
import SectionTile2 from "../../Components/SectionTile2";
import { useSelector } from "react-redux";

function Contact2() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  return (
    <div>
      <SectionTile2 title="Say Hello !" />
      <div className="flex md:flex-col items-center justify-between">
        <div className="flex flex-col ">
          <p className="text-fifth">{"{"}</p>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5 text-fifth">
                  <span className="text-fifth">{key}</span> :{" "}
                  <span className="text-sixth">{contact[key]} </span>
                </p>
              )
          )}
          <p className="text-fifth">{"}"}</p>
        </div>

        <div className="h-[400px] ">
          <dotlottie-player
            src="https://lottie.host/f46a0750-6733-456e-a774-79b94e6f48d0/Yb6jSPvMRy.json"
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
}

export default Contact2;
