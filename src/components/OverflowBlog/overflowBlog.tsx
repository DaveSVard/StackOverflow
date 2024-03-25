import React from "react"
import "./overflowBlog.scss"
import { BlogT } from "../../features/type"

export const OverflowBlog:React.FC = React.memo(():JSX.Element => {

    const blogData:BlogT[] = [
        {
            id: 1, 
            title: "The Overflow Blog",
            info: [
                {id: 1, iconOrNumber: "fa-solid fa-pen", text: "Why the creator of Node.js® created a new JavaScript runtime"},
                {id: 2, iconOrNumber: "fa-solid fa-pen", text: "Is AI making your code worse?"}
            ]
        },
        {
            id: 2, 
            title: "Featured on Meta",
            info: [
                {id: 1, iconOrNumber: "fa-regular fa-message", text: "Changing how community leadership works on Stack Exchange: a proposal and..."},
                {id: 2, iconOrNumber: "fa-regular fa-message", text: "Shifting the data dump schedule: A proposal"},
                {id: 3, iconOrNumber: "fa-brands fa-stack-overflow", text: "Temporary policy: Generative AI (e.g., ChatGPT) is banned"},
                {id: 4, iconOrNumber: "fa-brands fa-stack-overflow", text: "2024 Community Moderator Election Results"},
            ]
        },
        {
            id: 3, 
            title: "Hot Meta Posts",
            info: [
                {id: 1, iconOrNumber: 30, text: "The Community bot's question-bumping behaviour is no longer useful and should..."},
                {id: 2, iconOrNumber: 3, text: "Reconsider xla tag"}
            ]
        },
    ]

    return(
        <div className="blog">
            {blogData.map(elm => {
                return(
                    <div className="blog__wrapper" key={elm.id}>
                        <div className="blog__title">
                            <p>{elm.title}</p>
                        </div>
                        <div className="blog__info">
                            {elm.info.map(elm => {
                                return(
                                    <div className="blog__info-item" key={elm.id}>
                                        {elm.iconOrNumber === Number(elm.iconOrNumber) ? <p>{elm.iconOrNumber}</p> : <i className={elm.iconOrNumber}></i>}
                                        <p>{elm.text}</p>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
})