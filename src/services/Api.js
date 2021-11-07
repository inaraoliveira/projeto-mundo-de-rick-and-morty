import axios from "axios";

const Api = axios.create({
  baseURL:"https://rickandmortyapi.com/api"
});

export default Api;