export const searchPokemon = async (pokemon) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokemon}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemons = async (limit = 16, offset = 0) => {
  try {
    let url = `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`;
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

export const getPokemonData = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {}
};

// export const randomPokemon = async () => {
//   const generatorRandomNum =yy () => Math.floor(Math.random() * 200 +1)

//   try {
//     let url = "https://pokeapi.co/api/v2/pokemon/1"

//   }
// }

// randomArray = (length, max) =>
//   [...new Array(length)].map(() => Math.round(Math.random() * max));
