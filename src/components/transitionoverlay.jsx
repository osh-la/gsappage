import { useEffect, useRef } from "react";
import gsap from "gsap";

const TransitionOverlay = ({ onComplete }) => {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!overlayRef.current) return;

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => {
          if (onComplete) onComplete();
        }, 50);
      },
    });

    tl.fromTo(
      overlayRef.current,
      { yPercent: -100 }, // start off-screen top
      {
        yPercent: 0, // drop down to cover
        duration: 0.8,
        ease: "power4.inOut",
      }
    )
    .to(overlayRef.current, {
      yPercent: 100, // slide down off-screen
      duration: 0.8,
      delay: 1, // stay for 1 second
      ease: "power4.inOut",
    });

    return () => {
      if (overlayRef.current) {
        gsap.killTweensOf(overlayRef.current);
      }
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="fixed top-0 left-0 w-full h-full text-white bg-black z-[9999] pointer-events-none flex justify-center items-center"
    >
      <h1 className="font-extrabold text-9xl">MERCH</h1>
    </div>
  );
};

export default TransitionOverlay;
