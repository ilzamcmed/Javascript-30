const endpoint = 'https://servicodados.ibge.gov.br/api/v1/localidades/distritos';

const cities = [];

fetch(endpoint)
    .then(response => response.json())
    .then(data => cities.push(...data))

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        //aqui vamos procurar qual cidade ou estado é igual ao que estamos procurando
        const regex = new RegExp(wordToMatch, 'gi');
        return place.nome.match(regex);
    })
}

//coloca vírgula nos números! Pode colocar dentro do template string desse jeito: ${numberWithCommas(place.population)}
//  function numberWithCommas (x) {
//      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//  }

function displayCidades() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName =place.nome.replace(regex, `<span class="high">${this.value}</span>`);

        return `
        <li>
            <span class="name">${cityName} </span>
        </li>
        `;
    }).join('');

    lista.innerHTML = html;


}

const searchInput = document.querySelector('.input')
const lista = document.querySelector('.list')

searchInput.addEventListener('change', displayCidades)
searchInput.addEventListener('keyup', displayCidades)