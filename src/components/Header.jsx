import React from 'react';
import './Header.css';

export const Header = ({ setMod, mod }) => {
  function handleClick() {
    setMod(!mod);
  }

  return (
    <header className={`header ${mod ? 'light' : 'dark'}`}>
      <h1>Where in the World?</h1>
      <button onClick={handleClick}>
        <i className={mod ? 'fa fa-moon-o' : 'fa fa-sun-o'}></i>
        <span>{mod ? 'Dark Mode' : 'Light Mode'}</span>
      </button>
    </header>
  );
};
