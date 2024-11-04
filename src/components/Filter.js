import React from "react";

const Filter = ({ types, selectedType, onTypeChange }) => {
  return (
    <div className="my-4 d-flex align-items-center custom-filter">
      <label htmlFor="typeFilter" className="mr-2 font-semibold">
        Filtrer par catégorie :
      </label>
      <div className="select is-normal">
        <select
          id="typeFilter"
          value={selectedType}
          onChange={(e) => onTypeChange(e.target.value)}
        >
          <option value="">Toutes les catégories</option>
          {types.map((type) => (
            <option value={type} key={type}>
              {type}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Filter;
