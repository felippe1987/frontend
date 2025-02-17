//Fazendo a conexão com api.js
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001", // se não funcionar é bom tentar http://localhost:3002
});

export default api;

//Voltar aqui e testar a api
