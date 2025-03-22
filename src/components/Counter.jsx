import React, { useState } from "react";
import { Button, ButtonGroup, Card } from "react-bootstrap";

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 10) setCount(count + 1);
  };

  const decrement = () => {
    if (count > 0) setCount(count - 1);
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
