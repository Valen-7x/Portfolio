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
         <div className="px-[3rem] w-[100%] flex justify-center mt-[2rem] mb-[5rem] ">
            <div className="  rounded-xl h-[20rem] sm:h-[30rem] w-[45rem] flex flex-col gap-10 mb-[1rem] ">
              <div className="flex flex-row  items-center justify-center w-[100%] mt-[1rem] md:gap-20 gap-5">
                <div className="flex flex-col">
                <img
                  className="w-[3rem] sm:w-[6rem] transform rotate-0 transition-transform duration-700 hover:rotate-45"
                  src={image2}
                  alt=""
                />
                <b  className='text-[0.9rem] '>HTML5</b>
                </div>
                <div className="flex flex-col">
                <img
                  className="w-[3rem] sm:w-[6rem] transform rotate-0 transition-transform duration-700 hover:rotate-45"
                  src="https://akshata-tande.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcss.7e16fac1.png&w=128&q=75"
                  alt=""
                />
                <b  className='text-[0.9rem]'>CSS3</b>
                </div>
                <div className="flex flex-col items-center">
                <img
                  className="w-[3rem] sm:w-[6rem] transform rotate-0 transition-transform duration-700 hover:rotate-45"
                  src="https://akshata-tande.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjavascript.c1c7776c.png&w=128&q=75"
                  alt=""
                />
                <b  className='text-[0.9rem]'>JavaScript</b>
                </div>
                <div className="flex flex-col">
                <img
                  className="w-[3rem] sm:w-[6rem] transform rotate-0 transition-transform duration-700 hover:rotate-45"
                  src="https://akshata-tande.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freact.3ac94d47.png&w=128&q=75"
                  alt=""
                />
                <b  className='text-[0.9rem]'>React</b>
                </div>
              </div>
              <div className="flex items-center flex-row justify-center w-[100%] md:gap-20 gap-5">
              <div className="flex flex-col items-center">
                <img
                  className="flex w-[3rem] sm:w-[6rem] transform rotate-0 transition-transform duration-700 hover:rotate-45"
                  src={image3}
                  alt=""
                />
                <b  className='text-[0.9rem]'>NodeJs</b>
                </div>
                <div className="flex flex-col items-center">
                <img
                  className="w-[3rem] sm:w-[6rem] transform rotate-0 transition-transform duration-700 hover:rotate-45"
                  src={image4}
                  alt=""
                />
                <b  className='text-[0.9rem]'>MongoDb</b>
                </div>
                 <div className="flex flex-col">
                <img
                  className="w-[3rem] sm:w-[6rem] transform rotate-0 transition-transform duration-700 hover:rotate-45"
                  src={image5}
                  alt=""
                />
                <b  className='text-[0.9rem]'>Postman</b>
                </div>
                <div className="flex flex-col items-center">
                <img
                  className="w-[3rem] sm:w-[6rem] mt-[0.4rem] transform rotate-0 transition-transform duration-700 hover:rotate-45"
                  src={image6}
                  alt=""
                />
                <b  className='text-[0.9rem] pt-[0.8rem]'>Tailwind</b>
                </div>
              </div>
              <div className="flex items-center flex-row justify-center w-[100%]  md:gap-20 gap-5">
              <div className="flex flex-col">
                <img
                  className="w-[3rem] sm:w-[6rem] transform rotate-0 transition-transform duration-700 hover:rotate-45"
                  src="https://akshata-tande.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fcanva.408cd74f.png&w=128&q=75"
                  alt=""
                />
                <b  className='text-[0.9rem]'>Canva</b>
                </div>
                <div className="flex flex-col items-center">
                <img
                  className="w-[3rem] sm:w-[6rem] transform rotate-0 transition-transform duration-700 hover:rotate-45"
                  src={image7}
                  alt=""
                />
                <b  className='text-[0.9rem] '>VisualStudio</b>
                </div>
                <div className="flex flex-col">
                <img
                  className="w-[3rem] sm:w-[6rem] transform rotate-0 transition-transform duration-700 hover:rotate-45"
                  src={image8}
                  alt=""
                />
                <b className='text-[0.9rem]'>GitHub</b>
                </div>
                 <div className="flex flex-col">                
                <img
                  className="w-[3rem] mb-[0.4rem] sm:w-[6rem] transform rotate-0 transition-transform duration-700 hover:rotate-45"
                  src={image9}
                  alt=""
                />
                <b  className='text-[0.9rem]'>Boostrap</b>
                </div>
              </div>
            </div>
          </div>
  )
}
