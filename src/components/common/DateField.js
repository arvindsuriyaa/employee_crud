import React from "react";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import { KeyboardDatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { Grid } from "@material-ui/core";

const DateField = (props) => {
  return (
    <Grid item xs={props.small} sm={props.medium}>
      <div className={props.padding}>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
            clearable
            inputVariant="outlined"
            label="Date of Birth"
            value={props.value || null}
            fullWidth={true}
            name="dob"
            margin="dense"
            onChange={props.onChange}
            format="dd/MM/yyyy"
          />
        </MuiPickersUtilsProvider>
      </div>
    </Grid>
  );
};

export default DateField;
