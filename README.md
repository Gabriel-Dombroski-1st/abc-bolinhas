# ABC Bolinhas

![Banner ABC Bolinhas](Imagens/banner_abc_bolinhas.jpg)

> **Um projeto, 11 pessoas.** Site institucional desenvolvido em equipe por 11 estudantes da UNIPLAC (Lages — SC), apresentando o projeto, as tecnologias utilizadas e os integrantes do grupo.

![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)
![Git](https://img.shields.io/badge/Git-F05032?logo=git&logoColor=white)

---

## Sobre o projeto

Este é um site estático (sem backend e sem dependências) criado como trabalho em grupo. A página principal reúne:

- **Início:** apresentação do projeto e chamada para ação.
- **Projeto:** quem somos, com um **cronômetro em tempo real** mostrando há quanto tempo a equipe está junta.
- **Tecnologias:** cards com as ferramentas usadas (HTML, CSS, JavaScript, Git, GitHub e VS Code).
- **Equipe:** **carrossel interativo** com os 11 integrantes, cada um com link para um perfil individual.
- **Localização:** endereço da UNIPLAC com link para o Google Maps.

## Funcionalidades

- Menu fixo no topo com **destaque automático** da seção atual durante a rolagem.
- **Rolagem suave** entre as seções, com ajuste para a altura da barra de navegação.
- **Animações de entrada** das seções (de baixo, da esquerda e da direita) usando `IntersectionObserver`.
- **Carrossel da equipe** com botões anterior/próximo, indicadores (bolinhas) e navegação circular.
- **Cronômetro** (dias, horas, minutos e segundos) atualizado a cada segundo.
- **Página de perfil individual** para cada integrante, com seções Início, Sobre mim, Habilidades, Projetos e Contato.
- Tema escuro com identidade visual em tons de azul.

## Estrutura de pastas

```
teste de projeto/
├── index.html            # Página principal
├── style.css             # Estilos da página principal
├── script.js             # Carrossel, cronômetro, menu e animações
├── Imagens/
│   └── logo.png          # Logo do projeto
└── perfis/
    ├── aluno_A/          # Uma pasta por integrante (A até K)
    │   ├── perfilA.html      # Página principal do perfil
    │   ├── habilidades.html  # Habilidades (carregada via iframe)
    │   ├── contatos.html     # Contatos (carregada via iframe)
    │   ├── style.css         # Estilos do perfil
    │   └── foto_perfil.jpg   # Foto do integrante
    ├── aluno_B/
    ├── ...
    └── aluno_K/
```

## Como executar

Não é necessário instalar nada. Basta:

1. Clonar ou baixar o repositório:
   ```bash
   git clone <url-do-repositorio>
   ```
2. Abrir o arquivo `index.html` no navegador (duplo clique ou *Open with Live Server* no VS Code).

> **Dica:** usar a extensão **Live Server** do VS Code facilita o desenvolvimento, pois recarrega a página automaticamente a cada alteração.

> **Observação:** as fontes (Inter e Pacifico) são carregadas do Google Fonts, então é preciso ter conexão com a internet para exibi-las corretamente.

## Como personalizar

### Editar os dados da equipe

Os integrantes ficam no array `equipe`, no início do `script.js`:

```js
{
  nome: "Exemplo Nome",
  funcao: "Exemplo Função",
  descricao: "Exemplo Descrição de Participação no Projeto.",
  perfil: "perfis/exemploNome/perfilExemplo.html"
}
```

Altere `nome`, `funcao` e `descricao` de cada integrante. O campo `perfil` aponta para a página individual.

### Alterar a data do cronômetro

No `script.js`, ajuste a constante `dataInicial` (atenção: o mês começa em 0, então `9` = outubro):

```js
const dataInicial = new Date(2026, 8, 29, 0, 0, 0); // 29/09/2026
```

### Montar o perfil de um integrante

Dentro da pasta do aluno (`perfis/nomeIntegrante/`):

- `nomeIntegrante.html`: nome, cargo, texto "Sobre mim", projetos e redes sociais.
- `habilidades.html`: grade com as habilidades do integrante.
- `contatos.html`: telefone, Instagram e e-mail.
- `foto_perfil.jpg`: substitua pela foto do integrante.

## Tecnologias utilizadas

| Tecnologia | Uso no projeto |
| --- | --- |
| **HTML5** | Estrutura das páginas |
| **CSS3** | Estilização, layout (Flexbox/Grid), variáveis CSS e animações |
| **JavaScript** | Carrossel, cronômetro, menu ativo e animações de rolagem |
| **Git / GitHub** | Controle de versão e colaboração |
| **VS Code** | Editor de código |

## Pendências conhecidas

Pontos identificados no código que ainda precisam ser finalizados:

- [ ] Os perfis `aluno_B` até `aluno_K` ainda usam o **mesmo conteúdo do perfil A** (nome, textos, habilidades e contatos). É preciso personalizar cada um.
- [ ] Os nomes dos integrantes 2 a 11 estão como **"Membro 2", "Membro 3"...** no `script.js`.
- [ ] O carrossel mostra **iniciais** no lugar das fotos; as fotos (`foto_perfil.jpg`) ainda não são usadas.
- [ ] As imagens da seção "Projetos" dos perfis (`img/setup.jpg`, `img/focus.jpg` etc.) e o arquivo `curriculo.pdf` **não estão no repositório**.
- [ ] O bloco de **mapa** da seção Localização é apenas ilustrativo (o link para o Google Maps funciona).
- [ ] Telefone e links de GitHub/LinkedIn nos perfis ainda são placeholders.

## Equipe

| # | Integrante | Função |
| --- | --- | --- |
| 1 | Thiago Ademar Ludvichak | Líder do projeto | 
| 2 | Anthony Santa Ana Souza | Desenvolvimento |
| 3 | Pedro Elias dos Santos Vincensi | Banco de Dados |
| 4 | Lucas Santos de Liz | Design |
| 5 | Gabriel da Rosa Dombroski | Desenvolvimento |
| 6 | Victor Matheus Albino Freitas | Testes |
| 7 | Murilo da Silva Siqueira | Documentação |
| 8 | Tamiris de Fátima Pereira Marafigo | Desenvolvimento |
| 9 | Guilherme Cardoso Antunes | Design |
| 10 | Arthur Stradioto da Silva | Git/GitHub |
| 11 | Maicon Carlos Cristofolini Junior | Testes |

> Atualize esta tabela com os nomes reais assim que o `script.js` for atualizado.

## Localização

**UNIPLAC** — Universidade do Planalto Catarinense
Lages, Santa Catarina — Brasil

---

*Cada segundo nos aproxima do nosso objetivo.*