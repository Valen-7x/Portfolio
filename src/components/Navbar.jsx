import React, { useState } from 'react';
import image1 from 'src/assets/images/codigo.png';
const Navbar = ({ isDark, toggleBackground }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const backgroundColor = isDark ? 'bg-gray-900' : 'bg-purple-60';
  const fontColor = isDark ? 'text-white' : 'text-black';
  const fontColor2= isDark ? 'text-white' : 'hue-rotate-180';
  return (
    <nav className={` p-4 ${backgroundColor} w-[100%]`}>
      <div className="container mx-auto flex flex-col sm:flex-row  gap-5  justify-between items-center">
       <img className={`${fontColor2} w-[3.7rem]`} src={image1} alt="" />
        {/* Botón del menú hamburguesa */}
        <div className='flex flex-col items-center'>
        <button
          onClick={toggleMenu}
          className="md:hidden focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        {/* Contenedor del menú desplegable */}
        <div
          className={`${fontColor} ${
            isOpen ? 'block' : 'hidden'
          } flex flex-col items-center md:flex-row  gap-2 md:flex  md:space-x-8 mt-4 lg:mt-0`}
        >
          <b href="#" className="hover:text-purple-600 text-lg ">
            Acerca de Mi
          </b>
          <b href="#" className="hover:text-purple-600 text-lg ">
            Proyectos
          </b>
          <b href="#" className="hover:text-purple-600 text-lg ">
            Tecnologías
          </b>
          <b href="#" className="hover:text-purple-600 text-lg ">
            Contacto
          </b>
        </div>
        </div>
        <div className='flex gap-5 items-center'>
        <button className='hover:rotate-45 text-yellow-500 ml-[-1rem] transition-transform transform hover:scale-110 flex justify-center'  onClick={toggleBackground}><svg className='w-[2rem]' stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class=" cursor-pointer text-2xl" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"></path><path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"></path></svg></button>
        <button className='h-[2rem] w-[7rem] rounded-xl bg-violet-500 transition-transform transform hover:scale-105 text-white text-sm'>
            <b>¡Contáctame!</b>
            </button>   
        </div>    
        </div>
    </nav>
  );
};

export default Navbar;