function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split("");
  elemento.innerHTML = "";
  for (let i = 0; i < textoArray.length; i++) {
    setTimeout(() => (elemento.innerHTML += textoArray[i]), 220 * i);
  }
}

const name = document.querySelector(".h3");
typeWriter(name);
