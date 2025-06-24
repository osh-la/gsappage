import { useState } from 'react'
import './App.css'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/about'
import FeaturedProd from './components/featuredProd'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
       <Nav/>    
       <Hero/>
       <div className="">
        <About/>
        <FeaturedProd/>
       </div>

    </>
  )
}

export default App
