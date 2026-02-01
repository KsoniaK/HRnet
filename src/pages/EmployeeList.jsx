import React, { useState } from "react";
import { Link } from "react-router-dom";
import MUIDataTable from "mui-datatables";
import Modal from "../components/Modal";
import "../assets/style/employeeList.css";

function EmployeeList() {
  const [employees, setEmployees] = useState(() => {
    return JSON.parse(localStorage.getItem("employees")) || [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Supprimer un employé
  const handleDelete = (employeeToDelete) => {
    if (!employeeToDelete) return;

    const updatedEmployees = employees.filter(
      (emp) =>
        emp.firstName !== employeeToDelete.firstName ||
        emp.lastName !== employeeToDelete.lastName ||
        emp.dateOfBirth !== employeeToDelete.dateOfBirth
    );

    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    setEmployees(updatedEmployees);

    setModalMessage("Employee deleted!");
    setIsModalOpen(true);
  };

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
      label: "Action",
      options: {
        filter: false,
        sort: false,
        customBodyRenderLite: (dataIndex) => (
          <button
          className="delete_button"
            onClick={() => handleDelete(employees[dataIndex])}
          >
            Delete
          </button>
        ),
      },
    },
  ];

  // const [rowsPerPage, setRowsPerPage] = useState(10);

  const options = {
    selectableRows: "none", // pas de checkbox
    // rowsPerPage,
    rowsPerPageOptions: [10, 25, 50, 100],
    // onChangeRowsPerPage: (numberOfRows) => {
    //   setRowsPerPage(numberOfRows);
    // },
    responsive: "standard",
    download: false,
    print: false,
    elevation: 0,
    viewColumns: false,
    filter: false,
    textLabels: {
      body: {
        noMatch: "No employees found",
      },
      pagination: {
        next: "Next",
        previous: "Prev",
        rowsPerPage: "Rows per page:",
        displayRows: "",
      },
      toolbar: {
        search: "Search by name, department or state",
      },
    },
  };

  return (
    <div className="employee-list_container">
      <h1>Current Employees</h1>
      <MUIDataTable data={employees} columns={columns} options={options} />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <p>{modalMessage}</p>
      </Modal>
    </div>
  );
}

export default EmployeeList;
