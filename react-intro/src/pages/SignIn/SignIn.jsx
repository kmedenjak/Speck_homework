import { Formik } from "formik";
import * as Yup from "yup";
import Section from "../../components/Section/Section";
import {
  Buttons,
  ErrorMessage,
  Field,
  Form,
  FormRow,
  FormSuccessMessage,
} from "../../utils/styles/generalStyles";
import { getUser, loginUser } from "../../api/users";
import { useState } from "react";
import PropTypes from "prop-types";


const SignIn = ( {setIsAdmin, setIsLogedIn }) => {
  const [successMessage, setSuccessMessage] = useState(null);
  return (
    <Section title="Sign in">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Invalid email adress")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required"), //formik ne prihvaća arrow funkcije pa koristimo function
        })}
        onSubmit={async (values, { setSubmitting, resetForm }) => {
          try {
            const response = await loginUser(values);
            const users = await getUser(response.access_token);
            const user = users.data.find((user) => user.email == values.email);
            setSuccessMessage({
              error: false,
              message: "User " + user.first_name + " " + user.last_name + " is loged in successfully",
            });
            setTimeout(() => {
              setSuccessMessage(null);
            }, 2000);
            setIsAdmin(user.is_admin);
            setIsLogedIn(response.access_token);
            localStorage.setItem('admin', user.is_admin);
            localStorage.setItem('logged', response.access_token);
            resetForm();
          } catch (err) {
            setSuccessMessage({
              error: true,
              message: "There was an error...",
            });
          } finally {
            setSubmitting(false);
          }
        }}
      >
        {(formik) => (
          //tu slažemo svoju formu, name mora biti isti ko i kod initialValues
          <Form>
             {successMessage && (
              <FormRow>
                <FormSuccessMessage isError={successMessage.error}>
                  {successMessage.message}
                </FormSuccessMessage>
              </FormRow>
            )}
            <FormRow>
              <Field
                type="email"
                name="email"
                placeholder="Email..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage
                component={"div"}
                /*component moramo eksplicitno definirat*/ name="email"
              />
            </FormRow>

            <FormRow>
              <Field
                type="password"
                name="password"
                placeholder="Password..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage
                component={"div"}
                /*component moramo eksplicitno definirat*/ name="password"
              />
            </FormRow>

            <FormRow>
              <Buttons isSecondary type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Processing..." : "Sign in"}
              </Buttons>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

SignIn.propTypes = {
  setIsAdmin: PropTypes.func,
  setIsLogedIn: PropTypes.func
};

export default SignIn;
