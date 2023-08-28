import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  showModal: false,
};

const systemSlice = createSlice({
  name: "system",
  initialState,  // passes the initial state defined above
//   creating action creator called setShowModal
  reducers: {
    setShowModal: (state, { payload }) => {
      state.showModal = payload;
    },
  },
});

const { reducer, actions } = systemSlice;

export const { setShowModal } = actions;

export default reducer;
