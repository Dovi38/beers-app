const API_URL = `https://api.punkapi.com/v2/beers`;

export const getBeers = () => {
  return fetch(`${API_URL}`)
    .then((response) => response.json())
    .then((jsonResponse) => {
      const beers = jsonResponse;
      const mapApi = beers.map((beer) => beer);

      return mapApi;
    })
    .catch((error) => {
      console.error(error);
    });
};
