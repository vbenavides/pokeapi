import { useMemo, useState, useEffect, useRef } from 'react';
// import { getPokemonData, getPokemons, searchPokemon } from '../api';

const useInitialState = () => {
  const initialState = {
    count: '',
    loading: false,
    searching: false,
    results: [],
    page: 0,
    notFound: false,
  };

  const [state, setState] = useState(initialState);
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState();
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  // const addDataPokemons = useRef(() => {});

  const addDataPokemons = (payload) => {
    setState({
      ...state,
      // results: [...state.results, payload],
      results: [...state.results].concat(payload),
    });
  };

  return {
    addDataPokemons,
    page,
    setPage,
    state,
    totalPages,
    setTotalPages,
    searching,
    setSearching,
    loading,
    setLoading,
    notFound,
    setNotFound,
  };
};

export default useInitialState;
