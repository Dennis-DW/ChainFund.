// Variants for text animation with optional delay
export const textVariant = (delay = 0) => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 2.25,
        delay: delay,
      },
    },
  };
};

// Variants for fade-in animation with customizable direction, type, delay, and duration
export const fadeIn = (direction = "up", type = "tween", delay = 0, duration = 0.6) => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Variants for zoom-in animation with customizable delay and duration
export const zoomIn = (delay = 0, duration = 0.6) => {
  return {
    hidden: {
      scale: 0,
      opacity: 0,
    },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "tween",
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

// Variants for slide-in animation with customizable direction, type, delay, and duration
export const slideIn = (direction = "left", type = "tween", duration = 0.6, delay = 0) => {
  return {
    hidden: { x: direction === "left" ? -100 : 100, opacity: 0 },
    show: {
      x: 0,
      opacity: 1,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};