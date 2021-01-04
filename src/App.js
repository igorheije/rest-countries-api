import React from 'react';
import {Header} from './components/Header'
import './App.css'
import { Main } from './components/Main'
import { BrowserRouter, Route } from 'react-router-dom';
import {PagePais} from './components/pagePais/PagePais'

function App() {
  const [mod, setMod] = React.useState(false);
console.log(mod);
  return (
    <div className="App">
      <BrowserRouter >

      <Header setMod={setMod} mod={mod} />
      <Route exact path="/" component={Main} mod={mod} className={mod? 'light': 'dark'} />
      <Route  path="/:id" component={PagePais} setMod={setMod} mod={mod} className={mod? 'light': 'dark'}/>

      </BrowserRouter>
    </div>
  );
}

export default App;
