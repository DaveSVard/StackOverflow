import { createSlice } from "@reduxjs/toolkit";
import { Category } from "../type";
import { RootState } from "../../app/store";
import { getAllCategoriesAPI } from "./categoriesAPI";

const initialState:{categories:Category[]} = {
    categories: []
}

export const categoriesSlice = createSlice({
    name: "categories",
    initialState, 
    reducers: {},
    extraReducers: (build) => {
        build.addCase(getAllCategoriesAPI.fulfilled, (state, action) => {
            state.categories = action.payload
        })
    }
})


export const {} = categoriesSlice.actions
export const selectCategories = (state: RootState) => state.categories
export default categoriesSlice.reducer