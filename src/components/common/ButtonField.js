import React from "react";
import { Button } from "@material-ui/core";

const ButtonField = (props) => {
  return (
    <Button
      onClick={props.onClick}
      className={props.className}
      variant={props.variant}
      component={props.component}
    >
      {props.label}
    </Button>
  );
};

export default ButtonField;
