import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 1,
    title: "HOMES",
    slug: "HOMES",
    img1: "/images/lamp1.png",
    img2: "/images/lamp2.png",
  },
  {
    id: 2,
    title: "OFFICES",
    slug: "OFFICES",
    img1: "/images/chair1.png",
    img2: "/images/chair2.png",
  },
  {
    id: 3,
    title: "LOUNGES",
    slug: "LOUNGES",
    img1: "/images/mirror1.png",
    img2: "/images/lamp1.png",
  },
  {
    id: 4,
    title: "SPA'S ",
    slug: "SPA'S",
    img1: "/images/lounge1.png",
    img2: "/images/chair1.png",
  },
  {
    id: 5,
    title: "EVENT",
    slug: "EVENT ",
    img1: "/images/table1.png",
    img2: "/images/table2.png",
  },
];

export default function Categories() {
  const containerRef = useRef();

useEffect(() => {
  const ctx = gsap.context(() => {
    const slides = gsap.utils.toArray(".category-slide");
    const container = containerRef.current;

    const scrollTween = gsap.to(slides, {
      xPercent: -100 * (slides.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: container,
        pin: true,
        scrub: 1,
        snap: 1 / (slides.length - 1),
        start: "top top",
        end: () => `+=${(slides.length - 1) * window.innerWidth}`,
        invalidateOnRefresh: true,
        id: "category-scroll"
      }
    });

    slides.forEach((slide, i) => {
      const bg = slide.querySelector(".glide-bg");
      gsap.fromTo(
        bg,
        { yPercent: -12 },
        {
          yPercent: 12,
          ease: "none",
          scrollTrigger: {
            trigger: slide,
            containerAnimation: scrollTween,
            start: "left center",
            end: "right center",
            scrub: true,
            id: `slide-${i}`,
          },
        }
      );
    });
  }, containerRef);

  return () => {
    ctx.revert(); 
    ScrollTrigger.getAll().forEach((t) => t.kill());
  };
}, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-red-50"
    >
      <div className="flex w-max h-full">
        {categories.map((cat) => (
          <div
            key={cat.id}
            className="category-slide w-screen h-full flex flex-col md:flex-row
                       items-center justify-center p-6 gap-8 md:gap-16 shrink-0"
          >
            <div className="relative w-60 h-60 md:w-72 md:h-72 overflow-hidden">
              <div
                className="glide-bg absolute inset-0 scale-[1.25] pointer-events-none"
                style={{
                  backgroundImage: `url(${cat.img2})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "bottom right",
                }}
              />
            </div>

            <div className="text-center md:text-left text-zinc-900 max-w-md">
              <h1 className="text-3xl md:text-7xl font-bold mb-4">
                {cat.title}
              </h1>
              <a
                href={`/shop/${cat.slug}`}
                className="border-2 border-zinc-900 py-2 px-4 rounded-full
                           text-sm md:text-base flex items-center gap-2"
              >
                SHOP&nbsp;{cat.title}
                <div className="rounded-full bg-white p-2">
                  <img className="w-5 h-5" src="/images/right.png" alt="" />
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
