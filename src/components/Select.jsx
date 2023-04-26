import React, { useCallback, useState } from "react";
import styled from "styled-components";

// styled components
const StBox = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  margin-top: 30px;
`;

const StTxt = styled.p`
  font-size: 32px;
  font-weight: 700;
  margin: 20px 0;
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
  bottom: -25px;
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

  const langList = ["리액트", "자바", "스프링", "리액트네이티브"];

  return (
    <StBox>
      <StTxt>Select</StTxt>
      <StListBtn onClick={handleBtnToggle}>
        <div>{text}</div>
        <div>▼</div>
      </StListBtn>
      {isToggled ? (
        <StBoxList className="ul">
          {langList.map((item) => (
            <StList onClick={handleClickLi} key={item}>
              {item}
            </StList>
          ))}
        </StBoxList>
      ) : (
        <></>
      )}
    </StBox>
  );
};

export default Select;
