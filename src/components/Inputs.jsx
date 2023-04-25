import React, { useState } from "react";
import Btns from "./Btns";
import styled from "styled-components";

// styled components
const StForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 30px;
`;
const StInp = styled.input`
  border: 1px solid rgb(51, 51, 51);
  height: 40px;
  width: 200px;
  outline: none;
  border-radius: 8px;
  padding: 1px 12px;
`;

function Inputs({ smallBtnList }) {
  const [data, setData] = useState({ name: "", price: 0 });

  const handleChange = (e) => {
    const { id, value } = e.target;
    let price = value;
    if (id === "price" && !!price) {
      price = parseFloat(value.replace(/,/g, ""));
      price = price.toLocaleString();
    }
    setData({ ...data, [id]: price });
  };

  const handleClickSave = (e) => {
    alert(`name : ${data.name} price : ${data.price}`);
  };

  return (
    <StForm>
      <label htmlFor="name">이름</label>
      <StInp value={data.name} id="name" type="text" placeholder="이름을 입력하세요." onChange={handleChange} />
      <label htmlFor="price">가격</label>
      <StInp pattern="\d{1,3}(,\d{3})*" value={data.price} id="price" type="text" placeholder="가격을 입력하세요." onChange={handleChange} />
      <Btns btnList={smallBtnList} handleClickSave={handleClickSave} />
    </StForm>
  );
}

export default Inputs;
