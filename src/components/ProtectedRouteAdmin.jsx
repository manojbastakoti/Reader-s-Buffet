import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import Login from "./Login";

const ProtectedRouteAdmin = ({ children } ) => {
const navigate = useNavigate();
    const {isAuthenticated}  = useSelector(state => state.auth);
  return isAuthenticated ? <>{children}</> : <Login noRedirect={true} />;
};
export default ProtectedRouteAdmin;
