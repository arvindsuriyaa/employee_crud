import React from "react";
import Grid from "@material-ui/core/Grid";
import * as styles from "../../../styles/PersonalDetails.module.scss";
import {
  genderSeed,
  organisationSeed,
  countrySeed,
  stateSeed,
} from "../../../constants/productSeed";
import ProfileSection from "./personalDetails/ProfileSection";
import UserSections from "./personalDetails/UserSections";

const PersonalDetails = (props) => {
  const { isEdit } = props;
  return (
    <>
      <div className={styles.userInfo}>
        <Grid container>
          <Grid item container>
            <ProfileSection
              {...props}
              organisationSeed={organisationSeed}
              genderSeed={genderSeed}
            />
          </Grid>
          <Grid item container xs={12}>
            <UserSections
              {...props}
              isEdit={isEdit}
              countrySeed={countrySeed}
              stateSeed={stateSeed}
            />
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default PersonalDetails;
