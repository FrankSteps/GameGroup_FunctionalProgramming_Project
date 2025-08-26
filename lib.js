const STORAGE_KEY = "playground::games"


const loadGames = () => {
  const data = localStorage.getItem(STORAGE_KEY)
  return data ? JSON.parse(data) : []
}

const saveGames = (games) =>
  localStorage.setItem(STORAGE_KEY, JSON.stringify(games))

const clearGames = () => {
  localStorage.removeItem(STORAGE_KEY)
  console.log("crud limpo.")
}

const resetGames = () => {
const games = [
    {id: 0, nome: 'Elden Ring', preco: 'R$ 249,90', desenvolvedora: 'FromSoftware', anoDeLancamento: 2022, tags: ['RPG', 'Ação', 'Mundo Aberto']},
    {id: 1, nome: 'The Witcher 3: Wild Hunt', preco: 'R$ 99,90', desenvolvedora: 'CD Projekt Red', anoDeLancamento: 2015, tags: ['RPG', 'Fantasia', 'História']},
    {id: 2, nome: 'God of War', preco: 'R$ 199,90', desenvolvedora: 'Santa Monica Studio', anoDeLancamento: 2018, tags: ['Ação', 'Aventura', 'Mitologia']},
    {id: 3, nome: 'Minecraft', preco: 'R$ 119,90', desenvolvedora: 'Mojang', anoDeLancamento: 2011, tags: ['Criativo', 'Sobrevivência', 'Sandbox']},
    {id: 4, nome: 'Red Dead Redemption 2', preco: 'R$ 299,90', desenvolvedora: 'Rockstar Games', anoDeLancamento: 2018, tags: ['Ação', 'Faroeste', 'Mundo Aberto']},
    {id: 5, nome: 'Hollow Knight', preco: 'R$ 37,99', desenvolvedora: 'Team Cherry', anoDeLancamento: 2017, tags: ['Metroidvania', 'Indie', 'Desafio']},
    {id: 6, nome: 'Stardew Valley', preco: 'R$ 24,99', desenvolvedora: 'ConcernedApe', anoDeLancamento: 2016, tags: ['Simulação', 'Fazenda', 'Relaxante']},
    {id: 7, nome: 'Cyberpunk 2077', preco: 'R$ 249,90', desenvolvedora: 'CD Projekt Red', anoDeLancamento: 2020, tags: ['Futurista', 'RPG', 'Mundo Aberto']},
    {id: 8, nome: 'Celeste', preco: 'R$ 38,00', desenvolvedora: 'Matt Makes Games', anoDeLancamento: 2018, tags: ['Plataforma', 'Indie', 'Desafio']},
    {id: 9, nome: 'Among Us', preco: 'R$ 10,89', desenvolvedora: 'Innersloth', anoDeLancamento: 2018, tags: ['Multiplayer', 'Casual', 'Mistério']},
    {id: 10, nome: 'League of Legends', preco: 'Gratuito', desenvolvedora: 'Riot Games', anoDeLancamento: 2009, tags: ['MOBA', 'Competitivo', 'Online']},
    {id: 11, nome: "Assassin's Creed Valhalla", preco: 'R$ 132,89', desenvolvedora: 'Ubisoft', anoDeLancamento: 2020, tags: ['Ação', 'História', 'Aventura']},
    {id: 12, nome: 'Dark Souls III', preco: 'R$ 195,22', desenvolvedora: 'FromSoftware', anoDeLancamento: 2016, tags: ['RPG', 'Desafio', 'Ação']},
    {id: 13, nome: 'FIFA 22', preco: 'R$ 159,00', desenvolvedora: 'EA Sports', anoDeLancamento: 2021, tags: ['Esporte', 'Multiplayer', 'Competitivo']},
    {id: 14, nome: 'Overwatch', preco: 'Gratuito', desenvolvedora: 'Blizzard', anoDeLancamento: 2016, tags: ['FPS', 'Equipe', 'Online']},
    {id: 15, nome: 'Valorant', preco: 'Gratuito', desenvolvedora: 'Riot Games', anoDeLancamento: 2020, tags: ['FPS', 'Competitivo', 'Online']},
    {id: 16, nome: 'Apex Legends', preco: 'Gratuito', desenvolvedora: 'Respawn', anoDeLancamento: 2019, tags: ['Battle Royale', 'FPS', 'Multiplayer']},
    {id: 17, nome: 'Terraria', preco: 'R$ 29,99', desenvolvedora: 'Re-Logic', anoDeLancamento: 2011, tags: ['Sandbox', 'Aventura', 'Sobrevivência']},
    {id: 18, nome: "Don't Starve", preco: 'R$ 18,45', desenvolvedora: 'Klei', anoDeLancamento: 2013, tags: ['Sobrevivência', 'Indie', 'Estratégia']},
    {id: 19, nome: 'GTA V', preco: 'R$ 99,90', desenvolvedora: 'Rockstar Games', anoDeLancamento: 2013, tags: ['Ação', 'Mundo Aberto', 'Crime']},
    {id: 20, nome: 'Final Fantasy XV', preco: 'R$ 129,90', desenvolvedora: 'Square Enix', anoDeLancamento: 2016, tags: ['RPG', 'Fantasia', 'Aventura']},
    {id: 21, nome: 'Forza Horizon 5', preco: 'R$ 199,00', desenvolvedora: 'Playground Games', anoDeLancamento: 2021, tags: ['Corrida', 'Mundo Aberto', 'Multiplayer']},
    {id: 22, nome: 'Hades', preco: 'R$ 47,99', desenvolvedora: 'Supergiant Games', anoDeLancamento: 2020, tags: ['Roguelike', 'Ação', 'Mitologia']},
    {id: 23, nome: 'The Legend of Zelda: Breath of the Wild', preco: 'R$ 249,00', desenvolvedora: 'Nintendo', anoDeLancamento: 2017, tags: ['Aventura', 'RPG', 'Mundo Aberto']},
    {id: 24, nome: 'Firewatch', preco: 'R$ 28,99', desenvolvedora: 'Campo Santo', anoDeLancamento: 2016, tags: ['Narrativa', 'Mistério', 'Indie']},
    {id: 25, nome: 'Inside', preco: 'R$ 19,99', desenvolvedora: 'Playdead', anoDeLancamento: 2016, tags: ['Plataforma', 'Mistério', 'Indie']},
    {id: 26, nome: 'Limbo', preco: 'R$ 16,00', desenvolvedora: 'Playdead', anoDeLancamento: 2010, tags: ['Indie', 'Mistério', 'Plataforma']},
    {id: 27, nome: 'Resident Evil Village', preco: 'R$ 199,90', desenvolvedora: 'Capcom', anoDeLancamento: 2021, tags: ['Terror', 'Ação', 'História']},
    {id: 28, nome: 'Call of Duty: Warzone', preco: 'Gratuito', desenvolvedora: 'Infinity Ward', anoDeLancamento: 2020, tags: ['FPS', 'Battle Royale', 'Online']},
    {id: 29, nome: 'PUBG', preco: 'R$ 49,99', desenvolvedora: 'PUBG Corp', anoDeLancamento: 2017, tags: ['Battle Royale', 'FPS', 'Multiplayer']},
    {id: 30, nome: 'Rocket League', preco: 'Gratuito', desenvolvedora: 'Psyonix', anoDeLancamento: 2015, tags: ['Esporte', 'Multiplayer', 'Competitivo']},
    {id: 31, nome: 'Fortnite', preco: 'Gratuito', desenvolvedora: 'Epic Games', anoDeLancamento: 2017, tags: ['Battle Royale', 'Construção', 'Multiplayer']},
    {id: 32, nome: 'Death Stranding', preco: 'R$ 239,90', desenvolvedora: 'Kojima Productions', anoDeLancamento: 2019, tags: ['Exploração', 'Futurista', 'História']},
    {id: 33, nome: 'It Takes Two', preco: 'R$ 149,90', desenvolvedora: 'Hazelight', anoDeLancamento: 2021, tags: ['Cooperativo', 'Aventura', 'Plataforma']},
    {id: 34, nome: 'The Sims 4', preco: 'Gratuito', desenvolvedora: 'Maxis', anoDeLancamento: 2014, tags: ['Simulação', 'Vida', 'Criativo']},
    {id: 35, nome: 'Dishonored 2', preco: 'R$ 89,99', desenvolvedora: 'Arkane Studios', anoDeLancamento: 2016, tags: ['Furtividade', 'Ação', 'História']},
    {id: 36, nome: 'BioShock Infinite', preco: 'R$ 49,99', desenvolvedora: 'Irrational Games', anoDeLancamento: 2013, tags: ['FPS', 'História', 'Ação']},
    {id: 37, nome: 'Portal 2', preco: 'R$ 18,99', desenvolvedora: 'Valve', anoDeLancamento: 2011, tags: ['Puzzle', 'Cooperativo', 'Física']},
    {id: 38, nome: 'Mirror’s Edge', preco: 'R$ 29,90', desenvolvedora: 'DICE', anoDeLancamento: 2008, tags: ['Ação', 'Parkour', 'Futurista']},
    {id: 39, nome: 'Subnautica', preco: 'R$ 57,99', desenvolvedora: 'Unknown Worlds', anoDeLancamento: 2018, tags: ['Sobrevivência', 'Exploração', 'Submarino']},
    {id: 40, nome: 'Little Nightmares', preco: 'R$ 49,99', desenvolvedora: 'Tarsier Studios', anoDeLancamento: 2017, tags: ['Terror', 'Plataforma', 'Atmosférico']},
    {id: 41, nome: 'Ori and the Blind Forest', preco: 'R$ 49,00', desenvolvedora: 'Moon Studios', anoDeLancamento: 2015, tags: ['Plataforma', 'Aventura', 'Emocionante']},
    {id: 42, nome: 'Slay the Spire', preco: 'R$ 55,00', desenvolvedora: 'MegaCrit', anoDeLancamento: 2019, tags: ['Roguelike', 'Cartas', 'Estratégia']},
    {id: 43, nome: 'No Man’s Sky', preco: 'R$ 149,90', desenvolvedora: 'Hello Games', anoDeLancamento: 2016, tags: ['Exploração', 'Espaço', 'Sobrevivência']},
    {id: 44, nome: 'Sea of Thieves', preco: 'R$ 149,90', desenvolvedora: 'Rare', anoDeLancamento: 2018, tags: ['Multiplayer', 'Pirata', 'Aventura']},
    {id: 45, nome: 'Cuphead', preco: 'R$ 36,99', desenvolvedora: 'Studio MDHR', anoDeLancamento: 2017, tags: ['Plataforma', 'Desafio', 'Indie']},
    {id: 46, nome: 'The Forest', preco: 'R$ 37,99', desenvolvedora: 'Endnight Games', anoDeLancamento: 2018, tags: ['Sobrevivência', 'Terror', 'Cooperativo']},
    {id: 47, nome: 'RimWorld', preco: 'R$ 93,99', desenvolvedora: 'Ludeon Studios', anoDeLancamento: 2018, tags: ['Simulação', 'Estratégia', 'Colônia']},
    {id: 48, nome: 'Factorio', preco: 'R$ 90,00', desenvolvedora: 'Wube Software', anoDeLancamento: 2020, tags: ['Automação', 'Estratégia', 'Construção']},
    {id: 49, nome: 'Phasmophobia', preco: 'R$ 27,99', desenvolvedora: 'Kinetic Games', anoDeLancamento: 2020, tags: ['Terror', 'Cooperativo', 'Fantasma']}

]

  saveGames(games)
  console.log("Jogos iniciais salvos.")
  return games
}

