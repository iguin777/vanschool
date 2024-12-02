
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

