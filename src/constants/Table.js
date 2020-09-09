import React from "react";
import TableActions from "../components/pages/ListingComponents/TableActions";
import { Avatar } from "@material-ui/core";
// import { EditIcon } from "../assets";

const parentColumn = (props) => {
  console.log("parent column props:===>", props);
  return [
    {
      id: "",
      Header: "",
      // accessor: (d) => d.name,
      Cell: (row) => {
        return (
          <Avatar
            size="small"
            src={row.original.profileImage}
            alt={row.original.firstName}
          />
        );
      },
      isLocked: true,
      resizable: false,
      width: 80,
    },
    {
      id: "name",
      Header: "Name",
      accessor: (d) => `${d.firstName} ${d.lastName}`,
      // cell:(row)=>{
      //   return(row.original.firstName+""+row.original.lastName)
      // },
    },
    {
      Header: "Gender",
      accessor: "genderId",
      Cell: (row) => {
        return row.original.genderId === 1
          ? "Male"
          : row.original.genderId !== null
          ? "Female"
          : "";
      },
    },
    {
      id: "dob",
      Header: "Date Of Birth",
      accessor: "dob",
      // Cell: (d) => d.original.friend.name || "",
    },
    {
      id: "mobileNumber",
      Header: "Mobile Number",
      accessor: "mobileNumber",
      // accessor: (d) => d.friend.age || "",
    },
    {
      id: "emailId",
      Header: "Email ID",
      accessor: "emailId",
      // accessor: (d) => d.friend.age || "",
    },
    {
      id: "action",
      Header: "Actions",
      sortable: false,
      // Cell: () => <EditIcon />,
      Cell: (row) => {
        return (
          <TableActions
            row={row}
            handleDelete={props.handleDelete}
            handleEdit={props.handleEdit}
          />
        );
      },
    },
  ];
};

export { parentColumn };
