import React from "react";

function LeftSide2() {
  return (
    <div className="fixed left-0 bottom-0 px-10 md:static">
      <div className="flex flex-col items-center">
        <div className="flex flex-col gap-3 md:flex-row">
          <a href="/">
            <i className="bi bi-facebook text-blue-400 text-4xl"></i>
          </a>
          _
          <a href="/">
            <i className="bi bi-envelope  text-red-600 text-4xl"></i>
          </a>
          _
          <a href="/">
            <i className="bi bi-instagram  text-pink-600 text-4xl"></i>
          </a>
          _
          <a href="/">
            <i className="bi bi-linkedin text-blue-600 text-4xl"></i>
          </a>
          _
          <a href="/">
            <i className="bi bi-github text-gray-600 text-4xl"></i>
          </a>
        </div>

        <div className="w-[1px] h-32 bg-[#125f63] md:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSide2;
