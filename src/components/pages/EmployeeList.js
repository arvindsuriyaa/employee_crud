import React, { Component } from "react";
import { Table } from "react_custom_table";
import { parentColumn } from "../../constants/Table";
import tableTypes from "../../constants/tableTypes";
import "../../styles/index.scss";
import sampleData from "../../SampleData";
import { bindDispatch } from "../../utils";
import { createSelector } from "reselect";
import { connect } from "react-redux";

class EmployeeList extends Component {
  // constructor(props) {
  //   super(props);
  state = {
    data: sampleData,
    pageSize: 10,
    currentPage: 1,
    selection: [],
    selectedTable: tableTypes[0],
    expandSelection: { parentSelection: [], childSelection: [] },
    columns: parentColumn,
    fixedColumns: [
      "",
      "Name",
      "Gender",
      "Date Of Birth",
      "Mobile Number",
      "Email ID",
    ],
  };
  // }

  handleEdit = (row) => {
    const { history, actions } = this.props;
    actions.assignData("editIndex", row.index);
    actions.assignData("isEdit", true);
    history.push("/AddEmployee");
  };

  handleDelete = (row) => {
    const { data } = this.state;
    let userList = [...data];
    userList.splice(row.index, 1);
    this.setState({ data: userList });
  };

  componentDidMount() {
    console.log("props==========>", this.props);
    const { reducer } = this.props;
    const { userList } = reducer;
    this.setState({ data: userList });
  }

  render() {
    const { columns, fixedColumns } = this.state;
    const data = sampleData;
    let actions = {
      handleEdit: (row) => this.handleEdit(row),
      handleDelete: (row) => this.handleDelete(row),
    };

    console.log("data: ", data);

    return (
      <div className="App">
        <Table
          columns={columns(actions)}
          fixedColumns={fixedColumns}
          data={this.state.data}
          manual={false}
          LoadingComponent={<div>There is no data found</div>}
          tableTitle="Employee Details"
        />
      </div>
    );
  }
}
const mapStateToProps = createSelector(
  (state) => state.reducer,
  (reducer) => ({ reducer })
);

export default connect(mapStateToProps, bindDispatch)(EmployeeList);
