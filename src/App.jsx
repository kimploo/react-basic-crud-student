import s from "./App.module.css";
import { useEffect, useState } from "react";

import ItemHeader from "./components/ItemHeader";
import ItemInput from "./components/ItemInput";
import SumFooter from "./components/SumFooter";
import getFruits, { getAllFruitsAPI } from "./features/fruits/api/getFruits.mjs";
import deleteOneFruit, { deleteOneFruitAPI } from "./features/fruits/api/deleteOneFruit.mjs";
import editOneFruit, { editOneFruitAPI } from "./features/fruits/api/editOneFruit.mjs";
import { useDispatch, useSelector } from "react-redux";

export default function App() {
  const [fruits, setFruits] = useState([]);
  const fruitsState = useSelector((state) => state.fruits)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllFruitsAPI())
    // 이 코드가 화면에 과일을 뿌려주고 있다.
    // getFruits().then(res => setFruits(res.map(f => ({...f, quantity: 0}))))
  }, [])

  const handleNewFruit = (e) => {
    e.preventDefault()
    // TODO: 새로운 과일 추가 기능
    // TODO: 에러 핸들링 나중에 구현하기
  }
  
  // 클라이언트 <-> 서버
  // 데이터 <-> 데이터 => 서버에서 데이터를 관리합니다.
  const handleDelete = (fruitId) =>{
    dispatch(deleteOneFruitAPI(fruitId))
    .then(() => {
      dispatch(getAllFruitsAPI())
    })
  }
  
  const handleEdit = (newFruit) => {
    const { id } = newFruit
    dispatch(editOneFruitAPI({id, newFruit}))
    .then(() => {
      dispatch(getAllFruitsAPI())
    })
  }; 

  return (
    <>
      <div className={s.appContainer}>
        <form onSubmit={handleNewFruit} className={s.form}>
          <div className={s.fieldset}>
            <h2>장바구니 애플리케이션</h2>
            <ItemHeader></ItemHeader>
            {fruitsState.fruits.map(f => <>
              <ItemInput
                key={f.id}
                fruit={f}
                handleDelete={handleDelete}
                handleEdit={handleEdit}
              ></ItemInput>
            </>)}
            <SumFooter></SumFooter>
          </div>
        </form>
      </div>
    </>
  );
}
