import "./App.css";
import Btns from "./components/Btns";
import Inputs from "./components/Inputs";
import Modal from "./components/Modal";
import Select from "./components/Select";
import styled from "styled-components";

// styled components
const StBox = styled.div`
  text-align: left;
  margin: 10px;
`;

const StTxt = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin: 21.4px 0;
`;

const StConModal = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  // button list
  const greenBtnList = [
    { width: "200px", height: "50px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(0, 0, 0)", id: 1, border: "3px solid rgb(85, 239, 196)" },
    { width: "130px", height: "45px", backgroundColor: "rgb(85, 239, 196)", color: "rgb(0, 0, 0)", id: 2, border: "none" },
    { width: "100px", height: "40px", backgroundColor: "rgb(85, 239, 196)", color: "rgb(0, 0, 0)", id: 3, border: "none" },
  ];
  const PinkBtnList = [
    { width: "200px", height: "50px", backgroundColor: "rgb(255, 255, 255)", color: "rgb(214, 48, 49)", id: 4, border: "3px solid rgb(250, 177, 160)" },
    { width: "130px", height: "45px", backgroundColor: "rgb(250, 177, 160)", color: "rgb(214, 48, 49)", id: 5, border: "none" },
    { width: "100px", height: "40px", backgroundColor: "rgb(250, 177, 160)", color: "rgb(214, 48, 49)", id: 6, border: "none" },
  ];

  const smallBtnList = [
    { width: "100px", height: "40px", backgroundColor: "rgb(85, 239, 196)", color: "rgb(0, 0, 0)", name: "BtnForInp", id: 7, border: "none" },
  ];

  return (
    <StBox className="App">
      <StTxt>Button</StTxt>
      <Btns btnList={greenBtnList} />
      <Btns btnList={PinkBtnList} />
      <StTxt>input</StTxt>
      <Inputs smallBtnList={smallBtnList} />
      <StTxt>Modal</StTxt>
      <StConModal>
        <Modal modalType={"modal_1"} />
        <Modal modalType={"modal_2"} />
      </StConModal>
      <Select />
    </StBox>
  );
}

export default App;
