import React from 'react'

const Footer = () => {
  return (
    <section className="w-full bg-black text-white py-12 px-4 z-10 relative">
      <div className="max-w-7xl mx-auto space-y-12">

       
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-x-6 gap-y-4 text-sm sm:text-base">
          {Array(8).fill("Home").map((item, index) => (
            <li key={index} className="list-none hover:underline cursor-pointer">
              {item}
            </li>
          ))}
        </div>

     
        <h1 className="text-4xl md:text-6xl  font-extrabold text-center">
          SANE & ODOGWU
        </h1>

 
        <div className="text-center text-xs sm:text-sm text-zinc-400">
          © OSH_LA 2025 
        </div>

      </div>
    </section>
  )
}

export default Footer;
