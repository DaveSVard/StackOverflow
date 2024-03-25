import React, { useEffect, useState } from "react";
import "./addQuestionForm.scss";
import { Formik } from "formik";
import * as Yup from "yup";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { selectCategories } from "../../features/categories/categoriesSlice";
import { getAllCategoriesAPI } from "../../features/categories/categoriesAPI";

import Multiselect from "multiselect-react-dropdown";
import { createQuestionAPI } from "../../features/questions/questionsAPI";
import { useNavigate } from "react-router-dom";

const createQuestionSchema = Yup.object().shape({
  question: Yup.string().required("Enter task name!"),
});

export const AddQuestionForm: React.FC = React.memo((): JSX.Element => {
  const { categories } = useAppSelector(selectCategories);
  const dispatch = useAppDispatch();
  const navigate = useNavigate()

  useEffect(() => {
    dispatch(getAllCategoriesAPI());
  }, []);


  const categoriesId:any = new Set();
  const [selectError, setSelectError] = useState<boolean>(false)

  
  const getSelect = (data:any) => {
    categories.map((elm) => {
      data.map((elem: string) => {
        if (elm.name == elem) {
          categoriesId.add(elm.id)
        }
      });
    });
  }
  
  const createQuestion = (obj:{question:string}) => {
    
    if(categoriesId.size) {
      let arr = [...categoriesId]
      dispatch(createQuestionAPI({question: obj.question, categories: arr}))
      navigate("/allQuestions")
    } else {
      setSelectError(!selectError)
    }

  }

  return (
    <div className="question">
      <Formik
        initialValues={{question: ""}}
        validationSchema={createQuestionSchema}
        onSubmit={(values, { setSubmitting }) => {
          createQuestion(values)
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
          <form className="question__form" onSubmit={handleSubmit}>
            <div className="question__form-content">
              <label className="p1-fz12">
                Be specific and imagine you’re asking a question to another
                person.
              </label>
              <input
                type="text"
                placeholder="Enter your question"
                onChange={handleChange}
                onBlur={handleBlur}
                name="question"
                value={values.question}
              />
              {errors.question && touched.question ? (
                <p className="error">{errors.question}</p>
              ) : null}

              <Multiselect
                isObject={false}
                onRemove={(event) => {}}
                onSelect={(event) => {
                  getSelect(event)
                }}
                options={categories.map((elm) => {
                  return elm.name;
                })}
              />
              {selectError ? <p className="error">Choose category!</p> : <></>}
            </div>
            <button type="submit" className="btn-1">
              Send your question
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
});
