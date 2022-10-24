import {
  QueryClient,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { Field, Form as FormikForm, Formik } from "formik";
import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Form,
  InputGroup,
  Modal,
} from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CreateCategoryModal from "./CreateCategoryModal";
import { useDispatch } from "react-redux";
import { setUser } from "../redux/slices/authSlice";
import { fetchCurrentUser } from "../utils/fetchCurrentUser";
import { useQueries } from "@tanstack/react-query";

export default function AddPost() {
  const dispatch = useDispatch();

  const [showCreateCat, setShowCreateCat] = useState(false);
  const initialValues = {
    title: "",
    category: "",
    description: "",
    photo: null,
  };
  const handleClose = () => setShowCreateCat(false);
  const handleShow = () => setShowCreateCat(true);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const getCategories = async () => axios.get("/category");

  //fetchCurrentUser
  const [userResult, catResult] = useQueries({
    queries: [
      {
        queryKey: ["current-user", 1],
        queryFn: fetchCurrentUser,
        onSuccess: (data) => {
          if (data.status === 200) {
            dispatch(setUser(data.data.data));
          }
        },
        onError: (error) => {
          console.log(error);
        },
      },
      {
        queryKey: ["all-categories", 2],
        queryFn: getCategories,
        onSuccess: (data) => {
          if (data.status === 200) {
          }
        },
        onError: (error) => {
          console.log(error);
        },
      },
    ],
  });


  // add post
  const { mutate } = useMutation((values) => axios.post("/blog/new", values), {
    onSuccess: (data) => {
      if (data.status === 200 || data.status === 201) {
        toast.success("Post created successfully");
        navigate("/blog");

      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.set("title", values.title);
    formData.set("category", values.category);
    formData.set("description", values.description);
    formData.set("photo", values.photo);
    formData.set("username", userResult.data.data.data.username);
    mutate(formData);


  };

  
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {(props) => (
        <Container className="py-3">
          <Card className="w-50 p-3 mx-auto h-auto">
            <h2 className="text-center"> Create Post</h2>
            <hr />
            <FormikForm className="w-100 mx-auto">
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Field name="title">
                  {({ field }) => (
                    <Form.Control
                      type="text"
                      placeholder="Enter post title"
                      {...field}
                    />
                  )}
                </Field>
                <Form.Text className="text-muted">
                  Enter the title of the post here.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="category">
                <Form.Label>Select a category</Form.Label>
                <Field name="category">
                  {({ field }) => (
                    <Form.Select aria-label="Default select example" {...field}>
                      <option>Select a category</option>
                      {catResult?.data?.data?.map((c) => (
                        <option value={c._id}>{c.name}</option>
                      ))}
                    </Form.Select>
                  )}
                </Field>
                <Form.Text className="text-muted">
                  Didn't find a relevant category in the above list? Try
                  creating a new Category from{" "}
                  <b
                    role="button"
                    className="text-primary"
                    onClick={handleShow}
                  >
                    here
                  </b>
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="photo">
                <Form.Label>Cover image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={(e) => {
                    props.setFieldValue("photo", e.target.files[0]);
                  }}
                />
                <Form.Text className="text-muted">
                  Upload post's cover image
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Field name="description">
                  {({ field }) => (
                    <Form.Control
                      type="text"
                      as="textarea"
                      rows={5}
                      placeholder="Tell your story here..."
                      {...field}
                    />
                  )}
                </Field>
              </Form.Group>
              <LinkContainer to="/">
                <Button variant="secondary">Cancel</Button>
              </LinkContainer>
              <Button variant="primary" type="submit" className="ms-2">
                Create
              </Button>
            </FormikForm>
          </Card>
          <CreateCategoryModal show={showCreateCat} handleClose={handleClose} />
        </Container>
      )}
    </Formik>
  );
}
