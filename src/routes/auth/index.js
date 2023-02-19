import React from 'react';
import { LoginContainer } from '../../pages/LoginContainer';
import { AuthenticatedGateContainer } from '../../components/layout/AuthenticatedGateContainer';

export const RoutesAuth = {
  path: '',
  element: (
    <React.Fragment>
      <AuthenticatedGateContainer />
    </React.Fragment>
  ),
  children: [
    {
      path: 'login',
      element: <LoginContainer />,
    },
  ],
};
