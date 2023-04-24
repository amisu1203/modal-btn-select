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

function App() {
  // button list
  const greenBtnList = [
    { width: "200px", height: "50px", backgroundColor: "rgb(85, 239, 196)", color: "rgb(0, 0, 0)", id: 1 },
    { width: "130px", height: "45px", backgroundColor: "rgb(85, 239, 196)", color: "rgb(0, 0, 0)", id: 2 },
    { width: "100px", height: "40px", backgroundColor: "rgb(85, 239, 196)", color: "rgb(0, 0, 0)", id: 3 },
  ];
  const PinkBtnList = [
    { width: "200px", height: "50px", backgroundColor: "rgb(250, 177, 160)", color: "rgb(214, 48, 49)", id: 4 },
    { width: "130px", height: "45px", backgroundColor: "rgb(250, 177, 160)", color: "rgb(214, 48, 49)", id: 5 },
    { width: "100px", height: "40px", backgroundColor: "rgb(250, 177, 160)", color: "rgb(214, 48, 49)", id: 6 },
  ];

  const smallBtnList = [{ width: "100px", height: "40px", backgroundColor: "rgb(85, 239, 196)", color: "rgb(0, 0, 0)", name: "BtnForInp", id: 7 }];

  return (
    <StBox className="App">
      <p>Button</p>
      <Btns btnList={greenBtnList} />
      <Btns btnList={PinkBtnList} />
      <Inputs smallBtnList={smallBtnList} />
      <p>Modal</p>
      <Modal modalType={"modal_1"} />
      <Modal modalType={"modal_2"} />
      <Select />
    </StBox>
  );
}

export default App;
