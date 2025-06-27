import { useRef, useEffect } from "react";

export default function Latest() {
  const items = [
    { id: 1, image: "/images/chairs.png", label: "Modern Chair", price: "$140" },
    { id: 2, image: "/images/image2.jpg", label: "Wooden Table", price: "$140" },
    { id: 3, image: "/images/image3.jpg", label: "Sleek Lamp", price: "$140" },
    { id: 4, image: "/images/image4.jpg", label: "Cozy Sofa", price: "$140" },
    { id: 5, image: "/images/image5.jpg", label: "Wall Frame", price: "$140" },
  ];

  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (track) {
      const keyframes = [
        { transform: "translateX(0%)" },
        { transform: "translateX(-50%)" }
      ];
      const animation = track.animate(keyframes, {
        duration: 30000,
        iterations: Infinity,
        easing: "linear"
      });
      return () => animation.cancel();
    }
  }, []);

  return (
    <section className="relative overflow-hidden py-8 bg-red-50">
      <h1 className="ml-4 text-3xl font-bold">LATEST ARRIVALS</h1>
      <div className="w-full overflow-hidden mt-6">
        <div
          ref={trackRef}
          className="flex w-max gap-8 px-6"
          style={{ willChange: "transform" }}
        >
          {[...items, ...items].map(({ image, label, price }, i) => (
            <div
              key={i}
              className="relative w-[300px] h-[350px] shrink-0 overflow-hidden rounded-md shadow"
            >
              <img
                src={image}
                alt={label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white/80 p-3">
                <p className="text-black font-semibold">{label}</p>
                <p className="text-black text-sm">{price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
