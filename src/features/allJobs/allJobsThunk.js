import authHeader from "../../utils/authHeader";
import customFetch, { checkForUnauthorizedResponse } from "../../utils/axios";

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
    checkForUnauthorizedResponse(error, thunkAPI);
  }
};

export const showStatsThunk = async (_, thunkAPI) => {
  try {
    const response = await customFetch.get("/jobs/stats", authHeader(thunkAPI));
    console.log(response.data);
    return response.data;
  } catch (error) {
    checkForUnauthorizedResponse(error, thunkAPI);
  }
};
