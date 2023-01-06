import React from "react";
import styled from "styled-components";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { main } from "../styles/theme";

const Home = () => {
  return (
    <HomeContainer>
      <div className="entireContainer">
        <h1>TodoList</h1>
        <TodoInput />
        <TodoList />
      </div>
    </HomeContainer>
  );
};
const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .entireContainer {
    width: 30%;
    height: 70%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    border: 1px solid ${main};
    h1 {
      background-color: ${main};
      color: #fff;
      text-align: center;
      padding: 10px;
    }
  }
`;

export default Home;
