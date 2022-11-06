import React from "react";
import "../../styles/Admin.css";
import Topbar from "./Topbar";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function Admin() {
  return (
    <>
      <Topbar />
      <div className="container-fluid containerr">
        <Sidebar />
        <div className="others"> <Outlet /></div>

      </div>
    </>
  );
}
