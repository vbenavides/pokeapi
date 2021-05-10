import React, { useEffect, useState } from 'react';
// import CardList from '../components/CardList/CardList';
import Search from '../components/Search/Search';
import { Title, NotFoundStyle } from './HomeStyles';
// import Pokemons from '../components/Pokemons/Pokemons'
import { searchPokemon, getPokemons, getPokemonData  } from '../api'
import Pokedex from '../components/pokedex/Pokedex'

const Home = () => {
	const [ pokemons, setPokemons ] = useState([])
	const [ searching, setSearching ] = useState(false)
	const [ notFound, setNotFound ] = useState()
	const [ page, setPage ] = useState(0)
	const [ totalPages, setTotalPages ] = useState(0)
	const [ loading, setLoading ] = useState(true)

	const fetchPokemon = async () => {
		try{
			setLoading(true)
			const data = await getPokemons(16, 16 * page)
			const promises = data.results.map( async (pokemon) => {
				return await getPokemonData(pokemon.url)
			})
			const results = await Promise.all(promises)
			setPokemons(results)
			setLoading(false)
			setTotalPages(Math.ceil(data.count / 16))
			setNotFound(false)
		} catch(err){}
	}

	const onSearch = async (pokemon) => {
		if (!pokemon) {
			return fetchPokemon()
		}
		setLoading(true)
		setSearching(true)
		setNotFound(false)
		const result = await searchPokemon(pokemon)
		// console.log(result)
		if (!result) {
			setNotFound(true)
			setLoading(false)
			return
		} else {
			setPokemons([ result ])
			setPage(0)
			setTotalPages(1)
		}
		setLoading(false)
		setSearching(false)
	}

	useEffect(() => {
		if (!searching) {
			fetchPokemon()
		}
	}, [page])

	return(
		<React.Fragment>
			<Title>Pokédex</Title>
			<Search onSearch={onSearch} />
			{notFound ? (
				<NotFoundStyle>
					Pokemón no encontrado T_T
				</NotFoundStyle>
			) :
			<Pokedex
				pokemons={pokemons}
				loading={loading}
				page={page}
				setPage={setPage}
				totalPages={totalPages}
			/>
			}
		</React.Fragment>
	)
}

export default Home;