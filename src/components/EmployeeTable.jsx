import React from "react";
// Cette librairie remplace le plugin jQuery DataTables
import MUIDataTable from "mui-datatables";
import "../assets/style/modal.css";

// EmployeeTable = composant React / { employees, onDelete } = props reçues
export default function EmployeeTable({ employees, onDelete }) { // employees = liste des employés / onDelete = fonction pour supprimer un employé
  // On définit la structure des colonnes du tableau
  const columns = [
    // name = clé dans l’objet employee / label = texte affiché dans le tableau
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
      // On crée une colonne personnalisée pour les actions (ici supprimer)
      name: "actions",
      label: "Actions",
      options: {
        filter: false,
        sort: false,
        // dataIndex = index de la ligne dans le tableau = permet de savoir quel employé est concerné
        customBodyRenderLite: (dataIndex) => {
          return (
            <button
              // employees[dataIndex] = bon employé = récupère l’employé grâce à son index pour déclencher la suppression
              className="delete_button-modal" onClick={() => onDelete(employees[dataIndex])}>
                Delete
            </button>
          );
        },
      },
    },
  ];

  // Configuration globale du tableau
  const options = {
    selectableRows: "none", // pas de checkbox
    rowsPerPageOptions: [10, 25, 50, 100],
    responsive: "standard",
    download: false,
    print: false,
    search: true,
    // Permet de personnaliser les textes du tableau
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
      // Données du tableau (les employés)
      data={employees}
      columns={columns}
      options={options}
    />
  );
}
