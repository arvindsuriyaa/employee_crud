// import React from "react";
// import { EditIcon } from "../assets";

const parentColumn = [
    {
      id: "",
      Header: "",
      // sortable: false,
      // Cell: () => <EditIcon />,
    },
    {
      id: "name",
      Header: "Name",
      // accessor: (d) => {
      //   console.log("d: ", d);
      //   // d.name
      // },
      isLocked: true,
    },
    {
      id: "gender",
      Header: "Gender",
      // accessor: "age",
      // accessor: (d) => {
      //   console.log("d: ", d);
      //   // d.name
      // },
      // getProps: (state, rowInfo, column) => ({}),
      // parentCell: ({ row }) => <div>Parent</div>,
      // childCell: ({ row }) => <div>Parent</div>,
    },
    {
      id: "dateOfBirth",
      Header: "Date of Birth",
      // accessor: "gender",
      // childAccessor: (d) => d.name,
    },
    {
      id: "mobileNumber",
      Header: "Mobile Number",
      // accessor: "gender",
      // childAccessor: (d) => d.name,
    },
    // {
    //   id: "friendName",
    //   Header: "Friend Name - Long Header Example Which Should Ellipsize",
    //   Cell: (d) => {
    //     console.log("d: ", d);
    //   },
    //   // d.original.friend.name || "",
    // },
    {
      id: "Email Id",
      Header: "Email Id",
      // accessor: (d) => d.friend.age || "",
    },
    {
      id: "action",
      Header: "Actions",
      // sortable: false,
      // Cell: () => <EditIcon />,
    },
  ];
  
  export { parentColumn };
  