import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, List, Box } from "@mui/material";
import { useState, useEffect } from "react";
import reactLogo from '../assets/react.svg';
import graphqlLogo from '../assets/graphql_logo.svg';
import typescriptLogo from '../assets/typescriptLogo.svg';
import reduxLogo from '../assets/redux.svg';
import javascriptLogo from '../assets/jsLogo.svg';
import webpackLogo from '../assets/webpacklogo.svg';
import nodeLogo from '../assets/nodejsLogo.svg';
import redisLogo from '../assets/redis-icon.svg';
import cssLogo from '../assets/css3Logo.svg';
import htmlLogo from '../assets/html5Icon.svg';
import materialuiLogo from '../assets/material-ui-logo.svg';
import jestLogo from '../assets/jest.jpeg'
import quellDemo from '../assets/website-screenshots/quellDemo.jpeg';
import playboardsDemo from '../assets/website-screenshots/playboards.png';
import nftpalDemo from '../assets/website-screenshots/nftpalSS.png';
import quellAppDemo from '../assets/website-screenshots/quellAppLogo.svg';




interface CarouselTypes {
  selection: string
}

const Carousel = ({selection}: CarouselTypes) => {
  const [activeIndex, updateIndex] = useState<number>(0);

  function handleClick(direction: string) {
    if (direction == 'right') {
      if (selection === 'all') updateIndex(activeIndex + 1 === allItems.length ? 0 : activeIndex + 1)
      else if (selection === 'apps') updateIndex(activeIndex + 1 === appItems.length ? 0 : activeIndex + 1)
      else if (selection === 'tools') updateIndex(activeIndex + 1 === toolItems.length ? 0 : activeIndex + 1)
    }
    else {
      if (selection === 'all') updateIndex((activeIndex - 1) < 0  ? allItems.length - 1 : activeIndex - 1)
      else if (selection === 'apps') updateIndex((activeIndex - 1) < 0  ? appItems.length - 1 : activeIndex - 1)
      else if (selection === 'tools') updateIndex((activeIndex - 1) < 0  ? toolItems.length - 1 : activeIndex - 1)
    }
  }


  const toolItems: Item[] = [
    {name: 'Quell (GraphQL Caching Solution)', src: quellAppDemo, targetSrc: 'https://github.com/open-source-labs/Quell', techStack: ['graphql', 'node', 'jest', 'redis']}
  ]

  const appItems: Item[] = [
    {name: 'Quell Demo', src: quellDemo, targetSrc: 'http://www.quellql.com/', techStack: ['react', 'graphql', 'typescript', 'materialui', 'redis', 'html', 'css', 'webpack' ]},
    {name: 'PlayBoards', src: playboardsDemo, targetSrc: 'https://github.com/Jckhe/playBoards-ts', techStack: ['react', 'redux', 'graphql', 'typescript', 'node', 'webpack', 'html', 'css' ]},
    {name: 'NFTPal', src: nftpalDemo, targetSrc: 'https://jckhe.github.io/NFTPal-Deployed/', techStack: ['react', 'redux', 'javascript', 'html', 'css' ]},
  ]

  const allItems: Item[] = [...appItems, ...toolItems]

  interface Item {
    name: string,
    src: string
    targetSrc: string
    techStack: string[]
  }


  useEffect(() => {
    updateIndex(0)
  }, [selection])

  useEffect(() => {
    console.log("LAZY LOADED CAROUSEL!")
  }, [])
  
  if (selection === 'all') {
    return (
      <div className="carouselContainer">
        <div className="caroulseButtonContainer"><Button className="carouselButton" disableRipple={true} onClick={() => {handleClick('left')}}><FontAwesomeIcon  size="3x" icon={solid("left-long")}/></Button></div>
        <div className="carouselItemsContainer">
          <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
            {(allItems).map((item: Item, index: number) => {
              return (
                <CarouselItem key={index} index={index} techStack={item.techStack} targetSrc={item.targetSrc} curIndex={activeIndex} src={item.src} name={item.name}/>
              )
            })}
          </div>
        </div>
        <div className="caroulseButtonContainer"><Button className="carouselButton" disableRipple={true} onClick={() => {handleClick('right')}}><FontAwesomeIcon  size="3x" icon={solid("right-long")}/></Button></div>
      </div>
    )
  } else if (selection === 'apps') {
    return (
      <div className="carouselContainer">
        <Button onClick={() => {handleClick('left')}}><FontAwesomeIcon  size="3x" icon={solid("left-long")}/></Button>
        <div className="carouselItemsContainer">
          <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
            {appItems.map((item: Item, index: number) => {
              return (
                  <CarouselItem key={index} techStack={item.techStack} targetSrc={item.targetSrc} index={index} curIndex={activeIndex} src={item.src} name={item.name}/>
              )
            })}
          </div>
        </div>
        <Button onClick={() => {handleClick('right')}}><FontAwesomeIcon  size="3x" icon={solid("right-long")}/></Button>
      </div>
    )
  } else if (selection === 'tools') {
    return (
      <div className="carouselContainer">
        <Button onClick={() => {handleClick('left')}}><FontAwesomeIcon  size="3x" icon={solid("left-long")}/></Button>
        <div className="carouselItemsContainer">
          <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
            {toolItems.map((item:Item, index:number) => {
              return (
                  <CarouselItem techStack={item.techStack} key={index} targetSrc={item.targetSrc} index={index} curIndex={activeIndex} src={item.src} name={item.name}/>
              )
            })}
          </div>
        </div>
        <Button onClick={() => {handleClick('right')}}><FontAwesomeIcon  size="3x" icon={solid("right-long")}/></Button>
      </div>
    )
  } else {
    return (
      <div className="carouselContainer">
        <Button onClick={() => {handleClick('left')}}><FontAwesomeIcon  size="3x" icon={solid("left-long")}/></Button>
        <div className="carouselItemsContainer">
          <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
            {(allItems).map((item: Item, index: number) => {
              return (
                <CarouselItem techStack={item.techStack} key={index} targetSrc={item.targetSrc} index={index} curIndex={activeIndex} src={item.src} name={item.name}/>
              )
            })}
          </div>
        </div>
        <Button onClick={() => {handleClick('right')}}><FontAwesomeIcon  size="3x" icon={solid("right-long")}/></Button>
      </div>
    )
  }
  
}

