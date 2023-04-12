import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";

import { Signup } from "../services";

import styles from "./styles";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  address: Yup.string()
    .min(2, "Address must be at least 2 characters")
    .required("Address is required"),
});

const SignupForm = ({ classes }) => {
  const [success, setSuccess] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  return (
    <Formik
      initialValues={{ email: "", password: "", name: "", address: "" }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const body = {
          name: values.name,
          email: values.email,
          password: values.password,
          address: values.address,
        };
        Signup(setSuccess, setIsLoading, setError, body);
        // success && alert("Signup Successful");
      }}
    >
      {({ handleSubmit }) => (
        <Form className={classes.formWrapper} onSubmit={handleSubmit}>
          <div className={classes.title}>Welcome to Street Cricket League</div>
          <div className={classes.formFieldWrapper}>
            <Field
              className={classes.formField}
              name="name"
              type="name"
              placeholder="Full Name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={classes.errorField}
            />
          </div>
          <div className={classes.formFieldWrapper}>
            <Field
              className={classes.formField}
              name="email"
              type="email"
              placeholder="Email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className={classes.errorField}
            />
          </div>
          <div className={classes.formFieldWrapper}>
            <Field
              className={classes.formField}
              name="password"
              type="password"
              placeholder="Password"
            />
            <ErrorMessage
              name="password"
              component="div"
              className={classes.errorField}
            />
          </div>
          <div className={classes.formFieldWrapper}>
            {" "}
            <Field
              className={classes.formField}
              name="address"
              type="text"
              placeholder="Address"
            />
            <ErrorMessage
              name="address"
              component="div"
              className={classes.errorField}
            />
          </div>
          {loading ? (
            <div>Loading...</div>
          ) : (
            <button type="submit" className={classes.signUpButton}>
              Sign Up
            </button>
          )}
          {!success && error && (
            <div className={classes.errorMessage}>
              {error || "Something Went wrong..."}
            </div>
          )}

          {success && (
            <div className={classes.signupSuccess}>
              Signup Successful. Please login to your account
            </div>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default React.memo(withStyles(styles)(SignupForm));
