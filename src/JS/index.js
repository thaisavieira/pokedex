// Precisamos criar duas variáveis no JS para trabalhar com os elementos da telas.
  const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
  const pokemonCard = document.querySelectorAll('cartao-pokemon')
// Vamos precisar trabalhar com um evente de clique feito pelo usuário na listagem de pokémons.
listaSelecaoPokemons.forEach(pokemon => {
    pokemon.addEventListener('click', () => {
        console.log(pokemon)
// Remover a classe aberto só do cartão que está aberto;
  const cartaoPokemonAberto = document.querySelector('.aberto') 
  // aberto é a classe que a gente quer buscar  
  cartaoPokemonAberto.classList.remove('aberto')
// Ao ciclar em um pokémon da listagem pegamos o id desse pokémon para saber qual cartão mostrar;
  const idPokemonSelecionado = pokemon.attributes.id.value

  const idDoCartaoPokemonParaAbrir = ('cartao-'+ idPokemonSelecionado)

  const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)

  cartaoPokemonParaAbrir.classList.add('aberto')


    // Remover a classe ativa que marca o pokémon selecionado (pokémon de outra cor)

  const pokemonAtivoNaListagem = document.querySelector('.ativo')
  pokemonAtivoNaListagem.classList.remove('ativo')

  // Adicionar a classe arivo no item da lista selecionado
    const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)

    pokemonSelecionadoNaListagem.classList.add('ativo')
})

})