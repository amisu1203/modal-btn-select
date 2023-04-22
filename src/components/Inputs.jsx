import React, { useState } from "react";
import Btns from "./Btns";

function Inputs({ smallBtnList }) {
  const [data, setData] = useState({ name: "", price: 0 });

  const handleChange = (e) => {
    const { id, value } = e.target;
    let price = value;
    if (id === "price") {
      price = id === "price" ? parseFloat(value.replace(/,/g, "")) : value;
      price = price.toLocaleString();
    }
    setData({ ...data, [id]: price });
  };

  const handleClickSave = (e) => {
    alert(`name : ${data.name} price : ${data.price}`);
  };

  return (
    <div>
      <p>input</p>
      <form action="">
        <label htmlFor="name">이름</label>
        <input value={data.name} id="name" type="text" placeholder="이름을 입력하세요." onChange={handleChange} />
        <label htmlFor="price">가격</label>
        <input pattern="\d{1,3}(,\d{3})*" value={data.price} id="price" type="text" placeholder="가격을 입력하세요." onChange={handleChange} />
        <Btns btnList={smallBtnList} handleClickSave={handleClickSave} />
      </form>
    </div>
  );
}

export default Inputs;
