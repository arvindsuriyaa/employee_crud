import React, { useState, useEffect } from "react";
import PersonalDetails from "./EmployeeComponents/PersonalDetails";
import AddressDetails from "./EmployeeComponents/AddressDetails";
import { createSelector } from "reselect";
import { bindDispatch } from "../../utils";
import { connect } from "react-redux";
import { initialState } from "../../constants/productSeed";
import _ from "lodash";

const AddEmployee = (props) => {
  const { reducer } = props;
  const [employee, setEmployee] = useState(initialState);
  let [error, setError] = useState({});
  const employeeDetails = _.cloneDeep(employee);

  const setEditData = () => {
    const { reducer } = props;
    const { editIndex, userList } = reducer;
    if (editIndex !== null) {
      userList.forEach((user) => {
        if (user.dob === "") user.dob = null;
        if (user.mobileNumber === "") user.mobileNumber = null;
        if (user.pincode === "") user.pincode = null;
      });
      setEmployee(userList[editIndex]);
    }
    return () => {
      cancel();
    };
  };

  useEffect(setEditData, []);

  const onFill = (name, value) => {
    if (typeof value === "string" && value.replace(/\s/g, "").length <= 0)
      value = "";
    if (!/\s+/g.test(value)) {
      error[name] = "";
      setError(error);
    }
    employeeDetails[name] = value;
    setEmployee(employeeDetails);
  };

  const checkEmailDuplication = (error, field, key) => {
    const { reducer } = props;
    const { userList } = reducer;
    let isDuplication = userList.some(
      (user) => user.emailId === employeeDetails.emailId
    );
    if (isDuplication) {
      error[key] = "This Email Id Already Exists";
    }
    return error;
  };

  const validateError = (mandatoryField) => {
    error = {};
    mandatoryField.forEach((field) => {
      for (let key in field) {
        if (!field[key].length) error[key] = "*This Field is Mandatory";
        else error[key] = "";

        if (field[key].length) {
          if (key === "emailId") {
            // eslint-disable-next-line no-useless-escape
            let regEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
            if (!regEx.test(field[key])) {
              error[key] = "*Invalid Email. Expected format:aaa@example.com";
            } else {
              if (!reducer.isEdit) checkEmailDuplication(error, field, key);
            }
          } else if (key === "mobileNumber") {
            if (field[key].length !== 10)
              error[key] = "*Invalid Mobile Number. Expected only 10 digits.";
          } else if (key === "pincode") {
            if (field[key].length !== 6)
              error[key] = "*Invalid Pincode. Expected 6 digits. ";
          }
        }
      }
    });
    setError(error);
  };

  const validateField = () => {
    let mandatoryField = [];
    mandatoryField = [
      { firstName: employeeDetails.firstName },
      { emailId: employeeDetails.emailId },
      ...(employeeDetails.mobileNumber !== null &&
      employeeDetails.mobileNumber.toString().length !== 10
        ? [{ mobileNumber: employeeDetails.mobileNumber.toString() }]
        : []),
      ...(employeeDetails.pincode !== null &&
      employeeDetails.pincode.toString().length !== 7
        ? [{ pincode: employeeDetails.pincode.toString() }]
        : []),
    ];
    validateError(mandatoryField);
  };

  const cancel = () => {
    const { actions } = props;
    error = {};
    setError(error);
    setEmployee(initialState);
    actions.assignData("isEdit", false);
    actions.assignData("editIndex", null);
    props.history.push("/EmployeeList");
  };

  const register = () => {
    const { reducer, actions } = props;
    const { isEdit, editIndex } = reducer;
    let details = _.cloneDeep(reducer);
    const { userList } = details;
    validateField();
    let errorDetails = Object.entries(error);
    let errorFlag = errorDetails.some((flag) => {
      return flag[1].length !== 0;
    });
    if (!errorFlag) {
      if (isEdit) userList.splice(editIndex, 1, employeeDetails);
      else userList.push(employeeDetails);
      actions.assignData("userList", userList);
      props.history.push("/EmployeeList");
      cancel();
    }
  };

  const updateState = (employeeDetails) => {
    setEmployee(employeeDetails);
  };

  const handleDate = (value) => {
    if (value !== null) {
      const formattedDate = `${value.getFullYear()}-${
        value.getMonth() + 1
      }-${value.getDate()}`;
      employeeDetails["dob"] = formattedDate;
      if (employeeDetails["dob"] === "NaN-NaN-NaN") {
        employeeDetails["dob"] = null;
      }

      setEmployee(employeeDetails);
    }
  };

  const formatDate = (dateStr) => {
    if (dateStr !== null) {
      const date = new Date(dateStr);
      return date;
    }
    return null;
  };

  let newProps = {
    props,
    state: employeeDetails,
    onFill: (name, value) => onFill(name, value),
    updateState: (employeeDetails) => updateState(employeeDetails),
    register: () => register(),
    cancel: () => cancel(),
    handleDate: (value) => handleDate(value),
    formatDate: (dateStr) => formatDate(dateStr),
    error: { ...error },
    isEdit: reducer.isEdit,
  };

  return (
    <>
      <PersonalDetails {...newProps} />
      <AddressDetails {...newProps} />
    </>
  );
};

const mapStateToProps = createSelector(
  (state) => state.reducer,
  (reducer) => ({ reducer })
);

export default connect(mapStateToProps, bindDispatch)(AddEmployee);
