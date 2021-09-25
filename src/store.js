import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./Pages/UserReducer";
//import { persistReducer } from "redux-persist";
//import storage from "redux-persist/lib/storage";

// const reducers = combineReducers({
//     purchaseOrders: UserReducer.reducer
//   });
  
//   const persistConfig = {
//     key: "root",
//     storage
//   };
  
//   const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: UserReducer
})

export default store;