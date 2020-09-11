import React, { Component } from "react";
import AddEmployee from "./components/pages/AddEmployee";
import EmployeeList from "./components/pages/EmployeeList";
import Layout from "./components/Layout";
import * as routePath from "./constants/routePath"
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

class Root extends Component {
  render() {
    return (
      <Router>
        <Layout>
          <Switch>
            <Route exact strict path={routePath.ADD_EMPLOYEE} component={AddEmployee} />
            <Route exact strict path={routePath.EMPLOYEE_LIST} component={EmployeeList} />
          </Switch>
        </Layout>
        <Redirect to={routePath.EMPLOYEE_LIST}></Redirect>
      </Router>
    );
  }
}

export default Root;
