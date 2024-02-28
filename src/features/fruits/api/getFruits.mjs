import { createAsyncThunk } from "@reduxjs/toolkit";
import { HOST } from "./api.mjs";

export default function getFruits() {
  const url = new URL(HOST);
  url.pathname = `/fruits`;
  return fetch(url)
  .then(res => {
    if (res.ok) {
      console.log('response', res)
      return res.json()
    }
    throw new Error('Network response was not ok.');
  })
  .then(res => { 
    console.log('res.json()',res)
    return res
   })
  // 에러 핸들링은 이것보다 훨씬 더 정교하게 만들어야 한다.
}

export const getAllFruitsAPI = createAsyncThunk('fruits/getAll', getFruits)