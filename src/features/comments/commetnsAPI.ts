import { createAsyncThunk } from "@reduxjs/toolkit";
import { myAxios } from "../../app/store";

export const addCommentAPI = createAsyncThunk(
    "add Comment",
    async (comment:{text: string, email:string, questionId:number}) => {
        const {data} = await myAxios.post(`/question/comment/`, comment)
        return data
    }
)

export const likeCommentAPI = createAsyncThunk(
    "like Comment",
    async (commentId:number) => {
        const {data} = await myAxios.patch(`/question/comment/like/` + commentId)
        return data
    }
)