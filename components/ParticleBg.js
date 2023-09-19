"use client"
import { useEffect } from "react";
import dynamic from "next/dynamic";
import { loadFull } from "tsparticles";

const Particles = dynamic(() => import("react-tsparticles"), {
  ssr: true,
});

const ParticleBg = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window) {
          window.dispatchEvent(new Event("resize"));
        }
      };

      handleResize();
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className=" overflow-clip">
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fpsLimit: 120,
        interactivity: {

          events: {
            onClick: { enable: true, mode: "push" },
            onHover: {
              enable: true,
              mode: "attract",
              parallax: { enable: false, force: 60, smooth: 10 },
            },
            resize: true,
          },
          modes: {
            push: { quantity: 4 },
            attract: { distance: 200, duration: 0.4, factor: 5 },
          },
        },
        particles: {
          color: { value: "#000" },
          lineLinked: {
            color: "#000",
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1,
          },
          move: {
            attract: { enable: false, rotate: { x: 600, y: 1200 } },
            bounce: false,
            direction: "none",
            enable: true,
            outMode: "out",
            random: false,
            speed: 2,
            straight: false,
          },
          number: { density: { enable: true, value_area: 800 }, value: 80 },
          opacity: {
            anim: { enable: false, opacity_min: 0.1, speed: 1, sync: false },
            random: false,
            value: 0.5,
          },

          size: {
            anim: { enable: false, size_min: 0.1, speed: 40, sync: false },
            random: true,
            value: 5,
          },
        },
        polygon: {
          draw: { enable: false, lineColor: "#ffffff", lineWidth: 0.5 },
          move: { radius: 10 },
          scale: 1,
          type: "none",
          url: "",
        },
        detectRetina: true,
      }}
    />
    </div>
  );
};

export default ParticleBg;
