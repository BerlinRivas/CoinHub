
import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function Explore() {
  const [cryptos, setCryptos] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    axios
      .get('https://api.coincap.io/v2/assets')
      .then((response) => {
        setCryptos(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const formatSupply = (value) => {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    let newValue = value;
    let suffix = '';

    for (let i = 0; i < suffixes.length; i++) {
      if (newValue < 1000) {
        break;
      }
      newValue /= 1000;
      suffix = suffixes[i + 1];
    }

    return `${newValue.toFixed(1)}${suffix}`;
  };

  const formatMarketCap = (value) => {
    const suffixes = ['', 'K', 'M', 'B', 'T'];
    let newValue = value;
    let suffix = '';

    for (let i = 0; i < suffixes.length; i++) {
      if (newValue < 1000) {
        break;
      }
      newValue /= 1000;
      suffix = suffixes[i + 1];
    }

    return `$${newValue.toFixed(1)}${suffix}`;
  };

  const filteredCryptos = cryptos.filter((crypto) => {
    return (
      crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return ( 
    <div className="explore-container">
      <h1 className="explore-title">Explore the Cryptoeconomy</h1>
      <div className="explore-search">
        <input
          className="explore-search-box"
          type="text"
          name="search"
          placeholder="Search for an asset"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button type="submit" className="search-btn">
          <i className="glyphicon glyphicon-search" />
        </button>
      </div>

      <div className="crypto-table-container">
        <table className="crypto-table">
          <thead>
            <tr>
              <th className="column-header">Name</th>
              <th className="column-header">Symbol</th>
              <th className="column-header">Price (USD)</th>
              <th className="column-header">Supply</th>
              <th className="column-header">Market Cap</th>
              <th className="column-header">24H Change</th>
            </tr>
          </thead>
          <tbody>
            {filteredCryptos.map((crypto) => (
              <tr key={crypto.id}>
                <td>{crypto.name}</td>
                <td>{crypto.symbol}</td>
                <td>${Number(crypto.priceUsd).toFixed(2)}</td>
                <td>{formatSupply(parseFloat(crypto.supply))}</td>
                <td>{formatMarketCap(parseFloat(crypto.marketCapUsd))}</td>
                <td>{`${Number(crypto.changePercent24Hr).toFixed(2)}%`}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
