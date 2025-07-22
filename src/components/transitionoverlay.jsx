import { useEffect, useRef } from "react";
import gsap from "gsap";

const TransitionOverlay = ({ onComplete }) => {
  const overlayRef = useRef(null);
  const text =useRef();
  const tl = useRef(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    tl.current = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          if (onComplete && overlayRef.current) {
            onComplete();
          }
        }, 30);
      },
    });
    gsap.to(
      text.current,{
        x:'50',
        duration:0.6
      }
    )
    tl.current
      .to(
        overlayRef.current,
        {
          yPercent: 0,
          duration: 0.7,
          ease: "power4.inOut",
        }
      )
      .to(overlayRef.current, {
        yPercent: 100,
        duration: 0.7,
        delay: 0.7,
        ease: "power4.inOut",
      });

    return () => {

      if (tl.current) tl.current.kill();
      if (overlayRef.current) gsap.killTweensOf(overlayRef.current);
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-full text-black bg-red-50 z-[9999] pointer-events-none flex justify-center items-center"
    >
      <h1 ref ={text}className="font-extrabold text-3xl md:text-8xl">SANE & ODOGWU</h1>
    </div>
  );
};

export default TransitionOverlay;
