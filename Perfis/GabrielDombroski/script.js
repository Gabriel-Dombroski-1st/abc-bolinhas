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

//Alterando destaque do item da sessão lateral de acordo com a posição do mouse no conteúdo principal

const links = document.querySelectorAll('nav a');

document.querySelectorAll('main section[id]').forEach(section => {
  section.addEventListener('mouseenter', () => {
    links.forEach(a => {
      a.classList.toggle('on', a.getAttribute('href') === '#' + section.id);
    });
  });
});

//Mudar Destaque da sessão lateral ao clicar em um dos itens da sessão

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(a => a.classList.remove('on'));
    link.classList.add('on');
  });
});