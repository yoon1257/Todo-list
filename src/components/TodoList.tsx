import React from "react";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { ITodoTypes, todoState } from "../atom";
import TodoListItem from "./TodoListItem";

const TodoList: React.FC = () => {
  const [todos, setTodos] = useRecoilState<ITodoTypes[]>(todoState);

  const onDelete = (id: string) => {
    setTodos(todos.filter((todo: ITodoTypes) => todo.id !== id));
  };
  //filter 함수를 사용해서 삭제기능을 구현

  const onComplete = (id: string): void => {
    setTodos(
      todos.map((todo: ITodoTypes) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };
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
              onDelete={onDelete}
              onComplete={onComplete}
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
