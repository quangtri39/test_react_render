import { configureStore } from "@reduxjs/toolkit";
import counter1Reducer from "./counterTH1";
import counter2Reducer from "./counterTH2";
import counter3Reducer from "./counterTH3C1";
import counter4Reducer from "./counterTH3C2";
export default configureStore({
  reducer: {
    counterTH1: counter1Reducer,
    counterTH2: counter2Reducer,
    counterTH3C1: counter3Reducer,
    counterTH3C2: counter4Reducer,
  },
});
