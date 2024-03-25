import React from "react";
import { useRoutes } from "react-router-dom";
import { Layout } from "../pages/Layout/layout";
import { HomePage } from "../pages/HomePage/homePage";
import { AddQuestion } from "../pages/AddQuestion/addQuestion";
import { AllQuestions } from "../pages/AllQuestions/allQuestions";
import { SingleQuestion } from "../pages/SingleQuestion/singleQuestion";

export const MyRouter:React.FC = () => {
    const routes = useRoutes([
        {
            path: "/",
            element: <Layout/>,
            children: [
                {path: "/", element: <HomePage/>},
                {path: "/addQuestion", element: <AddQuestion/>},
                {path: "/allQuestions", element: <AllQuestions/>},
                {path: "/singleQuestion/:id", element: <SingleQuestion/>}
            ]
        }
    ])
    
    return routes
}