function glitchRedirect(pagina) {

    document.body.classList.add("colapso");

    // Camada de interferência
    const interferencia = document.createElement("div");
    interferencia.className = "interferencia";
    document.body.appendChild(interferencia);


    // Imagens estranhas
    const imagens = [
        "img/estranho/alien.png",
        "img/estranho/olho.png",
        "img/estranho/simbolo.png",
        "img/estranho/cosmico.png",
        "img/estranho/oculto.png"
    ];


    // Cria as aparições
    let aparicoes = 0;

    const intervalo = setInterval(() => {

        if (aparicoes >= 12) {
            clearInterval(intervalo);
            return;
        }

        const entidade = document.createElement("img");

        entidade.className = "entidade";

        entidade.src =
            imagens[Math.floor(Math.random() * imagens.length)];


        // posição aleatória
        entidade.style.left =
            Math.random() * 85 + "vw";

        entidade.style.top =
            Math.random() * 80 + "vh";


        // tamanho aleatório
        const tamanho =
            100 + Math.random() * 250;

        entidade.style.width = tamanho + "px";
        entidade.style.height = tamanho + "px";


        document.body.appendChild(entidade);


        // remove depois de um tempo
        setTimeout(() => {
            entidade.remove();
        }, 500);


        aparicoes++;

    }, 160);


    // tela preta antes de sair
    setTimeout(() => {

        const final = document.createElement("div");

        final.className = "colapso-final";

        document.body.appendChild(final);

    }, 1500);


    // finalmente abandona o plano material
    setTimeout(() => {
        window.location.href = pagina;
    }, 2400);
}

window.addEventListener("scroll", atualizarMenu, { passive: true });
window.addEventListener("resize", atualizarMenu);
atualizarMenu();

document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (event) => {
        const id = link.getAttribute("href");
        const target = id.length > 1 ? document.querySelector(id) : null;
        if (!target) return;

        event.preventDefault();
        const top = id === "#inicio" ? 0 : target.offsetTop - navbarHeight + 1;
        window.scrollTo({ top, behavior: "smooth" });
    });
});