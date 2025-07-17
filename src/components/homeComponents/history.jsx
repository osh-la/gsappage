import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
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
    <section
      ref={sectionRef}
      className="bg-red-50 relative h-[100vh] md:h-[200vh] overflow-hidden"
    >
      <img
        ref={bgRef}
        className="absolute top-0 h-full w-full object-cover object-right"
        src="/images/history.jpg"
        alt="History background"
      />

      <div className="sticky top-1/4 flex items-center justify-center z-10 px-4">
        <div className="w-full max-w-3xl h-auto md:h-[70vh] text-center flex items-center justify-center text-stone-800 font-medium bg-gray-100 bg-opacity-90 rounded-xl p-6 md:p-12">
          <div className="w-full md:w-4/5 space-y-4">
            <p className="text-base md:text-lg">Since</p>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-bold">2025</h1>
            <p className="text-sm md:text-base">
              We create furniture masterpieces that tell stories and store
              memories that don’t fade with trends.
            </p>
            <a href="/shop">
            <button  className="border-2  border-stone-800 rounded-full py-2 px-6 text-sm md:text-base gap-2">
               <div className="flex  items-center justify-center ">
                EXPLORE COLLECTION
                <div className="rounded-full bg-white p-2">
                  <img className="w-5 h-5" src="/images/right.png" alt="" />
                </div>
              </div>
            </button>
             
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default History;
