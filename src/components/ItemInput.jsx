/* eslint-disable react/prop-types */
import { useState } from "react";
import s from "./ItemInput.module.css";

export default function ItemInput({ fruit, handleDelete, handleEdit }) {
  // console.log(props) -> JavaScript 객체 
  // const { fruit } = props
  const { id, name, price, quantity } = fruit
  
  // 과일의 수량을 상태 변수로 만들었고
  // 초기값은 전달받은 props
  // 이후에 변경은 상태 변수를 통해서 한다.
  const [_quantity, setQuantity] = useState(quantity);
  
  // onChange Event Handler
  const handleQuantityChange = (e) => {
    // 이벤트가 일어난 위치 (DOM ref)
    // 이벤트가 일어난 위치의 value (DOM ref)
    setQuantity(e.target.value)
    handleEdit({
      ...fruit,
      quantity: Number(e.target.value)
    })
  }

  return (
    <div className={s.inputWrapper}>
      <span className={s.inputWrapperItem}>{name}</span>
      <span className={s.inputWrapperItem}>{price}</span>
      <input
        className={s.inputWrapperInput}
        id={`quantityInput_`}
        name={`quantityInput_`}
        type="number"
        value={_quantity}
        onChange={(e) => handleQuantityChange(e)}
        min={0}
        step={1}
      />
      <button type="button" onClick={() => {}}>
        📝
      </button>
      <button type="button" onClick={() => handleDelete(id)}>
        🗑️
      </button>
    </div>
  );
}
