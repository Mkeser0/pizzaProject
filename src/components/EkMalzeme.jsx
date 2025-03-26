import React from "react";
import { Label, FormGroup, Input } from "reactstrap";
function EkMalzeme(props) {
  const { items, handleChange } = props;
  return (
    <FormGroup
      check
      style={{ display: "flex", alignItems: "center", gap: "1rem" }}
    >
      <Input
        style={{
          transform: "scale(3)",
          border: "none",
          backgroundColor: "#FAF7F2",
          accentColor: "red",
        }}
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
