import React, { Component } from "react";
import { Table } from "react_custom_table";
// import TableButtons from "./TypeButtons";
import { parentColumn } from "./constants/Table";
import generateDebugData from "./generateDebugData";
import tableTypes from "./constants/tableTypes";
import "./index.scss"

export default class App extends Component {
  state = {
    pageSize: 10,
    currentPage: 1,
    selection: [],
    selectedTable: tableTypes[0],
    allFriends: generateDebugData(),
    expandSelection: { parentSelection: [], childSelection: [] },
    columns: parentColumn,
    fixedColumns: ["Name", "Age", "Gender"],
  };
  onRowSelect = (selection) => this.setState({ selection });

  onColumnDragAndDrop = (columns) => this.setState({ columns });

  renderTable = (selection, expandSelection, data, pageSize) => {
    const {
      selectedTable: { name },
      currentPage,
      allFriends,
      columns,
      fixedColumns,
    } = this.state;
    const normalTable = ["table", "selectTable"];
    const selectable = name.toLowerCase().includes("select");
    if (normalTable.includes(name)) {
      return (
        <Table
          columns={columns}
          fixedColumns={fixedColumns}
          data={data}
          selectable={selectable}
          selection={selection}
          shouldHideSelect={({ row }) => row.id === "7"}
          selectedClassNames="selectedParent"
          selectedBackground="rgba(121, 126, 209, 0.2)"
          onSelect={(expandSelection) => this.onRowSelect(expandSelection)}
          onColumnDragAndDrop={this.onColumnDragAndDrop}
          manual={false}
          LoadingComponent={<div>There is no data found</div>}
          paginationProps={{
            totalCount: allFriends.length,
            pageSize: pageSize,
            currentPage: currentPage,
            onPageNumberChange: (pageNumber) =>
              this.setState({ currentPage: pageNumber }),
            onChangePageSize: (size) => this.setState({ pageSize: size }),
          }}
          tableTitle="React Custome Table"
        />
      );
    }
  };
  render() {
    const {
      pageSize,
      currentPage,
      allFriends,
      selection,
      expandSelection,
      selectedTable,
    } = this.state;
    const offset = pageSize * (currentPage - 1);
    const data = allFriends.slice(offset, offset + pageSize);
    return (
      <div className="App">
        <div className="clearfix">
          <div className="col col-12 my2 h3">{`${selectedTable.header} Example`}</div>
        </div>
        {/* <TableButtons
          onClick={(type) => this.setState({ selectedTable: type })}
        /> */}
        {this.renderTable(selection, expandSelection, data, pageSize)}
      </div>
    );
  }
}
