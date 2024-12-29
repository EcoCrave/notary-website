export const fadeIn = (direction, delay, duration) => {
  return {
    hidden: {
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: duration,
        delay: delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};

// variants = {fadeIn("left",0.2)}
// initial = "hidden"
// whileInView = {"show"}
// viewport = {{once:false, amout : 0.7}}

// Staggle ..........................................

export const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.15 * index,
    },
  }),
};

// variants = {fucntion name ex: fadeInAnimationVariants}
// initial = "initial"
// whileInView = {"animate"}
// viewport = {{once:true}}
// custom = { index };
