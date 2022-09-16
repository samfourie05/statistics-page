import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface colorThemeState {
  currentTheme: string;
  primaryBackgroundColor: string;
  secondaryBackgroundColor: string;
  sidebarTextColor: string;
  cardBackgroundColor: string;
  textColor: string;
  textGrayColor: string;
  headerBackgroundColor: string;
  tabHoverBackgroundColor: string;
  white: string;
  chartTextColor: string;
  transition: string;
  tableBackgroundColor: string;
  userProfileBackgroundColor: string;
  userProfileContentsTabHoverColor: string;
}

const initialState: colorThemeState = {
  currentTheme: "light",
  primaryBackgroundColor: "#8787D3",
  secondaryBackgroundColor: "#CBD2F1",
  sidebarTextColor: "#fff",
  cardBackgroundColor: "#fff",
  textColor: "#000",
  textGrayColor: "#9b9b9b",
  headerBackgroundColor: "#fff",
  tabHoverBackgroundColor: "#CBD2F1",
  white: "#fff",
  chartTextColor: "#",
  transition: ".2s ease-in all",
  tableBackgroundColor: "#fff",
  userProfileBackgroundColor: "#fff",
  userProfileContentsTabHoverColor: "#cbd2f1",
};

export const colorThemeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    lightMode: (state) => {
      state.currentTheme = "light";
      state.primaryBackgroundColor = "#8787D3";
      state.secondaryBackgroundColor = "#ececec";
      state.sidebarTextColor = "#fff";
      state.cardBackgroundColor = "#fff";
      state.textColor = "#000";
      state.textGrayColor = "#9b9b9b";
      state.headerBackgroundColor = "#fff";
      state.tabHoverBackgroundColor = "#CBD2F1";
      state.chartTextColor = "0x000000";
      state.tableBackgroundColor = "#fff";
      state.userProfileBackgroundColor = "#fff";
      state.userProfileContentsTabHoverColor = "#cbd2f1";

    },
    darkMode: (state) => {
      state.currentTheme = "dark";
      state.primaryBackgroundColor = "#4F4F77";
      state.secondaryBackgroundColor = "#000";
      state.sidebarTextColor = "#fff";
      state.cardBackgroundColor = "#29293D";
      state.textColor = "#fff";
      state.textGrayColor = "#fff";
      state.headerBackgroundColor = "#121212";
      state.tabHoverBackgroundColor = "#4F4F77";
      state.chartTextColor = "0xffffff";
      state.tableBackgroundColor = "#6d6daf";
      state.userProfileBackgroundColor = "#42464D";
      state.userProfileContentsTabHoverColor = "#696e7f";

    },
  },
});

// Action creators are generated for each case reducer function
export const { lightMode, darkMode } = colorThemeSlice.actions;

export default colorThemeSlice.reducer;
