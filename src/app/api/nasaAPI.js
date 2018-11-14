const API = process.env.api || 'https://images-api.nasa.gov'
import axios from 'axios';

export const getNasaImages =  (query) =>
  axios.get(`${API}/search?q=${query}`)
    .then(res =>{
      return res.data.collection.items
    })
