import { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function Latest() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

  const items = [
    { id: 1, image: "/images/chairs.png", label: "Modern Chair", price: "$140" },
    { id: 2, image: "/images/image2.jpg", label: "Wooden Table", price: "$140" },
    { id: 3, image: "/images/image3.jpg", label: "Sleek Lamp", price: "$140" },
    { id: 4, image: "/images/image4.jpg", label: "Cozy Sofa", price: "$140" },
    { id: 5, image: "/images/image5.jpg", label: "Wall Frame", price: "$140" },
  ];

  useEffect(() => {
    const track = trackRef.current;
    const container = containerRef.current;
    const cursor = cursorRef.current;
    const totalWidth = track.scrollWidth / 2;

    let tween = gsap.to(track, {
      x: `-=${totalWidth}`,
      ease: "none",
      duration: totalWidth / 100,
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    Draggable.create(track, {
      type: "x",
      inertia: true,
      edgeResistance: 0.9,
      onDragStart: () => tween.pause(),
      onDragEnd: function () {
        tween.kill();
        const currentX = gsap.getProperty(track, "x");
        tween = gsap.to(track, {
          x: `-=${totalWidth}`,
          ease: "none",
          duration: totalWidth / 100,
          repeat: -1,
          modifiers: {
            x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
          },
        });
        gsap.set(track, { x: currentX });
      },
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
      },
    });

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      gsap.set(cursor, {
        x: x - 40,
        y: y - 40,
      });
    };

    const showCursor = () => {
      cursor.style.opacity = 1;
    };
    const hideCursor = () => {
      cursor.style.opacity = 0;
    };

    container.addEventListener("mousemove", moveCursor);
    container.addEventListener("mouseenter", showCursor);
    container.addEventListener("mouseleave", hideCursor);

    return () => {
      tween.kill();
      Draggable.get(track)?.kill();
      container.removeEventListener("mousemove", moveCursor);
      container.removeEventListener("mouseenter", showCursor);
      container.removeEventListener("mouseleave", hideCursor);
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="overflow-hidden min-h-screen bg-red-50 py-8 space-y-6 relative"
    >
      <h1 className="ml-4 text-2xl sm:text-3xl font-semibold">LATEST ARRIVALS</h1>

      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-16 h-16 bg-black text-white text-xs font-semibold 
                   rounded-full flex items-center justify-center uppercase 
                   pointer-events-none z-50 opacity-0 transition-opacity duration-200"
      >
        Drag
      </div>

      <div className="flex w-max gap-6 sm:gap-8 px-4" ref={trackRef}>
        {[...items, ...items].map(({ image, label, price }, i) => (
          <div
            key={i}
            className="relative w-[80vw] sm:w-72 md:w-80 lg:w-[350px] 
                       h-[60vw] sm:h-[360px] md:h-[400px] 
                       shrink-0 overflow-hidden rounded-md shadow-lg bg-white"
          >
            <img
              src={image}
              alt={label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 p-4 w-2/4 h-1/4 top-5/6 bg-gradient-to-t from-white/70 to-transparent">
              <p className="text-black text-base sm:text-lg font-semibold">{label} -</p>
              <p className="text-black text-base sm:text-lg font-semibold">{price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
