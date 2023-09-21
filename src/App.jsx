import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Skills from "./components/Skills";
import { useState } from "react";
function App() {
  const [isDark, setIsDark] = useState(false);
  const toggleBackground = () => {
    setIsDark(!isDark);
  };
  const fontColor = isDark ? "text-white" : "text-black";
  const backgroundColor = isDark ? "bg-gray-900" : "bg-purple-50";
  return (
    <>
      <div
        className={`cursor-crosshair h-[100%] bg-cover bg-center ${backgroundColor} `}
      >
        <Navbar isDark={isDark} toggleBackground={toggleBackground} />
        <div className="flex w-[100%]  gap-5 flex flex-wrap items-center md:flex-row md:justify-center justify-center sm:h-[30rem] h-[38rem] mt-[0.5rem]">
          <div className="flex flex-col items-center w-[18rem] md:w-[40rem] gap-5">
            <b
              className={`text-purple-700 text-3xl md:text-[2.9rem] lg:pl-[2rem] mt-[1rem] flex flex-col gap-3  md:w-[40rem]  ${fontColor} `}
            >
              ¡Hola! Soy Valentin Dorigo,
              <br /> <b className=" hover:underline">Desarrollador Frontend.</b>
            </b>
            <b
              className={`md:text-xl md:mt-[1rem] lg:pl-[4rem] text-lg text-black-600 ${fontColor} md:w-[38rem]`}
            >
              Soy un apasionado por la tecnología y el desarrollo web. <br />
               Transformo ideas en experiencias web
              modernas y funcionales.
            </b>
          </div>
          <img
            className="rounded-full w-[11rem] h-[11.5rem] px-[1rem] lg:w-[14.5rem] lg:h-[15rem] transition-transform transform hover:scale-105"
            src="/icons/valentin.jpg"
            alt=""
          />
        </div>
        <div className="flex mt-[2rem]">
          <h2 className="flex w-[100%] justify-center">
            <b className="text-purple-700 text-3xl ">TECNOLOGIAS</b>
          </h2>
        </div>
        <div className="flex flex-col justify-center w-[100%] ">
         <Skills/>
          <h2 className="flex w-[100%] justify-center">
            <b className="text-purple-700 text-3xl ">PROYECTOS</b>
          </h2>
          <div className="flex flex-col w-[100%] justify-center gap-8">
            <div className="flex flex-wrap justify-center gap-2  w-[100%]">
              <Card imageSrc="assets/Captura de pantalla (129).png" />
              <Card />
            </div>
            <div className="flex flex-wrap justify-center gap-2 w-[100%]">
              <path
                fill="currentColor"
                d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"
              ></path>
              <Card />
              <Card />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
