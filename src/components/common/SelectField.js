import React from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
} from "@material-ui/core";

const SelectField = (props) => {
  return (
    <Grid item xs={props.xs} sm={props.sm}>
      <div className={props.padding}>
        <FormControl
          variant="outlined"
          className={props.className}
          fullWidth
          margin="dense"
        >
          <InputLabel id={props.label}>{props.label}</InputLabel>
          <Select
            value={props.value}
            onChange={props.onChange}
            label={props.label}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {props.data &&
              props.data.map((item, index) => {
                return (
                  <MenuItem key={index} value={item.id}>
                    {item.label}
                  </MenuItem>
                );
              })}
          </Select>
        </FormControl>
      </div>
    </Grid>
  );
};

export default SelectField;
