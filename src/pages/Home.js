import React, { useEffect, useState, useContext } from 'react';
import { getPokemonData, getPokemons, searchPokemon } from '../api';
import Pokedex from '../components/pokedex/Pokedex';
import Search from '../components/Search/Search';
import RandomPokemon from '../components/randompoke/randomPoke';
import AppContext from '../context/AppContext';

import { StyledH2, NotFoundStyle, StyledTitle } from './HomeStyles';

const Home = () => {
  // const [pokemons, setPokemons] = useState([]);
  const { state, addDataPokemons } = useContext(AppContext);
  // const [countsPokemons, setCountsPokemons] = useState(0);
  // const [searching, setSearching] = useState(false);
  const { searching, setSearching } = useContext(AppContext);
  const { notFound, setNotFound } = useContext(AppContext);
  // const [notFound, setNotFound] = useState();
  // const [page, setPage] = useState(0);
  const { page, setPage } = useContext(AppContext);
  // const [totalPages, setTotalPages] = useState(0);
  const { totalPages, setTotalPages } = useContext(AppContext);
  const { loading, setLoading } = useContext(AppContext);
  // const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      // setLoading(true);
      const data = await getPokemons(12, 12 * page);
      // setCountsPokemons(data.count);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      // setPokemons(results);
      addDataPokemons(results);
      // console.log(results);
      // console.log(state.results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / 12));
      setNotFound(false);
    } catch (err) {}
    // console.log(state.results);
  };

  const randomPokemons = async () => {
    console.log('hola');
    const randomArray = (length = 16, max) =>
      [...new Array(length)].map(() => Math.round(Math.random() * max));
    let aleatoryNumber = randomArray(16, 896);
    try {
      const promises = aleatoryNumber.map(async (pokemon) => {
        return await searchPokemon(pokemon);
      });
      const results = await Promise.all(promises);
      // setPokemons(results);
      addDataPokemons(results);
      // console.log(pokemons);
    } catch (err) {}
  };

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return fetchPokemon();
    }
    setLoading(true);
    setSearching(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    // console.log(result)
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      // setPokemons([result]);
      addDataPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
    setSearching(false);
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemon();
      console.log(state.results);
    }
  }, [page]);

  // console.log(state.results[0]);
  // console.log(pokemons);
  const pokemonss = state.results;
  // console.log(pokemonss);
  // console.log(state.results);

  return (
    <React.Fragment>
      <StyledTitle>
        <StyledH2>Pokédex</StyledH2>
      </StyledTitle>
      <Search onSearch={onSearch} />
      <RandomPokemon randomPokemons={randomPokemons} />
      {notFound ? (
        <NotFoundStyle>Pokemón no encontrado T_T</NotFoundStyle>
      ) : (
        <Pokedex
          pokemons={pokemonss}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
        />
      )}
      {/* {console.log(state.results)} */}
    </React.Fragment>
  );
};

export default Home;
