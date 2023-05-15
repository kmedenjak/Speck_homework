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
import { Title, Form, Labels, SectionPass, PassForm } from "./Profile.js";
import { useState } from "react";
import Password from "../../components/Password/Password";

const Profile = () => {
  const [buttonClick, setButtonClik] = useState(false);

  const handleDataInput = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  function handleButtonClick() {
    setButtonClik(!buttonClick);
  }

  const initialValues = {
    firstName: "Karla",
    lastName: "Medenjak",
    email: "karla.medenjak2@gmail.com",
    githubUsername: "kmedenjak",
    zeplinUsername: "kmedenjak",
    activeFacultyYear: "5th faculty year",
  };

  const [data, setData] = useState(initialValues);
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
          initialValues={initialValues}
          validationSchema={Yup.object({
            firstName: Yup.string().required("First name is required"), //reqired jer je obavezno
            lastName: Yup.string().required("Last name is required"),
            email: Yup.string()
              .email("Invalid email adress")
              .required("Email is required"),
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
          onSubmit={(value, {setSubmitting, resetForm} ) => {
            setTimeout(() => {
              alert(JSON.stringify(data, null, 2));
              handleButtonClick();
              setSubmitting(false);
              resetForm();
            }, 1000);
          }}
        >
          {(formik) => (
            //tu slažemo svoju formu, name mora biti isti ko i kod initialValues
            <Form>
              {buttonClick && <Labels>First name</Labels>}
              <FormRow>
                <Field
                  value={data.firstName}
                  onChange={handleDataInput}
                  type="text"
                  name="firstName"
                  disabled={!buttonClick || formik.isSubmitting}
                />
                <ErrorMessage
                  component={"div"}
                  /*component moramo eksplicitno definirat*/ name="firstName"
                />
              </FormRow>

              {buttonClick && <Labels>Last name</Labels>}
              <FormRow>
                <Field
                  value={data.lastName}
                  onChange={handleDataInput}
                  type="text"
                  name="lastName"
                  disabled={!buttonClick || formik.isSubmitting}
                />
                <ErrorMessage
                  component={"div"}
                  /*component moramo eksplicitno definirat*/ name="lastName"
                />
              </FormRow>

              {buttonClick && <Labels>Email</Labels>}
              <FormRow>
                <Field
                  value={data.email}
                  onChange={handleDataInput}
                  type="email"
                  name="email"
                  disabled={!buttonClick || formik.isSubmitting}
                />
                <ErrorMessage
                  component={"div"}
                  /*component moramo eksplicitno definirat*/ name="email"
                />
              </FormRow>

              {buttonClick && <Labels>Github</Labels>}
              <FormRow>
                <Field
                  value={data.githubUsername}
                  onChange={handleDataInput}
                  type="text"
                  name="githubUsername"
                  disabled={!buttonClick || formik.isSubmitting}
                />
                <ErrorMessage
                  component={"div"}
                  /*component moramo eksplicitno definirat*/ name="githubUsername"
                />
              </FormRow>

              {buttonClick && <Labels>Zepelin</Labels>}
              <FormRow>
                <Field
                  value={data.zeplinUsername}
                  onChange={handleDataInput}
                  type="text"
                  name="zeplinUsername"
                  disabled={!buttonClick || formik.isSubmitting}
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
                  value={data.activeFacultyYear}
                  onChange={handleDataInput}
                  name="activeFacultyYear"
                  
                  disabled={!buttonClick || formik.isSubmitting}
                >
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

              {buttonClick && (
                <FormRow>
                  <Buttons isSecondary type="submit" disabled={formik.isSubmitting}>
                    {formik.isSubmitting ? "Processing..." : "Update user data"}
                  </Buttons>
                </FormRow>
              )}
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
                oldPassword: Yup.string().required("Password is required"), //formik ne prihvaća arrow funkcije pa koristimo function
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
              onSubmit={(values, { setSubmitting, resetForm }) => {
                setTimeout(() => {
                  alert("Password is changed", values);
                  handleButtonClick();
                  setSubmitting(false);
                  resetForm(); //podešavanje na default vrijednosti
                }, 1000);
              }}
            >
              {(formik) => (
                //tu slažemo svoju formu, name mora biti isti ko i kod initialValues

                <PassForm>
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
                      isSecondaryProfil
                      type="submit"
                      disabled={formik.isSubmitting}
                    >
                      {formik.isSubmitting
                        ? "Processing..."
                        : "Update password"}
                    </Buttons>
                  </FormRow>
                </PassForm>
              )}
            </Formik>
          </Password>
        )}
      </SectionPass>
    </Section>
  );
};

export default Profile;
