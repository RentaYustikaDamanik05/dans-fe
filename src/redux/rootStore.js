import thunk from 'redux-thunk';
import { rootReducer } from './rootReducer';
import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer';
import { composeWithDevToolsDevelopmentOnly } from '@redux-devtools/extension';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';

const persistReducers = persistReducer(
  {
    key: 'DANS_STORAGE',
    storage,
    whitelist: ['interactive'],
  },
  rootReducer
);

const middleware = [thunk];

export const rootStore = createStore(
  persistReducers,
  composeWithDevToolsDevelopmentOnly({ trace: true })(
    applyMiddleware(...middleware)
  )
);

export const rootPersistor = persistStore(rootStore);
