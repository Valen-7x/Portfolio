import React from "react";

export default function Card({ imageSrc, imageSrc2 }) {
  
  return (
    <div
      className=" hover:scale-25  mt-[1rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 w-[15rem] h-[10rem] md:w-[25rem] md:h-[18rem] rounded-2xl"
     
    >
      <a href="https://app-clima-swart.vercel.app/" target="_blank" ><img src= {imageSrc}  alt="" className="flex  md:w-[25rem] md:h-[18rem] rounded-2xl" /></a>
     
      <h2 className="text-xl font-semibold"></h2>
    </div>
  );
}
