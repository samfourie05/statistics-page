import { configureStore } from "@reduxjs/toolkit";
import currentUser from "../reducers/currentUser";
import setSidbarOpen  from "../reducers/sidebarReducer";
import theme from "../reducers/colorThemeReducer";
import registrationData from "../reducers/pages/customerRelated/registrationActivityReducer";
import customerData from "../reducers/pages/customerRelated/customerActivityReducer";
import filterDateReducer from "../reducers/filterDateReducer";

const store = configureStore({
    reducer: {
        user: currentUser,
        sidebar: setSidbarOpen,
        colorTheme: theme,
        registrationActivityData: registrationData,
        customerActivityData : customerData,
        filterDates: filterDateReducer,

    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store;