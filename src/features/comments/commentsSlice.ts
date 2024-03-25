import { createSlice } from "@reduxjs/toolkit";
import { Comment } from "../type";
import { RootState } from "../../app/store";
import { addCommentAPI, likeCommentAPI } from "./commetnsAPI";

const initialState:{comments:Comment[], comment:Comment} = {
    comments: [],
    comment: {} as Comment
}

export const commentsSlice = createSlice({
    name: "comments",
    initialState, 
    reducers: {},
    extraReducers: (build) => {
        build.addCase(addCommentAPI.fulfilled, (state, action) => {
            state.comment = action.payload
        }).addCase(likeCommentAPI.fulfilled, (state, action) => {
            state.comment = action.payload
        })
    }
})

export const {} = commentsSlice.actions
export const selectComments = (state: RootState) => state.comments
export default commentsSlice.reducer



