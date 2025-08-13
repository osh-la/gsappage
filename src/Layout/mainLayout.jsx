import { useState } from "react";
import { useTransitionContext } from "../context/transitionContext";
import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import Footer from "../components/footer";
import TransitionOverlay from "../components/transitionoverlay";
import CartModal from "../components/CartModal"; // adjust path if needed

export default function MainLayout() {
  const { transitioning } = useTransitionContext();
  const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <>
      <Nav onCartClick={() => setIsCartOpen(true)} />

      {transitioning && <TransitionOverlay />}

      {!transitioning && (
        <>
          <main>
            <Outlet />
          </main>
          <Footer />
        </>
      )}

      {isCartOpen && <CartModal onClose={() => setIsCartOpen(false)} />}
    </>
  );
}
