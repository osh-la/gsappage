import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function Subscribe() {
  const sub = useRef();
  const subsection = useRef();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.to(sub.current, {
      y: "40%",
      ease: "none",
      scrollTrigger: {
        trigger: subsection.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });
  }, []);

  return (
    <section ref={subsection} className="h-screen">
      <div className="flex justify-center items-center h-full bg-red-50 px-4">
        <div
          ref={sub}
          className="flex flex-col justify-center items-center bg-gray-200 w-full max-w-xl min-h-[200px] space-y-4 p-6 rounded-xl"
        >
          <p className="text-zinc-800 text-sm sm:text-base font-bold text-center">
            NEVER MISS OUT, STAY UPDATED!
          </p>
          <input
            type="email"
            className="text-zinc-800 border-2 rounded-full border-zinc-400 w-full max-w-md py-2 px-4 outline-none text-sm sm:text-base"
            placeholder="@email.com"
          />
        </div>
      </div>
    </section>
  );
}
