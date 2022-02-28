import axios from 'axios';

const apiRequest = axios.create({
  baseURL: 'https://prova.deploy.profranchising.com.br',
});

export default apiRequest;
