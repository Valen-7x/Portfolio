export default function Footer() {
    return (
      <div className="mt-[2rem] h-[20vh] w-[100%] flex flex-col justify-center items-center sm-[25vh] px-8 bg-[#141212]">
       <p className="text-[#f6f9f9] text-sm">© 2023 Valentin Dorigo. All rights reserved. All trademarks are the property of their respective owners in the US and other countries.
  </p>
  <p className="text-[#e4e6e6] text-sm"> <span className="cursor-pointer text-violet-400 hover:text-violet-300"> Privacy Policy </span> | <span className="cursor-pointer text-violet-400 hover:text-violet-300"> Legal information </span> |<span className="cursor-pointer text-violet-400 hover:text-violet-300"> Refunds </span> | <span className="cursor-pointer text-violet-400 hover:text-violet-300"> cookies </span></p>
      </div>
    );
  }
  