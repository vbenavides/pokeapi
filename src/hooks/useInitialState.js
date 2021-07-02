import { useMemo, useState, useEffect, useRef } from 'react';
// import { getPokemonData, getPokemons, searchPokemon } from '../api';

const useInitialState = () => {
  const initialState = {
    dataLinks: [],
    results: [],
    loading: false,
    searching: false,
    notFound: false,
    totalPages: 0,
  };

  const [state, setState] = useState(initialState);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);
  const [activator, setActivator] = useState(0);

  // const addDataPokemons = useRef(() => {});
  const defaultState = (payload) => {
    setState({
      ...state,
      results: payload,
    });
  };

  const addDataPokemons = (payload) => {
    setState({
      ...state,
      // results: [...state.results, payload],
      results: [...state.results].concat(payload),
    });
  };

  const addSearchPokemon = (payload) => {
    setState({
      ...state,
      results: payload,
    });
  };

  return {
    addDataPokemons,
    addSearchPokemon,
    defaultState,
    state,
    totalPages,
    setTotalPages,
    loading,
    setLoading,
    activator,
    setActivator,
  };
};

export default useInitialState;
