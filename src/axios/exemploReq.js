// src/App.js
import React, { useEffect, useState } from 'react';
import axios from './axios';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/orders'); // Endpoint relativo
        setData(response.data);
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Pedidos</h1>
      <ul>
        {data.map((pedido) => (
          <li key={pedido.id}>{pedido.nome}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
