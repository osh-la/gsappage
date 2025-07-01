import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Categories() {
  const containerRef = useRef();
  const trackRef = useRef();

  const categories = [
    { id: 1, title: "LIGHTING", img1: "/images/lamp1.png", img2: "/images/lamp2.png" },
    { id: 2, title: "CHAIRS", img1: "/images/chair1.png", img2: "/images/chair2.png" },
    { id: 3, title: "MIRRORS", img1: "/images/mirror1.png", img2: "/images/mirror2.png" },
    { id: 4, title: "LOUNGES", img1: "/images/lounge1.png", img2: "/images/lounge2.png" },
    { id: 5, title: "TABLES", img1: "/images/table1.png", img2: "/images/table2.png" },
  ];

  useEffect(() => {
    const sections = gsap.utils.toArray(".category-slide");
    const container = containerRef.current;

    const totalScroll = (sections.length - 1) * window.innerWidth;

    gsap.to(sections, {
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        start: "top top",
        end: () => `+=${totalScroll}`,
      },
    });

    return () => ScrollTrigger.getAll().forEach(trigger => trigger.kill());
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen overflow-hidden bg-red-50">
      <div
        ref={trackRef}
        className="flex w-max h-full"
      >
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-slide w-screen h-full flex items-center justify-center shrink-0"
          >
            <div className="relative h-2/4 inline-block">
              <img
                src={cat.img1}
                alt={cat.title}
                className="block w-72 h-72 object-contain"
              />
              <img
                src={cat.img2}
                alt={`${cat.title} overlay`}
                className="absolute bottom-[-22%] right-[-20%] w-48 object-contain"
              />
              
            </div>
           <div className="ml-20 p-6  text-zinc-900">
             <h1 className="text-7xl font-bold">{cat.title}</h1>
             <button className="border-2 border-zinc-900 py-2 px-4 rounded-full">SHOP {cat.title}</button>
           </div>
          </div>
        ))}
      </div>
    </section>
  );
}
