var maxScroll = 0;
var scrollLimit = 0;
var cWindow = null;
export const initScrollDepth = function(document,window) {
  scrollLimit = Math.max(
    document.body.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.clientHeight,
    document.documentElement.scrollHeight,
    document.documentElement.offsetHeight
  );
  cWindow = window;
};
export const updateScrollDepth = function() {
  if (maxScroll < cWindow.scrollY) maxScroll = cWindow.scrollY;
};
export const getMaxScrollDepth = function() {
  return (maxScroll * 100) / scrollLimit;
};
