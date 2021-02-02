import React from 'react';
import { Card } from './Card';
import './Main.css';
import { Pesquisa } from './Pesquisa';
import Planeta from '../images/planeta.svg';

export const Main = ({ mod }) => {
  const [data, setData] = React.useState([]);
  const [pesquisa, setPesquisa] = React.useState(null);
  const [continente, setContinente] = React.useState(null);
  const [valores, setValores] = React.useState([]);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(true);
  const url = 'https://restcountries.eu/rest/v2/all';

  React.useEffect(() => {
    async function fecthPais() {
      try {
        setLoading(true);
        setError(null);
        const response = await fetch(url);
        const json = await response.json();
        setData(json);
        setValores(json);
      } catch (err) {
        setError('Um erro ocorreu');
        setLoading(false);
      } finally {
        setError(null);
        setLoading(false);
      }
    }
    fecthPais();
  }, []);
  React.useEffect(() => {
    function reducer() {
      try {
        if (continente) {
          setValores(() => data.filter((e) => e.region === continente));
          if (pesquisa) {
            const letra = pesquisa.toUpperCase();
            setValores((val) =>
              val.filter((p) => p.name.toUpperCase().includes(letra)),
            );
          }
        } else if (pesquisa) {
          const letra = pesquisa.toUpperCase();
          setValores(() =>
            data.filter((p) => p.name.toUpperCase().includes(letra)),
          );
        }
      } catch (err) {
        setError(err);
      }
    }
    reducer();
  }, [continente, pesquisa, data]);
  if (error) <p>{error}</p>;
  if (loading)
    return (
      <div className="loading">
        <img src={Planeta} alt="Planeta" />
      </div>
    );

  return valores ? (
    <div className={`container animeLeft ${mod ? 'light' : 'dark'} `}>
      <Pesquisa setPesquisa={setPesquisa} setContinente={setContinente} />
      <div className="paises">
        {valores
          .filter((v, i) => {
            if (i < 8) return v;
          })
          .map((pais) => {
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
  ) : (
    <div className="naoEncontrado">
      <h1>Nenhum País encontrado</h1>
    </div>
  );
};
