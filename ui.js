import { playground } from "./lib";

let games = playground.loadGames();
Livraria.saveGames(games);

// ===== Actions =====
const actions = {
  init: () => {
    games = playground.resetGames();
    output.textContent = "Bem Vindo ao Playground!";
    forms.innerHTML = "";
  },
  list: () => {
    forms.innerHTML = '';
    output.textContent = playground.listGames(playground.basicFormat, games);
  },
  add: () => showAddForm(),
  update: () => showUpdateForm(),
  delete: () => showDeleteForm(),
  filterByDev: () => showFilterByDevForm(),
  filterByPeriod: () => showFilterByPeriodForm(),
  filterByPrice: () => showFilterByPriceForm(),
  filterByTag: () => showFilterByTagForm(),
  exit: () => {
    forms.innerHTML = '';
    output.textContent = 'Bye, bye! :)';
  }
};

const output = document.getElementById('output');
const forms = document.getElementById('forms');
const buttons = document.getElementById('buttons');

// ===== Event listener =====
buttons.addEventListener('click', e => {
  if (e.target.tagName === 'BUTTON') {
    const action = e.target.dataset.action;
    if (action && actions[action]) actions[action]();
  }
});

// ===== Formulários =====
function showAddForm() {
  forms.innerHTML = `
    <form id="addForm">
      <input name="nome" placeholder="Nome do jogo" required />
      <input name="desenvolvedora" placeholder="Desenvolvedora" required />
      <input name="anoDeLancamento" type="number" placeholder="Ano de lançamento" required />
      <input name="preco" placeholder="Preço (ex: R$ 99,90 ou Gratuito)" required />
      <input name="tags" placeholder="Tags (separadas por vírgula)" required />
      <button type="submit">Adicionar</button>
    </form>
  `;
  document.getElementById('addForm').onsubmit = function(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    let maxId = -1;
    for (const jogo of games) {
      if (jogo.id > maxId) maxId = jogo.id;
    }
    const novoId = maxId + 1;
    const tagsArr = data.tags.split(',').map(t => t.trim());
    games = playground.addGame(
      novoId,
      data.nome,
      data.desenvolvedora,
      Number(data.anoDeLancamento),
      data.preco,
      tagsArr,
      games
    );
    output.textContent = playground.listGames(playground.basicFormat, games);
    forms.innerHTML = '';
  };
}

function showUpdateForm() {
  forms.innerHTML = `
    <form id="updateForm">
      <input name="id" type="number" placeholder="ID do jogo" required />
      <input name="nome" placeholder="Novo nome" />
      <input name="desenvolvedora" placeholder="Nova desenvolvedora" />
      <input name="anoDeLancamento" type="number" placeholder="Novo ano" />
      <input name="preco" placeholder="Novo preço" />
      <input name="tags" placeholder="Novas tags (separadas por vírgula)" />
      <button type="submit">Atualizar</button>
    </form>
  `;
  document.getElementById('updateForm').onsubmit = function(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    let jogo = null;
    for (const j of games) {
      if (j.id === Number(data.id)) jogo = j;
    }
    if (jogo) {
      let tagsArr = jogo.tags;
      if (data.tags) {
        tagsArr = data.tags.split(',').map(t => t.trim());
      }
      games = playground.updateGame(
        Number(data.id),
        data.nome || jogo.nome,
        data.desenvolvedora || jogo.desenvolvedora,
        data.anoDeLancamento ? Number(data.anoDeLancamento) : jogo.anoDeLancamento,
        data.preco || jogo.preco,
        tagsArr,
        games
      );
      output.textContent = playground.listGames(playground.basicFormat, games);
    } else {
      output.textContent = "ID inválido!";
    }
    forms.innerHTML = '';
  };
}

function showDeleteForm() {
  forms.innerHTML = `
    <form id="deleteForm">
      <input name="id" type="number" placeholder="ID do jogo" required />
      <button type="submit">Remover</button>
    </form>
  `;
  document.getElementById('deleteForm').onsubmit = function(e) {
    e.preventDefault();
    const id = Number(new FormData(e.target).get('id'));
    let existe = false;
    for (const j of games) {
      if (j.id === id) existe = true;
    }
    if (existe) {
      games = playground.deleteGame(id, games);
      output.textContent = playground.listGames(playground.basicFormat, games);
    } else {
      output.textContent = "ID inválido!";
    }
    forms.innerHTML = '';
  };
}

function showFilterByDevForm() {
  forms.innerHTML = `
    <form id="filterDevForm">
      <input name="desenvolvedora" placeholder="Desenvolvedora" required />
      <button type="submit">Filtrar</button>
    </form>
  `;
  document.getElementById('filterDevForm').onsubmit = function(e) {
    e.preventDefault();
    const dev = new FormData(e.target).get('desenvolvedora');
    const filtrados = playground.listByDev(dev, games);
    output.textContent = filtrados.length !== 0 ? playground.listGames(playground.basicFormat, filtrados) : "Nenhum jogo encontrado.";
    forms.innerHTML = '';
  };
}

function showFilterByPeriodForm() {
  forms.innerHTML = `
    <form id="filterPeriodForm">
      <input name="anoInicio" type="number" placeholder="Ano inicial" required />
      <input name="anoFim" type="number" placeholder="Ano final" required />
      <button type="submit">Filtrar</button>
    </form>
  `;
  document.getElementById('filterPeriodForm').onsubmit = function(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const inicio = Number(fd.get('anoInicio'));
    const fim = Number(fd.get('anoFim'));
    const filtrados = playground.listByPeriod(inicio, fim, games);
    output.textContent = filtrados.length !== 0 ? playground.listGames(playground.basicFormat, filtrados) : "Nenhum jogo encontrado.";
    forms.innerHTML = '';
  };
}

function showFilterByPriceForm() {
  forms.innerHTML = `
    <form id="filterPriceForm">
      <input name="precoMin" type="number" placeholder="Preço mínimo" required />
      <input name="precoMax" type="number" placeholder="Preço máximo" required />
      <button type="submit">Filtrar</button>
    </form>
  `;
  document.getElementById('filterPriceForm').onsubmit = function(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const min = Number(fd.get('precoMin'));
    const max = Number(fd.get('precoMax'));
    const filtrados = playground.listByPrice(min, max, games);
    output.textContent = filtrados.length !== 0 ? playground.listGames(playground.basicFormat, filtrados) : "Nenhum jogo encontrado.";
    forms.innerHTML = '';
  };
}

function showFilterByTagForm() {
  forms.innerHTML = `
    <form id="filterTagForm">
      <input name="tag" placeholder="Tag" required />
      <button type="submit">Filtrar</button>
    </form>
  `;
  document.getElementById('filterTagForm').onsubmit = function(e) {
    e.preventDefault();
    const tag = new FormData(e.target).get('tag');
    const filtrados = [];
    for (const j of games) {
      for (const t of j.tags) {
        if (t === tag) filtrados.push(j);
      }
    }
    output.textContent = filtrados.length !== 0 ? playground.listGames(playground.basicFormat, filtrados) : "Nenhum jogo encontrado.";
    forms.innerHTML = '';
  };
}

