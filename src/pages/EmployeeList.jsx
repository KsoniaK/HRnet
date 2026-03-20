import React, { useState } from "react";
import { Link } from "react-router-dom";
// MUIDataTable : tableau interactif avec pagination, recherche et options
import MUIDataTable from "mui-datatables";
import { Modal } from "hrnet-modal-kechit";
// import Modal from "../components/Modal";
import "../assets/style/employeeList.css";

function EmployeeList() {
  // employees : liste des employés stockée dans l’état, initialisée depuis localStorage
  const [employees, setEmployees] = useState(() => {
    return JSON.parse(localStorage.getItem("employees")) || [];
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  // Supprimer un employé / Vérifie si un employé est passé en argument
  const handleDelete = (employeeToDelete) => {
    // Si aucun employé n’est fourni, on ne fait rien et on sort de la fonction
    if (!employeeToDelete) return;

    // filter : crée un nouveau tableau sans l’employé supprimé.
    const updatedEmployees = employees.filter(
      (emp) =>
        // Ici, on compare firstName, lastName et dateOfBirth pour identifier l’employé unique
        emp.firstName !== employeeToDelete.firstName ||
        emp.lastName !== employeeToDelete.lastName ||
        emp.dateOfBirth !== employeeToDelete.dateOfBirth
    );

    // Met à jour localStorage et l’état React
    localStorage.setItem("employees", JSON.stringify(updatedEmployees));
    // Met à jour l’état employees avec le nouveau tableau
    setEmployees(updatedEmployees);

    // Affiche la modale avec le message de confirmation
    setModalMessage( "The employee " + employeeToDelete.firstName + " " + employeeToDelete.lastName + " has been deleted!");
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
        // customBodyRenderLite : permet d’afficher un bouton Delete dans la colonne “Action”.
        customBodyRenderLite: (dataIndex) => ( // dataIndex = index de l’employé dans le tableau employees
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
