import { HOST } from "./api.mjs";

export default function editOneFruit(id, fruit) {
  const url = new URL(HOST);
  // DELETE /fruits/1
  url.pathname = `/fruits/${id}`;
  return fetch(url, {
    method: 'PUT',
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(fruit)
  })
  .then(res => {
    if (res.ok) {
      return res.json()
    }
    throw new Error('Network response was not ok.');
  })
  // .then(res => console.log(res))
  // 에러 핸들링은 이것보다 훨씬 더 정교하게 만들어야 한다.
}