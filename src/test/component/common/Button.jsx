import React from "react";
import styled from "styled-components";

function Button({ text, disabled, onClick }) {
  return (
    <Btn disabled={disabled} onClick={onClick}>
      {text}
    </Btn>
  );
}

const Btn = styled.button`
  margin-left: auto;
  margin-top: 10px;
  background-color: peachpuff;
  font-family: sans-serif;
  border: none;
  width: max-content;
  height: max-content;
  border-radius: 8px;
  cursor: pointer;

  :disabled {
    cursor: not-allowed;
  }
`;

export default Button;
