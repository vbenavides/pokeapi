import React, { useContext } from 'react';
import AppContext from '../../context/AppContext';

const LoadMore = () => {
  const { page, setPage, searching, totalPages, addDataPokemons } =
    useContext(AppContext);

  const handleLoadMore = () => {
    const nextPage = Math.min(page + 1, totalPages - 1);
    setPage(nextPage);
    // addDataPokemons();
    console.log(nextPage);
  };

  return (
    <div>
      {searching && (
        <button type='button' className='LoadMore'>
          Loading...
        </button>
      )}
      {!searching && (
        <button
          type='button'
          className='LoadMore'
          onClick={() => handleLoadMore()}
        >
          Load more Pokémon
        </button>
      )}
    </div>
  );
};

export default LoadMore;
