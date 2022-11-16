export const animation = {
  // general
  general: {
    hidden: {
      opacity: 0,
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
    hide: {
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
  //   homepage
  options: {
    hidden: { opacity: 0, scale: 0.75 },
    show: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
    hide: {
      opacity: 0,
      scaleX: 0.75,
      transition: {
        duration: 0.5,
      },
    },
  },

  //   grid
  grid: {
    hidden: { x: -500, opacity: 0, scaleX: 0 },
    show: {
      x: 0,
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.5,
      },
    },
    hide: {
      x: -500,
      opacity: 0,
      scaleX: 0,
      transition: {
        duration: 0.5,
      },
    },
  },
};
