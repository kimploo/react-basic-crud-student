import s from "./App.module.css";
import { useEffect, useState } from "react";

import ItemHeader from "./components/ItemHeader";
import ItemInput from "./components/ItemInput";
import SumFooter from "./components/SumFooter";
import getFruits from "./features/fruits/api/getFruits.mjs";
import deleteOneFruit from "./features/fruits/api/deleteOneFruit.mjs";
import editOneFruit from "./features/fruits/api/editOneFruit.mjs";

export default function App() {
  const [fruits, setFruits] = useState([]);

  useEffect(() => {
    getFruits().then(res => setFruits(res.map(f => ({...f, quantity: 0}))))
  }, [])

  const handleNewFruit = (e) => {
    e.preventDefault()
    // TODO: 새로운 과일 추가 기능
    // TODO: 에러 핸들링 나중에 구현하기
  }
  
  // 클라이언트 <-> 서버
  // 데이터 <-> 데이터 => 서버에서 데이터를 관리합니다.
  const handleDelete = (fruitId) =>{
    deleteOneFruit(fruitId)
    .then(() => {
      // DELETE 요청이 성공했을 경우
      // fruits.filter... 삭제하고자 하는 아이디와 일치하는 경우에 삭제
      getFruits().then(res => setFruits(res.map((f, i) => ({...f, quantity: fruits[i].quantity}))))
    })
  }
  
  const handleEdit = (newFruit) => {
    const { id, name, price, quantity } = newFruit
    editOneFruit(id, newFruit)
    .then(() => {
      getFruits().then(res => setFruits(res.map((f, i) => ({...f, quantity: fruits[i].quantity}))))
    })
  }; 

  return (
    <>
      <div className={s.appContainer}>
        <form onSubmit={handleNewFruit} className={s.form}>
          <div className={s.fieldset}>
            <h2>장바구니 애플리케이션</h2>
            <ItemHeader></ItemHeader>
            {fruits.map(f => <>
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
