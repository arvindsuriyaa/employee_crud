import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { Toolbar, Typography } from "@material-ui/core";
import { NavLink } from "react-router-dom";
import "../../styles/NavBar.scss";

const NavBar = () => {
  return (
    <AppBar position="static" className="header">
      <Toolbar>
        <div className="title">
          <Typography variant="h6">License Form</Typography>
          <div className="link">
            <NavLink to="/EmployeeList">Table</NavLink>
            <NavLink to="/AddEmployee">Form</NavLink>
          </div>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
