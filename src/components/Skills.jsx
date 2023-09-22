import React from 'react'
import image2 from '../assets/images/html.png'
import image3 from '../assets/images/nodejs-2.svg'
import image4 from '../assets/images/mongodb-icon-1.svg'
import image5 from '../assets/images/postman.svg'
import image6 from '../assets/images/tailwind-css-2.svg'
import image7 from '../assets/images/visual-basico.png'
import image8 from '../assets/images/signo-de-github.png'
import image9 from '../assets/images/bootstrap-5-1.svg'

export default function Skills() {
  return (
         <div className="w-[100%] flex justify-center mt-[2rem] mb-[5rem]">
            <div className="  rounded-xl h-[27rem] w-[45rem] flex flex-col gap-10 mb-[1rem]">
              <div className="flex flex-row  items-center justify-center w-[100%] mt-[1rem] md:gap-20 gap-5">
                <div className="flex flex-col">
                <img
                  className="w-[3.6rem] sm:w-[6rem] hover:scale-125"
                  src={image2}
                  alt=""
                />
                <b>HTML5</b>
                </div>
                <div className="flex flex-col">
                <img
                  className="w-[3.6rem] sm:w-[6rem] hover:scale-125"
                  src="https://akshata-tande.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcss.7e16fac1.png&w=128&q=75"
                  alt=""
                />
                <b>CSS3</b>
                </div>
                <div className="flex flex-col">
                <img
                  className="w-[3.6rem] sm:w-[6rem] hover:scale-125"
                  src="https://akshata-tande.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjavascript.c1c7776c.png&w=128&q=75"
                  alt=""
                />
                <b>JAVASCRIPT</b>
                </div>
                <div className="flex flex-col">
                <img
                  className="w-[3.4rem] sm:w-[6rem] hover:scale-125"
                  src="https://akshata-tande.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freact.3ac94d47.png&w=128&q=75"
                  alt=""
                />
                <b>REACT</b>
                </div>
              </div>
              <div className="flex items-center flex-row justify-center w-[100%] md:gap-20 gap-5">
              <div className="flex flex-col">
                <img
                  className="w-[3.6rem] sm:w-[6rem] hover:scale-125"
                  src={image3}
                  alt=""
                />
                <b>NODE-JS</b>
                </div>
                <div className="flex flex-col">
                <img
                  className="w-[3.6rem] sm:w-[6rem] hover:scale-125"
                  src={image4}
                  alt=""
                />
                <b>MONGO-DB</b>
                </div>
                 <div className="flex flex-col">
                <img
                  className="w-[3.6rem] sm:w-[6rem] hover:scale-125"
                  src={image5}
                  alt=""
                />
                <b>POSTMAN</b>
                </div>
                <div className="flex flex-col">
                <img
                  className="w-[3.7rem] sm:w-[6rem] hover:scale-125"
                  src={image6}
                  alt=""
                />
                <b>TAILWIND-CSS</b>
                </div>
              </div>
              <div className="flex items-center flex-row justify-center w-[100%]  md:gap-20 gap-5">
              <div className="flex flex-col">
                <img
                  className="w-[3.6rem] sm:w-[6rem] hover:scale-125"
                  src="https://akshata-tande.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcanva.408cd74f.png&w=128&q=75"
                  alt=""
                />
                <b>CANVA</b>
                </div>
                <div className="flex flex-col">
                <img
                  className="w-[3.7rem] sm:w-[6rem] hover:scale-125"
                  src={image7}
                  alt=""
                />
                <b>VISUAL STUDIO</b>
                </div>
                <div className="flex flex-col">
                <img
                  className="w-[3.6rem] sm:w-[6rem] hover:scale-125"
                  src={image8}
                  alt=""
                />
                <b>GITHUB</b>
                </div>
                 <div className="flex flex-col">                
                <img
                  className="w-[3.6rem] sm:w-[6rem] hover:scale-125"
                  src={image9}
                  alt=""
                />
                <b>BOOSTRAP</b>
                </div>
              </div>
            </div>
          </div>
  )
}
