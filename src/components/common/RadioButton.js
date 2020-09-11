import React from "react";
import { FormControlLabel, Radio } from "@material-ui/core";

const RadioButton = (props) => {
  return (
    props.seed &&
    props.seed.map((data, index) => (
      <FormControlLabel
        control={
          <Radio
            color="primary"
            key={index}
            name={data.label}
            value={data.id}
            labelName={data.label}
            onChange={props.onChange}
            checked={props.genderId === data.id}
          />
        }
        label={<span>{data.label}</span>}
      />
    ))
  );
};

export default RadioButton;
