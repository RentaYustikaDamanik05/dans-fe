import { combineReducers } from 'redux';
import { auth_reducer } from '../features/auth/store/auth.slice';
import { jobs_reducer } from '../features/jobs/store/job.slice';

const featureReducer = combineReducers({
  auth: auth_reducer,
  jobs: jobs_reducer,
});

export const rootReducer = combineReducers({
  features: featureReducer,
});
