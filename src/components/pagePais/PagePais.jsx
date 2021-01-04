import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import './PagePais.css';
export const PagePais = () => {
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

  if (error) <p>{error}</p>;
  if (data === null) return <div className="loading">loading.....</div>;
  else
    return (
      <div className="pagePais animeLeft">
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
            <li>
              <strong>Top Level Domain:</strong> {data.topLevelDomain}
            </li>
            {/* <li>{data.currencies}</li> */}
            {/* <li>{data.languages}</li> */}
          </ul>
        </div>
      </div>
    );
};
