export const addClass = (selector, classList) => {
    const element = document.querySelector(selector);
    const classes = classList.split(" ");
    classes.forEach((item, id) => {
      element.classList.add(item);
    });
  };

  export const removeClass = (selector, classList) => {
    const element = document.querySelector(selector);
    const classes = classList.split(" ");
    classes.forEach((item, id) => {
      element.classList.remove(item);
    });
  };

  export const handleScroll = (e) => {
    scroll = window.pageYOffset;
    if (scroll >= 300) {
      addClass(".navbar-sticky", "navbar-sticky-moved-up");
    } else {
      removeClass(".navbar-sticky", "navbar-sticky-moved-up");
    }
    // apply transition
    if (scroll >= 250) {
      addClass(".navbar-sticky", "navbar-sticky-transitioned");
    } else {
      removeClass(".navbar-sticky", "navbar-sticky-transitioned");
    }
    // sticky on
    if (scroll >= 500) {
      addClass(".navbar-sticky", "navbar-sticky-on");
    } else {
      removeClass(".navbar-sticky", "navbar-sticky-on");
    }
  };


  export const onHoverEnterIcon = (id, distance) => {
    document.getElementById(id).style.webkitTransform = `translateX(${distance}px)`;
    document.getElementById(id).style.transform = `translateX(${distance}px)`;
  };

  export const onHoverExistIcon = (id) => {
    document.getElementById(id).style.webkitTransform = `translateX(0px)`;
    document.getElementById(id).style.transform = `translateX(0px)`;
  };
