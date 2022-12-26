import React from "react";
import styled from "styled-components";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { main } from "../styles/theme";
import { ITodoTypes } from "../atom";
import { SetterOrUpdater } from "recoil";

interface TodoListItemProps {
  id: number;
  contents: string;
  isCompleted: boolean;
  todos: ITodoTypes[];
  setTodos: SetterOrUpdater<ITodoTypes[]>;
  onDelete: (id: number) => void;
}
const TodoListItem: React.FC<TodoListItemProps> = ({
  id,
  contents,
  isCompleted,
  todos,
  setTodos,
  onDelete,
}) => {
  return (
    <TodoListItemContainer>
      <div>
        <input type="checkbox" />
        <span>{contents}</span>
      </div>
      <div>
        <button>
          <BsFillPencilFill />
        </button>
        <button>
          <BsFillTrashFill
            onClick={() => {
              onDelete(id);
            }}
          />
        </button>
      </div>
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
`;
export default TodoListItem;
