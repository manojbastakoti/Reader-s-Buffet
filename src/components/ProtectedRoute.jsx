import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate, Navigate } from "react-router-dom";
import Login from "./Login";

const ProtectedRoute = ({ children } ) => {
const navigate = useNavigate();
    const {isAuthenticated}  = useSelector(state => state.auth);

//   useEffect(() => {
//     if (!isAuthenticated) {
//       navigate("/login");
//     }
//     // eslint-disable-ne
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [isAuthenticated]);

  return isAuthenticated ? <>{children}</> : <Login noRedirect={true} />;
//   return isAuthenticated ? <>{children}</> : <Navigate to={"/login"} />;

};

export default ProtectedRoute;
