const { configureStore } = require("@reduxjs/toolkit");
import currentPageSlice from "./slice/currentPageSlice/currentPageSlice";
import postsSlice from "./slice/postsSlice/postsSlice";
import loginSlice from "./slice/userLogins/userLogin";

const store = configureStore({
  reducer: {
    loginSlice,
    postsSlice,
    currentPageSlice,
  },
});

export default store;
