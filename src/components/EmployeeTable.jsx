// src/components/EmployeeTable.jsx
import React from "react";
import MUIDataTable from "mui-datatables";
import "../assets/style/employeeTable.css";

export default function EmployeeTable({ employees, onDelete }) {
  const columns = [
    { name: "firstName", label: "First Name" },
    { name: "lastName", label: "Last Name" },
    { name: "startDate", label: "Start Date" },
    { name: "department", label: "Department" },
    { name: "dateOfBirth", label: "Date of Birth" },
    { name: "street", label: "Street" },
    { name: "city", label: "City" },
    { name: "state", label: "State" },
    { name: "zipCode", label: "Zip Code" },
    {
      name: "actions",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (dataIndex) => {
          return (
            <button
              style={{
                backgroundColor: "#f44336",
                color: "white",
                border: "none",
                padding: "4px 8px",
                borderRadius: "4px",
                cursor: "pointer",
              }}
              onClick={() => onDelete(employees[dataIndex])}
            >
              Delete
            </button>
          );
        },
      },
    },
  ];

  const options = {
    selectableRows: "none", // pas de checkbox
    rowsPerPageOptions: [10, 25, 50, 100],
    responsive: "standard",
    download: false,
    print: false,
    search: true,
    textLabels: {
      pagination: {
        next: "Next",
        previous: "Prev",
        rowsPerPage: "Show",
        displayRows: "of", // ← affiche "Showing 1 to 3 of 3"
      },
      toolbar: {
        search: "Search",
        downloadCsv: "Download CSV",
        print: "Print",
        viewColumns: "View Columns",
        filterTable: "Filter Table",
      },
    },
  };

  return (
    <MUIDataTable
      title={"Current Employees"}
      data={employees}
      columns={columns}
      options={options}
    />
  );
}
