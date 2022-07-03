const item1 = document.querySelector(".css");

const item3 = document.querySelector(".js");

item1.animate(
  [{ transform: "translateX(0rem)" }, { transform: "translateY(-1rem)" }],
  {
    duration: 3000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);

item3.animate(
  [{ transform: "translateX(-1rem)" }, { transform: "translateY(0rem)" }],
  {
    duration: 3000,
    easing: "ease-in-out",
    direction: "alternate",
    iterations: Infinity,
  }
);
