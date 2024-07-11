import axios from 'axios';

// Criando uma instância do axios
const api = axios.create({
  baseURL: 'https://projetoinicialusr.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default api;
