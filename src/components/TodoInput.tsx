import React, { ChangeEvent, useCallback } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { inputState, ITodoTypes, todoState } from "../atom";
import { main } from "../styles/theme";
import { v4 as uuid } from "uuid";

const TodoInput: React.FC = () => {
  const [contents, setContents] = useRecoilState(inputState);
  const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todoState);

  const onAdd = useCallback((): void => {
    if (!contents.trim()) {
      alert("할일을 입력해주세요");
      return;
    }

    const todo: ITodoTypes = {
      id: uuid(),
      contents,
      isCompleted: false,
    };
    setTodos([...todos, todo]);

    setContents("");
  }, [contents, setContents, setTodos, todos]);

  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setContents(e.target.value);
  };

  return (
    <TodoInputContainer onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        placeholder="할일을 입력해주세요"
        value={contents}
        onChange={onChange}
      />
      <button onClick={onAdd}>+</button>
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
