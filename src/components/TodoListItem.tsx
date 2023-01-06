import React, { useCallback, useState } from "react";
import styled from "styled-components";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { main } from "../styles/theme";
import { ITodoTypes } from "../atom";
import { SetterOrUpdater } from "recoil";
import TodoModal from "./TodoModal";

interface TodoListItemProps {
  id: string;
  contents: string;
  isCompleted: boolean;
  todos: ITodoTypes[];
  setTodos: SetterOrUpdater<ITodoTypes[]>;
  onDelete: (id: string) => void;
  onComplete: (id: string) => void;
}
const TodoListItem: React.FC<TodoListItemProps> = ({
  id,
  contents,
  isCompleted,
  todos,
  setTodos,
  onDelete,
  onComplete,
}) => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const [modifyContents, setModifyContents] = useState<string>("");

  const onModify = (): void => {
    setIsModal(true);
    setModifyContents(contents);
  };

  const modifyTodo = useCallback((): void => {
    if (!modifyContents.trim()) {
      return;
    }
    setTodos(
      todos.map((todo: ITodoTypes) => {
        return todo.id === id ? { ...todo, contents: modifyContents } : todo;
      })
    );
    setIsModal(false);
  }, [id, modifyContents, setTodos, todos]);

  return (
    <TodoListItemContainer>
      <div>
        <div
          title={contents}
          className={isCompleted ? "completed " : ""}
          onClick={() => {
            onComplete(id);
          }}
        >
          <input type="checkbox" />
          <span>{contents}</span>
        </div>
      </div>
      <div>
        <button onClick={onModify}>
          <BsFillPencilFill />
        </button>
        <button
          onClick={() => {
            onDelete(id);
          }}
        >
          <BsFillTrashFill />
        </button>
      </div>
      {isModal && (
        <TodoModal
          setIsModal={setIsModal}
          modifyContents={modifyContents}
          setModifyContents={setModifyContents}
          modifyTodo={modifyTodo}
        />
      )}
    </TodoListItemContainer>
  );
};

const TodoListItemContainer = styled.div`
  margin: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  span {
    margin-left: 5px;
  }
  button {
    margin-right: 5px;
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
  .completed {
    text-decoration: line-through;
    cursor: pointer;
  }
`;
export default TodoListItem;
