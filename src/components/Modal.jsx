import React, { useState, useEffect, useRef } from "react";
import Btns from "./Btns";
import styled from "styled-components";

// styled components
const StModalBox = styled.div`
  opacity: 0.8;
  background-color: rgb(221, 221, 221);
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  inset: 0;
  /* left: 0; */
`;

const StModal = styled.div`
  position: absolute;
  left: calc(50% - 250px);
  top: calc(50% - 150px);
  border-radius: 12px;
  box-sizing: border-box;
  padding: 24px;
  background-color: #ffffff;
  width: 500px;
  height: 300px;
`;

function Modal({ modalType }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      {modalType === "modal_1" ? (
        <div>
          <button onClick={handleClickOpen}>open modal</button>
          {isOpen && (
            <>
              <StModalBox />
              <StModal>
                <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
                <button onClick={handleClickClose}>닫기</button>
                <button>확인</button>
              </StModal>
            </>
          )}
        </div>
      ) : (
        <div>
          <button onClick={handleClickOpen}>open modal</button>
          {isOpen && (
            <>
              <StModalBox onClick={handleClickClose} />
              <StModal>
                <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
                <button onClick={handleClickClose}>X</button>
              </StModal>
            </>
          )}
        </div>
      )}
    </div>
  );
}

export default Modal;
