const { configureStore } = require("@reduxjs/toolkit");
import postsSlice from "./slice/postsSlice/postsSlice";
import loginSlice from "./slice/userLogins/userLogin";

const store = configureStore({
  reducer: {
    loginSlice,
    postsSlice
  },
});

export default store;