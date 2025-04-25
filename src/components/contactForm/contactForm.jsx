// import React from 'react';
// import { Input } from './Input';
// import PropTypes from 'prop-types';
// import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import { ErrorMessage } from "formik";




import css from "./contactForm.module.css";

export const FeedbackForm = () => {


  const FeedbackSchema = Yup.object().shape({
    username: Yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
    userNumber: Yup.number().min(6, "Too short").max(6, "Too long").required("Required"),
});


  const initialValues = {
    userName: "",
    userNumber: ""
  };


  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
		console.log(values);
		actions.resetForm();
	};

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={FeedbackSchema}>
      <Form className={css.form}>
        <div>
          <label htmlFor={nameFieldId}>Username</label>
          <Field className={css.field} type="text" name="userName" id={nameFieldId} />
          <ErrorMessage name="userName" as="span" />
        </div>
        <div>
          <label htmlFor={numberFieldId}>Number</label>
          <Field className={css.field} type="number" name="userNumber" id={numberFieldId} />
          <ErrorMessage name="userNumber" as="span" />
        </div>
        <button className={css.btn} type="submit">Submit</button>
			</Form>
    </Formik>
  );
};




// Input.propTypes = {
//   addUser: PropTypes.string.isRequired,

// };