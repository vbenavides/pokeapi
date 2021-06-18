import React, { useEffect, useState } from 'react';
import { getPokemonData, getPokemons, searchPokemon } from '../api';
import Pokedex from '../components/pokedex/Pokedex';
import Search from '../components/Search/Search';

import { StyledH2, NotFoundStyle, StyledTitle } from './HomeStyles';

const Home = () => {
  const [pokemons, setPokemons] = useState([]);
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState();
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchPokemon = async () => {
    try {
      setLoading(true);
      const data = await getPokemons(16, 16 * page);
      const promises = data.results.map(async (pokemon) => {
        return await getPokemonData(pokemon.url);
      });
      const results = await Promise.all(promises);
      setPokemons(results);
      setLoading(false);
      setTotalPages(Math.ceil(data.count / 16));
      setNotFound(false);
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
      setPokemons([result]);
      setPage(0);
      setTotalPages(1);
    }
    setLoading(false);
    setSearching(false);
  };

  useEffect(() => {
    if (!searching) {
      fetchPokemon();
    }
  }, [page]);

  return (
    <React.Fragment>
      <StyledTitle>
        <StyledH2>Pokédex</StyledH2>
      </StyledTitle>
      <Search onSearch={onSearch} />
      {notFound ? (
        <NotFoundStyle>Pokemón no encontrado T_T</NotFoundStyle>
      ) : (
        <Pokedex
          pokemons={pokemons}
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
