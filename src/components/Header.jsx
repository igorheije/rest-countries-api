import React from 'react';
import './Header.css';

export const Header = ({ setMod, mod }) => {
  function handleClick() {
    setMod(!mod);
  }

  return (
    <header className={`header ${mod ? 'light' : 'dark'}`}>
      <h1>Where in the World?</h1>
      <div onClick={handleClick}>
        <i className={mod ? 'fa fa-moon-o' : 'fa fa-sun-o'}></i>
        <div>{mod ? 'Dark Mode' : 'Light Mode'}</div>
      </div>
    </header>
  );
};
