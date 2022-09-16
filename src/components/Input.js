import styled from "styled-components";
import { useState, useEffect } from "react";

const Form = styled.form`
  padding: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Input = styled.input`
  width: 200px;
  height: 100px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 200px;
  padding: 5px;
`;

function TextBox({ handleOutput }) {
  const [input, setInput] = useState('{"resulta":true, "couna":42}');

  useEffect(() => {
    const convert = (input) => {
      input = JSON.parse(input);
      const output = { keys: Object.keys(input), values: Object.values(input) };
      handleOutput(output);
      // console.log("output: ", output);
    };

    convert(input);
  }, [input]);

  return (
    <Form
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <Input
        type="text-area"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button>Convert</Button>
    </Form>
  );
}

export default TextBox;
