import { configureStore } from "@reduxjs/toolkit";
import profileReducer from "../../features/profile/store/profile-slice";
import balanceReducer from "../../features/transaction/store/balance-slice";

export const store = configureStore({
  reducer: {
    balance: balanceReducer,
    profile: profileReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
