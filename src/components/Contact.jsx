import React from "react";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Field, Form as FormikForm, Formik } from "formik";
import { Button, Card, Container, Form } from "react-bootstrap";
import "../styles/Contact.css";
import * as Icon from "react-bootstrap-icons";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import * as Yup from "yup";

const nameRegExp =
  /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})/;
const emailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const Schema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "*Name must have at least 2 characters")
    .matches(nameRegExp, "*Please enter a valid name")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*Name is required"),
  email: Yup.string()
    .email("*Must be a valid email address")
    .matches(emailRegExp, "*Please enter a valid email address")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
});

export default function Contact() {
  const initialValues = {
    fullName: "",
    email: "",
    message: "",
  };

  const navigate = useNavigate();

  // add post
  const { mutate } = useMutation(
    (values) => axios.post("/contact/message", values),
    {
      onSuccess: (data) => {
        console.log(data);
        if (data.status === 200 || data.status === 201) {
          toast.success("Message sent successfully");
          navigate("/");
        }
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message);
      },
    }
  );

  const handleSubmit = (values) => {
    mutate(values);
  };

  return (
    <>
      <div className="container-fluid whole">
        <div className="row aboutUs">
          <h2>About Us</h2>
          <p>
            As of the present moment, Reader's Book Shop is the sole vendor of
            Reader's Buffet and a local bookstore, based at Balkumari,
            Kathmandu. Since 2021, Reader's Book Shop has existed as a tiny
            island of peace in a fast-moving world. Thriving and growing every
            year, the business that started from a post-card board selling
            postcards to tourists in the heart of Balkumari has grown to be one
            of the hidden jewels of Kathmandu with floor-to-ceiling stacks of
            books and a generally inclusive vibe that makes it seem like a
            neighborhood spot for anyone and everyone. The bookshop is one of
            the largest book distributors in Nepal. The shelves store an endless
            choice of books and the catalogue is always growing. You can take
            time browsing the seemingly endless selection of rare coffee table
            books and attractive souvenir items.
          </p>
        </div>
        <div className="row bottom">
          <div className="col-md-6 left">
            <div className="row topLeft">
              <h3>LOCATION</h3>
              <p>
                Balkumari, Lalitpur
                <br /> NCIT College
              </p>
              <p></p>
            </div>
            <div className="row bottomLeft">
              <h3>FOLLOW US</h3>
              <Row className="NavIcons">
                <Nav defaultActiveKey="/">
                  <Nav.Link href="/">
                    <Icon.Instagram size={20} color="black" />
                  </Nav.Link>
                  <Nav.Link href="/about" eventKey="link-1">
                    <Icon.Facebook size={20} color="black" />
                  </Nav.Link>
                  <Nav.Link href="/buy" eventKey="link-2">
                    <Icon.Twitter size={20} color="black" />
                  </Nav.Link>
                  <Nav.Link href="/exchange" eventKey="link-3">
                    <Icon.Youtube size={20} color="black" />
                  </Nav.Link>
                </Nav>
              </Row>
            </div>
          </div>
          {/* <div className="formContainer"> */}
          <div className="col-md-6 right">
            <Formik
              initialValues={initialValues}
              onSubmit={handleSubmit}
              validationSchema={Schema}
              enableReinitialize
            >
              {({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors,
              }) => (
                <Container className="py-3 formContainer">
                  {/* <Card bg="warning" className="w-70 p-1 mx-auto h-auto"> */}
                  <h2 className="text-center"> CONTACT FORM</h2>

                  <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="fullName">
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

                    <Form.Group className="mb-3" controlId="email">
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

                    <Form.Group className="mb-3" controlId="message">
                      <Field name="message">
                        {({ field }) => (
                          <Form.Control
                            type="text"
                            as="textarea"
                            rows={5}
                            placeholder="Enter your message"
                            {...field}
                          />
                        )}
                      </Field>
                    </Form.Group>

                    <Button
                      variant="outline-dark"
                      type="submit"
                      className="ms-2"
                    >
                      SUBMIT
                    </Button>
                  </Form>
                  {/* </Card> */}
                </Container>
              )}
            </Formik>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
