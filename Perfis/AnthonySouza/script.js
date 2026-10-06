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

function abrirVideo(url) {
    document.getElementById("video").src = url;
    document.getElementById("modalVideo").style.display = "flex";
    document.getElementById("video").play();
}

function fecharVideo(event) {

    if (event && event.target !== document.getElementById("modalVideo")) {
        return;
    }

    const video = document.getElementById("video");

    video.pause();
    video.currentTime = 0;
    video.src = "";

    document.getElementById("modalVideo").style.display = "none";
}

function abrirFoto(url) {
    document.getElementById("fotoModal").src = url;
    document.getElementById("modalFoto").style.display = "flex";
}

function fecharFoto(event) {
    if (event && event.target !== document.getElementById("modalFoto")) {
        return;
    }

    document.getElementById("modalFoto").style.display = "none";
    document.getElementById("fotoModal").src = "";
}

