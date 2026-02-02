import React, { useState } from "react";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../assets/style/createEmployee.css";

// Liste des états (comme dans l'ancien code)
const states = [
  { name: "Alabama", abbreviation: "AL" },
  { name: "Alaska", abbreviation: "AK" },
  { name: "Arizona", abbreviation: "AZ" },
  { name: "Arkansas", abbreviation: "AR" },
  { name: "California", abbreviation: "CA" },
  // ... ajouter tous les autres états ici ...
];

function CreateEmployee() {
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
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();

    // Sauvegarde dans localStorage
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    storedEmployees.push(formData);
    localStorage.setItem("employees", JSON.stringify(storedEmployees));

    // Ouvrir la modale
    setIsModalOpen(true);

    // Reset du formulaire
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
              selected={formData.dateOfBirth}
              onChange={(date) =>
                setFormData((prev) => ({ ...prev, dateOfBirth: date }))
              }
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
