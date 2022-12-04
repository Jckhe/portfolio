import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";
const LazyLoadCarousel = React.lazy(() => import('./Carousel'));


const Projects = React.forwardRef((_props: any, ref) => {
  const [currentTab, switchTab] = useState<string>('all');
  //this useState controls lazy loading the carousel component
  const {load} = _props;
  



  const TabSelection = () => {

    //we want to proc a re-render
    useEffect(() => {
    }, [currentTab])

    
    return (
      <div className="tabsContainer" style={{border: '0px solid white'}} >
        <div className="tabsContainerInner">
          <Button onClick={() => {switchTab('all')}} sx={{minWidth: '60px', maxWidth: '60px', color: `${currentTab == 'all' ? 'white' : ''}`, backgroundColor: `${currentTab == 'all' ? '#3e64fa' : ''}`, border: '1px solid #9fa6f3'}} size="small" variant="contained"><span>All</span></Button>
          <Button onClick={() => {switchTab('tools')}} sx={{minWidth: '60px', maxWidth: '60px',  color: `${currentTab == 'tools' ? 'white' : ''}`, border: '1px solid #9fa6f3', backgroundColor: `${currentTab == 'tools' ? '#3e64fa' : ''}`}} size="small" variant="contained"><span>Tools</span></Button>
          <Button onClick={() => {switchTab('apps')}} sx={{minWidth: '60px', maxWidth: '60px', color: `${currentTab == 'apps' ? 'white' : ''}`, border: '1px solid #9fa6f3', backgroundColor: `${currentTab == 'apps' ? '#3e64fa' : ''}`}} size="small" variant="contained"><span>Apps</span></Button>
        </div>
      </div>
    )
  }





  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="projectContainer">
      <TabSelection />
      {load ? <LazyLoadCarousel selection={currentTab} /> : ''}
    </div>
  )
})



export default Projects;

