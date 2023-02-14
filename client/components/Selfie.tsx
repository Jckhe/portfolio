import selfieIcon1 from '../assets/github.jpg'
import { useState } from 'react';

const SelfiePic = () => {
  const [largePic, enlargePic] = useState(false);

    return (
      <div className={largePic ? "aboutMePicContainerLarge" : "aboutMePicContainer"}
      onClick={() => enlargePic(!largePic)}
      >
        <img src={selfieIcon1} className="aboutMePic" />
      </div>
    )
}

export default SelfiePic;