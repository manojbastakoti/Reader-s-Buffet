import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Register.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import * as Icon from "react-bootstrap-icons";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

const nameRegExp =
  /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})/;
// const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const phoneRegExp =
  /(\+)?(977)?-?(980|981|982|984|985|986|974|975|972|963|961|962|988)[0-9]{7}/;
const userNameRegExp = /^[a-z0-9_-]{5,15}$/;
const passwordRegExp =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

const schema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "*Name must have at least 2 characters")
    .matches(nameRegExp, "*Please enter a valid name")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*Name is required"),
  email: Yup.string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
  username: Yup.string()
    .min(5, "*Username must have 5-15 characters only")
    .max(15, "*Username must have 5-15 characters only")
    .matches(
      userNameRegExp,
      "*Can contain any lower case character, digit or special symbol “_-” only"
    )
    .required("*Username required"),
  phone: Yup.string()
    .matches(phoneRegExp, "*Phone number is not valid")
    .required("*Phone number required"),
  password: Yup.string()
    .min(8, "*Password must contain minimum of 8 characters")
    .matches(
      passwordRegExp,
      "*Must contain at least one uppercase letter, one lowercase letter, one number and one special character"
    )
    .required("*Password required"),
  password2: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Both passwords do not match."
  ),
  dob: Yup.date().required("*Please provide your date of birth"),
  // .min("13-07-2022", "Date is too early"),
  terms: Yup.bool().required().oneOf([true], "Terms must be accepted"),
});

export default function Register() {
  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(
    async (values) => axios.post("/user/register", values),
    {
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          console.log(data.data);
          toast.success(data.data.message);
          console.log(data.data.data);
          navigate(`/verification?email=${data?.data?.data?.email}`);
        }
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          console.log(error.response.data);
          toast.error(error?.response?.data?.message);
        } else {
          console.log(error);
        }
      },
    }
  );

  const handleSubmit = async (values, { setSubmitting }) => {
    let v = Object.assign({}, values);
    delete v.terms;
    delete v.password2;
    mutate(v);
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={handleSubmit}
        initialValues={{
          fullName: "",
          email: "",
          username: "",
          phone: "",
          password: "",
          password2: "",
          dob: "",
          terms: false,
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors,
          isSubmitting,
          setSubmitting,
        }) => (
          <div>
            <Row>
              <Col xs={10} md={8} lg={4} className="register-container ">
                <div>
                  <h1>Reader's Buffet</h1>
                </div>

                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className="m-3" controlId="formBasicName">
                    <Form.Label>Full Name:</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter full name"
                      name="fullName"
                      value={values.fullName}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.fullName}
                    />
                    {touched.fullName && errors.fullName && (
                      <Form.Control.Feedback type="invalid">
                        {errors.fullName}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group className="m-3" controlId="formBasicEmail">
                    <Form.Control
                      type="email"
                      name="email"
                      placeholder="Enter your email address"
                      value={values.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.email}
                    />
                    {touched.email && errors.email && (
                      <Form.Control.Feedback type="invalid">
                        {errors.email}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group className="m-3" controlId="formBasicUserName">
                    <Form.Control
                      type="text"
                      name="username"
                      placeholder="Create a username"
                      value={values.username}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.username}
                    />
                    {touched.username && errors.username && (
                      <Form.Control.Feedback type="invalid">
                        {errors.username}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Form.Group className="m-3" controlId="formBasicPhoneNumber">
                    <Form.Control
                      required
                      type="text"
                      name="phone"
                      placeholder="Enter your phone number"
                      value={values.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.phone}
                    />
                    {touched.phone && errors.phone && (
                      <Form.Control.Feedback type="invalid">
                        {errors.phone}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <Row>
                    <Form.Group
                      as={Col}
                      className="m-3"
                      controlId="formBasicPassword1"
                    >
                      <Form.Control
                        required
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!errors.password}
                      />
                      {touched.password && errors.password && (
                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      className="m-3"
                      controlId="formBasicPassword2"
                    >
                      <Form.Control
                        required
                        type="password"
                        name="password2"
                        placeholder="Confirm Password"
                        value={values.password2}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        isInvalid={!!errors.password2}
                      />
                      {touched.password2 && errors.password2 && (
                        <Form.Control.Feedback type="invalid">
                          {errors.password2}
                        </Form.Control.Feedback>
                      )}
                    </Form.Group>
                  </Row>

                  <Form.Group className="m-3" controlId="dob">
                    <Form.Label>Select Your Date of Birth</Form.Label>
                    <Form.Control
                      required
                      type="date"
                      name="dob"
                      placeholder="Date of Birth"
                      value={values.dob}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.dob}
                    />
                    {touched.dob && errors.dob && (
                      <Form.Control.Feedback type="invalid">
                        {errors.dob}
                      </Form.Control.Feedback>
                    )}
                  </Form.Group>

                  <div className="d-grid m-3">
                    <Button
                      variant="primary"
                      type="submit"
                      disabled={!isValid || isLoading}
                    >
                      {isLoading ? "Registering..." : "Register me"}
                    </Button>
                  </div>

                  <Form.Group className="m-3" id="formGridCheckbox">
                    <Form.Check
                      required
                      name="terms"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.terms}
                      feedback="You must agree before continuing"
                      feedbackType="invalid"
                      type="checkbox"
                      label="Agree to terms and conditions"
                    />
                  </Form.Group>
                </Form>
                <hr />

                <h5>OR</h5>

                <div className="d-grid m-3">
                  <Button variant="primary">
                    <Icon.Google size={20} /> Continue with google
                  </Button>{" "}
                </div>
                <hr />

                <Row>
                  Already have an account?{" "}
                  <LinkContainer to="/login">
                    <Nav.Link eventKey="link-1">Sign In</Nav.Link>
                  </LinkContainer>
                </Row>
              </Col>
            </Row>
          </div>
        )}
      </Formik>
    </>
  );
}
