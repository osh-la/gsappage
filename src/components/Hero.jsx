import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef();
  const heroText=useRef();
  const POD= useRef();

  useEffect(() => {
    gsap.fromTo(
      heroRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, ease: "power2.out" }
    );
    gsap.fromTo(
      POD.current,
      {opacity:0, y:400},
      {opacity:1, y:0, ease:'power1.in', scrollTrigger:{
        trigger:heroText.current,
        markers:true,
        start:'bottom 70%',
        end:'bottom  30%',
        scrub:true,
      }}
    );
  }, []);

  return (
    <section className="h-screen text-gray-800">
      <img
        src="/images/image1.jpg"
        alt="hero"
        className="absolute object-cover w-full"
      />
      <div className="relative w-full">
        <h1
          ref={heroRef}
          className=" text-9xl py-20 font-extrabold text-center w-full"
        >
          MERCH
        </h1>
        <div ref={heroText} className="space-y-2 text-2xl ml-20 w-2/6">
          <p>
            ADD ELEGANCE AND CHARM TO YOUR SPACE WITH FURNITURE THAT EXPRESSES
            YOUR INDIVIDUALITY
          </p>
          <button className="border-2 border-gray-800 rounded-full px-4">
            EXPLORE COLLECTION{" "}
          </button>
        </div>
        <div ref={POD} className=" mt-10 flex flex-col gap-6 justify-center items-center ">
          <h1 className="text-5xl w-2/6">WHERE STYLE ENDURES: TIMELESS MERCHANDISE FOR YOUR STORY</h1>
          <img src="/images/image2.jpg" alt="" className="w-100 h-100 object-cover" />
          <h1 className="text-5xl text-black">PRODUCT OF THE DAY</h1>
        </div>
      </div>
    </section>
  );
}
