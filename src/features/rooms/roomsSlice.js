import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import randomDelay from "../../utils/randomDelay";
import rooms from "../../db/rooms.json";

export const fetchRooms = createAsyncThunk('rooms/fetchRooms',
    async () => { return await randomDelay(rooms)}
);
const initialState = {
  rooms: [],
  singleRoom: {},
  status: null,
};

export const roomsSlice = createSlice({
  name: "roomsList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRooms.pending, (state) => {
        state.status = 'pending';
        console.log("Loading...");
      })
      .addCase(fetchRooms.fulfilled, (state, action) => {
        state.rooms = action.payload;
        state.status = 'fulfilled';
      })
      .addCase(fetchRooms.rejected, (state) => {
        state.status = 'rejected';
        console.log("Failure while fetching the requested data!");
      });
  },
});

export default roomsSlice.reducer;
export const selectRooms = (state) => state.rooms.rooms;
export const roomsStatus = (state) => state.rooms.status;
