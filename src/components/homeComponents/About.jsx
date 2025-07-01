import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutImage1 = useRef();
  const aboutImage2 = useRef();
  const aboutHeader = useRef();
  const about = useRef();

  useEffect(() => {
    gsap.to(
      [aboutImage1.current, aboutHeader.current],
      {
        y: '40%',
        opacity: 1,
        ease: "power1.out",
        scrollTrigger: {
          trigger: about.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      }
    );
  }, []);
  return (
    <section
      ref={about}
      className=" relative h-screen overflow-hidden py-20 bg-red-50 flex items-center justify-around"
    >
      <div ref={aboutImage1} className="relative h-2/4 inline-block">
        <img
          src="/images/lamp1.png"
          alt="Lamp 1"
          className="block w-72 h-72 "
        />
        <img
          src="/images/lamp2.png"
          alt="Lamp 2"
          className="absolute bottom-[-22%] right-[-20%] w-48"
        />
      </div>
      <div ref={aboutHeader} className=" w-3/5 space-y-4 text-xl">
        <h1 className="text-2xl ">
          WELCOME TO OUR MERCH STORE, WHERE TIMELESS AND STYLISH DESIGNS MEET
          STORYTELLING.
        </h1>
        <p className="">
          Every piece in our collection tells a personal story. Custom-designed
          and personalized to enhance your home's aesthetics.
        </p>
        <button className="border-2  py-2 px-4 rounded-full border-gray-800">
          ABOUT US
        </button>
      </div>
    </section>
  );
}
