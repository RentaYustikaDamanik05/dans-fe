import { JobService } from '../service/job.service';

const { createAsyncThunk } = require('@reduxjs/toolkit');

const jobService = new JobService();

const jobsGetAll = createAsyncThunk(
  'DANS/jobs/get-all',
  async (param, { rejectWithValue }) => {
    try {
      const responseData = await jobService.getAllJobs(param);
      return responseData;
    } catch (error) {
      return rejectWithValue(JSON.parse(JSON.stringify(error)));
    }
  }
);

const jobsGetDetail = createAsyncThunk(
  'DANS/josb/check-detail',
  async (param, { rejectWithValue }) => {
    try {
      const responseData = await jobService.getDetail(param);
      return responseData;
    } catch (error) {
      return rejectWithValue(JSON.parse(JSON.stringify(error)));
    }
  }
);

export { jobsGetAll, jobsGetDetail };
