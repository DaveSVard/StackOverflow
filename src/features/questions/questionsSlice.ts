import { createSlice } from "@reduxjs/toolkit";
import { Question } from "../type";
import { RootState } from "../../app/store";
import { getAllQuestionsAPI, getSingleQuesitonAPI, likeQuestionAPI, searchQuestionAPI } from "./questionsAPI";

const initialState:{questions:Question[], quesiton:Question} = {
    questions: [],
    quesiton: {} as Question
}

export const quesitonsSlice = createSlice({
    name: "questions",
    initialState,
    reducers: {
        sortComments: (state) => {
            if (state.quesiton && state.quesiton.comments) {
              state.quesiton.comments.sort((a, b) => b.likeCount - a.likeCount);
            }
        },
        likeCommentSuccess(state, action) {
            const commentId = action.payload
            const commentIndex = state.quesiton.comments.findIndex(comment => comment.id == commentId)
            if (commentIndex != -1) {
              state.quesiton.comments[commentIndex].likeCount++
            }
        },
    },
    extraReducers: (build) => {
        build.addCase(getAllQuestionsAPI.fulfilled, (state, action) => {
            state.questions = action.payload
        }).addCase(getSingleQuesitonAPI.fulfilled, (state, action) => {
            state.quesiton = action.payload
        }).addCase(searchQuestionAPI.fulfilled, (state, action) => {
            state.questions = action.payload
        })
    }
})


export const {sortComments, likeCommentSuccess} = quesitonsSlice.actions
export const selectQuestions = (state: RootState) => state.questions
export default quesitonsSlice.reducer