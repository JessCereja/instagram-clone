//selecionando a classe do html
let imagem = document.querySelector(".insta2");

//criando a opacidade para a ilusão de troca de imagem

setInterval(() => {
  if (imagem.style.opacity == 0) {
    imagem.style.opacity = 1;
  } else {
    imagem.style.opacity = 0;
  }
}, 3000);
