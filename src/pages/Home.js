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
import LoadMore from '../components/LoadMore/LoadMore';

const Home = () => {
  const { state, addDataPokemons, addSearchPokemon, defaultState, activator } =
    useContext(AppContext);
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState();
  const [loadingButton, setLoadingButton] = useState(false);
  const [page, setPage] = useState(0);

  // const { notFound } = state;
  // const { notFound, setNotFound } = useContext(AppContext);
  // const { page, setPage } = useContext(AppContext);
  const { totalPages, setTotalPages } = useContext(AppContext);
  const { loading, setLoading } = useContext(AppContext);

  // const fetchPokemon = async () => {
  //   try {
  //     setSearching(true);
  //     const data = await getPokemons(12, 12 * page);
  //     const promises = data.results.map(async (pokemon) => {
  //       return await getPokemonData(pokemon.url);
  //     });
  //     const results = await Promise.all(promises);
  //     addDataPokemons(data, results);
  //     setLoading(false);
  //     setTotalPages(Math.ceil(data.count / 12));
  //     setNotFound(false);
  //     console.log('fetch');
  //   } catch (err) {}
  // };

  const fetchPokemon = async () => {
    try {
      const data = await getPokemons(12, 12 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setTotalPages(Math.ceil(data.count / 12));
      // console.log(results);
      return results;
    } catch (err) {}
  };

  const defaultPokemons = async () => {
    setSearching(true);
    // setPage(0); //modifica
    // setTotalPages(0);
    console.log(page);
    const data = await fetchPokemon();
    console.log(data);
    defaultState(data);
    setLoading(false);
    setNotFound(false);
    console.log(page);
  };

  const loadMorePokemons = async () => {
    setSearching(true);
    const data = await fetchPokemon();
    addDataPokemons(data);
    setLoadingButton(false);
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
      // setPage(0); //modifica
      console.log(page);
      return defaultPokemons();
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
      // addSearchPokemon([result]);
      defaultState([result]);
      console.log(result);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
    setSearching(false);
  };

  useEffect(() => {
    if (!searching) {
      defaultPokemons();
      // console.log(state);
    }
  }, []);

  useEffect(() => {
    loadMorePokemons();
    console.log(page);
  }, [activator]);

  const pokemons = state.results;

  return (
    <React.Fragment>
      <StyledTitle>
        <StyledH2>Pokédex</StyledH2>
      </StyledTitle>
      <Search onSearch={onSearch} setPage={setPage} />
      {/* <RandomPokemon randomPokemons={randomPokemons} /> */}
      {notFound ? (
        <NotFoundStyle>Pokemón no encontrado T_T</NotFoundStyle>
      ) : (
        <Pokedex
          pokemons={pokemons}
          loading={loading}
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          setLoading={setLoading}
          loadingButton={loadingButton}
          setLoadingButton={setLoadingButton}
        />
      )}
    </React.Fragment>
  );
};

export default Home;
