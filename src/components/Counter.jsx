import React, { useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";

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
    <Card>
      <ButtonGroup>
        <Button variant="warning" onClick={decrement}>
          -
        </Button>
        <Button variant="light" disabled>
          {count}
        </Button>
        <Button variant="warning" onClick={increment}>
          +
        </Button>
      </ButtonGroup>
    </Card>
  );
};

export default Counter;
