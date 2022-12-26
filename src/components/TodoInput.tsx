import React from "react";
import styled from "styled-components";
import { main } from "../styles/theme";

const TodoInput = () => {
  return (
    <TodoInputContainer>
      <input type="text" placeholder="할일을 입력해주세요" />
      <button>+</button>
    </TodoInputContainer>
  );
};

const TodoInputContainer = styled.form`
  border-bottom: 1px solid ${main};
  padding: 15px;
  width: 100%;
  display: flex;
  justify-content: center;
  input {
    width: 100%;
    border: none;
    border-bottom: 1px solid ${main};
    &:focus {
      outline: none;
    }
  }
  button {
    background-color: ${main};
    color: white;
    font-weight: 900;
    border: none;
    padding: 10px;
    cursor: pointer;
    &:active {
      box-shadow: inset -0.3rem -0.1rem 1.4rem #fbfbfb,
        inset 0.3rem 0.4rem 0.8rem #bec5d0;
      cursor: pointer;
    }
  }
`;
export default TodoInput;