const basicFormat = (games) => {

    return games.map((x)=> `${x.id}# ${x.nome} (${x.desenvolvedora}, ${x.anoDeLancamento}) - ${x.preco} | [${x.tags[0]}][${x.tags[1]}][${x.tags[2]}]`)

}

const convertPriceToNum = (price) => {

    if (price === 'Gratuito') return 0
    else return parseFloat(price.slice(3).replace(',','.'))

}

const listTagParriedGames = (proximity=1,game,games) => {

    const search = (x,lista) => {

        const [y,...ys] = lista

        if (y === undefined) return 0
        else if (x === y) return 1
        else return search(x,ys)

    }

    const [x,...xs] = games

    if (x === undefined) return []
    else if (game != x) {

        const tagGame = game.tags
        const tagMatch = x.tags

        const parrity = tagGame.reduce((acc,x)=> acc+search(x,tagMatch),0)

        if (parrity >= proximity) return [x,...listTagParriedGames(proximity,game,xs)]
        else return listTagParriedGames(proximity,game,xs)

    }
    else return listTagParriedGames(proximity,game,xs)

}

const listByDev = (desenvolvedora,games) => {

    const gamesByDev = games.filter((x)=> x.desenvolvedora === desenvolvedora)

    return gamesByDev

}

const listByPeriod = (firstyear,lastyear=9999,games) => {

    const gamesByPeriod = games.filter((x)=>firstyear <= x.anoDeLancamento && x.anoDeLancamento <= lastyear)

    return gamesByPeriod

}

