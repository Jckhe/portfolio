import React, { useState, useCallback, useRef } from "react";
import { Background } from '../components/Background'
import './App.css'
import Menu from './Menu'
import { Projects } from "./Projects";
import { Contact } from "./Contact";
const LazyScrollTopButton = React.lazy(() => import('./ScrollTopButton'))
const LazyAboutSection = React.lazy(() => import('./About'))


function App() {
  //This is used for onclick events
  //Saving a ref each then putting them into an object to pass over to Menu (Navbar)
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const portfolioSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const ref = {aboutSectionRef: aboutSectionRef, portfolioSectionRef: portfolioSectionRef, contactSectionRef: contactSectionRef}

  console.log("first ref: ", ref)

  return (
    <div className="main">
      <Menu ref={ref} />
      <Background />
      <LazyAboutSection ref={aboutSectionRef} />
      <Projects ref={portfolioSectionRef} />
      <Contact ref={contactSectionRef} />
      <LazyScrollTopButton />
    </div>
  )
}






export default App;