import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = [
  {
    id: 1,
    title: "HOMES",
    slug: "homes",
    img2: "/images/home.jpg",
  },
  {
    id: 2,
    title: "OFFICES",
    slug: "offices",
    img2: "/images/office.jpg",
  },
  {
    id: 3,
    title: "LOUNGES",
    slug: "lounges",
    img2: "/images/lounge.jpg",
  },
  {
    id: 4,
    title: "SPA'S ",
    slug: "spa's",
    img2: "/images/spa.jpg",
  },
  {
    id: 5,
    title: "EVENT",
    slug: "events",
    img2: "/images/event.jpg",
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
        { xPercent: -12 },
        {
          xPercent: 12,
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
            <div className="relative w-72 h-72 md:w-100 md:h-100 overflow-hidden">
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
                SHOP PIECES FOR {cat.title}
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
