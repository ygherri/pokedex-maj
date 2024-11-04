import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";
import Filter from "./Filter";
import Search from "./Search";

const Pokedex = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [types, setTypes] = useState([]);
  const [selectedType, setSelectedType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=150"
        );
        const results = response.data.results;
        const fetchedPokemonList = await Promise.all(
          results.map(async (result) => {
            const pokemonResponse = await axios.get(result.url);
            const pokemonData = pokemonResponse.data;
            return {
              id: pokemonData.id,
              name: pokemonData.name,
              image: pokemonData.sprites.front_default,
              type: pokemonData.types[0].type.name,
            };
          })
        );
        setPokemonList(fetchedPokemonList);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const uniqueTypes = [
      ...new Set(pokemonList.map((pokemon) => pokemon.type)),
    ];
    setTypes(uniqueTypes);
  }, [pokemonList]);

  const filteredPokemonList = pokemonList.filter((pokemon) => {
    if (selectedType && pokemon.type !== selectedType) {
      return false;
    }

    if (
      searchTerm &&
      !pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }

    return true;
  });

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  const handleSearchTermChange = (term) => {
    setSearchTerm(term);
  };

  return (
    <div className="home">
      <h1 className="text-3xl font-semibold">PokéDex</h1>
      <div className="custom-components">
        <Filter
          types={types}
          selectedType={selectedType}
          onTypeChange={handleTypeChange}
        />
        <Search
          searchTerm={searchTerm}
          onSearchTermChange={handleSearchTermChange}
        />
      </div>
      <div className="container">
        <div className="row">
          {filteredPokemonList.slice(0, 25).map((pokemon) => (
            <div className="col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <Card pokemon={pokemon} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokedex;