const listByPrice = (firstprice=0,lastprice,games) => {

    const gamesByPrice = games.filter((x)=>firstprice <= convertPriceToNum(x.preco) && convertPriceToNum(x.preco) <= lastprice)

    return gamesByPrice

}

const deleteGame = (id,games) => {

    return games.filter((x)=> x.id != id)

}

const addGame = (id,nome,desenvolvedora,anoDeLancamento,preco,tags,games) => {

    return [...games, {id:id, nome:nome, preco:preco, desenvolvedora:desenvolvedora, anoDeLancamento:anoDeLancamento, tags:tags}]

}

const updateGame = (id,nome,desenvolvedora,anoDeLancamento,preco,tags,games) => {

    const [x,...xs] = games

    if (x === undefined) return []
    else if (x.id === id) return [{id:id, nome:nome, preco:preco, desenvolvedora:desenvolvedora, anoDeLancamento:anoDeLancamento, tags:tags},...updateGame(id,nome,desenvolvedora,anoDeLancamento,preco,tags,xs)]
    else return [x,...updateGame(id,nome,desenvolvedora,anoDeLancamento,preco,tags,xs)]

}

const listGames = (formatFunc,games) => {return formatFunc(games).join('\n')}


//add
const priceMod = (games) => games.map(x => ({           
    id: x.id,
    nome: x.nome,
    preco: convertPriceToNum(x.preco),
    desenvolvedora: x.desenvolvedora,
    anoDeLancamento: x.anoDeLancamento,
    tags: x.tags,
}))

export const playground = {
    loadGames,
    saveGames,
    resetGames,
    clearGames,
    basicFormat,
    convertPriceToNum,
    listTagParriedGames,
    listByDev,
    listByPeriod,
    listByPrice,
    deleteGame,
    addGame,
    updateGame,
    listGames,
    priceMod,
 }