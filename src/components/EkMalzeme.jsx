import React from "react";
import { Label, FormGroup, Input, FormFeedback } from "reactstrap";
function EkMalzeme(props) {
  const { items, handleChange } = props;
  return (
    <FormGroup check>
      <Input
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
