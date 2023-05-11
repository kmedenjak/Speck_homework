import { Formik } from "formik";
import * as Yup from "yup";
import Section from "../../components/Section/Section";
import {
  ErrorMessage,
  Field,
  FormRow,
  Option,
  Select,
} from "../../utils/styles/generalStyles";
import { Buttons } from "../../utils/styles/generalStyles";
import { Title, Form, Labels, SectionPass } from "./Profile.js";
import { useState } from "react";
import Password from "../../components/Password/Password";

const Profile = () => {
  const [buttonClick, setButtonClik] = useState(false);

  function handleButtonClick() {
    setButtonClik(!buttonClick);
  }

  return (
    <Section>
      <Title>Profile</Title>
      {!buttonClick ? (
        <Buttons isProfile onClick={handleButtonClick}>
          Edit
        </Buttons>
      ) : (
        <Buttons isProfile2 onClick={handleButtonClick}>
          Cancle
        </Buttons>
      )}

      <SectionPass>
        <Formik
          initialValues={{
            firstName: "Karla",
            lastName: "Medenjak",
            email: "karla.medenjak2@gmail.com",
            password: "12341234",
            passwordRepeat: "12341234",
            githubUsername: "kmedenjak",
            zeplinUsername: "kmedenjak",
            activeFacultyYear: "5th faculty year",
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
              .test(
                "passwords-match",
                "Passwords must match",
                function (value) {
                  return this.parent.password === value;
                }
              )
              .required(""),
            githubUsername: Yup.string().required(
              "Github username is required"
            ),
            zeplinUsername: Yup.string().required(
              "Zepelin username is required"
            ),
            activeFacultyYear: Yup.string().required(
              "Faculty year is required"
            ),
          })}
        >
          {(formik) => (
            //tu slažemo svoju formu, name mora biti isti ko i kod initialValues
            <Form>
              {buttonClick && <Labels>First name</Labels>}
              <FormRow>
                <Field type="text" name="firstName" disabled={!buttonClick} />
                <ErrorMessage
                  component={"div"}
                  /*component moramo eksplicitno definirat*/ name="firstName"
                />
              </FormRow>

              {buttonClick && <Labels>Last name</Labels>}
              <FormRow>
                <Field type="text" name="lastName" disabled={!buttonClick} />
                <ErrorMessage
                  component={"div"}
                  /*component moramo eksplicitno definirat*/ name="lastName"
                />
              </FormRow>

              {buttonClick && <Labels>Email</Labels>}
              <FormRow>
                <Field type="email" name="email" disabled={!buttonClick} />
                <ErrorMessage
                  component={"div"}
                  /*component moramo eksplicitno definirat*/ name="email"
                />
              </FormRow>

              {buttonClick && <Labels>Github</Labels>}
              <FormRow>
                <Field
                  type="text"
                  name="githubUsername"
                  disabled={!buttonClick}
                />
                <ErrorMessage
                  component={"div"}
                  /*component moramo eksplicitno definirat*/ name="githubUsername"
                />
              </FormRow>

              {buttonClick && <Labels>Zepelin</Labels>}
              <FormRow>
                <Field
                  type="text"
                  name="zeplinUsername"
                  disabled={!buttonClick}
                />
                <ErrorMessage
                  component={"div"}
                  /*component moramo eksplicitno definirat*/ name="zeplinUsername"
                />
              </FormRow>

              {buttonClick && <Labels>Active faculty year</Labels>}
              <FormRow>
                <Select
                  id=""
                  name="activeFacultyYear"
                  {...formik.getFieldProps("activeFacultyYear")}
                  disabled={!buttonClick}
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
                {buttonClick && (
                  <Buttons isSecondary type="submit" disabled={!buttonClick}>
                    {formik.isSubmitting ? "Processing..." : "Update user data"}
                  </Buttons>
                )}
              </FormRow>
            </Form>
          )}
        </Formik>
      </SectionPass>

      <SectionPass>
        {!buttonClick ? (
          <Password
            title="Reset password"
            subtitle="In order to reset password click on Edit button."
          />
        ) : (
          <Password title="Reset password">
            <Formik
              initialValues={{
                oldPassword: "",
                newPassword: "",
                passwordRepeat: "",
              }}
              validationSchema={Yup.object({
                oldPassword: Yup.string()
                  .required("Password is required"), //formik ne prihvaća arrow funkcije pa koristimo function
                newPassword: Yup.string()
                  .min(8, "Password must be at least 8 characters long")
                  .required("Password is required"), //formik ne prihvaća arrow funkcije pa koristimo function
                passwordRepeat: Yup.string()
                  .test(
                    "passwords-match",
                    "Passwords must match",
                    function (value) {
                      return this.parent.newPassword === value;
                    }
                  )
                  .required(""),
              })}
              onSubmit={({ setSubmitting, resetForm }) => {
                setTimeout(() => {
                  alert("Password is changed");
                  setSubmitting(false);
                  resetForm(); //podešavanje na default vrijednosti
                }, 1000);
              }}
            >
              {(formik) => (
                //tu slažemo svoju formu, name mora biti isti ko i kod initialValues

                <Form isPassword>
                  <FormRow>
                    <Field
                      type="password"
                      name="oldPassword"
                      placeholder="Old password..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage
                      component={"div"}
                      /*component moramo eksplicitno definirat*/ name="oldPassword"
                    />
                  </FormRow>

                  <FormRow>
                    <Field
                      type="password"
                      name="newPassword"
                      placeholder="New password..."
                      disabled={formik.isSubmitting}
                    />
                    <ErrorMessage
                      component={"div"}
                      /*component moramo eksplicitno definirat*/ name="newPassword"
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
                    <Buttons
                      isSecondary
                      type="submit"
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting
                        ? "Processing..."
                        : "Update password"}
                    </Buttons>
                  </FormRow>
                </Form>
              )}
            </Formik>
          </Password>
        )}
      </SectionPass>
    </Section>
  );
};

export default Profile;
