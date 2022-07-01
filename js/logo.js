const item = document.querySelector(".portfolio");

item.animate(
  [{ transform: "translateX(-6rem)" }, { transform: "translateY(0rem)" }],
  {
    duration: 5000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);
