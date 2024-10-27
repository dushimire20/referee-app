// src/utils/AdminRoute.tsx
import { Navigate } from 'react-router-dom';

const AdminRoute = ({ element: Element }) => {
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user')); // Retrieve user info from localStorage

  return token && user?.roles?.includes('admin') ? (
    <Element />
  ) : (
    <Navigate to="/dashboard" /> // Redirect non-admins to dashboard
  );
};

export default AdminRoute;