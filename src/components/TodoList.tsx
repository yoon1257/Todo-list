import React from "react";
import styled from "styled-components";
import TodoListItem from "./TodoListItem";

const TodoList = () => {
  return (
    <TodoListContainer>
      <TodoListItem />
    </TodoListContainer>
  );
};

const TodoListContainer = styled.div``;
export default TodoList;
