import { createSlice } from '@reduxjs/toolkit';
import { jobsGetAll, jobsGetDetail } from './job.asyncAction';

/**
 * @typedef TJobDataObject
 * @type {object}
 * @property {string} id
 * @property {string} type
 * @property {string} url
 * @property {string} created_at
 * @property {string} company
 * @property {string} company_url
 * @property {string} location
 * @property {string} title
 * @property {string} description
 * @property {string} how_to_apply
 * @property {string} company_logo
 */

/**
 * @typedef initialStateModel
 * @type {object}
 * @property {number} message
 * @property {boolean} success
 * @property {TJobDataObject} data
 * @property {'IDLE'|'SUCCESS'|'FAILED' | 'LOADING'} status_GET_ALL
 * @property {'IDLE'|'SUCCESS'|'FAILED' | 'LOADING'} status_GET_DETAIL
 */

/**
 * @type {initialStateModel} initialState
 */
const initialState = {
  message: '',
  success: false,
  data: undefined,
  status_GET_ALL: 'IDLE',
  status_GET_DETAIL: 'IDLE',
  authReady: true,
  isAuthenticated: false,
};

export const job_slice = createSlice({
  name: 'DANS/jobs',
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
      .addCase(jobsGetAll.pending, (state) => {
        state.status_GET_ALL = 'LOADING';
      })
      .addCase(jobsGetAll.fulfilled, (state, action) => {
        state.data = action.payload?.data;
        state.status_GET_ALL = 'SUCCESS';
      })
      .addCase(jobsGetAll.rejected, (state) => {
        state.status_GET_ALL = 'FAILED';
      })
      .addCase(jobsGetDetail.pending, (state) => {
        state.status_GET_DETAIL = 'LOADING';
      })
      .addCase(jobsGetDetail.fulfilled, (state, action) => {
        state.status_GET_DETAIL = 'SUCCESS';
        state.data = action.payload?.data;
      })
      .addCase(jobsGetDetail.rejected, (state) => {
        state.status_GET_DETAIL = 'FAILED';
      }),
});

export const { reducer: jobs_reducer, actions: jobs_action } = job_slice;
