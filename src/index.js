/* eslint-disable no-restricted-globals */
import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import { CookiesProvider } from 'react-cookie';
import { render } from 'react-dom';
import { rootPersistor, rootStore } from './redux/rootStore';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <React.Fragment>
    <CookiesProvider>
      <App history={history} persistor={rootPersistor} store={rootStore} />
    </CookiesProvider>
  </React.Fragment>
);

moduleHotAccept(module);

export function moduleHotAccept(mod) {
  if (mod.hot) {
    mod.hot.accept('./App', () => {
      render(
        <App history={history} store={rootStore} />,
        document.getElementById('app')
      );
    });
  }
}
