import React, { useRef, useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../styles/Login.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import * as Icon from "react-bootstrap-icons";
import { LinkContainer } from "react-router-bootstrap";
import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../redux/slices/authSlice";
import jwt_decode from "jwt-decode";

export default function Login({noRedirect}) {

  function handleCallbackResponse(response) {
    console.log("Encoded JWT ID Token:"+response.credential);
    var userObject = jwt_decode(response.credential);
    console.log(userObject);
  }
  useEffect(() => {

    /* global google */
    google.accounts.id.initialize({
      client_id: "816718441777-4e904ha07j3qg13d5gshngl3136n5t9i.apps.googleusercontent.com",
      callback: handleCallbackResponse

      
    });
    
    google.accounts.id.renderButton(
      document.getElementById("buttonDiv"),
      { theme: "filled_blue", size: "large", shape: "rectangular", text: "continue_with", logo_alignment: "left"}  // customization attributes
    );

  }, []);
  const [validated, setValidated] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [credentials, setCredentials] = useState({
    user: "",
    password: "",
  });

  const { mutate, isLoading } = useMutation(
    (values) => axios.post("/user/login", values),
    {
      onMutate: () => {
        toast.loading("Logging in...", {
          toastId: "loginToastId",
        });
      },
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          toast.update("loginToastId", {
            render: data.data.message,
            type: "success",
            isLoading: false,
            autoClose: true,
          });
          dispatch(login(data.data.data.token));
          if (!noRedirect){
          navigate("/");
          }
        }
      },
      onError: (error) => {
        if (error instanceof AxiosError) {
          console.log(error.response.data);
          toast.update("loginToastId", {
            render: error?.response?.data?.message,
            type: "error",
            isLoading: false,
            autoClose: true,
          });
        } else {
          console.log(error);
        }
      },
    }
  );

  const handleChange = (event) => {
    const { name, value } = event.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    setValidated(true);
    mutate(credentials);
  };

  return (
    <>
      <div className="whole">
        <Row>
          <Col xs={10} md={8} lg={4} className="login-container ">
            <h1>Reader's Buffet</h1>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
              <Form.Group className="m-3" controlId="formBasicEmail">
                <Form.Control
                  required
                  type="text"
                  placeholder="Enter username or email"
                  name="user"
                  onChange={handleChange}
                  value={credentials.user}
                />
                {/* <Form.Control.Feedback type="invalid">
                  Please enter your Username or email address
                </Form.Control.Feedback> */}
              </Form.Group>

              <Form.Group className="m-3" controlId="formBasicPassword">
                <Form.Control
                  required
                  type="password"
                  placeholder="Password"
                  name="password"
                  onChange={handleChange}
                  value={credentials.password}
                />
                {/* <Form.Control.Feedback type="invalid">
                  Please enter your password.
                </Form.Control.Feedback> */}
              </Form.Group>
              <div className="d-grid m-3">
                <Button variant="primary" type="submit" disabled={isLoading}>
                  Login
                </Button>
              </div>

              <LinkContainer to="/password-reset">
                <Nav.Link eventKey="link-1"> Forgot password?</Nav.Link>
              </LinkContainer>
            </Form>
            <hr />

            <h5>OR</h5>

            <div className="d-grid m-3">
            <div id="buttonDiv"></div>
              {/* <Button variant="primary">
                <Icon.Google size={20} /> Continue with google
              </Button>{" "} */}
            </div>
            <hr />

            <Row>
              Don't have an account?{" "}
              <LinkContainer to="/register">
                <Nav.Link eventKey="link-1">Sign up</Nav.Link>
              </LinkContainer>
            </Row>
          </Col>
        </Row>
      </div>
    </>
  );
}
