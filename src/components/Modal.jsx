import React, { useState } from "react";
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

const StBtn = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  line-height: calc(${(props) => props.height} - 5px);
  background-color: ${(props) => props.backgroundColor};
  margin: 3px 5px;
  border: ${(props) => props.border};
  border-radius: 8px;
  box-sizing: border-box;
  color: ${(props) => props.color};
  font-weight: 600;
  font-size: 13.3px;
`;

function Modal({ modalType }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickOpen = (e) => {
    setIsOpen((isOpen) => !isOpen);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };

  const greenBtnList = [
    { name: "BtnForModal", width: "100px", height: "40px", backgroundColor: "rgb(85, 239, 196)", color: "rgb(0, 0, 0)", id: 3, border: "none" },
  ];
  const PinkBtnList = [
    {
      name: "BtnForModal",
      width: "200px",
      height: "50px",
      backgroundColor: "rgb(255, 255, 255)",
      color: "rgb(214, 48, 49)",
      id: 4,
      border: "3px solid rgb(250, 177, 160)",
    },
  ];

  return (
    <div>
      {modalType === "modal_1" ? (
        <div>
          {greenBtnList.map((btn) => (
            <StBtn
              onClick={handleClickOpen}
              height={btn.height}
              width={btn.width}
              backgroundColor={btn.backgroundColor}
              color={btn.color}
              border={btn.border}
              key={btn.id}
            >
              Open Modal
            </StBtn>
          ))}
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
          {PinkBtnList.map((btn) => (
            <StBtn
              onClick={handleClickOpen}
              height={btn.height}
              width={btn.width}
              backgroundColor={btn.backgroundColor}
              color={btn.color}
              border={btn.border}
              key={btn.id}
            >
              Open Modal
            </StBtn>
          ))}
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
