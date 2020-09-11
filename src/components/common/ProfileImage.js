import React from "react";
import { Avatar, makeStyles } from "@material-ui/core";
import ButtonField from "./ButtonField";
import * as styles from "../../styles/PersonalDetails.module.scss";

const useStyles = makeStyles((theme) => ({
  input: {
    display: "none",
  },
}));

const ProfileImage = (props) => {
  const classes = useStyles();

  const uploadImage = (event) => {
    try {
      if (/^image/.test(event.target.files[0].type)) {
        props.onFill(
          "profileImage",
          URL.createObjectURL(event.target.files[0])
        );
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };

  return (
    <>
      <Avatar alt={props.alt} src={props.src} className={props.className} />
      <input
        accept="image/jpg,image/jpeg,image/png"
        className={classes.input}
        id="contained-button-file"
        type="file"
        onChange={(event) => uploadImage(event)}
      />
      <label className={styles.label} htmlFor="contained-button-file">
        <ButtonField
          label="Upload"
          className={styles.upload}
          variant="outlined"
          component="span"
        />
      </label>
    </>
  );
};

export default ProfileImage;
