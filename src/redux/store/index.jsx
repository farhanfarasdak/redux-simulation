import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../reducer";

const myStore = configureStore({
  reducer: counterSlice.reducer
})

export default myStore

// import { createStore } from "redux";
// import reducerFn from "../reducer";

// const myStore = createStore(reducerFn)
// export default myStore