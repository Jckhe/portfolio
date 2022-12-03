import { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import type { Container, Engine } from "tsparticles-engine";
import reactIcon from '../assets/reactjs-icon.svg'
import pythonIcon from '../assets/pythonLogo.svg'
import graphQLIcon from '../assets/graphql_logo.svg'
import typescriptIcon from '../assets/typescriptLogo.svg';



export function Background() {
  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
}, []);

const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
}, []);


  return (
    <Particles
            id="particles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              "fullScreen": {
                  "enable": true,
                  "zIndex": -10
              },
              "particles": {
                  "number": {
                      "value": 125,
                      "density": {
                          "enable": false,
                          "value_area": 1000
                      }
                  },
                  "color": {
                      "value": "#fff"
                  },
                  "shape": {
                      "type": "images",
                      "images": [
                        {
                          "src": reactIcon,
                          "height": 100,
                          "width": 100
                        },
                        {
                          "src": pythonIcon,
                          "height": 130,
                          "width": 130
                        },
                        {
                          "src": graphQLIcon,
                          "height": 100,
                          "width": 100
                        },
                        {
                          "src": typescriptIcon,
                          "height": 100,
                          "width": 100
                        }
                      ]
                  },
                  "opacity": {
                      "value": 0.75,
                      "random": true,
                      "anim": {
                          "enable": true,
                          "speed": 0.115,
                          "opacity_min": 0.3,
                          "sync": true
                      }
                  },
                  "size": {
                      "value": 11.5,
                      "random": false,
                      "anim": {
                          "enable": false,
                          "speed": 40,
                          "size_min": 0.1,
                          "sync": false
                      }
                  },
                  // "line_linked": {
                  //     "enable": false,
                  //     "distance": 500,
                  //     "color": "#ffffff",
                  //     "opacity": 0.4,
                  //     "width": 2
                  // },
                  "move": {
                      "enable": true,
                      "speed": 0.55,
                      "direction": "bottom",
                      "random": true,
                      "straight": false,
                      "out_mode": "bounceVertical",
                      "attract": {
                          "enable": false,
                          "rotateX": 600,
                          "rotateY": 1200
                      }
                  }
              },
              "retina_detect": true,
              "background": {
                  "color": "#000000",
                  "image": "",
                  "position": "50% 50%",
                  "repeat": "no-repeat",
                  "size": "cover"
              }
          }
          }
        />
  )
}