import React from "react";
import { TextField, Grid } from "@material-ui/core";

const InputTextField = (props) => {
  return (
    <Grid item xs={props.small} sm={props.medium}>
      <div className={props.padding}>
        <TextField
          type={props.type}
          variant="outlined"
          multiline
          value={props.value}
          error={props.error}
          className={props.className}
          label={props.label}
          disabled={props.disabled}
          rows={props.rows}
          margin="dense"
          onChange={props.onChange}
          fullWidth
          helperText={props.helperText}
          size="small"
        />
      </div>
    </Grid>
  );
};

export default InputTextField;
