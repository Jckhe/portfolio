import { Divider, Typography } from "@mui/material";
import React, { Suspense, useCallback, useEffect, useState, useMemo, memo } from "react";
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



//Use the memo higher-order component to wrap the About component, so that it only re-renders if its props have changed. 
// This will avoid re-rendering the entire component on every render, which can cause performance issues.
const About = memo(React.forwardRef((_props, ref) => {
  const [visible, setVisible] = useState<boolean>(false);
  const techStack = ['React', 'Typescript', 'GraphQL', 'Python', 'Javascript', 'Redux + TK', 'HTML5', 'MaterialUI', 'PostgreSQL', 'MongoDB', 'CSS3', 'Webpack' ]
  //use UseMemo on techSVG array
  //This will avoid creating a new array on every render, which can cause performance issues. 
  const techSVG = useMemo(() => [reactIcon, typescriptIcon, graphQLIcon, pythonIcon, javascriptIcon, reduxIcon, html5Icon, materialuiIcon, psqlIcon, mongoIcon, cssIcon, webpackIcon], []);


  //this function will be checking for the user's scroll behavior
  //want to use useCallback here because we want the callback function to be RECREATED only when dependency given changes
  //we leave it empty, so we only want it to run once instead of constantly every re-render.
  const toggleVisible = useCallback(() => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 60){
      setVisible(true)
    }
  }, [])

  


  //attach and remove listener only once.
  //this is important to not attach event listener again on every re-render which causes performance issues:
  useEffect(() => {
    window.addEventListener('scroll', toggleVisible);

    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  }, [])

  //Use the useMemo hook to memoize the result of mapping over the techStack array, so that it is only re-created if one of its dependencies (in this case
  // , the techStack array and the techSVG array) has changed. 
  // This will avoid re-rendering the entire tech stack on every render, which can cause performance issues.
  const techStackComponents = useMemo(() => {
    return techStack.map((el: any, i: number) => {
      return (
        <div key={i} className="techItemWrapper">
          <img
            id={el == 'Python' ? 'pythonLogo' : ''}
            src={techSVG[i]}
            className="techLogo"
          />
          <Typography className="techStackItem">{el}</Typography>
        </div>
      );
    });
  }, [techStack, techSVG]);




  return (
    <div id="about-section" className="aboutContainer">
      <div ref={ref as React.RefObject<HTMLDivElement>} id="aboutScrollPointer"></div>
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
          {techStackComponents}
        </div>
      </div>
    </div>
  )
}))


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