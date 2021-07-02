import React, {
  useEffect,
  useState,
  useContext,
  useMemo,
  useCallback,
} from 'react';
import { getPokemonData, getPokemons, searchPokemon } from '../api';
import Pokedex from '../components/pokedex/Pokedex';
import Search from '../components/Search/Search';
import RandomPokemon from '../components/randompoke/randomPoke';
import AppContext from '../context/AppContext';

import { StyledH2, NotFoundStyle, StyledTitle } from './HomeStyles';

const Home = () => {
  const { state, addDataPokemons, addSearchPokemon, defaultState } =
    useContext(AppContext);
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState();
  const [page, setPage] = useState(0);

  // const { notFound } = state;
  // const { notFound, setNotFound } = useContext(AppContext);
  // const { page, setPage } = useContext(AppContext);
  const { totalPages, setTotalPages } = useContext(AppContext);
  const { loading, setLoading } = useContext(AppContext);

  const fetchPokemon = async () => {
    try {
      setSearching(true);
      const data = await getPokemons(12, 12 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      addDataPokemons(data, results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / 12));
      setNotFound(false);
      console.log('fetch');
    } catch (err) {}
  };

  // const randomPokemons = async () => {
  //   console.log('hola');
  //   const randomArray = (length = 16, max) =>
  //     [...new Array(length)].map(() => Math.round(Math.random() * max));
  //   let aleatoryNumber = randomArray(16, 896);
  //   try {
  //     const promises = aleatoryNumber.map(async (pokemon) => {
  //       return await searchPokemon(pokemon);
  //     });
  //     const results = await Promise.all(promises);
  //     // setPokemons(results);
  //     addDataPokemons(results);
  //     // console.log(pokemons);
  //   } catch (err) {}
  // };

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      // defaultState();
      return fetchPokemon();
    }
    setLoading(true);
    setSearching(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    console.log(result);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      // setPokemons([result]);
      // addDataPokemons([result]);
      addSearchPokemon([result]);
      console.log(result);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
    setSearching(false);
  };
  // const loadMorePokemon = async () => {
  //   try {
  //     const data = await getPokemons(12, 12 * page);
  //     const promises = data.results.map(async (pokemon) => {
  //       return await getPokemonData(pokemon.url);
  //     });
  //     const results = await Promise.all(promises);
  //     loadMore(results);
  //     // setLoading(false);
  //     // setTotalPages(Math.ceil(data.count / 12));
  //     // setNotFound(false);
  //     console.log('fetch');
  //   } catch (err) {}
  // };

  useEffect(() => {
    // if (!searching) {
    fetchPokemon();
    // console.log(state.results);
    // console.log(searching);
    // }
  }, [page]);

  const pokemonss = state.results;

  return (
    <React.Fragment>
      <StyledTitle>
        <StyledH2>Pokédex</StyledH2>
      </StyledTitle>
      <Search onSearch={onSearch} />
      {/* <RandomPokemon randomPokemons={randomPokemons} /> */}
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
    </React.Fragment>
  );
};

export default Home;
