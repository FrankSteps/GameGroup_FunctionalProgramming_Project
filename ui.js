//importa a bilbioteca "lib.js" para ser trabalhada neste arquivo
import { playground } from "./lib.js";

//========dados e elementos==========

//carrega os jogos salvos do JS
let games = playground.loadGames();
//salva os jogos do LS
playground.saveGames(games);
//Seleciona elementos HTML que serão manipulados pelo JavaScript
const output = document.getElementById("output");
const forms = document.getElementById("forms");
const buttons = document.getElementById("buttons");

// ===== Forms =====
// Cada função abaixo cria dinamicamente um formulário e adiciona
// eventos de "submit" para executar a ação correspondente no playground.

// --- Formulário de adicionar jogo ---
function showAddForm() {
  // Preenche a div "forms" com o HTML do formulário de adição de jogo
  forms.innerHTML = `
    <h3>Adicionar jogo</h3>
    <form id="addForm">
      <input type="number" id="addId" placeholder="ID" required />
      <input type="text" id="addNome" placeholder="Nome" required />
      <input type="text" id="addPreco" placeholder="Preço" required />
      <input type="text" id="addDesenvolvedora" placeholder="Desenvolvedora" required />
      <input type="number" id="addAnoDeLancamento" placeholder="Ano" required />
      <input type="text" id="addTag1" placeholder="Tag 1" required />
      <input type="text" id="addTag2" placeholder="Tag 2" required />
      <input type="text" id="addTag3" placeholder="Tag 3" required />
      <button type="submit">Adicionar</button>
    </form>
  `;

  // Quando o formulário é enviado
  document.getElementById('addForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const newGame = {
      id: Number(document.getElementById('addId').value),
      nome: document.getElementById('addNome').value,
      preco: document.getElementById('addPreco').value,
      desenvolvedora: document.getElementById('addDesenvolvedora').value,
      anoDeLancamento: Number(document.getElementById('addAnoDeLancamento').value),
      tags: [
        document.getElementById('addTag1').value,
        document.getElementById('addTag2').value,
        document.getElementById('addTag3').value
      ]
    };
    //comentar aqui()
    games = playground.addGame(
      newGame.id,
      newGame.nome,
      newGame.desenvolvedora,
      newGame.anoDeLancamento,
      newGame.preco,
      newGame.tags,
      games
    ); // Chama a função da lib
    playground.saveGames(games); // Salva no localStorage
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = 'Jogo adicionado!';
  });
}

//---------formulario de atualizar jogo----------
// bloco responsável para preencher a div "forms" com o formulário para atualizar um jogo existente
function showUpdateForm() {
  forms.innerHTML = `
    <h3>Atualizar jogo</h3>
    <form id="updateForm">
      <input type="number" id="updateId" placeholder="ID do jogo a ser atualizado" required />
      <input type="text" id="updateNome" placeholder="Novo Nome" required />
      <input type="text" id="updatePreco" placeholder="Novo Preço" required />
      <input type="text" id="updateDesenvolvedora" placeholder="Nova Desenvolvedora" required />
      <input type="number" id="updateAnoDeLancamento" placeholder="Novo Ano" required />
      <input type="text" id="updateTag1" placeholder="Nova Tag 1" required />
      <input type="text" id="updateTag2" placeholder="Nova Tag 2" required />
      <input type="text" id="updateTag3" placeholder="Nova Tag 3" required />
      <button type="submit">Atualizar</button>
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('updateForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const updatedGame = {
      id: Number(document.getElementById('updateId').value),
      nome: document.getElementById('updateNome').value,
      preco: document.getElementById('updatePreco').value,
      desenvolvedora: document.getElementById('updateDesenvolvedora').value,
      anoDeLancamento: Number(document.getElementById('updateAnoDeLancamento').value),
      tags: [
        document.getElementById('updateTag1').value,
        document.getElementById('updateTag2').value,
        document.getElementById('updateTag3').value
      ]
    };
    // Atualiza as informações do jogo, salva no localStorage, limpa o formulário e mostra mensagem de confirmação
    games = playground.updateGame(
      updatedGame.id,
      updatedGame.nome,
      updatedGame.desenvolvedora,
      updatedGame.anoDeLancamento,
      updatedGame.preco,
      updatedGame.tags,
      games
    ); // Chama a função da lib
    playground.saveGames(games); // Salva no localStorage
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = 'Jogo atualizado!';
  });
}

//---------formulario de deletar jogo----------
function showDeleteForm() {
  forms.innerHTML = `
    <h3>Deletar jogo</h3>
    <form id="deleteForm">
      <input type="number" id="deleteId" placeholder="ID do jogo a ser deletado" required />
      <button type="submit">Deletar</button>
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('deleteForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const idToDelete = Number(document.getElementById('deleteId').value);
    games = playground.deleteGame(idToDelete, games); // Chama a função da lib
    playground.saveGames(games); // Salva no localStorage
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = 'Jogo deletado!';
  });
}

