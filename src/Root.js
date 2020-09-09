import React, { Component } from "react";
import AddEmployee from "./components/pages/AddEmployee";
import EmployeeList from "./components/pages/EmployeeList";
import Layout from "./components/Layout";
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
            <Route exact strict path="/AddEmployee" component={AddEmployee} />
            <Route exact strict path="/EmployeeList" component={EmployeeList} />
          </Switch>
        </Layout>
        <Redirect to="/EmployeeList"></Redirect>
      </Router>
    );
  }
}

export default Root;
