import React, { useContext } from 'react';
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
    loadingButton,
    setLoadingButton,
    searched,
    defaultPokemons,
    setSearched,
  } = props;
  const { state, activator, setActivator } = useContext(AppContext);
  const pokemons = state.results;

  const loadMore = () => {
    setLoadingButton(true);

    if (searched) {
      defaultPokemons();
      setLoadingButton(false);
      setSearched(false);
      return;
    }
    const nextPage = Math.min(page + 1, totalPages - 1);
    setPage(nextPage);
    setActivator(activator + 1);
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
          loadMore={loadMore}
          searched={searched}
        />
      )}
    </StyledSection>
  );
};

export default Pokedex;
