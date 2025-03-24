import React, { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  background-color: #ffc107;
  border: none;
  color: black;
  cursor: pointer;
  font-size: 0.5rem;
  width: 2rem;
`;

const ButtonDiv = styled.div`
  background-color: #ffc107;
  border: 1px solid white;
  border-radius: 0.2rem;
`;

const CounterButton = styled.button`
  background-color: white;
  border: 1px solid #ccc;
  color: black;
  cursor: default;
  font-size: 0.5rem;
  width: 2rem;
  height: 1.5rem;
`;

const Counter = ({ handleQuantityChange }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) {
      const newCount = count + 1;
      setCount(newCount);
      handleQuantityChange(newCount);
    }
  };

  const decrement = () => {
    if (count > 0) {
      const newCount = count - 1;
      setCount(newCount);
      handleQuantityChange(newCount);
    }
  };

  return (
    <div>
      <ButtonDiv>
        <Button onClick={decrement}>-</Button>
        <CounterButton disabled>{count}</CounterButton>
        <Button onClick={increment}>+</Button>
      </ButtonDiv>
    </div>
  );
};

export default Counter;
