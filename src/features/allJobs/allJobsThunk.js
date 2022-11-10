import authHeader from "../../utils/authHeader";
import customFetch from "../../utils/axios";
import { logoutUser } from "../user/userSlice";

export const getAllJobsThunk = async (_, thunkAPI) => {
  const { search, searchStatus, searchType, sort, page } =
    thunkAPI.getState().allJobs;
  let url = `/jobs?status=${searchStatus}&jobType=${searchType}&sort=${sort}&page=${page}`;
  if (search) {
    url += `&search=${search}`;
  }
  try {
    const response = await customFetch.get(url, authHeader(thunkAPI));
    return response.data;
  } catch (error) {
    if (error.response.status === 401) {
      thunkAPI.dispatch(logoutUser());
    }
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const response = await customFetch.get("/jobs/stats", authHeader(thunkAPI));
    console.log(response.data);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data.msg);
  }
};
