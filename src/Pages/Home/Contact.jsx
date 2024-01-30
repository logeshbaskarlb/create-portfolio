import React from "react";
import SectionTitle from "../../Components/SectionTitle";
import { useSelector } from "react-redux";

function Contact() {
  const { portfolioData } = useSelector((state) => state.root);
  const { contact } = portfolioData;

  return (
    <div>
      <SectionTitle title="Say Hello !" />
      <div className="flex flex-wrap  items-center justify-between">
        <div className="flex flex-col ">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(contact).map(
            (key) =>
              key !== "_id" && (
                <p className="ml-5 text-tertiary">
                  <span className="text-tertiary">{key}</span> :{" "}
                  <span className="text-tertiary">{contact[key]} </span>
                </p>
              )
          )}
          <p className="text-tertiary">{"}"}</p>
        </div>

        <div className="h-full  w-1/2 items-center ">
          {/* <dotlottie-player
            src="https://lottie.host/c54ada9d-77af-48e9-9a5d-9c8d5ed82ce6/0mbYvzMQRi.json"
            background="transparent"
            autoplay
          ></dotlottie-player> */}
          <img
            src="https://cdn.pixabay.com/photo/2016/12/15/12/24/contact-us-1908762_1280.png"
            alt=""
            className="items-center"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
