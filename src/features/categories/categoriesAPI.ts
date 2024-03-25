import { createAsyncThunk } from "@reduxjs/toolkit";
import { myAxios } from "../../app/store";

export const getAllCategoriesAPI = createAsyncThunk(
    "get All Categories",
    async () => {
        const {data} = await myAxios.get("/categories")
        return data.categories
    }
)