import React, { useState, useEffect, useRef } from "react";
import Btns from "./Btns";

function Modal({ modalType }) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(null);

  const handleClickOpen = () => {
    setIsOpen(true);
  };

  const handleClickClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !modalRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    window.addEventListener("click", handleClickOutside);

    return () => {
      // unmount시 window 객체에서 이벤트리스너 제거
      window.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return modalType === "modal_1" ? (
    <div>
      <button onClick={handleClickOpen}>open modal</button>
      {isOpen && (
        <div>
          <p>닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지 않아요.</p>
          <button onClick={handleClickClose}>닫기</button>
          <button>확인</button>
        </div>
      )}
    </div>
  ) : (
    <div style={{ backgroundColor: "red" }}>
      <div ref={modalRef}>
        <button onClick={handleClickOpen}>open modal</button>
        {isOpen && (
          <div>
            <p>닫기 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.</p>
            <button onClick={handleClickClose}>X</button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;
