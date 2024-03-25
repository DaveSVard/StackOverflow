import { createAsyncThunk } from "@reduxjs/toolkit";
import { myAxios } from "../../app/store";

export const getAllQuestionsAPI = createAsyncThunk(
    "get All Quesitons",
    async () => {
        const {data} = await myAxios.get("/question")
        return data.questions
    }
)

export const getSingleQuesitonAPI = createAsyncThunk(
    "get Single Quesiton",
    async (id:number) => {
        const {data} = await myAxios.get("/question/" + id)
        return data.question
    }
)

export const searchQuestionAPI = createAsyncThunk(
    "search Question",
    async (text:string) => {
        const {data} = await myAxios.get("/question/search/" + text)
        return data.questions
    }
)

export const createQuestionAPI = createAsyncThunk(
    "create Question",
    async (question:{question:string, categories:number[]}) => {
        const {data} = await myAxios.post("/question", question)
        return data
    }
)

export const deleteQuestionAPI = createAsyncThunk(
    "delete Question",
    async (id:number) => {
        const {data} = await myAxios.delete("/question/" + id)
        return data
    }
)

export const likeQuestionAPI = createAsyncThunk(
    "like Question",
    async (id:number) => {
        const {data} = await myAxios.patch("question/like/" + id)
        return data
    }
)