import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './PagePais.css';

export const PagePais = ({ mod }) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  const url = `https://restcountries.eu/rest/v2/name/${id}`;
  const history = useHistory();
  React.useEffect(() => {
    async function fecthProduto(url) {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setData(json[0]);
      } catch (err) {
        setError('Um erro ocorreu');
      }
    }
    fecthProduto(url);
  }, [url]);
  // const teste = data.currencies[0];

  // console.log(teste);
  if (error) <p>{error}</p>;
  if (data === null) return <div className="loading">loading.....</div>;
  else
    return (
      <div className={`pagePais animeLeft ${mod ? 'light' : 'dark'}`}>
        <div className="button-back">
          <button onClick={() => history.push('/')}>
            <i className="fa fa-arrow-left"></i> Back
          </button>
        </div>
        <img src={data.flag} alt={data.name} />
        <div className="info">
          <h1>{data.name}</h1>
          <ul>
            <li>
              <strong>Native Name:</strong> {data.nativeName}
            </li>
            <li>
              <strong>Population:</strong> {data.population}
            </li>
            <li>
              <strong>Region:</strong> {data.region}
            </li>
            <li>
              <strong>Subregion:</strong> {data.subregion}
            </li>
            <li>
              <strong>Capital:</strong> {data.capital}
            </li>
          </ul>
          <ul>
            <li>
              <strong>Top Level Domain:</strong> {data.topLevelDomain}
            </li>
            {/* <li>
              <strong>Currencies:</strong>
              {data.currencies}
            </li> */}
            <li>
              <strong>Languages: </strong>
              {data.languages.map((lang) => (
                <span key={lang}> {lang.name},</span>
              ))}
            </li>
          </ul>
          <div className="borders">
            <h3>Border Coutries:</h3>
            <div>
              {data.borders.map((e) => (
                <span key={e}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
};
