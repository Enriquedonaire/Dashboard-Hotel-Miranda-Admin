import React, { useState } from "react";

import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {

  const Auth_Routes = "authenticated";
  const [auth, setAuth] = useState(JSON.parse(localStorage.getItem(Auth_Routes)) !== null);

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
