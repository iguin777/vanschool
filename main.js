
const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".background-2", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".heading-sugest-es", {
  ...scrollRevealOption,
  delay: 500,
});

ScrollReveal().reveal(".section-2", {
  ...scrollRevealOption,
  delay: 1000,
});

ScrollReveal().reveal(".section-3", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".list-3", {
  ...scrollRevealOption,
  delay: 2000,
});

ScrollReveal().reveal(".section-4", {
  duration: 1000,
  interval: 500,
  delay: 2500,
});


// Seleciona todos os botões da página
const buttons = document.querySelectorAll('button');

// Adiciona um evento de clique para redirecionar todos os botões
buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão
        window.location.href = 'error.html'; // Redireciona para a página de erro
    });
});


// Seleciona todos os links e botões
const interactiveElements = document.querySelectorAll('button, a, .item-link-viaje-pelo, .item-link-ajuda');

// Adiciona um evento de clique para redirecionar
interactiveElements.forEach(element => {
    element.addEventListener('click', (event) => {
        event.preventDefault(); // Impede o comportamento padrão
        window.location.href = 'error.html'; // Redireciona para a página de erro
    });
});
