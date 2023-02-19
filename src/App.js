import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import './App.scss';
import { AllRoutes } from './routes';

function App({ history, store, persistor }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AllRoutes />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
