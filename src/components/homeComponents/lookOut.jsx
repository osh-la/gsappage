import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const LookoutSection = () => {
  const sectionRef = useRef();
  const textRef = useRef();
  const imageRef = useRef();

  useEffect(() => {
    gsap.set(textRef.current, { yPercent: 100, opacity: 0 });
    gsap.set(imageRef.current, { yPercent: 100, opacity: 0 });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "+=200%",
        scrub: true,
        pin: true,
        anticipatePin: 1,
      },
    });

    tl.to(textRef.current, {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    }).to(imageRef.current, {
      yPercent: 0,
      opacity: 1,
      duration: 0.5,
      ease: "power2.out",
    });

    return () => tl.scrollTrigger?.kill();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen w-full flex flex-col md:flex-row overflow-hidden bg-red-50"
    >
      {/* Image Section */}
      <div className="w-full md:w-1/2 h-64 sm:h-96 md:h-full relative overflow-hidden z-10">
        <img
          ref={imageRef}
          src="/images/history.jpg"
          alt="Lookout"
          className="w-full h-full object-cover pointer-events-none"
        />
      </div>

      {/* Text Section */}
      <div className="w-full md:w-1/2 h-full flex items-center justify-center px-4 sm:px-10 z-20">
        <div
          ref={textRef}
          className="max-w-md text-center md:text-right text-stone-800 font-medium p-4 sm:p-8 rounded-lg backdrop-blur-sm"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">The Lookout</h2>
          <p className="text-base sm:text-lg">
            A calm space with endless views. Where you step back, reflect,
            and then leap forward.
          </p>
        </div>
      </div>
    </section>
  );
};

export default LookoutSection;
