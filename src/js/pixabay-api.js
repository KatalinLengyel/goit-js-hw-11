import axios from 'axios';
import Notiflix from 'notiflix';

const API_KEY = '45011386-47ab3bf2a06b79217a4a93c25';
const URL = 'https://pixabay.com/api/';
const HITSPERPAGE = 40;

const fetchImages = async (query, page = 1) => {
  try {
    const response = await axios.get(`${URL}`, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        page,
        per_page: `${HITSPERPAGE}`,
      },
    });
    return response.data;
  } catch (error) {
    console.log('Error:', error);
    Notiflix.Notify.failure(
      'Oops! Something went wrong! Try reloading the page!'
    );
  }
};

export { fetchImages, HITSPERPAGE };
