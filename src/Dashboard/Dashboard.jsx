import React from "react";
import image from "../Images/image.png";
import image2 from "../Images/image2.png";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedHome } from "../redux/rootSlice";
function Dashboard() {
  const selectedHome = useSelector((state) => state.root.selectedHome);
  const dispatch = useDispatch();
  const handleSelectHome = (homeKey) => {
    console.log(homeKey);
    dispatch(setSelectedHome(homeKey));
  };
  console.log(selectedHome);

  const items = [
    {
      id: 1,
      src: image,
      link: "/admin",
      homeKey: "home1",
    },
    {
      id: 2,
      src: image2,
      link: "/admin",
      homeKey: "home2",
    },
  ];

  return (
    <div className="bg-primary h-full m-0 p-0">
      <div
        name=""
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white h-full text-center "
      >
        <div className="p-4 flex flex-col  ">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Welcome to Dashboard
            </p>

            <p className="py-6">You can choose your own templete below</p>
            <p className="py-0">
              Choose the color as your wish and
              <span className="text-sixth">Get your Portfolio</span>
            </p>
          </div>

          <div className="grid md:grid-cols-1 grid-cols-2 mx-8 gap-8 md:px-5">
            {items.map(({ id, src, link, homeKey }) => (
              <div
                key={id}
                className="shadow-sm shadow-gray-600 rounded-lg overflow-hidden"
              >
                <img
                  src={src}
                  alt=""
                  className="rounded-sm duration-200 hover:scale-105"
                />
                <div className="flex items-center justify-center">
                  <Link
                    className="w-1/2 px-6 py-3 m-4 duration-200  hover:bg-pink  bg-white text-black  rounded-lg"
                    to={{
                      pathname: "/admin",
                      state: {
                        exportToPDF: true,
                        selectedHome: homeKey,
                      },
                    }}
                    onClick={() => handleSelectHome(homeKey)}
                  >
                    Select
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="m-10 p-40 text-5xl items-center text-gray-700 md:text-3xl hover:text-white">
            Coming Soon <span>...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
