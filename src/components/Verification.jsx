import { useMutation } from "@tanstack/react-query";
import axios, { AxiosError } from "axios";
import React, { useEffect, useState } from "react";
import { Button, Card, Container, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import useQuery from "../hooks/useQuery";

export default function Verification() {
  const query = useQuery();
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");

  const { mutate } = useMutation(
    (values) => axios.post(`/user/verify`, values),
    {
      onSuccess: (data) => {
        if (data.status === 200 || data.status === 201) {
          toast.success(data.data.message);
          navigate("/login");
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

  const resendOTP = async () => {
    await axios.get(`/user/resend-verification-otp/${query.get("email")}`);
    toast.success("OTP has been sent to your email");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    mutate({ otp, email: query.get("email") });
  };
  useEffect(() => {
    if (!query.get("email")) {
      navigate("/login");
      return;
    }
  }, []);

  return (
    <Container>
      <Card className="mx-auto p-3 my-4">
        <Form onSubmit={handleSubmit}>
          <Form.Text>
            <h1 className="text-center">Verification</h1>
            <p>
              Please enter the verification code sent to your email address{" "}
              <b>{query.get("email")}</b>
            </p>

            <Form.Group controlId="formBasicEmail" className="mb-2">
              <Form.Label>Verification Code</Form.Label>
              <Form.Control
                type="number"
                maxLength={6}
                placeholder="Enter code"
                autoFocus
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
            </Form.Group>
            <Button className="w-100" type="submit">
              Verify
            </Button>
            <hr />

            <p>If you did not receive the code, you can resend it.</p>
            {/* resend button */}
            <Button
              variant="outline-secondary"
              size="sm"
              className="w-100"
              type="button"
              onClick={resendOTP}
            >
              Resend
            </Button>
          </Form.Text>
        </Form>
      </Card>
    </Container>
  );
}
