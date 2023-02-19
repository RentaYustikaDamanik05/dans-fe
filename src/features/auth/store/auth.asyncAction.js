import { AuthService } from '../service/auth.service';

const { createAsyncThunk } = require('@reduxjs/toolkit');

const authService = new AuthService();

const authLogin = createAsyncThunk(
  'DANS/auth/login',
  async ({ username, password }, { rejectWithValue }) => {
    try {
      const responseData = await authService.doLogin({
        username,
        password,
      });
      return responseData;
    } catch (error) {
      return rejectWithValue(JSON.parse(JSON.stringify(error)));
    }
  }
);

const authCheckMe = createAsyncThunk(
  'DANS/auth/check-me',
  async ({ rejectWithValue }) => {
    try {
      const responseData = await authService.doCheckCurrentUser();
      return responseData;
    } catch (error) {
      return rejectWithValue(JSON.parse(JSON.stringify(error)));
    }
  }
);

export { authLogin, authCheckMe };
