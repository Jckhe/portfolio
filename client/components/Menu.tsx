import { Button, Container, Link, Theme } from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular } from '@fortawesome/fontawesome-svg-core/import.macro'
import { makeStyles, createStyles } from '@mui/styles';
import React, { useEffect, useState } from "react";
import selfieIcon2 from '../assets/headshot_compressed.jpeg'

const useStyles = makeStyles((theme: Theme) => createStyles({
  button: {
    border: "1px solid #777286",
    backgroundColor: 'red',
    '&:hover': {
      border: 'none'
    }
  },
  link: {
    color: 'white',
    position: 'relative',

    '&:before': {
      content: "''",
      position: 'absolute',
      width: '0',
      height: '2px',
      bottom: '-3px',
      left: '50%',
      transform: 'translate(-50%,0%)',
      backgroundColor: 'red',
      transformOrigin: 'center',
      visibility: 'hidden',
      transition: 'all 0.3s ease-in-out',
    },
    '&:hover:before': {
      visibility: 'visible',
      width: '100%',
    },
  },
}));



const Menu = React.forwardRef(
  (_prop, {aboutSectionRef, portfolioSectionRef, contactSectionRef}: any) => {
  const classes = useStyles();
  const [largePic, enlargePic] = useState(false);
  


  return (
    <div className="menuContainer">
      <div className="about">
        <div className={largePic ? 'menuPicContainerLarge' : 'menuPicContainer'} style={{backgroundImage: `url(${selfieIcon2})`}} onClick={() => enlargePic(!largePic)}></div>
        <h1><span id="headerText">Welcome To My Site!</span></h1>
        <p><span style={{fontFamily: 'sofia-light'}} id="headerText">Please choose one of the following below: </span></p>
      </div>
      {/* BUTTONS SECTION */}
      {/* BUTTONS SECTION */}
      <Container sx={{display: 'flex', justifyContent: 'center', gap: '5px'}}>
        <div id="buttonContainer">
          <span id="buttonHeading">About Me</span>
          <Button 
          onClick={() => aboutSectionRef?.current?.scrollIntoView({behavior: 'smooth'})} 
          className="menuButton" color="primary" sx={{height: '75px', display: 'flex', flexDirection: 'column', minWidth: '120px', maxWidth: '120px',borderRadius: '2px', borderTop: '2px solid #777286', borderBottom: '2px solid #777286', transition: 'all .1s ease-out', backgroundColor: 'rgba(0, 0, 0, .8)', '&:hover': { transition: 'all 0.5s ease-in-out', backgroundColor: 'rgba(119, 114, 134, .35)'}}} variant="text">
            <Link underline="none" className={classes.link}>
              <FontAwesomeIcon size="xl" color="white" icon={regular('circle-user')} />
            </Link>
              <span style={{fontFamily: 'league-spartan'}} id="headerText">jackie</span>
          </Button>
        </div>
        <div id="buttonContainer">
          <span id="buttonHeading">Projects</span>
          <Button onClick={() => portfolioSectionRef?.current?.scrollIntoView({behavior: 'smooth'})} 
          className="menuButton"color="primary" sx={{height: '75px', minWidth: '120px', maxWidth: '120px',borderRadius: '2px', borderTop: '2px solid #777286', borderBottom: '2px solid #777286', transition: 'all .1s ease-out', backgroundColor: 'rgba(0, 0, 0, .8)', '&:hover': { transition: 'all 0.5s ease-in-out', backgroundColor: 'rgba(119, 114, 134, .35)'}}} variant="text">
            <FontAwesomeIcon className="ButtonIcon" size="xl" color="white" icon={solid('laptop-code')} />
          </Button>
        </div>
        <div id="buttonContainer">
          <span id="buttonHeading">Contact</span>
          <Button 
          onClick={() => contactSectionRef?.current?.scrollIntoView({behavior: 'smooth'})} 
          className="menuButton" color="primary" sx={{height: '75px', minWidth: '120px', maxWidth: '120px',borderRadius: '2px', borderTop: '2px solid #777286', borderBottom: '2px solid #777286', transition: 'all .15s ease-out', backgroundColor: 'rgba(0, 0, 0, .8)', '&:hover': { transition: 'all 0.5s ease-in-out', backgroundColor: 'rgba(119, 114, 134, .35)'}}} variant="text">
            <FontAwesomeIcon size="xl" color="white" icon={regular('address-card')} />
          </Button>
        </div>
      </Container>
    </div>
  )
})

interface MenuProps {
  ref: any;
}

export default Menu;