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
  const { totalPages } = props;
  const { state, page, setPage, loading } = useContext(AppContext);
  const pokemons = state.results;
  console.log(page);

  // const lastPage = () => {
  //   const nextPage = Math.max(page - 1, 0);
  //   setPage(nextPage);
  // };

  // const nextPage = () => {
  //   const nextPage = Math.min(page + 1, totalPages - 1);
  //   setPage(nextPage);
  // };

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
      <LoadMore />
    </StyledSection>
  );
};

export default Pokedex;
