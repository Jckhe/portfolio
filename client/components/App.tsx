import { useState, useCallback } from "react";
import { Background } from '../components/Background'
import './App.css'
import { styled } from '@mui/material/styles';
import { AppBar, Button, Container } from '@mui/material';

function App() {
  const [aboutSection, toggleAbout] = useState<boolean>(false)
  const [portfolioSection, togglePort] = useState<boolean>(false)
  const [contactSection, toggleContact] = useState<boolean>(false)

  


  return (
    <div className="main">
      <Menu />
      <Background />
    </div>
  )
}

function Menu() {
  return (
    <div className="middle">
      <div className="about">
        <h2>Jackie He</h2>
        <h1>Welcome To My Site!</h1>
        <p>Please choose one the following below: </p>
      </div>
      <Container sx={{display: 'flex', justifyContent: 'center', gap: '5px'}}>
        <Button sx={{height: '75px', minWidth: '120px', maxWidth: '120px'}}variant="contained" >About</Button>
        <Button sx={{height: '75px', minWidth: '120px', maxWidth: '120px'}}variant="contained" >Portfolio</Button>
        <Button sx={{height: '75px', minWidth: '120px', maxWidth: '120px'}}variant="contained" >Contact</Button>
      </Container>
    </div>
  )
}

const StyledDiv = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor: theme.palette.background.paper,
  padding: theme.spacing(0.55, 1.75),
  border: '1px solid black',
  borderRadius: '5px',
  fontSmooth: 'always',
  cursor: 'pointer',
  boxShadow: '0px 3px 1px -2px rgb(0 0 0 / 20%), 0px 2px 2px 0px rgb(0 0 0 / 14%), 0px 1px 5px 0px rgb(0 0 0 / 12%)'
}));

export default App;