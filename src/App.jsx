import "./App.css";
import { Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
 } from 'react-router-dom'

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Home from "./pages/Home";
import MainLayout from "./Layout/mainLayout";
import NotFound from "./pages/notFound";

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, []);

  const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout/>}>
      <Route index element={<Home/>}/>

       <Route path='*' element={<NotFound/>} />
    </Route>
       
  )
)
  return <RouterProvider router ={router} />;
}
