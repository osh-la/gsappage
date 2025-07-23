import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const hero = useRef();
  const heroHeader = useRef();
  const heroText = useRef();
  const POD = useRef();
  const videoRef = useRef();

  useEffect(() => {
    gsap.fromTo(
      heroHeader.current,
      { opacity:0 },
      {
        opacity:1,
        duration: 5,
        ease: "power2.out",
      }
    );
    gsap.fromTo(
      videoRef.current,
      { scale: 1.5 },
      {
        scale: 1,
        ease: "power1.in",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
    gsap.fromTo(
      POD.current,
      { y: "40%", opacity: 0 },

      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: hero.current,
          start: "center center",
          end: "center 10%",
          scrub: true,
          snap: 1,
        },
      }
    );
  }, []);

  return (
    <section
      ref={hero}
      className="h-screen md:h-[150vh] relative text-white p-6 md:px-32 overflow-hidden"
    >
      <video
        ref={videoRef}
        className="absolute top-0 left-0 w-full h-full object-cover object-center will-change-transform z-[-1]"
        src="/heroVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative top-1/3 md:top-1/4 w-full space-y-6 md:space-y-20">
        <h1
          ref={heroHeader}
          className=" text-4xl md:text-6xl  font-extrabold text-center"
        >
          SANE & ODOGWU
        </h1>

        <div
          ref={heroText}
          className="space-y-4 text-lg text-center  px-4 md:px-0"
        >
          <p>
            ADD ELEGANCE AND CHARM TO YOUR SPACE WITH FURNITURE THAT EXPRESSES
            YOUR INDIVIDUALITY
          </p>
         <a href="/shop">
          <button className="border-2 border-white rounded-full py-2 px-6 text-sm  ">
            <div className="flex items-center justify-center gap-2">
              EXPLORE COLLECTION{" "}
              <div className="rounded-full bg-white p-2">
                <img className="w-5 h-5" src="/images/right.png" alt="" />
              </div>
            </div>
          </button>
         </a>
        </div>

        <div
          ref={POD}
          className=" mt-48 md:mt-96 flex flex-col items-center justify-center text-center gap-6 w-full  px-4"
        >
        <h1 className="text-lg font-semibold ">
          WHERE STYLE ENDURES: TIMELESS PIECES FOR YOUR STORY
        </h1>
        </div>
      </div>
    </section>
  );
}
