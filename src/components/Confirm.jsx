import React, { useEffect, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import "../styles/Confirm.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
// import { useMutation, useQuery } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { useQuery as useRouteQuery } from "../hooks/useQuery";

const nameRegExp =
  /(^[A-Za-z]{2,16})([ ]{0,1})([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})?([ ]{0,1})?([A-Za-z]{2,16})/;
// const phoneRegExp = /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/
const phoneRegExp =
  /(\+)?(977)?-?(980|981|982|984|985|986|974|975|972|963|961|962|988)[0-9]{7}/;
const mailRegExp =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const areaRegExp = /^[a-zA-Z]+(?:[\s-][a-zA-Z]+)*$/;

const schema = Yup.object().shape({
  fullName: Yup.string()
    .min(2, "*Name must have at least 2 characters")
    .matches(nameRegExp, "*Please enter a valid name")
    .max(100, "*Names can't be longer than 100 characters")
    .required("*Name is required"),
  email: Yup.string()
    .email("*Must be a valid email address")
    .matches(mailRegExp, "*Please enter a valid email")
    .max(100, "*Email must be less than 100 characters")
    .required("*Email is required"),
  phone: Yup.string()
    .matches(phoneRegExp, "*Phone number is not valid")
    .required("*Phone number required"),
  area: Yup.string()
    .min(3, "*Area must have at least 3 characters")
    .matches(areaRegExp, "*Please enter a valid area")
    .max(100, "*Area names can't be longer than 100 characters")
    .required("*Area is required"),
});

export default function Confirm() {
  const query = useRouteQuery();
  let { bookId } = useParams();
  if (!bookId) {
    bookId = query.get("bookId");
  }

  const [book, setBook] = useState({});

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [cover, setCover] = useState("");

  useEffect(() => {
    const getBook = async () => {
      const res = await axios.get("/book/buy/" + bookId);
      setBook(res.data.data);
      console.log(res.data);
      setTitle(res.data?.data?.title);
      setPrice(res.data?.data?.price);
      setCover(res.data?.data?.cover);
    };
    getBook();
  }, [bookId]);

  const navigate = useNavigate();
  const { mutate, isLoading } = useMutation(
    async (values) => axios.post("/order/new", values),
    {
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          toast.success(data.data.message);
          navigate(`/`);
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

    mutate(v);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-5">
            <Formik
              validationSchema={schema}
              onSubmit={handleSubmit}
              initialValues={{
                fullName: "",
                email: "",
                phone: "",
                city: "Kathmandu",
                area: "",
                bookName: "",
                price: "",
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
                    <Col className="form-container">
                      {/* <div>
                  <h1>Reader's Buffet</h1>
                </div> */}

                      <Form noValidate onSubmit={handleSubmit}>
                        <Form.Group className="m-3" controlId="formBasicName">
                          <Form.Label>Full Name</Form.Label>
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

                        {/* For passing book id and price */}

                        {/* <Form.Group className="m-3" controlId="bookId">
                          <Form.Control
                            readOnly
                            type="text"
                            name="bookId"
                            value={bookId}
                          />
                        </Form.Group> */}

                        <Form.Group className="m-3" controlId="price">
                          <Form.Control
                            
                            type="text"
                            name="price"
                            onChange={handleChange}

                            value={price}

                          />
                        </Form.Group>

                        <Form.Group className="m-3" controlId="bookName">
                          <Form.Control
                            
                            
                            type="text"
                            name="bookName"
                            onChange={handleChange}

                            value={title}

                          />
                        </Form.Group>



                        <Form.Group className="m-3" controlId="formBasicEmail">
                          <Form.Label>Email</Form.Label>

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

                        <Form.Group
                          className="m-3"
                          controlId="formBasicPhoneNumber"
                        >
                          <Form.Label>Mobile Number</Form.Label>

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

                        <Form.Group className="m-3" controlId="formBasicCity">
                          <Form.Label>City</Form.Label>
                          <Form.Select aria-label="City Selection">
                            <option value={values.city}>Kathmandu</option>
                          </Form.Select>

                          <Form.Text className="text-muted">
                            *We are limited to Kathmandu at the moment.
                          </Form.Text>
                        </Form.Group>

                        <Form.Group className="m-3" controlId="formBasicArea">
                          <Form.Label>Area</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Baneshwor/Koteshwor/Ratnapark"
                            name="area"
                          
                            value={values.area}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={!!errors.area}
                          />
                          {touched.area && errors.area && (
                            <Form.Control.Feedback type="invalid">
                              {errors.area}
                            </Form.Control.Feedback>
                          )}
                        </Form.Group>

                        <div className=" m-3">
                          <Button
                            variant="primary"
                            type="submit"
                            disabled={!isValid || isLoading}
                          >
                            {isLoading ? "Continuing..." : "Continue"}
                          </Button>
                        </div>
                      </Form>
                    </Col>
                  </Row>
                </div>
              )}
            </Formik>
          </div>
          <div className="col-md-5">
            <div className="something">
              <Card className={`overflow-hidden`} id="product">
                <div className="img-cont ">
                  <Card.Img
                    variant="top"
                    src={process.env.REACT_APP_BASE_API + cover}
                  />
                </div>
                <Card.Body>
                  <Card.Title>{title}</Card.Title>
                  <Card.Text>Rs. {price}</Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
