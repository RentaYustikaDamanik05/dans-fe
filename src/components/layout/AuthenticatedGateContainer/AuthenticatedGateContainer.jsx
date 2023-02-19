import React, { useEffect } from 'react';
import { Navigate, Outlet, useLocation, useNavigate } from 'react-router';
import { useAuth } from '../../../features/auth/hook/auth.hook';

const AuthenticatedGateContainer = () => {
  const auth = useAuth();
  const LOCATION = useLocation();
  const NAVIGATE = useNavigate();

  useEffect(() => {
    if (LOCATION.pathname === '/logout') {
      auth.logout();
      NAVIGATE('/login');
    }
  }, [auth, LOCATION.pathname, NAVIGATE]);

  return auth.state?.isAuthenticated && LOCATION.pathname !== '/logout' ? (
    <Navigate to={'/jobs'} />
  ) : (
    <Outlet />
  );
};

export { AuthenticatedGateContainer };
