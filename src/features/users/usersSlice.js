import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import randomDelay from "../../utils/randomDelay";
import users from "../../db/users.json";

export const fetchUsers = createAsyncThunk('users/fetchUsers',
    async () => { return await randomDelay(users)}
);

const initialState = {
  users: [],
  singleUser: {},
  status: null,
};

export const usersSlice = createSlice({
  name: "usersList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'pending';
        console.log("Loading...");
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'fulfilled';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state) => {
        state.status = 'rejected';
        console.log("Failure while fetching the request data!");
      });
  },
});

export default usersSlice.reducer;
export const selectUsers = (state) => state.users.users;
export const selectState = (state) => state.users.status;