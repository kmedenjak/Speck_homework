import { Formik } from "formik";
import * as Yup from "yup";
import Section from "../../components/Section/Section";
import {
  Buttons,
  ErrorMessage,
  Field,
  Form,
  FormRow,
  Option,
  Select,
} from "../../utils/styles/generalStyles";

const Register = () => {
  return (
    <Section title="Register">
      <Formik
        initialValues={{
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          passwordRepeat: "",
          githubUsername: "",
          zeplinUsername: "",
          activeFacultyYear: "",
          isAdmin: false,
        }}
        validationSchema={Yup.object({
          firstName: Yup.string().required("First name is required"), //reqired jer je obavezno
          lastName: Yup.string().required("Last name is required"),
          email: Yup.string()
            .email("Invalid email adress")
            .required("Email is required"),
          password: Yup.string()
            .min(8, "Password must be at least 8 characters long")
            .required("Password is required"), //formik ne prihvaća arrow funkcije pa koristimo function
          passwordRepeat: Yup.string()
            .test("passwords-match", "Passwords must match", function (value) {
              return this.parent.password === value;
            })
            .required(""),
          githubUsername: Yup.string().required("Github username is required"),
          zeplinUsername: Yup.string().required("Zepelin username is required"),
          activeFacultyYear: Yup.string().required("Faculty year is required"),
          isAdmin: false,
        })}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          setTimeout(() => {
            const data = {
              first_name: values.firstName,
              last_name: values.lastName,
              email: values.email,
              password: values.password,
              github_username: values.githubUsername,
              zeplin_username: values.zeplinUsername,
              active_faculty_year:
                parseInt(values.activeFacultyYear) === 0
                  ? null
                  : parseInt(values.activeFacultyYear),
              is_admin: false,
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
                type="text"
                name="firstName"
                placeholder="First name..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage
                component={"div"}
                /*component moramo eksplicitno definirat*/ name="firstName"
              />
            </FormRow>

            <FormRow>
              <Field
                type="text"
                name="lastName"
                placeholder="Last name..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage
                component={"div"}
                /*component moramo eksplicitno definirat*/ name="lastName"
              />
            </FormRow>

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
              <Field
                type="password"
                name="passwordRepeat"
                placeholder="Password repeat..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage
                component={"div"}
                /*component moramo eksplicitno definirat*/ name="passwordRepeat"
              />
            </FormRow>

            <FormRow>
              <Field
                type="text"
                name="githubUsername"
                placeholder="Github username..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage
                component={"div"}
                /*component moramo eksplicitno definirat*/ name="githubUsername"
              />
            </FormRow>

            <FormRow>
              <Field
                type="text"
                name="zeplinUsername"
                placeholder="Zepelin username..."
                disabled={formik.isSubmitting}
              />
              <ErrorMessage
                component={"div"}
                /*component moramo eksplicitno definirat*/ name="zeplinUsername"
              />
            </FormRow>

            <FormRow>
              <Select
                id=""
                name="activeFacultyYear"
                {...formik.getFieldProps("activeFacultyYear")}
                disabled={formik.isSubmitting}
              >
                <Option value="" disabled hidden>
                  Choose an Active faculty year
                </Option>
                <Option value="0">Not a student</Option>
                <Option value="1">1st faculty year</Option>
                <Option value="2">2nd faculty year</Option>
                <Option value="3">3rd faculty year</Option>
                <Option value="4">4th faculty year</Option>
                <Option value="5">5th faculty year</Option>
              </Select>
              <ErrorMessage
                component={"div"}
                /*component moramo eksplicitno definirat*/ name="activeFacultyYear"
              />
            </FormRow>

            <FormRow>
              <Buttons isSecondary type="submit" disabled={formik.isSubmitting}>
                {formik.isSubmitting ? "Processing..." : "Register"}
              </Buttons>
            </FormRow>
          </Form>
        )}
      </Formik>
    </Section>
  );
};

export default Register;
