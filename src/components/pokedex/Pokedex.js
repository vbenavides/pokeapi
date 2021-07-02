import React, { useContext } from 'react';
import Pokemon from '../pokemon/pokemon';
import {
  StyledSection,
  PokemonContainer,
  PokedexLoading,
} from './PokedexStyles';
import ChangePage from '../changePage/ChangePage';
import LoadMore from '../LoadMore/LoadMore';
import AppContext from '../../context/AppContext';

const Pokedex = (props) => {
  const { setPage, totalPages, loading, page } = props;
  const { state } = useContext(AppContext);
  // const { loading, page } = state;
  const pokemons = state.results;
  // console.log(page);

  // const lastPage = () => {
  //   const nextPage = Math.max(page - 1, 0);
  //   setPage(nextPage);
  // };

  // const nextPage = () => {
  //   const nextPage = Math.min(page + 1, totalPages - 1);
  //   setPage(nextPage);
  // };

  const loadMore = () => {
    const nextPage = Math.min(page + 1, totalPages - 1);
    setPage(nextPage);
    // addDataPokemons();
    console.log(nextPage);
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

      {/* <ChangePage
        page={page + 1}
        totalPages={totalPages}
        leftClick={lastPage}
        rightClick={nextPage}
      /> */}
      <LoadMore totalPages={totalPages} loadMore={loadMore} loading={loading} />
    </StyledSection>
  );
};

export default Pokedex;
