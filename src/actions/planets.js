import { getRandomInt } from '../helpers/numbers';

const api_host = "https://swapi.co/api";

export const getRandomPlanet = () => {
  const api_route = "/planets/";
  const api_url = api_host + api_route + getRandomInt(0, 62) + '/';

  return fetch( api_url )
  .then(results => {
    return results.json();
  })
}
