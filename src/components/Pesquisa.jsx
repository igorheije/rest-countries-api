import React from 'react';
import './Pesquisa.css';

export const Pesquisa = ({ setPesquisa, setContinente }) => {
  function selectors({ target }) {
    setContinente(target.value);
  }
  function renderPais({ target }) {
    setPesquisa(target.value);
  }
  return (
    <div className="pesquisa">
      <div>
        <i className="fa fa-search"></i>
        <input
          type="text"
          onChange={renderPais}
          placeholder="Search for a country..."
        />
      </div>
      <select onChange={selectors} className="select">
        <option value="default">Filter by Region</option>
        <option value="Asia">Asia</option>
        <option value="Americas">Americas</option>
        <option value="Africa">Africa</option>
        <option value="Europe">Europa</option>
        <option value="Oceania">Oceania</option>
      </select>
    </div>
  );
};
