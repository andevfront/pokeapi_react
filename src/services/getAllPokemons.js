export const getAllPokemons = async ({
  pageParam = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=50",
}) => {
  const res = await fetch(pageParam);
  const { next, results } = await res.json();

  const promises = results.map(async (pokemon) => {
    const res = await fetch(pokemon.url);
    const data = await res.json();

    return data;
  });

  const pokemonData = await Promise.all(promises);

  const filteredData = pokemonData.map((pokemon) => {
    const stats = pokemon.stats;

    return {
      id: pokemon.id,
      name: pokemon.name,
      img: pokemon.sprites.front_default,
      types: pokemon.types.map((typeData) => typeData.type.name),
      hp: stats.find((stat) => stat.stat.name === "hp").base_stat,
      speed: stats.find((stat) => stat.stat.name === "speed").base_stat,
      attack: stats.find((stat) => stat.stat.name === "attack").base_stat,
      defense: stats.find((stat) => stat.stat.name === "defense").base_stat,
    };
  });

  return {
    response: filteredData,
    nextPage: next,
  };
};
