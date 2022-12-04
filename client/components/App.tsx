import React, { useState, useRef } from "react";
import { Background } from '../components/Background'
import './App.css'
import Menu from './Menu'
import { Contact } from "./Contact";
const LazyScrollTopButton = React.lazy(() => import('./ScrollTopButton'))
const LazyAboutSection = React.lazy(() => import('./About'))
const LazyProjects = React.lazy(() => import('./Projects'));

function App() {
  //This is used for onclick events
  //Saving a ref each then putting them into an object to pass over to Menu (Navbar)
  const aboutSectionRef = useRef<HTMLDivElement>(null);
  const portfolioSectionRef = useRef<HTMLDivElement>(null);
  const contactSectionRef = useRef<HTMLDivElement>(null);
  const ref = {aboutSectionRef: aboutSectionRef, portfolioSectionRef: portfolioSectionRef, contactSectionRef: contactSectionRef}
  const [visible, setVisible] = useState<boolean>(false);


  const toggleVisibleProjectContainer = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 400){
      setVisible(true)
    } 
  };

  window.addEventListener('scroll', toggleVisibleProjectContainer);



  return (
    <div className="main">
      <Menu ref={ref} />
      <Background />
      <LazyAboutSection ref={aboutSectionRef} />
      <LazyProjects load={visible} ref={portfolioSectionRef} /> 
      <Contact ref={contactSectionRef} />
      <LazyScrollTopButton />
    </div>
  )
}






export default App;