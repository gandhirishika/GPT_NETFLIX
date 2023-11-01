import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black w-screen aspect-video">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="bg-black text-white px-12 p-4 text-xl rounded-l opacity-2">
        ▶ Play
        </button>
        <button className="mx-2 bg-gray-600 text-white px-12 p-4 text-xl rounded-lg opacity-2">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
