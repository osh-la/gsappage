import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroHeader = useRef();
  const heroText=useRef();
  const POD= useRef();
  const videoRef=useRef();
  const hero = useRef();

  useEffect(() => {
    gsap.fromTo(
      heroHeader.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0, duration: 2, stagger:1, ease: "power2.out" }
    );
     gsap.fromTo(
      videoRef.current,
      { scale: 1.5 },
      {
        scale: 1, ease:"power1.in",
        scrollTrigger: {
          trigger: videoRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        }
      }
    );
    gsap.fromTo(
      POD.current,
      {opacity:0, y:200},
      {opacity:1, y:0, ease:'power1.in', scrollTrigger:{
        trigger:hero.current,
        start:'center center',
        end:'center 30%',
        scrub:true,
        snap:1

      }}
    );
  }, []);

  return (
    <section ref={hero} className="hero text-white p-10">
      <video
        ref={videoRef}
        className=" hero absolute top-0 left-0  w-full object-cover object-center will-change-transform"
        src="/heroVideo.mp4"
        autoPlay
        muted
        loop
        playsInline
      />
      <div className="relative w-full">
        <h1
          ref={heroHeader}
          className=" text-9xl py-20 font-extrabold text-center w-full"
        >
          MERCH
        </h1>

        <div ref={heroText} className="space-y-2 text-2xl ml-20 w-2/6">
          <p>
            ADD ELEGANCE AND CHARM TO YOUR SPACE WITH FURNITURE THAT EXPRESSES
            YOUR INDIVIDUALITY
          </p>
          <button className="border-2 border-white rounded-full py-2 px-4">
            EXPLORE COLLECTION{" "}
          </button>
        </div>
        <div ref={POD} className=" mt-10 flex flex-col gap-6 justify-center items-center ">
          <h1 className="text-5xl w-3/6">WHERE STYLE ENDURES: TIMELESS MERCHANDISE FOR YOUR STORY</h1>
          <img src="/images/image2.jpg" alt="" className="w-80 h-80 object-cover" />
          <h1 className="text-5xl ">PRODUCT OF THE DAY</h1>
        </div>
      </div>
    </section>
  );
}
