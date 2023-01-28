import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRepositories = createAsyncThunk("repositories", async () => {
  const response = await fetch(
    "https://api.github.com/users/benjamin-wall/repos?sort=created?direction=desc"
  );
  const json = await response.json();
  return json;
});

const sliceOptions = {
  name: "repositories",
  initialState: {
    repositories: {},
    error: false,
    isLoading: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getRepositories.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(getRepositories.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(getRepositories.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.repositories = action.payload;
      });
  },
};

const repositoriesSlice = createSlice(sliceOptions);

export const selectRepositories = (state) => state.repository.repositories;
export const selectIsLoading = (state) => state.repository.isLoading;

export default repositoriesSlice.reducer;
