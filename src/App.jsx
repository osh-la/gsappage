import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import { Toaster } from "react-hot-toast"; // 🔥 import toaster
import Home from "./pages/Home";
import MainLayout from "./Layout/mainLayout";
import About from "./pages/About";
import NotFound from "./pages/notFound";
import ShopPage from "./pages/shop";
import Cart from "./pages/cartPage";


export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ smooth: true });
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    return () => lenis.destroy();
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/shop/:categorySlug" element={<ShopPage />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return (
    <>
      <Toaster position="bottom-right" reverseOrder={false} />
      <RouterProvider router={router} />
    </>
  );
}
