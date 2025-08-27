import { playground } from "./lib";

//========dados e elementos==========

//carrega os jogos salvos do LS
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
  forms.innerHTML = `
    <h3>Adicionar jogo</h3>
    <form id="addForm">
      <input type="number" id="addId" placeholder="ID" required />
      <input type="text" id="addTitle" placeholder="Título" required />
      <imput tipe="text" id="addPrice" placeholder="Preço" required />
      <input type="text" id="addDeveloper" placeholder="Desenvolvedor" required />
      <input type="number" id="addYear" placeholder="Ano" required />
      <input type="text" id="addTag1" placeholder="Tag 1" required />
      <input type="text" id="addTag2" placeholder="Tag 2" required />
      <input type="text" id="addTag3" placeholder="Tag 3" required />
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('addForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const newGame = {
      id: Number(document.getElementById('addId').value),
      title: document.getElementById('addTitle').value,
      price: document.getElementById('addPrice').value,
      developer: document.getElementById('addDeveloper').value,
      year: Number(document.getElementById('addYear').value),
      tags: [
        document.getElementById('addTag1').value,
        document.getElementById('addTag2').value,
        document.getElementById('addTag3').value
      ]
    };
    games = playground.addGame(newGame.id, newGame.title, newGame.price, newGame.developer, newGame.year, newGame.tags, games); // Chama a função da lib
    playground.saveGames(games); // Salva no localStorage
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = 'jogo adicionado!';
  });
}

//---------formulario de atualizar jogo----------
function showUpdateForm() {
  forms.innerHTML = `
    <h3>Atualizar jogo</h3>
    <form id="updateForm">
      <input type="number" id="updateId" placeholder="ID do jogo a ser atualizado" required />
      <input type="text" id="updateTitle" placeholder="Novo Título" required />
      <imput tipe="text" id="updatePrice" placeholder="Novo Preço" required />
      <input type="text" id="updateDeveloper" placeholder="Novo Desenvolvedor" required />
      <input type="number" id="updateYear" placeholder="Novo Ano" required />
      <input type="text" id="updateTag1" placeholder="Nova Tag 1" required />
      <input type="text" id="updateTag2" placeholder="Nova Tag 2" required />
      <input type="text" id="updateTag3" placeholder="Nova Tag 3" required />
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('updateForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const updatedGame = {
      id: Number(document.getElementById('updateId').value),
      title: document.getElementById('updateTitle').value,
      price: document.getElementById('updatePrice').value,
      developer: document.getElementById('updateDeveloper').value,
      year: Number(document.getElementById('updateYear').value),
      tags: [
        document.getElementById('updateTag1').value,
        document.getElementById('updateTag2').value,
        document.getElementById('updateTag3').value
      ]
    };
    games = playground.updateGame(updatedGame.id, updatedGame.title, updatedGame.price, updatedGame.developer, updatedGame.year, updatedGame.tags, games); // Chama a função da lib
    playground.saveGames(games); // Salva no localStorage
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = 'jogo atualizado!';
  });
}

//---------formulario de deletar jogo----------
function showDeleteForm() {
  forms.innerHTML = `
    <h3>Deletar jogo</h3>
    <form id="deleteForm">
      <input type="number" id="deleteId" placeholder="ID do jogo a ser deletado" required />
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('deleteForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const idToDelete = Number(document.getElementById('deleteId').value);
    games = playground.deleteGame(idToDelete, games); // Chama a função da lib
    playground.saveGames(games); // Salva no localStorage
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = 'jogo deletado!';
  });
}

//---------formulario de listar jogo por desenvoldedor----------
function showListByDeveloperForm() {
  forms.innerHTML = `
    <h3>Listar jogos por desenvolvedor</h3>
    <form id="listByDevForm">
      <input type="text" id="listDev" placeholder="Nome do desenvolvedor" required />
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('listByDevForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const developer = document.getElementById('listDev').value;
    const results = playground.listGamesByDeveloper(developer, games); // Chama a função da lib
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = results.length ? JSON.stringify(results, null, 2) : 'Nenhum jogo encontrado para este desenvolvedor.';
  });
}

//---------formulario de listar jogo por período de lançamento----------
function showListByYearForm() {
  forms.innerHTML = `
    <h3>Listar jogos por período de lançamento</h3>
    <form id="listByYearForm">
      <input type="number" id="startYear" placeholder="Ano inicial" required />
      <input type="number" id="endYear" placeholder="Ano final" required />
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('listByYearForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const startYear = Number(document.getElementById('startYear').value);
    const endYear = Number(document.getElementById('endYear').value);
    const results = playground.listGamesByReleasePeriod(startYear, endYear, games); // Chama a função da lib
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = results.length ? JSON.stringify(results, null, 2) : 'Nenhum jogo encontrado neste período.';
  });
}

//---------formulario de listar jogo por faixa de preço----------
function showListByPriceForm() {
  forms.innerHTML = `
    <h3>Listar jogos por faixa de preço</h3>
    <form id="listByPriceForm">
      <input type="number" step="0.01" id="minPrice" placeholder="Preço mínimo" required />
      <input type="number" step="0.01" id="maxPrice" placeholder="Preço máximo" required />
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('listByPriceForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const minPrice = parseFloat(document.getElementById('minPrice').value);
    const maxPrice = parseFloat(document.getElementById('maxPrice').value);
    const results = playground.listGamesByPriceRange(minPrice, maxPrice, games); // Chama a função da lib
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = results.length ? JSON.stringify(results, null, 2) : 'Nenhum jogo encontrado nesta faixa de preço.';
  });
}

//---------formulario de listar jogo por paridade de tag----------
function showListByTagForm() {
  forms.innerHTML = `
    <h3>Listar jogos por paridade de tag</h3>
    <form id="listByTagForm">
      <input type="text" id="tag" placeholder="Tag" required />
    </form>
  `;
  // Quando o formulário é enviado
  document.getElementById('listByTagForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const tag = document.getElementById('tag').value;
    const results = playground.listGamesByTagMatch(tag, games); // Chama a função da lib
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = results.length ? JSON.stringify(results, null, 2) : 'Nenhum jogo encontrado com esta tag.';
  });
}

//---------formulario de listar jogos----------
function showListAllForm() {
  forms.innerHTML = `
    <h3>Listar todos os jogos</h3>
    <form id="listAllForm"></form>
  `;
  // Quando o formulário é enviado
  document.getElementById('listAllForm').addEventListener('submit', e => {
    e.preventDefault(); // Evita recarregar a página
    const results = playground.listGames(games); // Chama a função da lib
    forms.innerHTML = ''; // Limpa o formulário
    output.textContent = results.length ? JSON.stringify(results, null, 2) : 'Nenhum jogo cadastrado.';
  });
}

//========actions==========
// Dicionário que associa cada ação a uma função
const actions = {
  init : () => {
    games = playground.resetGames();
    playground.saveGames(games);
    output.textContent = 'Banco de dados reiniciado!';
    forms.innerHTML = ''; // Limpa o formulário
  },
  list : () => showListAllForm(),
  add : () => showAddForm,
  update : () => showUpdateForm(),
  delete : () => showDeleteForm(),
  listByDeveloper : () => showListByDeveloperForm(),
  listByYear : () => showListByYearForm(),
  listByPrice : () => showListByPriceForm(),
  listByTag : () => showListByTagForm()
}