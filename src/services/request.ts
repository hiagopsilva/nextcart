import Axios from 'axios';

export const request = Axios.create({
  baseURL: 'https://nextcart-api.herokuapp.com',
  headers: {
    accept: 'application/json',
  },
  timeout: 30000, // 15 seconds timeout
});

export default request;
