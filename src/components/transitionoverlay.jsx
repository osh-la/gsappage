import { useEffect, useRef } from "react";
import gsap from "gsap";

const TransitionOverlay = ({ onComplete }) => {
  const overlayRef = useRef(null);
  const tl = useRef(null); // store timeline

  useEffect(() => {
    if (!overlayRef.current) return;

    tl.current = gsap.timeline({
      onComplete: () => {
        // small delay to allow page to stabilize
        setTimeout(() => {
          if (onComplete && overlayRef.current) {
            onComplete();
          }
        }, 50);
      },
    });

    tl.current
      .fromTo(
        overlayRef.current,
        { yPercent: -100 },
        {
          yPercent: 0,
          duration: 0.8,
          ease: "power4.inOut",
        }
      )
      .to(overlayRef.current, {
        yPercent: 100,
        duration: 0.8,
        delay: 1.2,
        ease: "power4.inOut",
      });

    return () => {
      // ✅ Kill animation and cleanup safely
      if (tl.current) tl.current.kill();
      if (overlayRef.current) gsap.killTweensOf(overlayRef.current);
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-full text-black bg-red-50 z-[9999] pointer-events-none flex justify-center items-center"
    >
      <h1 className="font-extrabold text-3xl md:text-8xl">SANE & ODOGWU</h1>
    </div>
  );
};

export default TransitionOverlay;
