import { combineReducers } from "redux";
// import { contactsReducer } from "./reducer";
import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
// import { filterReducer } from "./filterReducer";
import transactionReducer from "./transactions/transactionsSlice"


const rootReduce = combineReducers({
  transactions: transactionReducer,
  // filter: filterReducer,
  user: userSlice
});

export const store = configureStore({
  reducer: rootReduce
});



export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;