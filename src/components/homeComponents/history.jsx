import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const History = () => {
  const sectionRef = useRef();
  const bgRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(bgRef.current, {
        y: "40%", 
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className=" bg-red-50 relative h-[200vh] overflow-hidden">
      <img
        ref={bgRef}
        className="absolute top-0 h-full w-full object-cover object-right"
        src="/images/history.jpg"
        alt=""
      />

      <div className="sticky top-1/4 flex items-center justify-center z-10">
        <div className="p-12 w-1/2 h-[70vh] text-center flex items-center justify-center text-stone-800 font-medium bg-gray-100 bg-opacity-90 rounded-xl">
          <div className=" w-1/2 space-y-4">
            <p>Since</p>
            <h1 className="text-9xl">1985</h1>
            <p>
              We create furniture masterpieces that tell stories and store
              memories that don’t fade with trends.
            </p>
            <button className="border-2 border-stone-800 rounded-full py-2 px-4">
              EXPLORE COLLECTION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
