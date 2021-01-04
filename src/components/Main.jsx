import React from 'react';
import { Card } from './Card';
import './Main.css';
import { Pesquisa } from './Pesquisa';

export const Main = ({ mod }) => {
  const [data, setData] = React.useState([]);
  const [pesquisa, setPesquisa] = React.useState(null);
  const [continente, setContinente] = React.useState(null);
  const [valores, setValores] = React.useState([]);
  const [error, setError] = React.useState(null);
  const url = 'https://restcountries.eu/rest/v2/all';

  React.useEffect(() => {
    async function fecthProduto(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setValores(json);
      } catch (err) {
        setError('Um erro ocorreu');
      }
    }
    fecthProduto(url);
  }, []);
  React.useEffect(() => {
    function renderPais() {
      // if (pesquisa !== null)
      //   setValores(...data.filter((e) => e.name.toString()).includes(pesquisa));
      if (continente) setValores(data.filter((e) => e.region === continente));
    }
    renderPais();
  }, [continente, pesquisa]);
  if (error) <p>{error}</p>;
  if (data === null) return <div className="loading">loading.....</div>;

  return (
    valores && (
      <div className={`container animeLeft `}>
        <Pesquisa setPesquisa={setPesquisa} setContinente={setContinente} />
        <div className="paises">
          {valores.map((pais) => {
            return (
              <Card
                key={pais.name}
                image={pais.flag}
                name={pais.name}
                population={pais.population}
                region={pais.region}
                capital={pais.capital}
                className="pais"
              />
            );
          })}
        </div>
      </div>
    )
  );
};
