import React, { useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';

const PrivateRoute = ({ redirectPath = "/login", children }) => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  let location = useLocation();
  return loggedInUser.email ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;