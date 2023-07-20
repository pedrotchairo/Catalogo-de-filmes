const apiKey = "b0709359";
const frmPesquisa = document.querySelector('form');

frmPesquisa.onsubmit = (ev) => {
    ev.preventDefault();

    const pesquisar = ev.target.pesquisa.value;

    if(pesquisar == ""){
        alert('Preencha o campo!')
        return;
    }

    
    const url = `https://www.omdbapi.com/?s=${pesquisar}&apikey=${apiKey}`

    fetch(url)
    .then(result => result.json())
    .then(json => carregaLista(json))
}

const carregaLista = (json) => {
    const lista = document.querySelector('div.lista');
    lista.innerHTML = ""

    if(json.Response == "False"){
        alert('Nenhum filme encontrado')
        return;
    }

    json.Search.forEach(element => { 

    let item = document.createElement("div")
    item.classList.add("item")

    item.innerHTML = `<img src="${element.Poster}"/> <h2>${element.Title}</h2>`

    lista.appendChild(item)
});
}