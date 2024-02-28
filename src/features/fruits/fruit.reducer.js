import { createSlice } from "@reduxjs/toolkit";
import { getAllFruitsAPI } from "./api/getFruits.mjs";
import { deleteOneFruitAPI } from "./api/deleteOneFruit.mjs";
import { editOneFruitAPI } from "./api/editOneFruit.mjs";

export const initialFruitState = {
  fruits: [
    {
      id: 9999,
      name: "테스트네임",
      price: 9999,
    },
  ],
};

// Redux의 아주 큰 상태 중에, fruits라는 상태를 만든 겁니다.
export const fruitSlice = createSlice({
  name: "fruits",
  initialState: initialFruitState,
  // 동기 Action이 처리되는 곳
  reducers: {},
  // Redux-Thunk -> 비동기 Action이 처리되는 곳
  extraReducers(builder) {
    builder
      .addCase(getAllFruitsAPI.fulfilled, (state, action) => {
        state.fruits = action.payload
      })
      .addCase(deleteOneFruitAPI.fulfilled, (state, action) => {
        console.log('delete action', action);
        // 삭제 성공했습니다
      })
      .addCase(editOneFruitAPI.fulfilled, (state, action) => {
        console.log('edit action', action);
        // 변경 성공했습니다
      }) 
  },
});

export default fruitSlice.reducer;
