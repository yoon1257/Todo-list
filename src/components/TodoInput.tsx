import React, { ChangeEvent, useCallback, KeyboardEvent } from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { inputState, ITodoTypes, todoState } from "../atom";
import { main } from "../styles/theme";

const TodoInput: React.FC = () => {
  const [contents, setContents] = useRecoilState(inputState);
  const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todoState);

  const onAdd = useCallback((): void => {
    if (!contents.trim()) {
      return;
    }
    const nextId: number =
      todos.length > 0 ? todos[todos.length - 1].id + 1 : 0;

    const todo: ITodoTypes = {
      id: nextId,
      contents,
      isCompleted: false,
    };
    setTodos([...todos, todo]);

    setContents("");
  }, [contents, setContents, setTodos, todos]);

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setContents(e.target.value);
  };

  const onKeyDown = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter") {
      onAdd();
    }
  };

  return (
    <TodoInputContainer>
      <input
        type="text"
        placeholder="할일을 입력해주세요"
        value={contents}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
      <button onClick={onAdd}>+</button>
    </TodoInputContainer>
  );
};

const TodoInputContainer = styled.div`
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
