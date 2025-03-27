import React from "react";
import { Label, FormGroup } from "reactstrap";
import styled from "styled-components";
const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;
  width: 2rem;
  height: 2rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #faf7f2;
  position: relative;
  cursor: pointer;

  &:checked {
    background-color: #fdc913;
    border-color: #fdc913;
  }

  &:checked::after {
    content: "✔";
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    font-size: 16px;
    font-weight: bold;
    color: #292929;
  }
`;

function EkMalzeme(props) {
  const { items, handleChange } = props;
  return (
    <FormGroup
      check
      style={{
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        marginBottom: ".5rem",
      }}
    >
      <StyledCheckbox
        value={items}
        name={items}
        id={items}
        type="checkbox"
        onChange={handleChange}
      />
      <Label htmlFor={items} check>
        {items}
      </Label>
    </FormGroup>
  );
}

export default EkMalzeme;
