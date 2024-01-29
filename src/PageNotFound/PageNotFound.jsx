import React from "react";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <div className="bg-primary text-white pt-6">
      <div>
        <h1 className="text-3xl flex justify-center pt-5">Page Not Found</h1>
        <p className="flex justify-center">
          Sorry, the page you are looking for could not be found.
        </p>
      </div>

      <div className="flex justify-center h-[80vh] pb-10  sm:w-full">
        <dotlottie-player
          src="https://lottie.host/a99e40d9-6b47-4794-9a6f-e6eb0ee6f6ee/fwBMJaPEsu.json"
          background="transparent"
          speed="1"
          loop
          autoplay
        ></dotlottie-player>
      </div>
      <div className="bg-white text-black flex justify-center flex  py-10">
        <Link to={"/dashboard"}>
          <div className="w-60 h-[1px] bg-sixth "></div>
          --- Back to dashboard page ---
          <div className="w-60 h-[1px] bg-sixth"></div>
        </Link>
      </div>
    </div>
  );
}

export default PageNotFound;
