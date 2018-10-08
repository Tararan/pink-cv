export const params = {
  particles: {
    number: {
      value: 10,
      density: {
        enable: true,
        value_area: 1000
      }
    },
    color: {
      value: "#ffffff"
    },
    shape: {
      type: "star",
      stroke: {
        width: 0,
        color: "#000000"
      },
      polygon: {
        nb_sides: 5
      }
    },
    opacity: {
      value: 1,
      random: true,
      anim: {
        enable: true,
        speed: 2.5,
        opacity_min: 0.35,
        sync: false
      }
    },
    size: {
      value: 3,
      random: true,
      anim: {
        enable: true,
        speed: 5,
        size_min: 1,
        sync: false
      }
    },
    line_linked: {
      enable: false,
      distance: 0,
      color: "#ffffff",
      opacity: 0.2604192355117139,
      width: 0
    },
    move: {
      enable: true,
      speed: 4,
      direction: "none",
      random: true,
      straight: true,
      out_mode: "out",
      bounce: true,
      attract: {
        enable: true,
        rotateX: 600,
        rotateY: 1200
      }
    }
  },
  interactivity: {
    detect_on: "canvas",
    events: {
      onhover: {
        enable: true,
        mode: "bubble"
      },
      onclick: {
        enable: true,
        mode: "repulse"
      },
      resize: true
    },
    modes: {
      grab: {
        distance: 400,
        line_linked: {
          opacity: 1
        }
      },
      bubble: {
        distance: 350,
        size: 3,
        duration: 10,
        opacity: 1,
        speed: 6
      },
      repulse: {
        distance: 200,
        duration: 2.5
      },
      push: {
        particles_nb: 8
      },
      remove: {
        particles_nb: 2
      }
    }
  },
  retina_detect: true
};
