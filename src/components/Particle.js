import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const Particle = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);

  return (
    <div style={{ position: "absolute" }}>
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
              value: "#000", // Dark background to mimic the night sky
            },
          },
          particles: {
            number: {
              value: 100, // More particles to mimic stars
              density: {
                enable: true,
                value_area: 1000, // Adjust area to manage particle density
              },
            },
            color: {
              value: "#ffffff", // White stars
            },
            shape: {
              type: "circle", // Star-like shape
            },
            opacity: {
              value: 0.8, // Brighter stars
              random: true, // Varying star brightness
            },
            size: {
              value: 2, // Size of the stars
              random: true, // Varying star sizes
            },
            line_linked: {
              enable: false, // Disable line linking
            },
            move: {
              enable: true,
              speed: 0.2, // Slower movement to mimic gentle twinkling
              direction: "none",
              random: true, // Random movement
              straight: false,
              out_mode: "out",
              bounce: false,
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false, // Disable interaction on hover
              },
              onclick: {
                enable: false, // Disable interaction on click
              },
              resize: true,
            },
          },
          retina_detect: true,
        }}
      />
    </div>
  );
};

export default Particle;
