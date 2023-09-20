import React from "react";
import { useState } from "react";
export default function Card({ imageSrc }) {
  const [showDescription, setShowDescription] = useState(false);
  const handleMouseEnter = () => {
    setShowDescription(true);
  };

  const handleMouseLeave = () => {
    setShowDescription(false);
  };
  return (
    <div
      className=" hover:skew-y-3 mx-[1rem] md:transform-none mt-[1rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 w-[25rem] h-[15rem] md:w-[25rem] md:h-[20rem] rounded-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src= {imageSrc} alt="" className="absolute rounded-2xl" />
      <h2 className="text-xl font-semibold"></h2>
      {showDescription && (
        <p className="absolute w-full h-[70%] mt-[3rem] bg-opacity-40 bg-slate-300 text-white ">
          Breve descripción de la tarjeta.
        </p>
      )}
    </div>
  );
}
