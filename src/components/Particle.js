import React from "react";
import Particles from "react-tsparticles";
import { DARK_THEME_PARTICLES, LIGHT_THEME_PARTICLES } from "../particlesType";

function Particle({isDarkMode}) {
  console.log("value from particle", isDarkMode);
  const particlesType = isDarkMode ? DARK_THEME_PARTICLES : LIGHT_THEME_PARTICLES
  return (
    <Particles
      id="tsparticles"
      params={{
        particles: particlesType,
        interactivity: {
          events: {
            onclick: {
              enable: true,
              mode: "push",
            },
          },
          modes: {
            push: {
              particles_nb: 1,
            },
          },
        },
        retina_detect: true,
      }}
    />
  );
}

export default Particle;
