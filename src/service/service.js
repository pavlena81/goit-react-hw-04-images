import axios from 'axios';


export const getImages = async (query, page) => {
  const API_KEY = '29581970-ca9e55c9ea9a40620816915df';
  const url = `https://pixabay.com/api/`;
  const urlFilter = 'image_type=photo&orientation=horizontal&safesearch=true&per_page=12';

  const response = await axios.get(`${url}?key=${API_KEY}&q=${query}&${urlFilter}&page=${page}`);
  
  return response.data;
};
