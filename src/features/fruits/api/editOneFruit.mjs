import { createAsyncThunk } from "@reduxjs/toolkit";
import { HOST } from "./api.mjs";

export default function editOneFruit({id, newFruit}) {
  const fruit = newFruit
  const url = new URL(HOST);
  console.log('edit', id, fruit)
  // edit 3 {extra: undefined, requestId: 'XwYOphKuoCjuFCtnGij7D', signal: AbortSignal, dispatch: ƒ, getState: ƒ, …}abort: ƒ abort(reason)dispatch: (action, ...args) => dispatch(action, ...args)extra: undefinedfulfillWithValue: (value, meta) => {…}getState: ƒ a()rejectWithValue: (value, meta) => {…}requestId: "XwYOphKuoCjuFCtnGij7D"signal: AbortSignal {aborted: false, reason: undefined, onabort: null}[[Prototype]]: Objectconstructor: ƒ Object()hasOwnProperty: ƒ hasOwnProperty()isPrototypeOf: ƒ isPrototypeOf()propertyIsEnumerable: ƒ propertyIsEnumerable()toLocaleString: ƒ toLocaleString()toString: ƒ toString()valueOf: ƒ valueOf()__defineGetter__: ƒ __defineGetter__()__defineSetter__: ƒ __defineSetter__()__lookupGetter__: ƒ __lookupGetter__()__lookupSetter__: ƒ __lookupSetter__()__proto__: (...)get __proto__: ƒ __proto__()set __proto__: ƒ __proto__()
  // fruit.reducer.js:33  
  // PUT /fruits/1
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

export const editOneFruitAPI = createAsyncThunk('fruits/edit', editOneFruit)
