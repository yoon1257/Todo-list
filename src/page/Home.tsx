import React from "react";
import styled from "styled-components";
import Clock from "../components/Clock";
import TodoInput from "../components/TodoInput";
import TodoList from "../components/TodoList";
import { main } from "../styles/theme";

const Home = () => {
  return (
    <HomeContainer>
      <div className="entireContainer">
        <div>
          <h1>TodoList </h1>
          <h5>
            <Clock />
          </h5>
        </div>
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
    h5 {
      background-color: ${main};
      text-align: right;
      color: #fff;
    }
  }
`;

export default Home;
