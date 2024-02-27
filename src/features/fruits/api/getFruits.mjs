import { HOST } from "./api.mjs";

export default function getFruits() {
  const url = new URL(HOST);
  url.pathname = `/fruits`;
  return fetch(url)
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    throw new Error('Network response was not ok.');
  })
  // .then(res => console.log(res))
  // 에러 핸들링은 이것보다 훨씬 더 정교하게 만들어야 한다.
}