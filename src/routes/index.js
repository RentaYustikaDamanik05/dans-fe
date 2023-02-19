import React from 'react';
import { Navigate, useRoutes } from 'react-router';
import { JobDetailContainer } from '../pages/JobDetailContainer/JobDetailContainer';
import { JobListContainer } from '../pages/JobListContainer/JobListContainer';
import { LoginContainer } from '../pages/LoginContainer';

export const AllRoutes = () => {
  const elements = useRoutes([
    {
      index: true,
      element: <Navigate to={'/login'} />,
    },
    {
      path: '/login',
      element: <LoginContainer />,
    },
    {
      path: '/jobs',
      element: <JobListContainer />,
    },
    {
      path: '/jobs/:id',
      element: <JobDetailContainer />,
    },
    {
      path: '*',
      element: <Navigate to={'/404'} />,
    },
    {
      path: '401',
      element: (
        <React.Fragment>
          <Navigate to={'/login'} />
        </React.Fragment>
      ),
    },
    {
      path: '404',
      element: <React.Fragment>NOT FOUND</React.Fragment>,
    },
  ]);
  return elements;
};
