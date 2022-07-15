import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import '../styles/Register.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons';
import { Formik, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const nameRegExp = /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})/
const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const userNameRegExp = /^[a-z0-9_-]{5,15}$/
const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/


const schema = Yup.object().shape({
  name: Yup.string()
    .min(2, "*Name must have at least 2 characters")
    .matches(nameRegExp, "*Please enter a valid name")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*Name is required"),
  email: Yup.string()
    .email("*Must be a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
  userName: Yup.string()
    .min(5, "*Username must have 5-15 characters only")
    .max(15, "*Username must have 5-15 characters only")
    .matches(userNameRegExp, "*Can contain any lower case character, digit or special symbol “_-” only")
    .required("*Username required"),
  phone: Yup.string()
    .matches(phoneRegExp, "*Phone number is not valid")
    .required("*Phone number required"),
  password1: Yup.string()
  .min(8, "*Password must contain minimum of 8 characters")
    .matches(passwordRegExp, "*Must contain at least one uppercase letter, one lowercase letter, one number and one special character")
    .required("*Password required"),
  password2: Yup.string().required("*This field cannot be empty").when("password1", {
    is: val => (val && val.length > 0 ? true : false),
    then: Yup.string().oneOf(
      [Yup.ref("password1")],
      "Both password need to be the same"
    )
  }),
  dob: Yup.date().required("*Please provide your date of birth"),
  // .min("13-07-2022", "Date is too early"),
  terms: Yup.bool().required().oneOf([true], 'Terms must be accepted'),
});

export default function Register() {

  return (<>
    <Formik
      validationSchema={schema}
      onSubmit={console.log}
      initialValues={{
        name: '',
        email: '',
        userName: '',
        phone: '',
        password1: '',
        password2: '',
        dob: '',
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
      }) => (

        <div>
          <Row>

            <Col xs={10} md={8} lg={4} className="register-container ">
              <div>
                <h1>Reader's Buffet</h1></div>

              <Form noValidate onSubmit={handleSubmit} >

                <Form.Group className="m-3" controlId="formBasicName">
                  <Form.Label>Full Name:</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter full name"
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.name}
                  />
                  {touched.name && errors.name && <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>}
                  


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
                  {touched.email && errors.email && <Form.Control.Feedback type="invalid">
                    {errors.email}
                  </Form.Control.Feedback>}


                </Form.Group>

                <Form.Group className="m-3" controlId="formBasicUserName">
                  <Form.Control

                    type="text"
                    name="userName"
                    placeholder="Create a username"
                    value={values.userName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.userName}
                    />
                    {touched.userName && errors.userName && <Form.Control.Feedback type="invalid">
                      {errors.userName}
                    </Form.Control.Feedback>}
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
                  {touched.phone && errors.phone && <Form.Control.Feedback type="invalid">
                    {errors.phone}
                  </Form.Control.Feedback>}


                </Form.Group>

                <Row>
                  <Form.Group as={Col} className="m-3" controlId="formBasicPassword1">
                    <Form.Control
                      required
                      type="password"
                      name="password1"
                      placeholder="Password"
                      value={values.password1}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      isInvalid={!!errors.password1}
                  />
                  {touched.password1 && errors.password1 && <Form.Control.Feedback type="invalid">
                    {errors.password1}
                  </Form.Control.Feedback>}


                  </Form.Group>

                  <Form.Group as={Col} className="m-3" controlId="formBasicPassword2">
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
                    {touched.password2 && errors.password2 && <Form.Control.Feedback type="invalid">
                    {errors.password2}
                  </Form.Control.Feedback>}


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
                   {touched.dob && errors.dob && <Form.Control.Feedback type="invalid">
                    {errors.dob}
                  </Form.Control.Feedback>}



                </Form.Group>

                <div className="d-grid m-3">
                  <Button variant="primary" type="submit" disabled={!isValid || isSubmitting} >
                    Register me
                  </Button></div>

                <Form.Group className="m-3" id="formGridCheckbox">
                  <Form.Check
                    required
                    name="terms"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    isInvalid={!!errors.terms}

                    feedback="You must agree before continuing"
                    feedbackType='invalid'
                    type="checkbox"
                    label="Agree to terms and conditions" />

                </Form.Group>


              </Form>
              <hr />

              <h5>OR</h5>

              <div className="d-grid m-3">
                <Button variant="primary" ><Icon.Google size={20} /> Continue with google</Button>{' '}
              </div>
              <hr />

              <Row>Already have an account? <Nav.Link href="/example" eventKey="link-1">Sign In</Nav.Link></Row>
            </Col>
          </Row>

        </div>
      )}
    </Formik>
  </>
  );
}

