import "./App.css";
import { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "./components/Input.js";

const Output = styled.input`
  width: 200px;
  height: 100px;
  margin-bottom: 10px;
`;

function App() {
  const [output, setOutput] = useState([]);

  const handleOutput = (output) => {
    setOutput(output);
    console.log("from app: ", output);
  };

  return (
    <div className="App">
      <header>JSON to CSV Converter</header>
      <Input handleOutput={handleOutput}></Input>
      <Output readOnly></Output>
    </div>
  );
}

export default App;
