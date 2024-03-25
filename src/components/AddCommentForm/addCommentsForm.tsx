import React from "react"
import "./addCommentForm.scss"
import { Formik } from "formik"

import * as Yup from "yup";
import { useAppDispatch } from "../../app/hooks";
import { addCommentAPI } from "../../features/comments/commetnsAPI";
import { getSingleQuesitonAPI } from "../../features/questions/questionsAPI";

const createCommentSchema = Yup.object().shape({
    text: Yup.string()
        .required("Enter task name!"),
    email: Yup.string()
        .required("Enter your email!")
  });

interface PropTypes {
    questionId:number
}

export const AddCommentsForm:React.FC<PropTypes> = React.memo(({questionId}):JSX.Element => {

    const dispatch = useAppDispatch()
    
    return(
        <div className="comment">
            <Formik
                initialValues={{text: "", email: ""}}
                validationSchema={createCommentSchema}
                onSubmit={(values, { setSubmitting }) => {
                    dispatch(addCommentAPI({text: values.text, email: values.email, questionId: questionId, }))
                    dispatch(getSingleQuesitonAPI(questionId))
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form className="comment__form" onSubmit={handleSubmit}>
                        <textarea 
                            placeholder="Enter your comment..." 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="text"
                            value={values.text}>
                        </textarea>
                        {errors.text && touched.text ? (
                            <p className="error">{errors.text}</p>
                        ) : null}
                        <input placeholder="Enter your email..." 
                            onChange={handleChange}
                            onBlur={handleBlur}
                            name="email"
                            value={values.email}>
                        </input>
                        {errors.email && touched.email ? (
                            <p className="error">{errors.email}</p>
                        ) : null}
                        <div className="comment__form-btn">
                            <button type="submit" className="btn-1">
                                Post Your Comment
                            </button>
                        </div>
                    </form>
                )}
            </Formik>
        </div>
    )
})