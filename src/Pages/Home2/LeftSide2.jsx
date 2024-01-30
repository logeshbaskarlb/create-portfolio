import React from "react";

function LeftSide2() {
  return (
    <div className="fixed left-0 bottom-0 px-10 md:static">
      <div className="flex flex-col items-center">
      <div className="flex flex-col gap-3 md:flex-row">
            <a href="/">
              <i class="ri-facebook-circle-line text-blue-400 text-4xl"></i>
            </a>
            <span className="text-white">_</span>
            <a href="/">
              <i class="ri-mail-line  text-red-600 text-4xl"></i>
            </a>
            <span className="text-white">_</span>
            <a href="/">
              <i class="ri-instagram-line  text-pink-600 text-4xl"></i>
            </a>
            <span className="text-white">_</span>
            <a href="/">
              <i class="ri-linkedin-box-fill text-blue-600 text-4xl"></i>
            </a>
            <span className="text-white">_</span>
            <a href="/">
              <i class="ri-github-fill text-gray-600 text-4xl"></i>
            </a>
          </div>

        <div className="w-[1px] h-32 bg-[#125f63] md:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSide2;
