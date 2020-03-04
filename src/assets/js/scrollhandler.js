var callbacks = [];
var scrolling = false;

export const initScrollHandler = function(window) {
  window.addEventListener("scroll", () => {
    scrolling = true;
  });

  setInterval(function() {
    if (scrolling) {
      scrolling = false;
      // Do your thang!
      callbacks.forEach(fn => fn());
    }
  }, 250);
};

export const addScrollCallback = function(fn) {
    callbacks.push(fn);
  };
  export const removeScrollCallback = function(fn) {
    callbacks.filter(callback=>callback!=fn);
};
/* 
export default init;
export default addCallback;
export default removeCallback; */
