import React from "react";
import { Grid } from "@material-ui/core";
import * as styles from "../../../../styles/PersonalDetails.module.scss";
import ProfileImage from "../../../common/ProfileImage";
import SelectField from "../../../common/SelectField";
import InputTextField from "../../../common/InputTextField";
import RadioButton from "../../../common/RadioButton";


const ProfileSection = (props) => {
  return (
    <>
      <Grid item xs={12} sm={4}>
        <div className={styles.profileSection}>
          <ProfileImage
            {...props}
            src={props.state.profileImage}
            className={styles.avatar}
          />
        </div>
      </Grid>
      <Grid item xs={12} sm={8}>
        <Grid container>
          <SelectField
            label="Select Organisation"
            small={12}
            medium={6}
            data={props.organisationSeed}
            padding={styles.align}
            value={props.state.organisationId || ""}
            onChange={(event) =>
              props.onFill("organisationId", Number(event.target.value))
            }
          />
          <InputTextField
            padding={styles.align}
            label="First Name*"
            small={12}
            medium={6}
            value={props.state.firstName || ""}
            onChange={(event) => props.onFill("firstName", event.target.value)}
            error={props.error.firstName || false}
            helperText={props.error.firstName}
          />
          <InputTextField
            padding={styles.align}
            label="Last Name"
            small={12}
            medium={6}
            value={props.state.lastName || ""}
            onChange={(event) => props.onFill("lastName", event.target.value)}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "0px 16px",
            }}
          >
            <span style={{ color: "grey" }}>Gender</span>
            <span>
              <RadioButton
                seed={props.genderSeed}
                onChange={(event) =>
                  props.onFill("genderId", parseInt(event.target.value))
                }
                genderId={props.state.genderId}
              />
            </span>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProfileSection;
