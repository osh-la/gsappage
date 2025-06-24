import { useEffect, useRef } from "react";
import gsap from "gsap";
import Draggable from "gsap/Draggable";

gsap.registerPlugin(Draggable);

export default function ProductCarousel() {
  const trackRef = useRef(null);
  const containerRef = useRef(null);

  const items = [
    { id: 1, image: "/images/item1.jpg", label: "Modern Chair" },
    { id: 2, image: "/images/item2.jpg", label: "Wooden Table" },
    { id: 3, image: "/images/item3.jpg", label: "Sleek Lamp" },
    { id: 4, image: "/images/item4.jpg", label: "Cozy Sofa" },
    { id: 5, image: "/images/item5.jpg", label: "Wall Frame" },
  ];

  useEffect(() => {
  const track = trackRef.current;
  const totalWidth = track.scrollWidth / 2;

  // Create scrolling tween
  let tween = gsap.to(track, {
    x: `-=${totalWidth}`,
    ease: "none",
    duration: totalWidth / 100,
    repeat: -1,
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
    },
  });

  // Make it draggable
  Draggable.create(track, {
    type: "x",
    inertia: true,
    edgeResistance: 0.9,
    onDragStart: () => tween.pause(),
    onDragEnd: function () {
      tween.kill(); // Kill the old tween

      const currentX = gsap.getProperty(track, "x"); // Get current drag position

      // Create a new tween from current position
      tween = gsap.to(track, {
        x: `-=${totalWidth}`,
        ease: "none",
        duration: totalWidth / 100,
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => (parseFloat(x) % totalWidth)),
        },
        overwrite: "auto",
      });

      gsap.set(track, { x: currentX }); // Maintain current position
    },
    bounds: { minX: -totalWidth, maxX: 0 },
    modifiers: {
      x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
    },
  });

  return () => {
    tween.kill();
    Draggable.get(track)?.kill();
  };
}, []);

  return (
    <section className="overflow-hidden bg-white py-8" ref={containerRef}>
      <div
        className="flex w-max gap-8 px-6"
        ref={trackRef}
      >
       
        {[...items, ...items].map(({ id, image, label }, i) => (
          <div
            key={i}
            className="relative w-[250px] h-[300px] shrink-0 overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={image}
              alt={label}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-end p-4">
              <p className="text-white text-lg font-semibold">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
