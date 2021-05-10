import React from 'react'
import Pokemon from '../pokemon/pokemon'
import { PokedexContainer, PokemonContainer, PokedexLoading } from './PokedexStyles'
import ChangePage from '../changePage/ChangePage'

const Pokedex = (props) => {
  const { pokemons, page, setPage, totalPages, loading } = props

  const lastPage = () => {
		// console.log('left')
		const nextPage = Math.max(page - 1, 0)
		setPage(nextPage)
	}

	const nextPage = () => {
		// console.log('right')
		const nextPage = Math.min(page + 1, totalPages -1)
		setPage(nextPage)
	}

  return(
    <PokedexContainer>
      <ChangePage
				page={page + 1}
				totalPages={totalPages}
				leftClick={lastPage}
				rightClick={nextPage}
			/>
      {loading ? (
        <PokedexLoading>
          Loading...
        </PokedexLoading>
      ) : (
        <PokemonContainer>
          {pokemons.map((pokemon) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />
          })}
        </PokemonContainer>
      )}
    </PokedexContainer>
  )
}

export default Pokedex;