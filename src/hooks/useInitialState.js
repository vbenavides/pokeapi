import { useMemo, useState, useEffect, useRef } from 'react';
// import { getPokemonData, getPokemons, searchPokemon } from '../api';

const useInitialState = () => {
  const initialState = {
    count: '',
    dataLinks: [],
    results: [],
    loading: false,
    searching: false,
    // page: 0,
    notFound: false,
    totalPages: 0,
  };

  const [state, setState] = useState(initialState);
  const [searching, setSearching] = useState(false);
  const [notFound, setNotFound] = useState();
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  // const addDataPokemons = useRef(() => {});

  const addDataPokemons = (data, payload) => {
    setState({
      ...state,
      // results: [...state.results, payload],
      dataLinks: data.results,
      results: [...state.results].concat(payload),
      // results: results,
      loading: false,
      searching: true,
      notFound: false,
      // totalPages: Math.ceil(state.dataLinks.count / 12),
    });
  };

  const addSearchPokemon = (payload) => {
    setState({
      ...state,
      results: payload,
    });
  };

  const defaultState = (payload) => {
    setState({
      ...state,
      results: payload,
    });
  };

  return {
    addDataPokemons,
    addSearchPokemon,
    defaultState,
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
