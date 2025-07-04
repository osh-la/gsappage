import Nav from "../components/Nav";
import Footer from "../components/footer";

import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import TransitionOverlay from "../components/transitionoverlay";

export default function MainLayout() {
  const location = useLocation();
  const [transitioning, setTransitioning] = useState(true);

  useEffect(() => {
    setTransitioning(true);
  }, [location]);

  return (
    <>
      <Nav />
      {transitioning && (
        <TransitionOverlay onComplete={() => setTransitioning(false)} />
      )}
      <main
        className={`${
          transitioning ? "opacity-0" : "opacity-100"
        } transition-opacity duration-300`}
      >
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
