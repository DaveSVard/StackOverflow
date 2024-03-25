import React, { useEffect } from "react";
import "./allQuestions.scss"
import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectQuestions } from "../../features/questions/questionsSlice";
import { getAllQuestionsAPI } from "../../features/questions/questionsAPI";
import { OverflowBlog } from "../../components/OverflowBlog/overflowBlog";

export const AllQuestions:React.FC = ():JSX.Element => {

    const dispatch = useAppDispatch()
    const {questions} = useAppSelector(selectQuestions)

    useEffect(() => {
        dispatch(getAllQuestionsAPI())
    }, [])

    
    
    return(
        <div className="questions">
            <div className="container left-border">
                <div className="questions__wrapper">
                    <div className="questions__info-wrapper">

                        <div className="questions__title">
                            <h1 className="h1-title">Top Questions</h1>
                            <Link to={"/addQuestion"}><button className="btn-1">Ask Question</button></Link>
                        </div>

                        <div className="questions__items">
                            {questions?.map(elm => {
                                return(
                                    <div key={elm?.id} className="questions__items-item">
                                        <div className="quesitons__items-item__info">
                                            <div className="item__reviews">
                                                <div>
                                                    <p className="p3-fz13">{elm?.likeCount} votes</p>
                                                </div>
                                                <div>
                                                    <p className="p3-fz13">{elm?.comments?.length} comments</p>
                                                </div>
                                            </div>
                                            <div className="item__info">
                                                <Link to={"/singleQuestion/" + elm.id}>
                                                    {elm?.question?.length > 30 ? <p>{elm?.question.slice(0, 30)}...</p> : <p>{elm?.question}</p>}
                                                </Link>
                                                <div className="item__categories">
                                                    {elm.categories.map(elm => {
                                                        return(
                                                            <div key={elm.id}>
                                                                {elm.name}
                                                            </div>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>

                    </div>

                    <div className="blog-content">
                        <OverflowBlog/>
                    </div>
                </div>
            </div>
        </div>
    )
}