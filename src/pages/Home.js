import React, { useEffect, useState, useContext } from 'react';
import { getPokemonData, getPokemons, searchPokemon } from '../api';
import Pokedex from '../components/pokedex/Pokedex';
import Search from '../components/Search/Search';
// import RandomPokemon from '../components/randompoke/randomPoke';
import AppContext from '../context/AppContext';

import { StyledH2, NotFoundStyle, StyledTitle } from './HomeStyles';

const Home = () => {
  const { state, addDataPokemons, defaultState, activator } =
    useContext(AppContext);
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState();
  const [loadingButton, setLoadingButton] = useState(false);
  const [page, setPage] = useState(0);
  const [searched, setSearched] = useState(false);
  const { totalPages, setTotalPages } = useContext(AppContext);
  const { loading, setLoading } = useContext(AppContext);

  const fetchPokemon = async () => {
    try {
      const data = await getPokemons(12, 12 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setTotalPages(Math.ceil(data.count / 12));
      return results;
    } catch (err) {}
  };

  const defaultPokemons = async () => {
    setSearching(true);
    const data = await fetchPokemon();
    defaultState(data);
    setLoading(false);
    setNotFound(false);
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
  //     // addDataPokemons(results);
  //     defaultState(results);
  //     // console.log(pokemons);
  //   } catch (err) {}
  // };

  const onSearch = async (pokemon) => {
    if (!pokemon) {
      return;
    }
    setLoading(true);
    setSearching(true);
    setNotFound(false);
    const result = await searchPokemon(pokemon);
    if (!result) {
      setNotFound(true);
      setLoading(false);
      return;
    } else {
      defaultState([result]);
      setPage(0);
      setTotalPages(1);
      setSearched(true);
    }
    setLoading(false);
    setSearching(false);
  };

  useEffect(() => {
    if (!searching) {
      defaultPokemons();
    }
  }, []);

  useEffect(() => {
    loadMorePokemons();
  }, [activator]);

  const pokemons = state.results;

  return (
    <React.Fragment>
      <StyledTitle>
        <StyledH2>Pok??dex</StyledH2>
      </StyledTitle>
      <Search onSearch={onSearch} setPage={setPage} />
      {/* <RandomPokemon randomPokemons={randomPokemons} /> */}
      {notFound ? (
        <NotFoundStyle>Pokem??n no encontrado T_T</NotFoundStyle>
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
          searched={searched}
          defaultPokemons={defaultPokemons}
          setSearching={setSearching}
          setSearched={setSearched}
        />
      )}
    </React.Fragment>
  );
};

export default Home;