const CarouselItem = ({name, src, index, curIndex, targetSrc, techStack}: any) => {


  const techLogos: techLogosType = {
    react: {name: 'React', src: reactLogo},
    graphql: {name: 'GraphQL', src: graphqlLogo},
    typescript: {name: 'Typescript', src: typescriptLogo},
    webpack: {name: 'Webpack', src: webpackLogo},
    materialui: {name: 'MaterialUI', src: materialuiLogo},
    javascript: {name: 'Javascript', src: javascriptLogo},
    node: {name: 'NodeJS', src: nodeLogo},
    css: {name: 'CSS3', src: cssLogo},
    html: {name: 'HTML5', src: htmlLogo},
    redis: {name: 'Redis', src: redisLogo},
    redux: {name: 'Redux + TK', src: reduxLogo},
    jest: {name: 'Jest', src: jestLogo}
  } 

  

  interface techLogosType {
    [tech: string]: TechType,
    react: TechType,
    graphql: TechType,
    typescript: TechType,
    webpack: TechType,
    materialui: TechType,
    javascript: TechType,
    node: TechType,
    redis: TechType,
    redux: TechType,
    html: TechType,
    css: TechType,

  }




  interface TechType {
    name: string
    src: string
  }

  useEffect(() => {
    
  }, [curIndex])

  return (
    <div className="carouselItems">
      <div id="carouselItemsInner"style={{display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: `${name === 'Quell' ? 'visible' : 'hidden'}` }}>
        <span className="carouselItemName">{name}</span>
        <div onClick={() => {window.open(targetSrc, '_blank')?.focus();}} className="carouselInner" style={{overflow: `${name === 'Quell' ? 'visible' : 'hidden'}`}}>
          <div id={`demoImgContainer + ${name === 'Quell' ? 'quellAppDemoItemContainer' : ''}`}>
            <img id={`${name}ID`}  src={src} className="demoImg"/>
          </div>
        </div>

      </div>
      <div className="demoTechStack">
           <List className="demoTechStackInnerContainer">
              {techStack.map((tech: string, index:number) => {
                let currentTech = techLogos[tech];
                return <div className="demoTechStackItem"><img src={currentTech.src}  height="30px" width="30px" /><span>{currentTech.name}</span></div>
              })}
           </List>
      </div>
    </div>
  )
}


export default Carousel;