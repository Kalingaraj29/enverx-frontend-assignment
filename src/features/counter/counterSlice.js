import { createSlice } from '@reduxjs/toolkit';


const initialState = {
    Datacontainer:[],
    Firestoredata:""
};

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    dataStore: (state,action) => {
      state.Datacontainer=[...state.Datacontainer,action.payload]
    },
    fireStore: (state,action) => {
      state.Firestoredata=[...state.Firestoredata,action.payload]
    }
  },
 
});

export const { dataStore,fireStore } = counterSlice.actions;

export default counterSlice.reducer;
