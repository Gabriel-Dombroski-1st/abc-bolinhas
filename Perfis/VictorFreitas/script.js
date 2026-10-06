const revelarElementos = document.querySelectorAll("section");

const revelarObservador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("ativo");
        } else {
            entrada.target.classList.remove("ativo");
        }
    });
}, {
    threshold: 0.1
});

revelarElementos.forEach((elemento) => revelarObservador.observe(elemento));