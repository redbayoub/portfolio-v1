// Get the offset position of the navbar
var sticky;
export default (window, navbar, stickyClass) => {
  if (sticky == undefined)
    // init sticky
    sticky = navbar.offsetTop;
  // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
  if (window.pageYOffset >= sticky) {
    navbar.classList.add(stickyClass);
  } else {
    navbar.classList.remove(stickyClass);
  }
};
