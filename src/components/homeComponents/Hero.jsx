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
      { y: 100 },
      {
        y: 0,
        duration: 2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: hero.current,
          start: "20% center",
          end: "30% center",
          scrub: true,
        },
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
      className="h-[100vh] md:h-[150vh] relative text-white p-6 md:p-10 overflow-hidden"
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
      <div className="relative w-full text-center md:top-1/3 flex flex-col items-center justify-evenly space-y-6">
        <h1
          ref={heroHeader}
          className="text-5xl md:text-7xl lg:text-9xl font-extrabold"
        >
          MERCH
        </h1>

        <div
          ref={heroText}
          className="space-y-4 text-lg md:text-2xl w-full max-w-xl px-4 md:px-0"
        >
          <p>
            ADD ELEGANCE AND CHARM TO YOUR SPACE WITH FURNITURE THAT EXPRESSES
            YOUR INDIVIDUALITY
          </p>
          <button className="border-2 border-white rounded-full py-2 px-6 text-sm md:text-base ">
            <div className="flex items-center justify-center gap-2">
              EXPLORE COLLECTION{" "}
              <div className="rounded-full bg-white p-2">
                <img className="w-5 h-5" src="/images/right.png" alt="" />
              </div>
            </div>
          </button>
        </div>

        <div
          ref={POD}
          className="mt-12 flex flex-col items-center text-center gap-6 w-full max-w-3xl px-4"
        >
          <h1 className="text-lg md:text-2xl font-semibold ">
            WHERE STYLE ENDURES: TIMELESS MERCHANDISE FOR YOUR STORY
          </h1>
          <h1 className="text-lg md:text-2xl font-semibold">
            PRODUCT OF THE DAY
          </h1>
        </div>
      </div>
    </section>
  );
}
