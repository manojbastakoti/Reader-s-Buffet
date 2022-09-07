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
import CreateGenreModal from "./CreateGenreModal";

export default function AddBook() {
  const [showCreateGenre, setShowCreateGenre] = useState(false);
  const initialValues = {
    title: "",
    price: 0,
    author: "",
    genre: "",
    description: "",
    publishedDate: "",
    cover: null,
  };
  const handleClose = () => setShowCreateGenre(false);
  const handleShow = () => setShowCreateGenre(true);
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  // fetch genres
  const {
    data: genre,
    isLoading,
    isError,
  } = useQuery(["genre"], async () => axios.get("/genre"), {
    onSuccess: (data) => {
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  // add book
  const { mutate } = useMutation((values) => axios.post("/book/new", values), {
    onSuccess: (data) => {
      console.log(data);
      if (data.status === 200 || data.status === 201) {
        toast.success("Book added successfully");
        queryClient.invalidateQueries("my-books");
        navigate("/profile");
      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message);
    },
  });
  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.set("title", values.title);
    formData.set("price", values.price);
    formData.set("author", values.author);
    formData.set("genre", values.genre);
    formData.set("description", values.description);
    formData.set("publishedDate", values.publishedDate);
    formData.set("cover", values.cover);
    mutate(formData);
  };

  if (isLoading) return <h2>Loading...</h2>;
  if (isError) return <h2>Something went wrong. Try reloading the page </h2>;

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      enableReinitialize
    >
      {(props) => (
        <Container className="py-3">
          <Card className="w-50 p-3 mx-auto h-auto">
            <h2 className="text-center"> Add book</h2>
            <hr />
            <FormikForm className="w-100 mx-auto">
              <Form.Group className="mb-3" controlId="title">
                <Form.Label>Title</Form.Label>
                <Field name="title">
                  {({ field }) => (
                    <Form.Control
                      type="text"
                      placeholder="Enter book title"
                      {...field}
                    />
                  )}
                </Field>
                <Form.Text className="text-muted">
                  Enter the title of the book here.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="price">
                <Form.Label>Price</Form.Label>
                <Field name="price">
                  {({ field }) => (
                    <Form.Control
                      type="number"
                      placeholder="Enter price here"
                      {...field}
                    />
                  )}
                </Field>
              </Form.Group>

              <Form.Group className="mb-3" controlId="author">
                <Form.Label>Author</Form.Label>
                <Field name="author">
                  {({ field }) => (
                    <Form.Control
                      type="text"
                      placeholder="Enter author name here"
                      {...field}
                    />
                  )}
                </Field>
              </Form.Group>

              <Form.Group className="mb-3" controlId="genre">
                <Form.Label>Select a genre</Form.Label>
                <Field name="genre">
                  {({ field }) => (
                    <Form.Select aria-label="Default select example" {...field}>
                      <option>Select a genre</option>
                      {genre?.data?.data?.map((g) => (
                        <option value={g._id}>{g.name}</option>
                      ))}
                    </Form.Select>
                  )}
                </Field>
                <Form.Text className="text-muted">
                  Didn't find a relevant Genre in the above list? Try creating a
                  new Genre from{" "}
                  <b
                    role="button"
                    className="text-primary"
                    onClick={handleShow}
                  >
                    here
                  </b>
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="pubDate">
                <Form.Label>Published Date</Form.Label>
                <Field name="publishedDate">
                  {({ field }) => (
                    <Form.Control
                      type="date"
                      placeholder="Enter book's published date"
                      {...field}
                    />
                  )}
                </Field>
              </Form.Group>
              <Form.Group className="mb-3" controlId="cover">
                <Form.Label>Cover image</Form.Label>
                <Form.Control
                  type="file"
                  accept="image/jpg, image/jpeg, image/png"
                  onChange={(e) => {
                    props.setFieldValue("cover", e.target.files[0]);
                  }}
                />
                <Form.Text className="text-muted">
                  Upload book's cover image
                </Form.Text>
              </Form.Group>
              <Form.Group className="mb-3" controlId="description">
                <Form.Label>Description</Form.Label>
                <Field name="description">
                  {({ field }) => (
                    <Form.Control
                      type="text"
                      as="textarea"
                      placeholder="Enter description about the book here"
                      {...field}
                    />
                  )}
                </Field>
              </Form.Group>
              <LinkContainer to="/">
                <Button variant="secondary">Cancel</Button>
              </LinkContainer>
              <Button variant="primary" type="submit" className="ms-2">
                Add book
              </Button>
            </FormikForm>
          </Card>
          <CreateGenreModal show={showCreateGenre} handleClose={handleClose} />
        </Container>
      )}
    </Formik>
  );
}
