"use strict";

const STORAGE_KEY = "js_journey_progress_v1";

const courseData = [
  {
    id: "mod-1",
    title: "Módulo 1 - Iniciante",
    lessons: [
      {
        id: "m1-a1",
        title: "O que é JavaScript",
        description:
          "JavaScript é a linguagem que dá vida às páginas web. Com ele, criamos interações, validações e comportamento dinâmico no navegador.",
        code: `console.log("JavaScript executando no navegador!");`,
        quiz: [
          {
            question: "Qual é o principal papel do JavaScript em páginas web?",
            options: [
              "Gerenciar estilos visuais",
              "Criar comportamento dinâmico",
              "Definir estrutura HTML",
              "Substituir CSS"
            ],
            correctIndex: 1,
            explanation: "JavaScript controla interações e comportamentos dinâmicos."
          },
          {
            question: "Onde o JavaScript pode ser executado?",
            options: ["Apenas no navegador", "Apenas no servidor", "No navegador e no servidor", "Apenas em apps mobile"],
            correctIndex: 2,
            explanation: "Com Node.js, JavaScript também roda no servidor."
          },
          {
            question: "Qual comando exibe informação no console?",
            options: ["print()", "console.log()", "alert.log()", "show()"],
            correctIndex: 1,
            explanation: "console.log() mostra mensagens no console do navegador."
          }
        ],
        challenge: {
          prompt: "Crie uma variável chamada nome com seu nome e mostre uma saudação no console.",
          hint: "Use let nome = 'Seu Nome'; e console.log('Olá, ' + nome);",
          solution: "let nome = 'Ruben';\nconsole.log('Olá, ' + nome);",
          validator: (code, output) =>
            /nome/.test(code) && /console\.log/.test(code) && /ol[aá]/i.test(output)
        }
      },
      {
        id: "m1-a2",
        title: "Variáveis (let, const, var)",
        description:
          "Variáveis armazenam dados. let permite reatribuição, const mantém valor fixo e var é antiga (evite em novos códigos).",
        code: `let idade = 20;
const pais = "Brasil";
idade = 21;
console.log(idade, pais);`,
        quiz: [
          {
            question: "Qual declaração não permite reatribuição?",
            options: ["let", "const", "var", "mutable"],
            correctIndex: 1,
            explanation: "const mantém a referência da variável."
          },
          {
            question: "Qual opção é recomendada para código moderno?",
            options: ["var sempre", "let e const", "somente var", "nenhuma"],
            correctIndex: 1,
            explanation: "let e const possuem escopo de bloco e semântica moderna."
          },
          {
            question: "let possui escopo de:",
            options: ["Função apenas", "Bloco", "Global sempre", "Classe apenas"],
            correctIndex: 1,
            explanation: "let respeita escopo delimitado por blocos."
          }
        ],
        challenge: {
          prompt: "Crie uma constante linguagem com valor 'JavaScript' e exiba no console.",
          hint: "Use const linguagem = 'JavaScript';",
          solution: "const linguagem = 'JavaScript';\nconsole.log(linguagem);",
          validator: (code, output) => /const\s+linguagem/.test(code) && /javascript/i.test(output)
        }
      },
      {
        id: "m1-a3",
        title: "Tipos de dados",
        description:
          "JavaScript possui tipos como string, number, boolean, null, undefined, object e symbol. Entender tipos evita bugs.",
        code: `const nome = "Ana";      // string
const idade = 25;        // number
const ativo = true;      // boolean
console.log(typeof nome, typeof idade, typeof ativo);`,
        quiz: [
          {
            question: "Qual operador mostra o tipo de uma variável?",
            options: ["type", "kindof", "typeof", "isType"],
            correctIndex: 2,
            explanation: "typeof retorna o tipo primitivo da variável."
          },
          {
            question: "Qual destes é boolean?",
            options: ["'true'", "1", "true", "'false'"],
            correctIndex: 2,
            explanation: "true (sem aspas) é boolean."
          },
          {
            question: "Qual tipo representa texto?",
            options: ["number", "string", "boolean", "object"],
            correctIndex: 1,
            explanation: "Textos em JavaScript são strings."
          }
        ],
        challenge: {
          prompt: "Declare uma variável numero com valor 10 e mostre o tipo dela no console.",
          hint: "Use typeof numero dentro de console.log.",
          solution: "let numero = 10;\nconsole.log(typeof numero);",
          validator: (code, output) => /numero/.test(code) && /typeof/.test(code) && /number/i.test(output)
        }
      },
      {
        id: "m1-a4",
        title: "Operadores",
        description:
          "Operadores realizam cálculos e comparações: +, -, *, /, ===, !==, >, <, &&, || entre outros.",
        code: `const a = 10;
const b = 5;
console.log(a + b);   // 15
console.log(a > b);   // true`,
        quiz: [
          {
            question: "Qual operador compara valor e tipo?",
            options: ["==", "=", "===", "!="],
            correctIndex: 2,
            explanation: "=== faz comparação estrita em JavaScript."
          },
          {
            question: "Qual operador representa E lógico?",
            options: ["||", "&&", "!", "??"],
            correctIndex: 1,
            explanation: "&& retorna true quando ambas condições são verdadeiras."
          },
          {
            question: "10 + 5 * 2 resulta em:",
            options: ["30", "20", "25", "15"],
            correctIndex: 1,
            explanation: "Multiplicação ocorre antes da soma."
          }
        ],
        challenge: {
          prompt: "Crie duas variáveis x e y, some-as e mostre o resultado.",
          hint: "Use let x = ...; let y = ...; console.log(x + y);",
          solution: "let x = 8;\nlet y = 2;\nconsole.log(x + y);",
          validator: (code, output) => /x/.test(code) && /y/.test(code) && /\d+/.test(output)
        }
      },
      {
        id: "m1-a5",
        title: "Entrada e saída",
        description:
          "Você pode mostrar mensagens com alert, receber dados com prompt e depurar com console.log.",
        code: `const nome = prompt("Qual seu nome?");
alert("Bem-vindo(a), " + nome);
console.log("Usuário:", nome);`,
        quiz: [
          {
            question: "Qual função exibe caixa de diálogo para entrada?",
            options: ["alert()", "prompt()", "console.log()", "confirm.log()"],
            correctIndex: 1,
            explanation: "prompt() solicita uma entrada do usuário."
          },
          {
            question: "Qual função mostra alerta ao usuário?",
            options: ["print()", "warn()", "alert()", "show()"],
            correctIndex: 2,
            explanation: "alert() abre janela modal de mensagem."
          },
          {
            question: "Onde aparece console.log?",
            options: ["Somente no HTML", "No CSS", "No console do navegador", "No prompt"],
            correctIndex: 2,
            explanation: "console.log exibe dados para depuração."
          }
        ],
        challenge: {
          prompt: "Use prompt para pedir o nome e mostre no console uma mensagem com esse nome.",
          hint: "Capture prompt em uma variável e use console.log.",
          solution: "const nome = prompt('Nome?');\nconsole.log('Olá, ' + nome);",
          validator: (code, output) => /prompt/.test(code) && /console\.log/.test(code) && /ol[aá]/i.test(output)
        }
      }
    ]
  },
  {
    id: "mod-2",
    title: "Módulo 2 - Intermediário",
    lessons: [
      {
        id: "m2-a1",
        title: "Condicionais (if, else, switch)",
        description: "Condicionais tomam decisões no código com base em regras.",
        code: `const nota = 8;
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}`,
        quiz: [
          {
            question: "if é usado para:",
            options: ["Repetição", "Condicional", "Declaração de classe", "Importação"],
            correctIndex: 1,
            explanation: "if executa blocos com base em condição."
          },
          {
            question: "switch é útil quando:",
            options: ["Há vários casos de comparação", "Só existe 1 condição", "Não há condição", "Sempre para loops"],
            correctIndex: 0,
            explanation: "switch melhora legibilidade em múltiplos casos."
          },
          {
            question: "Qual bloco executa quando if é falso?",
            options: ["default", "catch", "else", "finally"],
            correctIndex: 2,
            explanation: "else cobre o caso contrário do if."
          }
        ],
        challenge: {
          prompt: "Crie uma variável idade e mostre 'Maior de idade' se >= 18, senão 'Menor de idade'.",
          hint: "Use if/else e console.log.",
          solution: "let idade = 18;\nif (idade >= 18) {\n  console.log('Maior de idade');\n} else {\n  console.log('Menor de idade');\n}",
          validator: (code, output) => /if/.test(code) && /(Maior|Menor)/i.test(output)
        }
      },
      {
        id: "m2-a2",
        title: "Laços (for, while)",
        description: "Laços repetem instruções até uma condição ser atendida.",
        code: `for (let i = 1; i <= 3; i++) {
  console.log("Volta", i);
}`,
        quiz: [
          {
            question: "Qual laço possui inicialização, condição e incremento juntos?",
            options: ["while", "for", "switch", "if"],
            correctIndex: 1,
            explanation: "for concentra os 3 elementos na declaração."
          },
          {
            question: "while repete enquanto:",
            options: ["A condição for verdadeira", "A condição for falsa", "Sempre", "Nunca"],
            correctIndex: 0,
            explanation: "while depende de condição true."
          },
          {
            question: "Risco comum em laços mal escritos:",
            options: ["Loop infinito", "Erro de sintaxe CSS", "HTML quebrado", "Nada"],
            correctIndex: 0,
            explanation: "Se condição nunca muda, o loop não termina."
          }
        ],
        challenge: {
          prompt: "Use um for para mostrar no console os números de 1 a 5.",
          hint: "for (let i = 1; i <= 5; i++) { ... }",
          solution: "for (let i = 1; i <= 5; i++) {\n  console.log(i);\n}",
          validator: (code, output) => /for/.test(code) && /1/.test(output) && /5/.test(output)
        }
      },
      {
        id: "m2-a3",
        title: "Funções",
        description: "Funções agrupam lógica reutilizável e podem receber parâmetros.",
        code: `function somar(a, b) {
  return a + b;
}
console.log(somar(2, 3));`,
        quiz: [
          {
            question: "Funções servem para:",
            options: ["Repetir HTML", "Reutilizar lógica", "Criar variáveis globais", "Estilizar botões"],
            correctIndex: 1,
            explanation: "Funções evitam repetição e organizam o código."
          },
          {
            question: "Qual palavra retorna um valor?",
            options: ["break", "yield", "return", "send"],
            correctIndex: 2,
            explanation: "return devolve o resultado da função."
          },
          {
            question: "Parâmetros são:",
            options: ["Valores de saída", "Entradas da função", "Comentários", "Tipos fixos"],
            correctIndex: 1,
            explanation: "Parâmetros representam entradas."
          }
        ],
        challenge: {
          prompt: "Crie uma função multiplicar(a, b) que retorne o produto e exiba multiplicar(3,4).",
          hint: "Declare function multiplicar(a, b) { return a * b; }",
          solution: "function multiplicar(a, b) {\n  return a * b;\n}\nconsole.log(multiplicar(3, 4));",
          validator: (code, output) => /function\s+multiplicar/.test(code) && /12/.test(output)
        }
      },
      {
        id: "m2-a4",
        title: "Arrays",
        description: "Arrays armazenam listas de valores em uma única estrutura.",
        code: `const frutas = ["maçã", "banana", "laranja"];
console.log(frutas[0]);
frutas.push("uva");
console.log(frutas.length);`,
        quiz: [
          {
            question: "Qual método adiciona item ao final do array?",
            options: ["pop()", "shift()", "push()", "slice()"],
            correctIndex: 2,
            explanation: "push adiciona no fim do array."
          },
          {
            question: "Índice do primeiro elemento em array:",
            options: ["1", "-1", "0", "depende"],
            correctIndex: 2,
            explanation: "Arrays em JS começam no índice 0."
          },
          {
            question: "Qual propriedade retorna o tamanho do array?",
            options: ["size", "count", "length", "items"],
            correctIndex: 2,
            explanation: "length retorna quantidade de elementos."
          }
        ],
        challenge: {
          prompt: "Crie um array numeros com 3 valores e mostre o tamanho dele no console.",
          hint: "Use numeros.length no console.log.",
          solution: "const numeros = [10, 20, 30];\nconsole.log(numeros.length);",
          validator: (code, output) => /(\[.*\])/.test(code) && /length/.test(code) && /\d+/.test(output)
        }
      },
      {
        id: "m2-a5",
        title: "Objetos",
        description: "Objetos agrupam dados em pares chave-valor.",
        code: `const aluno = {
  nome: "Carlos",
  idade: 19
};
console.log(aluno.nome);`,
        quiz: [
          {
            question: "Objetos são formados por:",
            options: ["Linhas e colunas", "Chave e valor", "Somente arrays", "Tags HTML"],
            correctIndex: 1,
            explanation: "Objetos organizam dados por chave e valor."
          },
          {
            question: "Como acessar propriedade nome em obj?",
            options: ["obj(nome)", "obj[nome sem aspas]", "obj.nome", "obj->nome"],
            correctIndex: 2,
            explanation: "Notação de ponto é a mais comum."
          },
          {
            question: "Qual estrutura usa chaves { }?",
            options: ["Array", "Objeto", "String", "Boolean"],
            correctIndex: 1,
            explanation: "Objetos literais usam chaves."
          }
        ],
        challenge: {
          prompt: "Crie um objeto carro com marca e ano e mostre a marca no console.",
          hint: "const carro = { marca: '...', ano: 2024 };",
          solution: "const carro = { marca: 'Tesla', ano: 2024 };\nconsole.log(carro.marca);",
          validator: (code, output) => /\{/.test(code) && /carro/.test(code) && /[A-Za-z]/.test(output)
        }
      }
    ]
  },
  {
    id: "mod-3",
    title: "Módulo 3 - Avançado",
    lessons: [
      {
        id: "m3-a1",
        title: "DOM (manipulação de elementos)",
        description: "O DOM representa os elementos da página e pode ser alterado via JavaScript.",
        code: `const titulo = document.querySelector("h1");
titulo.textContent = "Título alterado com JavaScript!";`,
        quiz: [
          {
            question: "DOM significa:",
            options: ["Data Object Manager", "Document Object Model", "Digital Order Method", "Document Output Mode"],
            correctIndex: 1,
            explanation: "DOM é o modelo de objetos do documento HTML."
          },
          {
            question: "Qual método seleciona o primeiro elemento que combina com seletor?",
            options: ["getElementAll", "querySelector", "selectOne", "findElement"],
            correctIndex: 1,
            explanation: "querySelector usa seletores CSS."
          },
          {
            question: "textContent altera:",
            options: ["Somente classe", "Conteúdo textual", "Tamanho da fonte", "URL da página"],
            correctIndex: 1,
            explanation: "textContent atualiza texto interno do elemento."
          }
        ],
        challenge: {
          prompt: "Selecione o body e mude a cor de fundo para '#111827'.",
          hint: "Use document.querySelector('body').style.background = ...",
          solution: "document.querySelector('body').style.background = '#111827';\nconsole.log('fundo alterado');",
          validator: (code, output) => /querySelector\(['"]body['"]\)/.test(code) && /fundo alterado/i.test(output)
        }
      },
      {
        id: "m3-a2",
        title: "Eventos",
        description: "Eventos permitem reagir às ações do usuário como clique, teclado e envio de formulários.",
        code: `const botao = document.querySelector("#meuBotao");
botao.addEventListener("click", () => {
  console.log("Clicou!");
});`,
        quiz: [
          {
            question: "Qual método escuta eventos?",
            options: ["listenEvent()", "addEventListener()", "on()", "watch()"],
            correctIndex: 1,
            explanation: "addEventListener associa evento a elemento."
          },
          {
            question: "Evento de clique é:",
            options: ["hover", "submit", "click", "changeColor"],
            correctIndex: 2,
            explanation: "click dispara ao clicar no elemento."
          },
          {
            question: "Eventos ajudam a:",
            options: ["Ignorar usuário", "Criar interatividade", "Remover HTML", "Compilar JS"],
            correctIndex: 1,
            explanation: "Eventos tornam interfaces reativas."
          }
        ],
        challenge: {
          prompt: "Crie um botão via JavaScript, adicione ao body e mostre 'clicou' no console ao clicar.",
          hint: "document.createElement, addEventListener e appendChild.",
          solution: "const btn = document.createElement('button');\nbtn.textContent = 'Clique';\nbtn.addEventListener('click', () => console.log('clicou'));\ndocument.body.appendChild(btn);\nconsole.log('botao criado');",
          validator: (code, output) => /createElement/.test(code) && /(botao criado|clicou)/i.test(output)
        }
      },
      {
        id: "m3-a3",
        title: "Fetch API",
        description: "Fetch permite fazer requisições HTTP para APIs e trabalhar com dados externos.",
        code: `fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((res) => res.json())
  .then((data) => console.log(data.name))
  .catch((err) => console.error(err));`,
        quiz: [
          {
            question: "fetch retorna inicialmente:",
            options: ["string", "Promise", "array", "boolean"],
            correctIndex: 1,
            explanation: "fetch é assíncrono e retorna Promise."
          },
          {
            question: "Para converter resposta em JSON usamos:",
            options: ["res.toObject()", "res.parse()", "res.json()", "res.data()"],
            correctIndex: 2,
            explanation: "res.json() converte corpo para objeto JS."
          },
          {
            question: "Qual bloco trata erros?",
            options: ["except", "catch", "error", "throwOnly"],
            correctIndex: 1,
            explanation: "catch captura rejeições da Promise."
          }
        ],
        challenge: {
          prompt: "Faça um fetch para jsonplaceholder e mostre no console o title do primeiro post.",
          hint: "Endpoint: /posts/1 e use .then(res => res.json()).",
          solution: "fetch('https://jsonplaceholder.typicode.com/posts/1')\n  .then((res) => res.json())\n  .then((data) => console.log(data.title));",
          validator: (code, output) => /fetch/.test(code) && /(sunt|title|qui)/i.test(output)
        }
      },
      {
        id: "m3-a4",
        title: "Promises e async/await",
        description: "Promises representam operações assíncronas. async/await simplifica o consumo dessas operações.",
        code: `async function carregarUsuario() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users/2");
    const data = await res.json();
    console.log(data.name);
  } catch (erro) {
    console.error(erro);
  }
}
carregarUsuario();`,
        quiz: [
          {
            question: "async/await é usado para:",
            options: ["Estilizar DOM", "Tratar assincronismo", "Criar arrays", "Ignorar erros"],
            correctIndex: 1,
            explanation: "async/await deixa código assíncrono mais legível."
          },
          {
            question: "await só pode ser usado em função:",
            options: ["normal", "arrow sem async", "async", "switch"],
            correctIndex: 2,
            explanation: "await exige contexto async."
          },
          {
            question: "try/catch em async ajuda a:",
            options: ["Formatar CSS", "Tratar erros", "Criar classes", "Desenhar interface"],
            correctIndex: 1,
            explanation: "catch captura falhas em operações await."
          }
        ],
        challenge: {
          prompt: "Crie uma função async chamada testeAsync que retorne 'ok' e mostre o resultado.",
          hint: "async function ... return 'ok'; e depois use .then ou await.",
          solution: "async function testeAsync() {\n  return 'ok';\n}\ntesteAsync().then((r) => console.log(r));",
          validator: (code, output) => /async function testeAsync/.test(code) && /ok/i.test(output)
        }
      },
      {
        id: "m3-a5",
        title: "Projeto final interativo",
        description:
          "Junte conhecimentos de variáveis, funções, DOM e eventos criando um mini app interativo no navegador.",
        code: `const app = document.createElement("div");
app.innerHTML = "<h3>Contador</h3><button id='inc'>+1</button><p id='num'>0</p>";
document.body.appendChild(app);
let n = 0;
document.querySelector("#inc").addEventListener("click", () => {
  n++;
  document.querySelector("#num").textContent = n;
});`,
        quiz: [
          {
            question: "Projeto final deve integrar:",
            options: ["Apenas CSS", "Apenas HTML", "Conceitos combinados de JS", "Somente API"],
            correctIndex: 2,
            explanation: "A proposta é consolidar os principais tópicos."
          },
          {
            question: "Qual conceito é essencial para interatividade?",
            options: ["Eventos", "Comentários", "Semântica de CSS", "Variáveis globais obrigatórias"],
            correctIndex: 0,
            explanation: "Eventos conectam ações do usuário ao código."
          },
          {
            question: "Qual é um bom objetivo de projeto final?",
            options: ["Copiar sem entender", "Integrar e praticar", "Evitar testes", "Esconder código"],
            correctIndex: 1,
            explanation: "A aprendizagem consolida com prática orientada."
          }
        ],
        challenge: {
          prompt: "Crie um mini contador com botão e valor exibido no console a cada clique.",
          hint: "Use variável para estado, botão com addEventListener e console.log.",
          solution: "let contador = 0;\nconst btn = document.createElement('button');\nbtn.textContent = '+1';\nbtn.addEventListener('click', () => {\n  contador += 1;\n  console.log(contador);\n});\ndocument.body.appendChild(btn);\nconsole.log('contador pronto');",
          validator: (code, output) => /(contador|count)/i.test(code) && /(pronto|\d+)/i.test(output)
        }
      }
    ]
  }
];

const state = {
  selectedLessonId: null,
  completedLessons: [],
  score: 0,
  quizDoneByLesson: {},
  challengeDoneByLesson: {}
};

const ui = {
  moduleNav: document.getElementById("moduleNav"),
  lessonTitle: document.getElementById("lessonTitle"),
  lessonDescription: document.getElementById("lessonDescription"),
  lessonCode: document.getElementById("lessonCode"),
  quizForm: document.getElementById("quizForm"),
  submitQuizBtn: document.getElementById("submitQuizBtn"),
  quizFeedback: document.getElementById("quizFeedback"),
  challengeText: document.getElementById("challengeText"),
  challengeHelper: document.getElementById("challengeHelper"),
  hintBtn: document.getElementById("hintBtn"),
  solutionBtn: document.getElementById("solutionBtn"),
  codeEditor: document.getElementById("codeEditor"),
  runCodeBtn: document.getElementById("runCodeBtn"),
  runChallengeBtn: document.getElementById("runChallengeBtn"),
  outputPanel: document.getElementById("outputPanel"),
  markCompletedBtn: document.getElementById("markCompletedBtn"),
  progressBar: document.getElementById("progressBar"),
  progressText: document.getElementById("progressText"),
  scoreValue: document.getElementById("scoreValue"),
  levelValue: document.getElementById("levelValue"),
  completedValue: document.getElementById("completedValue"),
  motivationalMessage: document.getElementById("motivationalMessage"),
  resetProgressBtn: document.getElementById("resetProgressBtn")
};

const lessonsMap = {};
courseData.forEach((module) => {
  module.lessons.forEach((lesson) => {
    lessonsMap[lesson.id] = lesson;
  });
});

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function loadState() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return;
  try {
    const parsed = JSON.parse(saved);
    state.selectedLessonId = parsed.selectedLessonId || null;
    state.completedLessons = Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [];
    state.score = Number.isFinite(parsed.score) ? parsed.score : 0;
    state.quizDoneByLesson = parsed.quizDoneByLesson || {};
    state.challengeDoneByLesson = parsed.challengeDoneByLesson || {};
  } catch (error) {
    console.warn("Falha ao carregar progresso:", error);
  }
}

function getTotalLessons() {
  return courseData.reduce((total, module) => total + module.lessons.length, 0);
}

function calculateProgress() {
  const total = getTotalLessons();
  const done = state.completedLessons.length;
  return Math.round((done / total) * 100);
}

function getLevelFromScore(score) {
  return Math.max(1, Math.floor(score / 120) + 1);
}

function getMotivationalMessage(progress) {
  if (progress >= 100) return "Incrível! Curso completo. Você dominou muitos conceitos!";
  if (progress >= 75) return "Quase lá! Seu nível está avançando muito rápido.";
  if (progress >= 50) return "Excelente ritmo! Continue praticando os desafios.";
  if (progress >= 25) return "Bom progresso! Cada aula concluída te aproxima do objetivo.";
  return "Comece agora e desbloqueie seu potencial!";
}

function renderNav() {
  ui.moduleNav.innerHTML = "";

  courseData.forEach((module) => {
    const group = document.createElement("div");
    group.className = "module-group";

    const title = document.createElement("h4");
    title.className = "module-title";
    title.textContent = module.title;
    group.appendChild(title);

    module.lessons.forEach((lesson) => {
      const button = document.createElement("button");
      button.className = "lesson-btn";
      if (lesson.id === state.selectedLessonId) button.classList.add("active");
      if (state.completedLessons.includes(lesson.id)) button.classList.add("done");
      button.textContent = lesson.title;
      button.addEventListener("click", () => selectLesson(lesson.id));
      group.appendChild(button);
    });

    ui.moduleNav.appendChild(group);
  });
}

function renderQuiz(lesson) {
  ui.quizForm.innerHTML = "";
  ui.quizFeedback.className = "feedback-box";
  ui.quizFeedback.textContent = "Responda e clique em corrigir para receber feedback imediato.";
  ui.submitQuizBtn.disabled = false;

  lesson.quiz.forEach((item, qIndex) => {
    const questionWrap = document.createElement("div");
    questionWrap.className = "question";

    const title = document.createElement("p");
    title.textContent = `${qIndex + 1}. ${item.question}`;
    questionWrap.appendChild(title);

    item.options.forEach((option, oIndex) => {
      const id = `${lesson.id}-q${qIndex}-o${oIndex}`;
      const label = document.createElement("label");
      label.setAttribute("for", id);
      label.innerHTML = `<input type="radio" id="${id}" name="q-${qIndex}" value="${oIndex}"> ${option}`;
      questionWrap.appendChild(label);
    });

    ui.quizForm.appendChild(questionWrap);
  });
}

function selectLesson(lessonId) {
  const lesson = lessonsMap[lessonId];
  if (!lesson) return;

  state.selectedLessonId = lessonId;
  saveState();
  renderNav();

  ui.lessonTitle.textContent = lesson.title;
  ui.lessonDescription.textContent = lesson.description;
  ui.lessonCode.textContent = lesson.code;
  ui.challengeText.textContent = lesson.challenge.prompt;
  ui.challengeHelper.className = "feedback-box";
  ui.challengeHelper.textContent = "Use dica e resposta apenas quando precisar.";
  ui.codeEditor.value = lesson.code;
  ui.outputPanel.textContent = "A saída aparecerá aqui...";

  ui.hintBtn.disabled = false;
  ui.solutionBtn.disabled = false;
  ui.runChallengeBtn.disabled = false;
  ui.markCompletedBtn.disabled = false;

  renderQuiz(lesson);
}

function markLessonCompleted() {
  const lessonId = state.selectedLessonId;
  if (!lessonId) return;

  if (!state.completedLessons.includes(lessonId)) {
    state.completedLessons.push(lessonId);
    state.score += 30;
    ui.challengeHelper.className = "feedback-box success";
    ui.challengeHelper.textContent = "Aula concluída! +30 pontos.";
  } else {
    ui.challengeHelper.className = "feedback-box";
    ui.challengeHelper.textContent = "Esta aula já estava marcada como concluída.";
  }

  saveState();
  renderNav();
  renderStats();
}

function submitQuiz() {
  const lesson = lessonsMap[state.selectedLessonId];
  if (!lesson) return;

  let correct = 0;
  const detail = [];
  let unanswered = false;

  lesson.quiz.forEach((item, qIndex) => {
    const selected = ui.quizForm.querySelector(`input[name="q-${qIndex}"]:checked`);
    if (!selected) {
      unanswered = true;
      detail.push(`Pergunta ${qIndex + 1}: não respondida.`);
      return;
    }

    const selectedIndex = Number(selected.value);
    const isCorrect = selectedIndex === item.correctIndex;
    if (isCorrect) {
      correct += 1;
      detail.push(`Pergunta ${qIndex + 1}: correta.`);
    } else {
      const correctText = item.options[item.correctIndex];
      detail.push(
        `Pergunta ${qIndex + 1}: incorreta. Resposta correta: "${correctText}". ${item.explanation}`
      );
    }
  });

  if (unanswered) {
    ui.quizFeedback.className = "feedback-box error";
    ui.quizFeedback.innerHTML = `Responda todas as perguntas antes de corrigir.<br>${detail.join("<br>")}`;
    return;
  }

  const wasDone = Boolean(state.quizDoneByLesson[lesson.id]);
  if (!wasDone) {
    state.score += correct * 20;
    state.quizDoneByLesson[lesson.id] = true;
  }

  const total = lesson.quiz.length;
  const passed = correct >= Math.ceil(total * 0.6);
  ui.quizFeedback.className = `feedback-box ${passed ? "success" : "error"}`;
  ui.quizFeedback.innerHTML = `Você acertou ${correct} de ${total}.<br>${detail.join("<br>")}`;

  if (passed && !state.completedLessons.includes(lesson.id)) {
    state.completedLessons.push(lesson.id);
    ui.quizFeedback.innerHTML += "<br><strong>Aula marcada automaticamente como concluída.</strong>";
    state.score += 10;
  }

  saveState();
  renderNav();
  renderStats();
}

function runUserCode() {
  const userCode = ui.codeEditor.value;
  let output = [];

  const customConsole = {
    log: (...args) => output.push(args.map(String).join(" ")),
    error: (...args) => output.push(`ERRO: ${args.map(String).join(" ")}`),
    warn: (...args) => output.push(`AVISO: ${args.map(String).join(" ")}`)
  };

  const safePrompt = (msg) => {
    output.push(`prompt("${msg}") -> [simulado: "Aluno"]`);
    return "Aluno";
  };
  const safeAlert = (msg) => output.push(`alert: ${msg}`);

  try {
    const wrapped = new Function("console", "prompt", "alert", userCode);
    wrapped(customConsole, safePrompt, safeAlert);
    if (output.length === 0) output.push("Código executado sem saída no console.");
    ui.outputPanel.textContent = output.join("\n");
    return { ok: true, output: output.join("\n") };
  } catch (error) {
    ui.outputPanel.textContent = `Erro ao executar código: ${error.message}`;
    return { ok: false, output: String(error.message) };
  }
}

function validateChallenge() {
  const lesson = lessonsMap[state.selectedLessonId];
  if (!lesson) return;

  const runResult = runUserCode();
  const validator = lesson.challenge.validator;
  const passed = validator(ui.codeEditor.value, runResult.output);

  if (passed) {
    const alreadyWon = Boolean(state.challengeDoneByLesson[lesson.id]);
    ui.challengeHelper.className = "feedback-box success";
    ui.challengeHelper.textContent = alreadyWon
      ? "Desafio correto novamente! Excelente consistência."
      : "Desafio concluído com sucesso! +40 pontos.";
    if (!alreadyWon) {
      state.challengeDoneByLesson[lesson.id] = true;
      state.score += 40;
      if (!state.completedLessons.includes(lesson.id)) state.completedLessons.push(lesson.id);
    }
  } else {
    ui.challengeHelper.className = "feedback-box error";
    ui.challengeHelper.textContent =
      "Ainda não passou no desafio. Revise a lógica e confira a saída. Dica: valide nomes de variáveis, estruturas e mensagens esperadas.";
  }

  saveState();
  renderNav();
  renderStats();
}

function showHint() {
  const lesson = lessonsMap[state.selectedLessonId];
  if (!lesson) return;
  ui.challengeHelper.className = "feedback-box";
  ui.challengeHelper.textContent = `Dica: ${lesson.challenge.hint}`;
}

function showSolution() {
  const lesson = lessonsMap[state.selectedLessonId];
  if (!lesson) return;
  ui.challengeHelper.className = "feedback-box";
  ui.challengeHelper.textContent = `Resposta sugerida:\n${lesson.challenge.solution}`;
}

function renderStats() {
  const progress = calculateProgress();
  const level = getLevelFromScore(state.score);

  ui.progressBar.style.width = `${progress}%`;
  ui.progressText.textContent = `${progress}%`;
  ui.scoreValue.textContent = String(state.score);
  ui.levelValue.textContent = String(level);
  ui.completedValue.textContent = String(state.completedLessons.length);
  ui.motivationalMessage.textContent = getMotivationalMessage(progress);
}

function resetProgress() {
  localStorage.removeItem(STORAGE_KEY);
  state.selectedLessonId = null;
  state.completedLessons = [];
  state.score = 0;
  state.quizDoneByLesson = {};
  state.challengeDoneByLesson = {};
  renderNav();
  renderStats();

  ui.lessonTitle.textContent = "Selecione uma aula";
  ui.lessonDescription.textContent = "Escolha um módulo e uma aula para começar.";
  ui.lessonCode.textContent = "// O exemplo aparecerá aqui.";
  ui.quizForm.innerHTML = "";
  ui.quizFeedback.className = "feedback-box";
  ui.quizFeedback.textContent = "";
  ui.challengeText.textContent = "Selecione uma aula para ver o desafio.";
  ui.challengeHelper.className = "feedback-box";
  ui.challengeHelper.textContent = "";
  ui.codeEditor.value = "// Digite seu código JavaScript aqui.";
  ui.outputPanel.textContent = "A saída aparecerá aqui...";
  ui.submitQuizBtn.disabled = true;
  ui.hintBtn.disabled = true;
  ui.solutionBtn.disabled = true;
  ui.runChallengeBtn.disabled = true;
  ui.markCompletedBtn.disabled = true;
}

function init() {
  loadState();
  renderNav();
  renderStats();

  ui.submitQuizBtn.addEventListener("click", submitQuiz);
  ui.markCompletedBtn.addEventListener("click", markLessonCompleted);
  ui.runCodeBtn.addEventListener("click", runUserCode);
  ui.runChallengeBtn.addEventListener("click", validateChallenge);
  ui.hintBtn.addEventListener("click", showHint);
  ui.solutionBtn.addEventListener("click", showSolution);
  ui.resetProgressBtn.addEventListener("click", resetProgress);

  if (state.selectedLessonId) selectLesson(state.selectedLessonId);
}

init();
