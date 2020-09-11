import React, { Component } from "react";
import { Table } from "react_custom_table";
import { parentColumn } from "../../constants/columnData";
import "../../styles/index.scss";
import { bindDispatch } from "../../utils";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import * as routePath from "../../constants/routePath"

class EmployeeList extends Component {
  state = {
    data: [],
    pageSize: 5,
    currentPage: 1,
    selection: [],
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

  handleEdit = (row) => {
    const { history, actions } = this.props;
    actions.assignData("editIndex", row.index);
    actions.assignData("isEdit", true);
    history.push(routePath.ADD_EMPLOYEE);
  };

  handleDelete = (row) => {
    const { data } = this.state;
    let userList = [...data];
    userList.splice(row.index, 1);
    this.setState({ data: userList });
  };

  componentDidMount() {
    const { reducer } = this.props;
    const { userList } = reducer;
    userList.forEach((user) => {
      for (let key in user) {
        if (user[key] === null) {
          user[key] = "";
        }
      }
    });

    this.setState({ data: userList });
  }

  render() {
    const { columns, fixedColumns } = this.state;
    let actions = {
      handleEdit: (row) => this.handleEdit(row),
      handleDelete: (row) => this.handleDelete(row),
    };
    const { pageSize, currentPage, data } = this.state;
    const offset = pageSize * (currentPage - 1);
    const test = data.slice(offset, offset + pageSize);
    return (
      <div style={{padding: "30px"}}>
        <Table
          columns={columns(actions)}
          fixedColumns={fixedColumns}
          data={test}
          manual={false}
          LoadingComponent={<div>There is no data found</div>}
          tableTitle="Employee Details"
          addNewButtonProps={{
            onClick: () => this.props.history.push(routePath.ADD_EMPLOYEE),
          }}
          paginationProps={{
            totalCount: data.length,
            pageSize: pageSize,
            currentPage: currentPage,
            onPageNumberChange: (pageNumber) =>
              this.setState({ currentPage: pageNumber }),
            onChangePageSize: (size) =>
              this.setState({ pageSize: size, currentPage: 1 }),
          }}
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
