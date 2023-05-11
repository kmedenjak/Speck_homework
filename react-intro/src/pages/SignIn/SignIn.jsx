import { Formik } from "formik";
import * as Yup from "yup";
import Section from "../../components/Section/Section";
import {
  Buttons,
  ErrorMessage,
  Field,
  Form,
  FormRow,
} from "../../utils/styles/generalStyles";

const SignIn = () => {
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
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            const data = {
              email: values.email,
              password: values.password,
            };
            alert(JSON.stringify(data, null, 2));
            setSubmitting(false);
            resetForm(); //podešavanje na default vrijednosti
          }, 1000);
        }}
      >
        {(formik) => (
          //tu slažemo svoju formu, name mora biti isti ko i kod initialValues
          <Form>
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

export default SignIn;
