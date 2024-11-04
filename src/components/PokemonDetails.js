import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";

const PokemonDetails = () => {
  const { id } = useParams();
  const [pokemon, setPokemon] = useState(null);

  useEffect(() => {
    const fetchPokemonDetails = async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchPokemonDetails();
  }, [id]);

  if (!pokemon) {
    return <div>Loading...</div>;
  }
  const hasImage = pokemon.hasOwnProperty("image");

  return (
    <div className="container-details">
      <div className="navbar">
        <h1 className="text-3xl font-semibold">PokéDex</h1>
        <NavLink
          className="navbar-item"
          activeClassName="is-active"
          to="/"
          exact
        >
          Retour
        </NavLink>
      </div>
      <div className="container">
        <div className="row">
          <div className="details col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <h2>Détails pour Pokemon ID: {id}</h2>
            <p>
              <span class="static-text">Name: </span>
              <span>{pokemon.name}</span>
            </p>
            <p>
              <span class="static-text">Height: </span>
              <span>{pokemon.height}</span>
            </p>
            <p>
              <span class="static-text">Weight: </span>
              <span>{pokemon.weight}</span>
            </p>
            <p>
              <span class="static-text">Base_experience: </span>
              <span>{pokemon.base_experience}</span>
            </p>
            <p>
              <span class="static-text">Location_area_encounters: </span>
              <span>{pokemon.base_exlocation_area_encountersperience}</span>
            </p>
            <p>
              <span class="static-text">Order: </span>
              <span>{pokemon.order}</span>
            </p>
            <p>
              <span class="static-text">Type: </span>
              <span>{pokemon.types[0].type.name}</span>
            </p>

            <img
              src={pokemon.sprites.front_default}
              alt={pokemon.name}
              className="w-20 mx-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetails;
