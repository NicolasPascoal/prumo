// Mostra cada bloco .reveal quando ele entra na tela.
// Sem IntersectionObserver (navegador antigo), mostra tudo de uma vez.
const blocos = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('in');
        observador.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });
  blocos.forEach((bloco) => observador.observe(bloco));
} else {
  blocos.forEach((bloco) => bloco.classList.add('in'));
}
