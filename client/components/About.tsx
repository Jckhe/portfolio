import { Divider, Typography } from "@mui/material";
import React, { Suspense, useState } from "react";
import ReactTypingEffect from 'react-typing-effect';
import reactIcon from '../assets/reactjs-icon.svg'
import pythonIcon from '../assets/pythonLogo.svg'
import graphQLIcon from '../assets/graphql_logo.svg'
import typescriptIcon from '../assets/typescriptLogo.svg';
import javascriptIcon from '../assets/jsLogo.svg';
import reduxIcon from '../assets/redux.svg';
import html5Icon from '../assets/html5Icon.svg';
import materialuiIcon from '../assets/material-ui-logo.svg'
import psqlIcon from '../assets/psqlLogo.svg'
import mongoIcon from '../assets/mongoIcon.svg'
import webpackIcon from '../assets/webpacklogo.svg';
import cssIcon from '../assets/css3Logo.svg';
const LazyLoadSelfImg = React.lazy(() => import('./Selfie'))




const About = React.forwardRef((_props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const techStack = ['React', 'Typescript', 'GraphQL', 'Python', 'Javascript', 'Redux + TK', 'HTML5', 'MaterialUI', 'PostgreSQL', 'MongoDB', 'CSS3', 'Webpack' ]
  const techSVG = [reactIcon, typescriptIcon, graphQLIcon, pythonIcon, javascriptIcon, reduxIcon, html5Icon, materialuiIcon, psqlIcon, mongoIcon, cssIcon, webpackIcon]


  //this function will be checking for the user's scroll behavior
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 60){
      setVisible(true)
    }
  };

  window.addEventListener('scroll', toggleVisible);
  








  return (
    <div id="about-section" className="aboutContainer">
      <div ref={ref as React.RefObject<HTMLDivElement>} id="aboutScrollPointer">"hi"</div>
      <Suspense fallback={<div className="aboutMePicContainer" style={{color: 'white', border: '1px solid white'}}>Loading</div>}>
        {visible ? <LazyLoadSelfImg /> : ''}
      </Suspense>
      <Typography className="aboutHeader">About Me</Typography>
      <Interests />
      <div className="techStackContainer">
        <Divider sx={{backgroundColor: 'purple', color: 'green'}} component="div" variant="fullWidth" role="presentation">
          <Typography sx={{color: 'white', fontFamily: 'sofia-light'}}>Tech Stack:</Typography>
        </Divider>
        <div className="techStackWrapper">
          {techStack.map((el:any, i:number) => {
            return <div className="techItemWrapper"><img id={el == 'Python' ? 'pythonLogo' : ''} src={techSVG[i]} className="techLogo" /><Typography className="techStackItem">{el}</Typography></div>
          })}
        </div>
        
      </div>
    </div>
  )
})


const Interests = () => {
  return (
    <div id="interestsContainer">
       <div className="interestsText">
          <span>Hi! Thanks for visiting my website.</span>
          <br />
          <span>My name is Jackie. I love creating apps that are visually appealing + high performing.</span>
          <span>I am a fullstack developer with my bread and butter being React + Typescript.</span>
          <span>I also have strong experience in using techs such as GraphQL, Redux, and MongoDB.</span>
          <br />
          <span>I love creating super interactive and visually robust frontends.</span>
          <span>I also love creating succinct and efficient APIs that power the backend.</span>
          <span>-</span>
       </div>
       <div id="typingContainer">
        <span>I also like to </span>
        <ReactTypingEffect
        text={["play basketball.", "read about history.", "edit videos.", "play videogames.", "workout.", "collect sneakers.", "meet new people."]}
        typingDelay={500}
        eraseDelay={1500}
        eraseSpeed={100}
        speed={70}
        className="typingInterests"
        />
       </div>
    </div>
  )
}


// interface AboutProps {
//   ref: React.MutableRefObject<null>;
// }

export default About;