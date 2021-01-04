import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export const Card = (props) => {
  return (
    <Link to={`/${props.name}`} className="card">
      <img src={props.image} alt={props.title} />
      <div>
        <h2>{props.name}</h2>
        <p>População: {props.population}</p>
        <p>Região: {props.region}</p>
        <p>Capital: {props.capital}</p>
      </div>
    </Link>
  );
};
