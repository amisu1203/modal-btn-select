import React, { useCallback, useEffect, useState } from "react";
import styled from "styled-components";

// styled components
const StBox = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  margin-top: 50px;
`;

const StListBtn = styled.button`
  border: 1px solid rgb(221, 221, 221);
  height: 40px;
  width: 300px;
  background-color: rgb(255, 255, 255);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 28px;
`;

const StBoxList = styled.ul`
  border: 1px solid rgb(221, 221, 221);
  width: 300px;
  padding: 0;
  border-radius: 12px;
  background-color: rgb(255, 255, 255);
  line-height: 40px;
  position: absolute;
  bottom: 0px;
`;

const StList = styled.li`
  list-style: none;
  height: 40px;
  padding: 0 28px;
  font-size: 13px;
`;

const Select = () => {
  const [isToggled, setIsToggled] = useState(false);
  const [text, setText] = useState("리액트");

  // li 클릭시 text 변경
  const handleClickLi = useCallback((e) => {
    setText((text) => e.target.innerText);
    setIsToggled((text) => !text);
  }, []);

  const handleBtnToggle = useCallback(() => {
    setIsToggled((text) => !text);
  }, []);

  //

  return (
    <StBox>
      <p>Select</p>
      <StListBtn onClick={handleBtnToggle}>
        <div>{text}</div>
        <div>▼</div>
      </StListBtn>
      {isToggled ? (
        <StBoxList className="ul">
          <StList onClick={handleClickLi}>리액트</StList>
          <StList onClick={handleClickLi}>자바</StList>
          <StList onClick={handleClickLi}>스프링</StList>
          <StList onClick={handleClickLi}>리액트네이티브</StList>
        </StBoxList>
      ) : (
        <></>
      )}
    </StBox>
  );
};

export default Select;
