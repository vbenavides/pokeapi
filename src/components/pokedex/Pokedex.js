import React, { useContext, useState } from 'react';
import Pokemon from '../pokemon/pokemon';
import {
  StyledSection,
  PokemonContainer,
  PokedexLoading,
} from './PokedexStyles';
import LoadMore from '../LoadMore/LoadMore';
import AppContext from '../../context/AppContext';

const Pokedex = (props) => {
  const {
    setPage,
    totalPages,
    loading,
    page,
    setLoading,
    loadingButton,
    setLoadingButton,
  } = props;
  const { state, activator, setActivator } = useContext(AppContext);
  const pokemons = state.results;

  const loadMore = () => {
    setLoadingButton(true);
    const nextPage = Math.min(page + 1, totalPages - 1);
    setPage(nextPage);
    // addDataPokemons();
    setActivator(activator + 1);
    // console.log(nextPage);
    // setLoadingButton(false);
  };

  return (
    <StyledSection>
      {loading ? (
        <PokedexLoading>Loading...</PokedexLoading>
      ) : (
        <PokemonContainer>
          {pokemons.map((pokemon) => {
            return <Pokemon pokemon={pokemon} key={pokemon.name} />;
          })}
        </PokemonContainer>
      )}

      {!loading && (
        <LoadMore
          loadingButton={loadingButton}
          // totalPages={totalPages}
          loadMore={loadMore}
          // loading={loading}
          // setPage={setPage}
        />
      )}
    </StyledSection>
  );
};

export default Pokedex;
