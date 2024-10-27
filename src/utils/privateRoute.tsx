// src/utils/PrivateRoute.tsx
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ element: Element }) => {
  const token = localStorage.getItem('token'); // Retrieve token from localStorage
  return token ? <Element /> : <Navigate to="/login" />; // Redirect to login if no token
};

export default PrivateRoute;