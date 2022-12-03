import { Button, Checkbox, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Switch, Tab } from "@mui/material";
import React, { useEffect, useState } from "react";
import quellDemo from '../assets/website-screenshots/quellTEST.png';
import playboardsDemo from '../assets/website-screenshots/playboards.png';
import nftpalDemo from '../assets/website-screenshots/nftpalSS.png';
import quellAppDemo from '../assets/quellAppLogo.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid } from "@fortawesome/fontawesome-svg-core/import.macro";
import { url } from "inspector";


export const Projects = React.forwardRef((_props, ref) => {
  const [currentTab, switchTab] = useState<string>('all')




  const TabSelection = () => {

    //we want to proc a re-render
    useEffect(() => {
    }, [currentTab])

    
    return (
      <div className="tabsContainer" style={{border: '0px solid white'}} >
        <div className="tabsContainerInner">
          <Button onClick={() => {switchTab('all')}} sx={{minWidth: '60px', maxWidth: '60px', color: `${currentTab == 'all' ? '#9fa6f3' : 'white'}`, border: '1px solid #9fa6f3'}} size="small" variant="contained"><span>All</span></Button>
          <Button onClick={() => {switchTab('tools')}} sx={{minWidth: '60px', maxWidth: '60px',  color: `${currentTab == 'tools' ? '#9fa6f3' : 'white'}`, border: '1px solid #9fa6f3'}} size="small" variant="contained"><span>Tools</span></Button>
          <Button onClick={() => {switchTab('apps')}} sx={{minWidth: '60px', maxWidth: '60px', color: `${currentTab == 'apps' ? '#9fa6f3' : 'white'}`, border: '1px solid #9fa6f3'}} size="small" variant="contained"><span>Apps</span></Button>
        </div>
      </div>
    )
  }





  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="projectContainer">
      <TabSelection />
      <Carousel selection={currentTab}/>
    </div>
  )
})


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
    {name: 'Quell', src: quellAppDemo, targetSrc: 'https://github.com/open-source-labs/Quell'}
  ]

  const appItems: Item[] = [
    {name: 'Quell Demo', src: quellDemo, targetSrc: 'http://www.quellql.com/'},
    {name: 'PlayBoards', src: playboardsDemo, targetSrc: 'https://github.com/Jckhe/playBoards-ts'},
    {name: 'NFTPal', src: nftpalDemo, targetSrc: 'https://jckhe.github.io/NFTPal-Deployed/'},
  ]

  const allItems: Item[] = [...appItems, ...toolItems]

  interface Item {
    name: string,
    src: string
    targetSrc: string
  }


  useEffect(() => {

  }, [selection])
  


  if (selection === 'all') {
    return (
      <div className="carouselContainer">
        <Button disableRipple={true} onClick={() => {handleClick('left')}}><FontAwesomeIcon  size="3x" icon={solid("left-long")}/></Button>
        <div className="carouselItemsContainer">
          <div className="inner" style={{transform: `translateX(-${activeIndex * 100}%)`}}>
            {(allItems).map((item: Item, index: number) => {
              return (
                <CarouselItem key={index} index={index} targetSrc={item.targetSrc} curIndex={activeIndex} src={item.src} name={item.name}/>
              )
            })}
          </div>
        </div>
        <Button disableRipple={true} onClick={() => {handleClick('right')}}><FontAwesomeIcon  size="3x" icon={solid("right-long")}/></Button>
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
                  <CarouselItem key={index} targetSrc={item.targetSrc} index={index} curIndex={activeIndex} src={item.src} name={item.name}/>
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
                  <CarouselItem key={index} targetSrc={item.targetSrc} index={index} curIndex={activeIndex} src={item.src} name={item.name}/>
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
                <CarouselItem key={index} targetSrc={item.targetSrc} index={index} curIndex={activeIndex} src={item.src} name={item.name}/>
              )
            })}
          </div>
        </div>
        <Button onClick={() => {handleClick('right')}}><FontAwesomeIcon  size="3x" icon={solid("right-long")}/></Button>
      </div>
    )
  }
  
}

const CarouselItem = ({name, src, index, curIndex, targetSrc}: any) => {

  useEffect(() => {
    
  }, [curIndex])

  return (
    <div onClick={() => {window.open(targetSrc, '_blank')?.focus();}} className="carouselItems">
      <div id="carouselItemsInner"style={{display: 'flex', flexDirection: 'column', alignItems: 'center', overflow: `${name === 'Quell' ? 'visible' : 'hidden'}` }}>
        <span className="carouselItemName">{name}</span>
        <div className="carouselInner" style={{overflow: `${name === 'Quell' ? 'visible' : 'hidden'}`}}>
          <div id={`demoImgContainer + ${name === 'Quell' ? 'quellAppDemoItemContainer' : ''}`}>
            <img id={`${name}ID`}  src={src} className="demoImg"/>
          </div>
        </div>

      </div>
      <div className="demoTechStack">
            Hi
      </div>
    </div>
  )
}