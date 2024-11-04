import { React } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

const Card = ({ pokemon }) => {
  if (!pokemon) {
    return null;
  }
  const hasImage = pokemon.hasOwnProperty("image");

  const handleRedirect = (id) => {};
  const pokemonDetailsUrl = `/pokemon/${pokemon.id}`;
  return (
    <div className="block">
      {hasImage && (
        <img src={pokemon.image} alt={pokemon.name} className="w-20 mx-auto" />
      )}
      <h3 className="text-center text-lg font-semibold">{pokemon.name}</h3>
      <div className="flex justify-between mt-2">
        <NavLink className="custom-link" to={pokemonDetailsUrl} exact>
          Voir les détails
        </NavLink>
      </div>
    </div>
  );
};

export default Card;
