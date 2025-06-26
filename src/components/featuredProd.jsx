import { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function ProductCarousel() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);
  const cursorRef = useRef(null);

  const items = [
    { id: 1, image: "/images/chairs.png", label: "Modern Chair" },
    { id: 2, image: "/images/image2.jpg", label: "Wooden Table" },
    { id: 3, image: "/images/image3.jpg", label: "Sleek Lamp" },
    { id: 4, image: "/images/image4.jpg", label: "Cozy Sofa" },
    { id: 5, image: "/images/image5.jpg", label: "Wall Frame" },
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

    // Draggable
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

    // Custom cursor logic
    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;
      gsap.set(cursor, {
        x: x - 40, // offset to center
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
      className="overflow-hidden h-screen cursor-none bg-red-50 py-8 space-y-6 relative"
      style={{ cursor: "none" }} 
    >
        <h1 className="ml-4 text-3xl">
            FEATURED PRODUCTS
        </h1>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-20 h-20 bg-black text-white text-xs font-semibold 
                   rounded-full flex items-center justify-center uppercase 
                   pointer-events-none z-50 opacity-0 transition-opacity duration-200"
      >
        Drag
      </div>

      <div className="flex  w-max gap-8 px-6" ref={trackRef}>
        {[...items, ...items].map(({ image, label }, i) => (
          <div
            key={i}
            className="relative w-[350px] h-[400px] shrink-0 overflow-hidden rounded-md shadow-lg"
          >
            <img
              src={image}
              alt={label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-start justify-end p-4">
              <p className="text-white text-lg font-semibold">{label}</p>
              <p className="text-white text-lg font-semibold">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
