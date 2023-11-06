import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[40%] md:px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className=" text-lg md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-black text-white md:px-12 py-1 px-2 text-xl rounded-l opacity-2">
        ▶ Play
        </button>
        <button className="hidden md:inline-block mx-2 bg-gray-600 text-white md:px-12 p-4 text-xl rounded-lg opacity-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
