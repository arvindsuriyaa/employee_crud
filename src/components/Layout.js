import React, { Component } from "react";
import NavBar from "./common/NavBar";
import { withRouter } from "react-router-dom";

class Layout extends Component {
  render() {
    return (
      <>
        <NavBar />
        {this.props.children}
      </>
    );
  }
}

export default withRouter(Layout);