//---------formulario de listar jogo por desenvolvedora----------
function showListByDeveloperForm() {
  forms.innerHTML = `
    <h3>Listar jogos por desenvolvedora</h3>
    <form id="listByDevForm">
      <input type="text" id="listDev" placeholder="Nome da desenvolvedora" required />
      <button type="submit">Listar</button>
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('listByDevForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const desenvolvedora = document.getElementById('listDev').value;
    const results = playground.listByDev(desenvolvedora, games); // Chama a função da lib
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = results.length ? playground.basicFormat(results).join('\n') : 'Nenhum jogo encontrado para esta desenvolvedora.';
  });
}

//---------formulario de listar jogo por período de lançamento----------
function showListByYearForm() {
  forms.innerHTML = `
    <h3>Listar jogos por período de lançamento</h3>
    <form id="listByYearForm">
      <input type="number" id="startYear" placeholder="Ano inicial" required />
      <input type="number" id="endYear" placeholder="Ano final" required />
      <button type="submit">Listar</button>
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('listByYearForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const startYear = Number(document.getElementById('startYear').value);
    const endYear = Number(document.getElementById('endYear').value);
    const results = playground.listByPeriod(startYear, endYear, games); // Chama a função da lib
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = results.length ? playground.basicFormat(results).join('\n') : 'Nenhum jogo encontrado neste período.';
  });
}

//---------formulario de listar jogo por faixa de preço----------
function showListByPriceForm() {
  forms.innerHTML = `
    <h3>Listar jogos por faixa de preço</h3>
    <form id="listByPriceForm">
      <input type="number" step="0.01" id="minPrice" placeholder="Preço mínimo" required />
      <input type="number" step="0.01" id="maxPrice" placeholder="Preço máximo" required />
      <button type="submit">Listar</button>
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('listByPriceForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const minPrice = parseFloat(document.getElementById('minPrice').value);
    const maxPrice = parseFloat(document.getElementById('maxPrice').value);
    const results = playground.listByPrice(minPrice, maxPrice, games); // Chama a função da lib
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = results.length ? playground.basicFormat(results).join('\n') : 'Nenhum jogo encontrado nesta faixa de preço.';
  });
}

//---------formulario de listar jogo por paridade de tag----------
function showListByTagForm() {
  forms.innerHTML = `
    <h3>Listar jogos por paridade de tag</h3>
    <form id="listByTagForm">
      <input type="text" id="tag" placeholder="Tag" required />
      <input type="number" id="proximity" placeholder="Proximidade (mínimo de tags iguais)" value="1" min="1" max="3" required />
      <input type="number" id="gameId" placeholder="ID do jogo base" required />
      <button type="submit">Listar</button>
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('listByTagForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const proximity = Number(document.getElementById('proximity').value);
    const gameId = Number(document.getElementById('gameId').value);
    const game = games.find(g => g.id === gameId);
    if (!game) {
      output.textContent = 'Jogo base não encontrado.';
      forms.innerHTML = '';
      return;
    }
    const results = playground.listTagParriedGames(proximity, game, games); // Chama a função da lib
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = results.length ? playground.basicFormat(results).join('\n') : 'Nenhum jogo encontrado com esta paridade de tag.';
  });
}
//=====Busca de metadados de Jogos na API=====
const fetchGameInfo = async (gameName) => {
  try {
    const treatedName = gameName.toLowerCase().split(" ").join('-');
    const API_KEY = '5de4e0ded38e4a709c39d47f89b869de';

    const response = await fetch(`https://api.rawg.io/api/games/${encodeURIComponent(treatedName)}?key=${API_KEY}`);
    
    if (!response.ok) {
      throw new Error(`Erro na resposta da API: ${response.status}`);
    }

    const data = await response.json();

    if (data && data.name) {
      return data;
    }
  } catch (error) {
    return null;
  }
};

//========actions==========
// Dicionário que associa cada ação a uma função
const action = {
  init : () => {
    games = playground.resetGames();
    playground.saveGames(games);
  },
  list : () => { forms.innerHTML = ''; output.innerHTML = games.map(game => `
    <div style="display: inline-flex; align-items: center; gap: 8px; margin: 2px 0;">   
      <button class="view-btn" data-title="${game.nome}">${playground.basicFormat([game])[0]}</button>
    </div>
    `).join('');
  // Adiciona evento aos jogos(botões)
  document.querySelectorAll('.view-btn').forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const title = e.target.dataset.title;
      const info = await fetchGameInfo(title);
      if (info) {
        output.innerHTML = `
          <h3>${info.name}</h3>
          <b>Avaliado em:</b> ${info.rating}/5<br>
          <b>Ano de Lançamento:</b> ${info.released}<br>
          <b>Desenvolvido por:</b> ${info.developers[0].name}<br>
          <b>Tempo de jogo:</b> ${info.playtime} horas<br>
          ${info.background_image ? `<img src="${info.background_image}" alt="Imagem de Fundo" width="701" height="394">` : "Sem Imagem de Fundo disponível"}
        `;
      } else {
        output.innerHTML = `<p>Nenhuma informação encontrada para "${title}"</p>`;
      }
    });
  });
},
  // Associa cada ação do menu a uma função que exibe o formulário ou executa a ação conveniente
  add : () => showAddForm(),
  update : () => showUpdateForm(),
  delete : () => showDeleteForm(),
  listByDeveloper : () => showListByDeveloperForm(),
  listByYear : () => showListByYearForm(),
  listByPrice : () => showListByPriceForm(),
  listByTag : () => showListByTagForm(),
  exit : () => {
    buttons.innerHTML = '<h3 class="fim">Obrigado pela visita!</h3><h4 class="fim">(Sessão Finalizada)</h4>'; 
  }
}

//========event listeners==========
// Adiciona um listener para cada botão que chama a função correspondente
buttons.querySelectorAll('button').forEach(button => {
  button.addEventListener('click', () => {
    const actionName = button.getAttribute('data-action');
    if (action[actionName]) {
      action[actionName]();
    }
  });
});
