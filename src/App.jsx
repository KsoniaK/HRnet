import React from "react";
import { HashRouter as Router, Routes, Route} from "react-router-dom";
import CreateEmployee from "./pages/CreateEmployee";
import EmployeeList from "./pages/EmployeeList";
import Header from "./layouts/Header";
import "./assets/style/index.css";

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<CreateEmployee />} />
          <Route path="/employees" element={<EmployeeList />} />
        </Routes>
    </Router>
  );
}

export default App;
