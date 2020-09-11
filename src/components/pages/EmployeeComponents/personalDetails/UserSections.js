import React from "react";
import { Grid } from "@material-ui/core";
import DateField from "../../../common/DateField";
import InputTextField from "../../../common/InputTextField";
import SelectField from "../../../common/SelectField";
import * as styles from "../../../../styles/PersonalDetails.module.scss";


const UserSections = (props) => {
  return (
    <>
      <Grid item xs={12}>
        <Grid container>
          <DateField
            small={12}
            medium={4}
            padding={styles.align}
            value={props.formatDate(props.state.dob)}
            onChange={(date) => props.handleDate(date)}
          />
          <InputTextField
            label="Mobile Number"
            padding={styles.align}
            small={12}
            medium={4}
            type="number"
            value={props.state.mobileNumber || ""}
            onChange={(event) => {
              if (event.target.value.length)
                props.onFill("mobileNumber", parseInt(event.target.value));
              else props.onFill("mobileNumber", null);
            }}
            error={props.error.mobileNumber || false}
            helperText={props.error.mobileNumber}
          />
          <InputTextField
            padding={styles.align}
            label="Email ID*"
            small={12}
            medium={4}
            disabled={props.isEdit}
            value={props.state.emailId || ""}
            onChange={(event) => props.onFill("emailId", event.target.value)}
            error={props.error.emailId || false}
            helperText={props.error.emailId}
          />
        </Grid>
      </Grid>
      <Grid item container xs={12}>
        <SelectField
          label="Select Country"
          small={12}
          medium={4}
          data={props.countrySeed}
          padding={styles.align}
          value={props.state.countryId || ""}
          onChange={(event) => props.onFill("countryId", event.target.value)}
        />
        <SelectField
          label="Select State"
          small={12}
          medium={4}
          data={props.stateSeed}
          padding={styles.align}
          value={props.state.stateId || ""}
          onChange={(event) => props.onFill("stateId", event.target.value)}
        />
        <InputTextField
          padding={styles.align}
          label="City"
          small={12}
          medium={4}
          value={props.state.city || ""}
          onChange={(event) => props.onFill("city", event.target.value)}
        />
      </Grid>
    </>
  );
};

export default UserSections;
