import { createSlice } from '@reduxjs/toolkit';
import { authLogin, authCheckMe } from './auth.asyncAction';

/**
 * @typedef TUserDataObject
 * @type {object}
 * @property {string} id
 * @property {string} username
 * @property {string} token
 */

/**
 * @typedef initialStateModel
 * @type {object}
 * @property {number} message
 * @property {boolean} success
 * @property {TUserDataObject} data
 * @property {'IDLE'|'SUCCESS'|'FAILED' | 'LOADING'} status_LOGIN
 * @property {'IDLE'|'SUCCESS'|'FAILED' | 'LOADING'} status_CHECK_ME
 * @property {boolean} authReady
 * @property {boolean} isAuthenticated
 */

/**
 * @type {initialStateModel} initialState
 */
const initialState = {
  message: '',
  success: false,
  data: undefined,
  status_LOGIN: 'IDLE',
  status_CHECK_ME: 'IDLE',
  authReady: true,
  isAuthenticated: false,
};

export const auth_slice = createSlice({
  name: 'DANS/auth',
  initialState,
  reducers: {
    resetState(state) {
      state = initialState;
      return state;
    },
    logout(state) {
      state.status_LOGOUT = 'SUCCESS';
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(authLogin.pending, (state) => {
        state.status_LOGIN = 'LOADING';
      })
      .addCase(authLogin.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.authReady = true;
        state.isAuthenticated = true;
        state.status_LOGIN = 'SUCCESS';
      })
      .addCase(authLogin.rejected, (state) => {
        state.status_LOGIN = 'FAILED';
        state.authReady = true;
      })
      .addCase(authCheckMe.pending, (state) => {
        state.status_CHECK_ME = 'LOADING';
      })
      .addCase(authCheckMe.fulfilled, (state, action) => {
        state.status_CHECK_ME = 'SUCCESS';
        state.authReady = true;
        state.isAuthenticated = true;
      })
      .addCase(authCheckMe.rejected, (state) => {
        state.status_CHECK_ME = 'FAILED';
      }),
});

export const { reducer: auth_reducer, actions: auth_actions } = auth_slice;
