const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');
const searchInput = document.getElementById('searchInput');

const maxRecords = 151;
const limit = 10;
let offset = 0;

// Create clickable cards
function convertToLi(pokemon){
    return `
        <li class="pokemon pokemon-card ${pokemon.type}" data-id="${pokemon.number}">
            <span class="number">#${pokemon.number}</span>
            <span class="name">${pokemon.name}</span>

            <div class="detail">
                <ol class="types">
                    ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                </ol>

                <img src="${pokemon.photo}" alt="${pokemon.name}">
            </div>
        </li>
    `;
}

function loadPokemonItens(offset, limit){
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
        const newHtml = pokemons.map(convertToLi).join('');
        pokemonList.innerHTML += newHtml;
    });
}

loadPokemonItens(offset, limit);

// Load more button
loadMoreButton.addEventListener('click', () => {
    offset += limit;
    const qtdRecordsWithNextPage = offset + limit;

    if (qtdRecordsWithNextPage >= maxRecords){
        const newLimit = maxRecords - offset;
        loadPokemonItens(offset, newLimit);
        loadMoreButton.parentElement.removeChild(loadMoreButton);
    } else {
        loadPokemonItens(offset, limit);
    }
});

// Searching function
searchInput.addEventListener('input', () => {
    const filter = searchInput.value.toLowerCase();
    document.querySelectorAll('.pokemon-card').forEach(card => {
        const name = card.querySelector('.name').textContent.toLowerCase();
        card.style.display = name.includes(filter) ? '' : 'none';
    });
});

// Modal to show details
const modal = document.getElementById("pokemonModal");

pokemonList.addEventListener("click", async (event) => {
    const card = event.target.closest(".pokemon-card");
    if (!card) return;

    const pokemonId = card.getAttribute("data-id");

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
    const data = await response.json();

    const speciesResponse = await fetch(data.species.url);
    const speciesData = await speciesResponse.json();

    const genderRate = speciesData.gender_rate;
    let gender = "Desconhecido";
    if (genderRate === -1) gender = "Sem gênero";
    else gender = `${(genderRate / 8) * 100}% ♀ | ${(1 - genderRate / 8) * 100}% ♂`;

    const eggGroups = speciesData.egg_groups.map(g => g.name).join(", ");
    const eggCycle = speciesData.hatch_counter;

    showPokemonDetails({
        name: data.name,
        id: data.id,
        sprites: data.sprites,
        height: data.height,
        weight: data.weight,
        abilities: data.abilities.map(a => a.ability.name),
        species: speciesData.name,
        gender,
        eggGroups,
        eggCycle,
        type: data.types[0].type.name // add main type
    });
});

function showPokemonDetails(pokemon) {
    modal.innerHTML = `
        <div class="modal-content ${pokemon.type}">
            <h2>${pokemon.name} (#${pokemon.id})</h2>
            <img src="${pokemon.sprites.other['official-artwork'].front_default}" alt="${pokemon.name}">

            <h3>Stats</h3>
            <p>Species: ${pokemon.species}</p>
            <p>Height: ${pokemon.height / 10} m</p>
            <p>Weight: ${pokemon.weight / 10} kg</p>
            <p>Abilities: ${pokemon.abilities.join(", ")}</p>

            <h3>Breeding</h3>
            <p>Gender: ${pokemon.gender}</p>
            <p>Egg Groups: ${pokemon.eggGroups}</p>
            <p>Egg Cycle: ${pokemon.eggCycle} turns</p>

            <button id="closeModal">Fechar</button>
        </div>
    `;

    modal.style.display = "flex"; // CORRIGIDO

    document.getElementById("closeModal").addEventListener("click", () => {
        modal.style.display = "none";
    });
}

// Close modal when clicking outside
modal.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.style.display = "none";
    }
});
