import React from 'react';
import {Header} from './components/Header'
import './App.css'
import { Main } from './components/Main'
import { BrowserRouter, Route } from 'react-router-dom';
import {PagePais} from './components/pagePais/PagePais'

function App() {
  const [mod, setMod] = React.useState(false);
  return (
    <div className="App">
      <BrowserRouter >
      <Header setMod={setMod} mod={mod} />
      <Route exact path="/" ><Main mod={mod}/></Route>
      <Route  path="/:id" ><PagePais mod={mod}/></Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
