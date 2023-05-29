import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function CryptoHistory() {
  const { id } = useParams();
  const [history, setHistory] = useState([]);

  useEffect(() => {
    axios.get(`https://api.coincap.io/v2/assets/${id}/history?interval=d1`)
      .then(response => {
        setHistory(response.data.data);
      })
      .catch(error => {
        console.error('Error fetching crypto history:', error);
      });
  }, [id]);

  return (
    <div>
      <h2>Crypto History for {id}</h2>
      <ul>
        {history.map((data, index) => (
          <li key={index}>
            Date: {data.date}, Price: {data.priceUsd}
          </li>
        ))}
      </ul>
    </div>
  );
}
