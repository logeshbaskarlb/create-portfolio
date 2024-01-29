import { createSlice } from "@reduxjs/toolkit";

const rootSlice = createSlice({
  name: "root",
  initialState: {
    loading: false,
    portfolioData: null,
    reloadData: false,
    showPassword: false,
    selectedHome : null,
    newValue : null
  },
  reducers: {
    Showloading: (state, action) => {
      state.loading = true;
    },
    setLoading:(state,action)=>{
      state.loading = action.payload
    },
    HideLoading: (state, action) => {
      state.loading = false;
    },
    SetPortfolioData: (state, action) => {
      state.portfolioData = action.payload;
    },
    ReloadData: (state, action) => {
      state.reloadData = action.payload;
    },
    setShowPassword: (state, action) => {
      state.showPassword = action.payload;
    },
    setSelectedHome: (state, action) => {
      state.selectedHome = action.payload;
    },
    setNewValue: (state, action) => {
      state.newValue = action.payload;
    },
  
  },
});

export default rootSlice.reducer;
export const {
  Showloading,
  HideLoading,
  SetPortfolioData,
  ReloadData,
  setShowPassword,
  showLoading,
  setSelectedHome,
  setNewValue,
  setLoading
  
} = rootSlice.actions;
