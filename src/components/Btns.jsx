import React from "react";
import styled from "styled-components";

const StContainer = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

const StBtn = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: ${(props) => props.height};
  background-color: ${(props) => props.backgroundColor};
  margin: 3px 5px;
  border: none;
  cursor: pointer;
  border-radius: 8px;
  color: ${(props) => props.color};
`;

// 색을 넣으면, 이름을 반환해주는 함수를 만듭니다.
const getBoxName = (box) => {
  if (box.name === "BtnForInp") return "저장";
  if (box.name === "BtnForModal") return "open modal";
  switch (box.width) {
    case "200px":
      return "Large Primary Button";
    case "130px":
      return "mideum";
    case "100px":
      return "small";
    default:
      return "검정 박스";
  }
};
const Btns = ({ btnList, handleClickSave }) => {
  return (
    <StContainer>
      {btnList.map((box) =>
        box.backgroundColor === "rgb(85, 239, 196)" ? (
          <StBtn onClick={handleClickSave} height={box.height} width={box.width} backgroundColor={box.backgroundColor} color={box.color} key={box.id}>
            {getBoxName(box)}
          </StBtn>
        ) : (
          <StBtn height={box.height} width={box.width} backgroundColor={box.backgroundColor} color={box.color} key={box.id}>
            {getBoxName(box)}
          </StBtn>
        )
      )}
    </StContainer>
  );
};

export default Btns;
