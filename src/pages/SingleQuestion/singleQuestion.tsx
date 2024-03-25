import React, { useEffect, useState } from "react"
import "./singleQuestion.scss"
import { Link, useParams } from "react-router-dom"
import { OverflowBlog } from "../../components/OverflowBlog/overflowBlog"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { likeCommentSuccess, selectQuestions, sortComments } from "../../features/questions/questionsSlice"
import { getSingleQuesitonAPI, likeQuestionAPI } from "../../features/questions/questionsAPI"
import { AddCommentsForm } from "../../components/AddCommentForm/addCommentsForm"
import { likeCommentAPI } from "../../features/comments/commetnsAPI"

export const SingleQuestion:React.FC = ():JSX.Element => {
    
    const {id} = useParams()
    const { quesiton } = useAppSelector(selectQuestions)
    const dispatch = useAppDispatch()

    useEffect(() => {
        if(id) {
            dispatch(getSingleQuesitonAPI(+id))
        }
    }, [id])

    useEffect(() => {
        dispatch(sortComments())
    }, [quesiton])

    return(
        <div className="singleQuestion">
            <div className="container padding-none">
                <div className="sm-container left-border">

                    <div className="singleQuestion__wrapper">
                        <div className="singleQuestion__title-wrapper">
                            <div className="singleQuestion__title">
                                <h1 className="h1-title">Question</h1>
                                <Link to={"/addQuestion"}><button className="btn-1">Ask Question</button></Link>
                            </div>
                            <span className="row-line"></span>
                        </div>

                        <div className="singleQuestion__content">
                            <div className="singleQuestion__question">

                                <div className="singleQuestion__question-wrapper">
                                    <div className="like-side">
                                        <div onClick={() => {
                                            dispatch(likeQuestionAPI(quesiton.id))
                                            dispatch(getSingleQuesitonAPI(quesiton.id))
                                        }} className="like__circle">
                                            <i className="fa-solid fa-caret-up"></i>
                                        </div>
                                        <p className="p4-fz19">{quesiton.likeCount}</p>
                                        <div className="like__circle">
                                            <i className="fa-solid fa-caret-down"></i>
                                        </div>
                                        <i className="fa-regular fa-bookmark icon-gray"></i>
                                        <i className="fa-solid fa-clock-rotate-left icon-gray"></i>
                                    </div>
                                    <div className="question-side">
                                        <p>{quesiton.question}</p>
                                    </div>
                                </div>

                                {quesiton?.comments?.length ? <div>
                                    <p className="p4-fz19">{quesiton?.comments?.length} Answers</p>
                                </div> : <></>}

                                {quesiton?.comments?.length ? <div className="singleQuestion__question__comments">
                                    {quesiton.comments.map(elm => {
                                        return(
                                            <div key={elm.id} className="comments__item">
                                                <div className="comments__item-wrapper">
                                                    <div className="like-side">
                                                        <div onClick={() => {
                                                            dispatch(likeCommentAPI(elm.id))
                                                            dispatch(likeCommentSuccess(elm.id))
                                                        }} className="like__circle">
                                                            <i className="fa-solid fa-caret-up"></i>
                                                        </div>
                                                        <p className="p4-fz19">{elm.likeCount}</p>
                                                        <div className="like__circle">
                                                            <i className="fa-solid fa-caret-down"></i>
                                                        </div>
                                                        <i className="fa-regular fa-bookmark icon-gray"></i>
                                                        <i className="fa-solid fa-clock-rotate-left icon-gray"></i>
                                                    </div>
                                                    <div className="comment-side">
                                                        <p>{elm.text}</p>
                                                        <div>
                                                            <div>
                                                                <p>Share</p>
                                                                <p>Edit</p>
                                                                <p>Follow</p>
                                                            </div>
                                                            <div>
                                                                <p>{elm.email}</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <span></span>
                                            </div>
                                        )
                                    })}
                                </div> : <></> }

                                <div className="singleQuestion__question__commentForm">
                                    <div>
                                        <p>Your Answer</p>
                                    </div>
                                    <AddCommentsForm questionId={quesiton.id}/>
                                </div>
                            </div>

                            <div className="blog__content">
                                <OverflowBlog/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}