import axios from 'axios';

axios.defaults.headers.common['x-api-key'] =
  'live_nIHtGzh7qOrCXYJPMK4PFdlNI6db04gxcwwCZBlO6F7W0ugC6yc4SWqoZET1knKk';

export async function fetchBreeds() {
  return await axios
    .get('https://api.thedogapi.com/v1/breeds')
    .then(response => response.data);
}

export async function fetchDogByBreed(breedId) {
  return await axios
    .get(`https://api.thedogapi.com/v1/images/search?breed_ids=${breedId}`)
    .then(response => response.data);
}