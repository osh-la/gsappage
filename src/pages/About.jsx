import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
export default function About() {
  const aboutImage = useRef();
  const aboutSection = useRef();

  useEffect(() => {
    gsap.fromTo(
      aboutImage.current,
      {
        width: "10vw",
      },
      {
        width: "100vw",

        scrollTrigger: {
          trigger: aboutSection.current,
          start: "center center",
          end: "bottom bottom",
          scrub: true,

          markers: true,
        },
      }
    );
  });
  return (
    <section ref={aboutSection} className=" text-black mt-10 p-10 pb-40">
      <section className="">
        <h1 className="head">ABOUT US</h1>
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
      </section>
      <section ref={aboutImage} className=" w-full bg-red-50 h-screen  ">
        <div  className="z-0 text-9xl font-bold text-center">
         test
        </div>
      </section>
    </section>
  );
}
