// eslint-disable-next-line
const API_URL = "./goods.json";

export function getAllGoods() {
  return fetch(API_URL)
    .then(response => response.json());
}