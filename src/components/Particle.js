import React from "react";
import Particles from "react-particles-js";

function Particle() {
  return (
    <Particles
    params={{
	    "particles": {
	        "number": {
	            "value": 200,
	            "density": {
	                "enable": true,
	                "value_area": 1500
	            }
	        },
	        "line_linked": {
	            "enable": true,
	            "opacity": 0.05
	        },
	        "move": {
	            "direction": "right",
	            "speed": 0.05
	        },
	        "size": {
	            "value": 2
	        },
	        "opacity": {
	            "anim": {
	                "enable": true,
	                "speed": 0.7,
	                "opacity_min": 0.04
	            }
	        }
	    },
	    "interactivity": {
	        "events": {
	            "onclick": {
	                "enable": true,
	                "mode": "push"
	            }
	        },
	        "modes": {
	            "push": {
	                "particles_nb": 1
	            }
	        }
	    },
	    "retina_detect": true
	}} />
  );
}

export default Particle;
