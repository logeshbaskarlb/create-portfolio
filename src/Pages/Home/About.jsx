import React from "react"; 
import SectionTitle from "../../Components/SectionTitle";
import { useSelector } from "react-redux";

function About() {
  const {  portfolioData } = useSelector((state)=>state.root)
  const { about } = portfolioData;
  const { skills , lottieURL , description1 ,description2 } = about;
  return (
    <div>
      <SectionTitle title="About" />
      <div className="mx-20 flex w-full px-10 gap-10 items-center sm:mx-2  sm:flex-col">
        <div className="h-full  w-[500px]  sm:w-full">
          {/* <dotlottie-player
            src={lottieURL}
            background="transparent"
            speed="1"
            autoplay
          ></dotlottie-player> */}
          <img src={lottieURL} alt="About Me" />
        </div>
        <div className="flex flex-col gap-5 w-1/2 sm:w-full ">
          <p className="text-white">
           {description1 || ''}
          </p>
          <p className="text-white">
           {description2 || ''}
          </p>
        </div>
      </div>

      <div className="py-10 mx-20">
        <h1 className="text-tertiary text-xl">
            Here are a few technologies I've been working with recently:
        </h1>
       <div className="flex flex-wrap gap-10">
       {
            skills.map((skill,index)=>(
                <div className="border border-tetertiary py-3 px-10">
                    <h1 className="text-tertiary ">{skill}</h1>
                </div>
            ))
        }
       </div>
      </div>
    </div>
  );
}

export default About;
