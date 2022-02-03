import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login/Login";
import PassRecovery from "./components/PassRecovery/PassRecovery";
import AdminHome from "./components/AdminHome/AdminHome";
import Account from "./components/Account/Account";
import Aside from "./components/asideDashboard/asideDashboard";
import AddUser from "./components/AddUsers/AddUser";
import ChangeEmail from "./components/ChangeEmail/ChangeEmail";
import ChangePassword from './components/ChangePassword/ChangePassword.jsx';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/admin" element={<Login />} />
          <Route exact path="/admin/home" element={<AdminHome />} />
          <Route path="/admin/restorePassword" element={<PassRecovery />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
