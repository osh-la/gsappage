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
          className="flex flex-col justify-center items-center bg-black w-full max-w-xl min-h-[200px] space-y-4 p-6 rounded-xl"
        >
          <p className="text-white text-sm sm:text-base font-bold text-center">
            NEVER MISS OUT, STAY UPDATED!
          </p>

          <div className="flex  items-center justify-center ">
            <input
              type="email"
              className="text-white border-2 rounded-l-full border-zinc-400 w-full max-w-md py-2 px-4 outline-none text-sm sm:text-base"
              placeholder="@email.com"
            />
            <div className="rounded-r-md bg-white p-3">
              <img className="w-5 h-5" src="/images/right.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
