import React, { useState } from "react";
import styled from "styled-components";

const Clock: React.FC = () => {
  const [currentDate] = useState(new Date());
  const week = ["일", "월", "화", "수", "목", "금", "토"];
  const today = `${currentDate.getFullYear()}년 ${
    currentDate.getMonth() + 1
  }월 ${currentDate.getDate()}일 ${week[currentDate.getDay()]}요일`;

  return <ClockContainer>{today}</ClockContainer>;
};

const ClockContainer = styled.div``;
export default Clock;
