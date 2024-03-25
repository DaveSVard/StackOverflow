import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.scss"
import { useAppDispatch } from "../../app/hooks";
import { getAllQuestionsAPI, searchQuestionAPI } from "../../features/questions/questionsAPI";


export const Navbar:React.FC = React.memo(():JSX.Element => {

    const [navigation, setNavigation] = useState<boolean>(false)
    const [searchInput, setSearchInput] = useState<boolean>(false)
    const btn:any = useRef(null)

    const dispatch = useAppDispatch()
    
    
    const toggleNavigation = () => {
        btn.current.classList.toggle("nav-icon--active")
        setNavigation(!navigation)
    }

    const search = (text:string) => {
        if(text.length) {
            dispatch(searchQuestionAPI(text))
        } else {
            dispatch(getAllQuestionsAPI())
        }
    }

    return(
        <nav className="nav">
            <div className="container">
                <div className="nav__wrapper">
                    <ul className="nav__row">

                        <div className="nav__btn">
                            <button onClick={() => toggleNavigation()} className="nav-icon-btn">
                                <div ref={btn} className="nav-icon"></div>

                                {navigation ? <div className="navigation">
                                    <ul className="navigation__list">
                                        <li className="navigation__list-item">
                                            <i className="fa-solid fa-house-chimney"></i>
                                            <NavLink to={"/"}>HomePage</NavLink>
                                        </li>
                                        <li className="navigation__list-item">
                                            <i className="fa-solid fa-clipboard-question"></i>
                                            <NavLink to={"/allQuestions"}>Questions</NavLink>
                                        </li>
                                        <li className="navigation__list-item">
                                            <i className="fa-solid fa-square-plus"></i>
                                            <NavLink to={"/addQuestion"}>Create Question</NavLink>
                                        </li>
                                    </ul>
                                </div> : <></>}

                            </button>

                            <div className="nav__logo">
                                <NavLink to={"/"}>
                                    <img src="/images/logo.png" alt="" />
                                    {/* <div>
                                        <p>stack</p>
                                        <span>overflow</span>
                                    </div> */}
                                </NavLink>
                            </div>
                        </div>
                        

                        

                        <div className="nav__search">
                            <input placeholder="Search..." onChange={(e) => search(e.target.value)} />
                        </div>
                        

                        <div className="nav__icons">
                            <i onClick={() => setSearchInput(!searchInput)} className="fa-solid fa-magnifying-glass search"></i>
                            <i className="fa-solid fa-inbox"></i>
                            <i className="fa-solid fa-trophy"></i>
                            <i className="fa-solid fa-circle-question"></i>
                            <i className="fa-solid fa-chart-bar"></i>
                        </div>

                        {searchInput ? <div className="outer__nav-search">
                            <input placeholder="Search..."  onChange={(e) => search(e.target.value)} />
                        </div> : <></>}
                        
                    </ul>
                </div>
            </div>
        </nav>
    )
})


{/* 
<ul className="nav__list">
    <li><NavLink to={"/"}>HomePage</NavLink></li>
    <li><NavLink to={"/addQuestion"}>Add Question</NavLink></li>
    <li><NavLink to={"/allQuestions"}>All Questions</NavLink></li>
</ul> 
*/}