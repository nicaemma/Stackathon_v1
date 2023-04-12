// This makes the '/' route a private route
// So if you're not logged in, you get redirected to login.

import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";

// Passing in children means whatever we wrap inside PrivateRoute in App.js
// will show if currentUser gets authenticated. Otherwise, redirect.
const PrivateRoute = ({ children }) => {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
};
export default PrivateRoute;
