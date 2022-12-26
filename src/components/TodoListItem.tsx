import React from "react";
import styled from "styled-components";
import { BsFillPencilFill } from "react-icons/bs";
import { BsFillTrashFill } from "react-icons/bs";
import { main } from "../styles/theme";

const TodoListItem = () => {
  return (
    <TodoListItemContainer>
      <div>
        <input type="checkbox" />
        <span>유진이 밥주기</span>
      </div>
      <div>
        <button>
          <BsFillPencilFill />
        </button>
        <button>
          <BsFillTrashFill />
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
