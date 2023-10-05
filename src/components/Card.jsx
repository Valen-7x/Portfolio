import React from "react";
export default function Card({ imageSrc, title, url }) {
  
  return (
<div className="relative mt-[1rem] w-[15rem] h-[10rem] md:w-[25rem] md:h-[18rem] rounded-2xl overflow-hidden">
  <a href={url}target="_blank" className="block w-full h-full transition-transform transform hover:scale-105">
    <img src={imageSrc} alt="" className="object-cover w-full h-full rounded-2xl" />
    <div className="absolute  text-white inset-0 bg-gray-500 opacity-0 hover:opacity-90 ">
      <div className="flex justify-center items-center h-[100%]">
      <h2 className="text-white  font-bold  bottom-4  z-10">
     {title}
      </h2>
      </div>
    </div>
  </a>
</div>

  );
}
