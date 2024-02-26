import s from "./App.module.css";
import { useState } from "react";

import fruitsData from "../db.json";
import ItemHeader from "./components/ItemHeader";
import ItemInput from "./components/ItemInput";
import SumFooter from "./components/SumFooter";

export default function App() {
  const [fruits, setFruits] = useState(fruitsData.map(f => {
    f.quantity = 0;
    return f
  }));
  console.log('fruits', fruits)
  
  const handleNewFruit = () => {
    // TODO: 새로운 과일 추가 기능
    // TODO: 에러 핸들링 나중에 구현하기
  }
  
  const handleDelete = (fruitId) => setFruits(fruits.filter(fruit => (fruit.id !== fruitId)))
  
  const handleEdit = (newFruit) => {
    const idx = fruits.findIndex((f) => f.id === newFruit.id);
    if (idx !== -1) {
      const copy = fruits.slice();
      copy.splice(idx, 1, newFruit);
      setFruits(copy);
    }
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
