import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
// DatePicker : calendrier React pour remplacer le plugin jQuery datetimepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/style/createEmployee.css";

// Liste de tous les états pour le select <select>
const states = [
  // Utilisation d’un tableau d’objets { name, abbreviation }
  { name: "Alabama", abbreviation: "AL" },
  { name: "Alaska", abbreviation: "AK" },
  { name: "Arizona", abbreviation: "AZ" },
  { name: "Arkansas", abbreviation: "AR" },
  { name: "California", abbreviation: "CA" },
];

function CreateEmployee() {
  // formData : état qui stocke toutes les informations du formulaire
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    dateOfBirth: null,
    startDate: null,
    street: "",
    city: "",
    state: "",
    zipCode: "",
    department: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  // Gestion des changements des inputs texte et select
  const handleChange = (e) => {
    // name = clé dans formData
    const { name, value } = e.target;
    // setFormData met à jour seulement le champ modifié
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sauvegarde dans localStorage
      // Récupère la liste existante ou crée un tableau vide.
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    // Ajoute le nouvel employé.
    storedEmployees.push(formData);
    localStorage.setItem("employees", JSON.stringify(storedEmployees));

    // Active la modale pour confirmer la création
    setIsModalOpen(true);

    // Vide tous les champs après l’envoi
    setFormData({
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      startDate: null,
      street: "",
      city: "",
      state: "",
      zipCode: "",
      department: "",
    });
  };

  return (
    <div className="create-employee_container">
      <h1>Create Employee</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <section className="employee-name_container">
          <div className="form-field">
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              // onChange={handleChange} = met à jour le state
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label>Date of Birth</label>
            <DatePicker
              // selected = valeur actuelle du calendrier / On lie le DatePicker à notre état formData.dateOfBirth
              selected={formData.dateOfBirth}
              // Quand l’utilisateur choisit une date :
                // 1) date = date sélectionnée
                // 2) On copie tout l’état précédent (...prev)
                // 3) On met à jour uniquement dateOfBirth
              onChange={(date) =>
                setFormData((prev) => ({ ...prev, dateOfBirth: date }))
              }
              // Formate l’affichage de la date comme Mois/Jour/Année
              dateFormat="MM/dd/yyyy"
              placeholderText="Select date of birth"
              required
            />
          </div>

          <div className="form-field">
            <label>Start Date</label>
            <DatePicker
              selected={formData.startDate}
              onChange={(date) =>
                setFormData((prev) => ({ ...prev, startDate: date }))
              }
              dateFormat="MM/dd/yyyy"
              placeholderText="Select start date"
              required
            />
          </div>
        </section>


        <fieldset className="address">
          <legend>Address</legend>

          <div className="form-field">
            <label className="adresse-first_label">Street</label>
            <input
              type="text"
              name="street"
              value={formData.street}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-field">
            <label>State</label>
            <select
              name="state"
              value={formData.state}
              onChange={handleChange}
              required
            >
              {/* Le select est dynamique et maintenable : si on ajoute un état, le code s’adapte automatiquement */}
              <option value="">Select a state</option>
              {states.map((s) => (
                <option key={s.abbreviation} value={s.abbreviation}>
                  {s.name}
                </option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label>Zip Code</label>
            <input
              type="number"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
            />
          </div>

        <div className="form-field">
          <label>Department</label>
          <select
            name="department"
            value={formData.department}
            onChange={handleChange}
            required
          >
            <option value="">Select a department</option>
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>

        </fieldset>

        <div className="submit-container">
          <button type="submit">Save</button>
        </div>
      </form>

      {/* Modale de confirmation */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2>Employee Created!</h2>
      </Modal>
    </div>
  );
}

export default CreateEmployee;
