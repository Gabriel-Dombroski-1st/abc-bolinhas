/* Membros da Equipe */

const equipe = [
    { nome: "Thiago Ademar Ludvichak", funcao: "Líder do projeto", descricao: "Responsável por coordenar a equipe e manter tudo no caminho certo.", perfil: "Perfis/aluno_A/perfilA.html" },
    { nome: "Anthony Santa Ana Souza", funcao: "Desenvolvimento", descricao: "Participação no desenvolvimento e construção do site.", perfil: "Perfis/aluno_B/perfilB.html" },
    { nome: "Pedro Elias dos Santos Vincensi", funcao: "Banco de Dados", descricao: "Organização das informações e apoio à estrutura do projeto.", perfil: "Perfis/aluno_C/perfilC.html" },
    { nome: "Lucas Santos de Liz", funcao: "Design", descricao: "Criação e organização da identidade visual.", perfil: "perfis/aluno_D/perfilD.html" },
    { nome: "Gabriel da Rosa Dombroski", funcao: "Desenvolvimento", descricao: "Implementação de funcionalidades e componentes.", perfil: "Perfis/GabrielDombroski/perfil.html" },
    { nome: "Victor Matheus Albino Freitas", funcao: "Testes", descricao: "Verificação do funcionamento e identificação de melhorias.", perfil: "Perfis/aluno_F/perfilF.html" },
    { nome: "Murilo da Silva Siqueira", funcao: "Documentação", descricao: "Organização da documentação e apresentação do projeto.", perfil: "Perfis/aluno_G/perfilG.html" },
    { nome: "Tamiris de Fátima Pereira Marafigo", funcao: "Desenvolvimento", descricao: "Construção das seções e integração do conteúdo.", perfil: "Perfis/aluno_H/perfilH.html" },
    { nome: "Guilherme Cardoso Antunes", funcao: "Design", descricao: "Apoio visual, organização e experiência do usuário.", perfil: "Perfis/aluno_I/perfilI.html" },
    { nome: "Arthur Stradioto da Silva", funcao: "Git/GitHub", descricao: "Organização do repositório e colaboração da equipe.", perfil: "Perfis/aluno_J/perfilJ.html" },
    { nome: "Maicon Carlos Cristofolini Junior", funcao: "Testes", descricao: "Revisão final, responsividade e ajustes.", perfil: "Perfis/aluno_K/perfilK.html" }
]

let posicaoMembroAtual = 0;

/* Carrossel da Equipe */

function avatar(nome, posicao) {
    const iniciais = nome.split(" ").map(p => p[0]).join("").slice(0, 2).toUpperCase();
    return `<div class="avatar-recuado" style="width:${posicao === posicaoMembroAtual ? 110 : 64}px;height:${posicao === posicaoMembroAtual ? 110 : 64}px;border-radius:50%;display:grid;place-items:center;background:#0b3155;border:2px solid #1687ff;color:#7fc2ff;font-weight:800;font-size:${posicao === posicaoMembroAtual ? 28 : 17}px">${iniciais}</div>`;
}

function carregarEquipe() {
    const membroAtual = equipe[posicaoMembroAtual];
    const membroEsquerda = (posicaoMembroAtual - 1 + equipe.length) % equipe.length;
    const membroDireita = (posicaoMembroAtual + 1) % equipe.length;

    document.querySelector("#membro-central").innerHTML = `
        ${avatar(membroAtual.nome, posicaoMembroAtual)}
        <h3>${membroAtual.nome}</h3>
        <span class="cargo">${membroAtual.funcao}</span>
        <p>${membroAtual.descricao}</p>
        <a class="link-card" href="${membroAtual.perfil}" aria-label="Ver perfil de ${membroAtual.nome}"></a>
    `;

    document.querySelector("#membro-a-esquerda").innerHTML = `
        <div class="card-membro">
            ${avatar(equipe[membroEsquerda].nome, membroEsquerda)}
            <h3>${equipe[membroEsquerda].nome}</h3>
            <p>${equipe[membroEsquerda].funcao}</p>
            <a class="link-card" href="${equipe[membroEsquerda].perfil}" aria-label="Ver perfil de ${equipe[membroEsquerda].nome}"></a>
        </div>
    `;

    document.querySelector("#membro-a-direita").innerHTML = `
        <div class="card-membro">
            ${avatar(equipe[membroDireita].nome, membroDireita)}
            <h3>${equipe[membroDireita].nome}</h3>
            <p>${equipe[membroDireita].funcao}</p>
            <a class="link-card" href="${equipe[membroDireita].perfil}" aria-label="Ver perfil de ${equipe[membroDireita].nome}"></a>
        </div>
    `;

    document.querySelector("#navegacao-membros").innerHTML = equipe.map((_, i) =>
        `<button class="${i === posicaoMembroAtual ? "ativo" : ""}" aria-label="Mostrar membro ${i + 1}" onclick="irParaMembro(${i})"></button>`
    ).join("");
}

function irParaMembro(posicao) {
    posicaoMembroAtual = posicao;
    carregarEquipe();
}

document.querySelector(".anterior").addEventListener("click", () => {
    posicaoMembroAtual = (posicaoMembroAtual - 1 + equipe.length) % equipe.length;
    carregarEquipe();
});

document.querySelector(".proximo").addEventListener("click", () => {
    posicaoMembroAtual = (posicaoMembroAtual + 1) % equipe.length;
    carregarEquipe();
});

carregarEquipe();

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

/* Correção Rolagem das Âncoras */

const navbarHeight = 76;

/* Destaque do menu conforme a rolagem */

function atualizarMenu() {
    const linhaDeReferencia = window.scrollY + navbarHeight + 40;
    let idAtual = sessoes[0].id;

    sessoes.forEach((sessao) => {
        if (sessao.offsetTop <= linhaDeReferencia) idAtual = sessao.id;
    });

    // no fim da página, a última seção pode não alcançar a linha de referência
    const chegouAoFim = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
    if (chegouAoFim) idAtual = sessoes[sessoes.length - 1].id;

    linkNav.forEach((link) => {
        link.classList.toggle("ativo", link.getAttribute("href") === `#${idAtual}`);
    });
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