import React, { useContext } from "react";
import Login from "./Pages/Login";
import { ToastContainer } from 'react-toastify';
import Navbar from "./Componenets/Navbar";
import { AdminContext } from "./Context/AdminContext";
import Sidebar from "./Componenets/Sidebar";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Admin/Dashboard";
import AllAppointments from "./Pages/Admin/AllAppointments";
import AddDoctor from "./Pages/Admin/AddDoctor";
import DoctorList from "./Pages/Admin/DoctorList";

const App = () => {
  const { atoken } = useContext(AdminContext);

  return atoken ? (
    <div className="bg-[#FDF9FD]">
      <ToastContainer />
      <Navbar></Navbar>
      <div className="flex items-start">
        <Sidebar></Sidebar>
        <Routes>
          <Route path="/" element={<></>}></Route>
          <Route path="/admin-dashboard" element={<Dashboard></Dashboard>}></Route>
          <Route path="/all-appointments" element={<AllAppointments></AllAppointments>}></Route>
          <Route path="/add-doctor" element={<AddDoctor></AddDoctor>}></Route>
          <Route path="/doctor-list" element={<DoctorList></DoctorList>}></Route>
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <Login />
      <ToastContainer />
    </>
  );
};

export default App;
