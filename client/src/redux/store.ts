import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import journeysReducer from "../features/journeySlice";
import stationsReducer from "../features/stationSlice";
import authReducer from "../features/authSlice";

export const store = configureStore({
  reducer: {
    journeys: journeysReducer,
    stations: stationsReducer,
    auth: authReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
