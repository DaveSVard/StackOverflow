import React, { useState } from "react";
import "./addQuestion.scss"
import { AddQuestionForm } from "../../components/AddQuestionForm/addQuestionForm";

export const AddQuestion:React.FC = ():JSX.Element => {

    const [helpInfo, setHelpInfo] = useState<{id:number, title:string, texts:string[], active:boolean}[]>([
        {id: 1, title: "Briefly describe the problem", active: false, texts: [
            "Include details about your goal.", 
            "Describe what you expected and what you received", 
            "Add error messages"]
        },
    ])

    const [secondHelpInfo, setSecondHelpInfo] = useState<{id:number, title:string, text:string, active:boolean}[]>([
        {id: 2, title: "Describe what you tried", active: false, text: "Show what you tried, what you found (on this site or elsewhere), and why it doesn't solve your problem. You can get better answers when you demonstrate your research."},
        {id: 3, title: "Add some code", active: false, text: "If possible, add the minimum code needed to reproduce your problem (called a minimal reproducible example)"},
    ])
    
    const setBool = (elm:any) => {
        helpInfo.filter((el:any) => {
            if(el.id == elm.id) {
                el.active = !el.active
            } else {
                el.active = false
            }
        })

        secondHelpInfo.filter((el:any) => {
            if(el.id == elm.id) {
                el.active = !el.active
            } else {
                el.active = false
            }
        })

        setHelpInfo([...helpInfo])
        setSecondHelpInfo([...secondHelpInfo])
    }



    return(
        <div className="addQuestion">
            <div className="container">
                <div className="addQuestion__wrapper">
                    <div className="addQuestion__title">
                        <h1 className="h1-title">Ask a public question</h1>
                    </div>
                    <div className="addQuestion__form-info">
                        <div className="addQuestion__form">
                            <AddQuestionForm/>
                        </div>
                        <div className="addQuestion__help">
                            <div className="addQuestion__help-title">
                                <p className="p2-fz15">Step 1: Create a draft of your question</p>
                            </div>
                            <div className="addQuestion__help-info">
                                <p className="p3-fz13">The community is here to help you with specific problems on programming, algorithms, programming languages.</p>
                                <p className="p3-fz13">Avoid posting questions that cannot be answered objectively.</p>
                                <div className="addQuestion__help-info__items">
                                    {helpInfo.map(elm => {
                                        return(
                                            <div className="help-info__items-item" key={elm.id}>
                                                <div  onClick={() => setBool(elm)}  className="item__title">
                                                    <div>
                                                        <span>{elm.id}.</span>
                                                        <p>{elm.title}</p>
                                                    </div>
                                                    {elm.active ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                                                </div>
                                                
                                                {elm.active ? <div className="item__list">
                                                    {elm.texts.map((elm, i) => {
                                                        return(
                                                            <div key={i}>
                                                                <span className="circle"></span>
                                                                <p className="p3-fz13">{elm}</p>
                                                            </div>
                                                        )
                                                    })}
                                                </div> : <></>}

                                                <span></span>
                                            </div>
                                        )
                                    })}
                                    {secondHelpInfo.map(elm => {
                                        return(
                                            <div className="help-info__items-item" key={elm.id}>
                                                <div  onClick={() => setBool(elm)}  className="item__title">
                                                    <div>
                                                        <span>{elm.id}.</span>
                                                        <p>{elm.title}</p>
                                                    </div>
                                                    {elm.active ? <i className="fa-solid fa-angle-up"></i> : <i className="fa-solid fa-angle-down"></i>}
                                                </div>

                                                {elm.active ? <p className="p3-fz13 ml">{elm.text}</p> : <></>}

                                                <span></span>

                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}