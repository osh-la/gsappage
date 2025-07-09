import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const aboutImage = useRef();
  const aboutSection = useRef();

  useEffect(()=>{
    gsap.fromTo(aboutImage.current,
      {
        height:'10vh',
        width:'20vw',
         y:'0'
      },
        {
          width: '100vw',
        
          y:'50vh',
          scrollTrigger:{
            trigger:aboutSection.current,
            start:'center center',
            end:'bottom center',
            scrub:true,
    

          }
      })
  })
  return (
    <section ref={aboutSection} className="h-[300vh] text-black mt-10 p-10 pb-40">
      <h1 className="head">ABOUT US</h1>
      <div className=" flex gap-2  w-full h-100">
        <div className="flex gap-2 w-full">
          <img className="w-2/5" src="/images/chairs.png" alt="image" />
          <div className="flex flex-col justify-between w-100">
            <p>
              It is more than just furniture; it is stories filled with
              inspiration, creativity, and passion that will bring life to your
              home.
            </p>
            <p>
              It is more than just furniture; it is stories filled with
              inspiration, creativity, and passion that will bring life to your
              home. The perfect blend of elegance, practicality, and essence
              with a sense of style for whatever space you want it in.
            </p>
          </div>
        </div>
        <div ref={aboutImage} className=" absolute right-0 w-full z-0">
          <img  className='object-center' src="/images/chairs.png" alt="" />
        </div>
      </div>
      <section className="  bg-red-50">

      </section>
    </section>
  );
}
