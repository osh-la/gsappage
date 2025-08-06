import Nav from "../components/Nav";
import Footer from "../components/footer";
import CartModal from "../components/cartModal";
import { Outlet, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import TransitionOverlay from "../components/transitionoverlay";

export default function MainLayout() {
  const [showCart, setShowCart] = useState(false);
  const location = useLocation();
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    // Show overlay on every route change
    setShowOverlay(true);
  }, [location]);

  return (
    <>
      <Nav onCartClick={() => setShowCart(true)} />

      {/* Outlet is always visible immediately */}
      <main className="transition-opacity duration-300">
        <Outlet />
        {showCart && <CartModal onClose={() => setShowCart(false)} />}
      </main>

      <Footer />

      {/* Overlay animates on top */}
      {showOverlay && (
        <TransitionOverlay onComplete={() => setShowOverlay(false)} />
      )}
    </>
  );
}
