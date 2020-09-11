import React from "react";
import TableActions from "../components/pages/ListingComponents/TableActions";
import { Avatar } from "@material-ui/core";

const parentColumn = (props) => {
  return [
    {
      id: "",
      Header: "",
      Cell: (row) => {
        return (
          <Avatar size="small" src={row.original.profileImage}>
            {row.original.firstName.slice(0, 2).toUpperCase()}
          </Avatar>
        );
      },
      isLocked: true,
      resizable: false,
      width: 65,
    },
    {
      id: "name",
      Header: "Name",
      accessor: (d) => `${d.firstName} ${d.lastName}`,
    },
    {
      Header: "Gender",
      accessor: "genderId",
      Cell: (row) => {
        return row.original.genderId === 1
          ? "Male"
          : row.original.genderId === 2
          ? "Female"
          : "N/A";
      },
    },
    {
      id: "dob",
      Header: "Date Of Birth",
      accessor: "dob",
      Cell: (row) => {
        return row.original.dob === "" ? "N/A" : row.original.dob;
      },
    },
    {
      id: "mobileNumber",
      Header: "Mobile Number",
      accessor: "mobileNumber",
      Cell: (row) => {
        return row.original.mobileNumber === ""
          ? "N/A"
          : row.original.mobileNumber;
      },
    },
    {
      id: "emailId",
      Header: "Email ID",
      accessor: "emailId",
    },
    {
      id: "action",
      Header: "Actions",
      sortable: false,
      Cell: (row) => {
        return (
          <TableActions
            row={row}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
          />
        );
      },
      width:120
    },
  ];
};

export { parentColumn };
