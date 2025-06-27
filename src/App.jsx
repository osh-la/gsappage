import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/about'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'
import Categories from './components/categories'
import History from './components/history'
import Latest from './components/latest'
import LookoutSection from './components/lookOut'
import Subscribe from './components/subscribe'

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smooth: true,
      lerp: 0.05, // controls the speed. Lower = slower.
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => lenis.destroy()
  }, [])

  return (

    <>
    
       <Nav/>    
       <Hero/>
       <div className="">
        <About/>
          <Latest/>
        <Categories/>
        <History/>
        <LookoutSection/>
        <Subscribe/>
       </div>

    </>
  )
}


