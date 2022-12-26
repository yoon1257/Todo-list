import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ITodoTypes, todoState } from "../atom";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todoState);

  return (
    <TodoListContainer>
      {todos.length > 0 ? (
        todos.map((todo: ITodoTypes) => {
          const { id, contents, isCompleted } = todo;
          return (
            <TodoListItem
              key={id}
              id={id}
              contents={contents}
              isCompleted={isCompleted}
              todos={todos}
              setTodos={setTodos}
            />
          );
        })
      ) : (
        <div className="no-list">
          Todo가 없습니다.
          <br /> 자유롭게 추가해보세요!
        </div>
      )}
    </TodoListContainer>
  );
};

const TodoListContainer = styled.div`
  overflow: auto;
  .no-list {
    margin: 20px;
    text-align: center;
  }
`;
export default TodoList;
