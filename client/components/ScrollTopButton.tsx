import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'


export default function ScrollTopButton() {
  const [visible, setVisible] = useState<boolean>(false);

  //onclick function handles scrolling back up
  function ScrollTop() {
    document.documentElement.scrollTop = 0;
  }

  //this function will be checking for the user's scroll behavior
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 50){
      setVisible(true)
    } 
    else if (scrolled <= 50){
      setVisible(false)
    }
  };

  window.addEventListener('scroll', toggleVisible);
  
  return (
    <div style={{opacity: visible ? '100%': '0%'}} onClick={ScrollTop} id="scrollUpContainer">
        <FontAwesomeIcon size="lg" color="white" icon={solid('up-long')} />
    </div>
  )
}