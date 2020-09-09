import React from "react";
import Grid from "@material-ui/core/Grid";
import * as styles from "../../../styles/PersonalDetails.module.scss";
import ProfileImage from "../../common/ProfileImage";
import SelectField from "../../common/SelectField";
import InputTextField from "../../common/InputTextField";
import DateField from "../../common/DateField";
import RadioButton from "../../common/RadioButton";
import {
  genderSeed,
  organisationSeed,
  countrySeed,
  stateSeed,
} from "../../../constants/productSeed";

const PersonalDetails = (props) => {
  console.log(" personal det props: ", props);
  const { isEdit } = props;
  return (
    <>
      <div className={styles.userInfo}>
        <Grid container xs={12}>
          <Grid item container>
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
                  xs={12}
                  sm={6}
                  data={organisationSeed}
                  padding={styles.align}
                  value={props.state.organisationId || ""}
                  onChange={(event) =>
                    props.onFill("organisationId", Number(event.target.value))
                  }
                />
                <InputTextField
                  padding={styles.align}
                  label="*First Name"
                  xs={12}
                  sm={6}
                  value={props.state.firstName || ""}
                  onChange={(event) =>
                    props.onFill("firstName", event.target.value)
                  }
                  error={props.error.firstName}
                  helperText={props.error.firstName}
                />
                <InputTextField
                  padding={styles.align}
                  label="Last Name"
                  xs={12}
                  sm={6}
                  value={props.state.lastName || ""}
                  onChange={(event) =>
                    props.onFill("lastName", event.target.value)
                  }
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    padding: "0px 16px",
                  }}
                >
                  <span>Gender</span>
                  <span>
                    {genderSeed &&
                      genderSeed.map((gender) => {
                        if (gender.id < 3) {
                          return (
                            <RadioButton
                              name={gender.label}
                              value={gender.id}
                              labelName={gender.label}
                              onChange={(event) =>
                                props.onFill(
                                  "genderId",
                                  parseInt(event.target.value)
                                )
                              }
                              checked={props.state.genderId === gender.id}
                            />
                          );
                        }
                        return null;
                      })}
                  </span>
                </div>
              </Grid>
            </Grid>
          </Grid>
          <Grid item container xs={12}>
            <Grid item xs={12}>
              <Grid container>
                <DateField
                  xs={12}
                  sm={4}
                  padding={styles.align}
                  value={props.formatDate(props.state.dob)}
                  onChange={(date) => props.handleDate(date)}
                />
                <InputTextField
                  label="Mobile Number"
                  padding={styles.align}
                  xs={12}
                  sm={4}
                  type="number"
                  value={props.state.mobileNumber || ""}
                  onChange={(event) => {
                    if (event.target.value.length)
                      props.onFill(
                        "mobileNumber",
                        parseInt(event.target.value)
                      );
                    else props.onFill("mobileNumber", null);
                  }}
                  error={props.error.mobileNumber}
                  helperText={props.error.mobileNumber}
                />
                <InputTextField
                  padding={styles.align}
                  label="*Email ID"
                  xs={12}
                  sm={4}
                  disabled={isEdit}
                  value={props.state.emailId || ""}
                  onChange={(event) =>
                    props.onFill("emailId", event.target.value)
                  }
                  error={props.error.emailId}
                  helperText={props.error.emailId}
                />
              </Grid>
            </Grid>
            <Grid item container xs={12}>
              <SelectField
                label="Select Country"
                xs={12}
                sm={4}
                data={countrySeed}
                padding={styles.align}
                value={props.state.countryId || ""}
                onChange={(event) =>
                  props.onFill("countryId", event.target.value)
                }
              />
              <SelectField
                label="Select State"
                xs={12}
                sm={4}
                data={stateSeed}
                padding={styles.align}
                value={props.state.stateId || ""}
                onChange={(event) =>
                  props.onFill("stateId", event.target.value)
                }
              />
              <InputTextField
                padding={styles.align}
                label="City"
                xs={12}
                sm={4}
                value={props.state.city || ""}
                onChange={(event) => props.onFill("city", event.target.value)}
              />
            </Grid>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PersonalDetails;
