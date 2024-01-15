import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;
  
  return (
    <div>
      <SectionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col ">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(contact).map((key) => (
            key !== '_id' &&  <p className="ml-5 text-tertiary">
              <span className="text-tertiary">{key}</span> :{" "}
              <span className="text-tertiary">{contact[key]} </span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
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

export default Contact;
