import React, { useEffect } from "react";
import * as styles from "../../../styles/AddressDetails.module.scss";
import { Grid } from "@material-ui/core";
import InputTextField from "../../common/InputTextField";
import ButtonField from "../../common/ButtonField";
import CheckBoxField from "../../common/CheckBoxField";

const AddressDetails = (props) => {
  const { isEdit } = props;
  const assignAddressType = () => {
    if (props.state.addressType === 2) {
      props.onFill("permanentAddress", props.state.communicationAddress);
    } else {
      props.onFill("permanentAddress", "");
    }
  };

  const setDefaultState = () => {
    if (
      !props.state.communicationAddress.length &&
      props.state.addressType === 2
    ) {
      const employeeDetails = { ...props.state };
      employeeDetails["addressType"] = 1;
      employeeDetails["permanentAddress"] = "";
      props.updateState(employeeDetails);
    }
  };

  useEffect(assignAddressType, [props.state.addressType]);

  useEffect(setDefaultState, [props.state.communicationAddress]);

  return (
    <div className={styles.addressDetails}>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Grid container>
            <InputTextField
              padding={styles.alignment}
              rows={6}
              xs={12}
              sm={6}
              label="Communication Address"
              value={props.state.communicationAddress || ""}
              onChange={(event) => {
                props.onFill("communicationAddress", event.target.value);
                if (props.state.addressType === 2) {
                  props.onFill("permanentAddress", event.target.value);
                }
              }}
            />
            <InputTextField
              rows={6}
              xs={12}
              sm={6}
              label="Permanent Address"
              padding={styles.alignment}
              value={
                props.state.addressType === 2
                  ? props.state.communicationAddress
                  : props.state.permanentAddress || ""
              }
              onChange={(event) => {
                if (props.state.addressType === 2)
                  props.onFill("communicationAddress", event.target.value);
                props.onFill("permanentAddress", event.target.value);
              }}
            />

            <div className={styles.alignment}>
              <CheckBoxField
                label="Permanent Address same as Communication Address"
                value={2}
                onChange={(event) => {
                  if (event.target.checked) props.onFill("addressType", 2);
                  else props.onFill("addressType", 1);
                }}
                disabled={!props.state.communicationAddress.length}
                checked={props.state.addressType === 2}
              />
            </div>
          </Grid>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Grid item xs={12} sm={4}>
            <InputTextField
              label="Pincode"
              type="number"
              className={styles.pincode}
              padding={styles.alignment}
              error={props.error.pincode}
              helperText={props.error.pincode}
              value={props.state.pincode || ""}
              onChange={(event) => {
                if (event.target.value.length)
                  props.onFill("pincode", parseInt(event.target.value));
                else props.onFill("pincode", null);
              }}
            />
          </Grid>
        </Grid>
        <Grid item xs={12} justify="flex-end" alignContent="flex-end">
          <div className={styles.footer}>
            <ButtonField
              label={isEdit ? "Update" : "Register"}
              onClick={() => props.register()}
            />
            <ButtonField label="Cancel" onClick={() => props.cancel()} />
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default AddressDetails;
