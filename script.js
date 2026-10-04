/* Animação Entrada das Sessões */

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

/* Atualização do Cronometro */

const dataInicial = new Date(2026, 8, 29, 0, 0, 0);

function atualizarCronometro() {
    const diferenca = Math.max(0, new Date() - dataInicial);
    const dias = Math.floor(diferenca / 86400000);
    const horas = Math.floor((diferenca % 86400000) / 3600000);
    const minutos = Math.floor((diferenca % 3600000) / 60000);
    const segundos = Math.floor((diferenca % 60000) / 1000);

    document.querySelector("#dias").textContent = String(dias).padStart(2, "0");
    document.querySelector("#horas").textContent = String(horas).padStart(2, "0");
    document.querySelector("#minutos").textContent = String(minutos).padStart(2, "0");
    document.querySelector("#segundos").textContent = String(segundos).padStart(2, "0");
}

atualizarCronometro();
setInterval(atualizarCronometro, 1000);

const sessoes = document.querySelectorAll("section[id]");
const linkNav = document.querySelectorAll("nav a");

const observadorNav = new IntersectionObserver(entradas => {
    entradas.forEach(entrada => {
        if (entrada.isIntersecting) {
            linkNav.forEach(link => {
                link.classList.toggle("ativo", link.getAttribute("href") === `#${entrada.target.id}`);
            });
        }
    });
}, { threshold: 0.35 });

sessoes.forEach(sessao => observadorNav.observe(sessao));