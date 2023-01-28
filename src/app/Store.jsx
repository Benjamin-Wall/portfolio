import { configureStore } from "@reduxjs/toolkit";

import repositoriesSliceReducer from "../Features/repositories/repositoriesSlice";

export default configureStore({
  reducer: {
    repository: repositoriesSliceReducer,
  },
});
