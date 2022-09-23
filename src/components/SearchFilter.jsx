import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { Formik, Form as FormikForm, Field } from "formik";
import React from "react";
import { Button, Col, Form, Row } from "react-bootstrap";

export default function SearchFilter({ query }) {
  const queryClient = useQueryClient();
  const { data: genre } = useQuery(["genre"], async () => axios.get("/genre"));
  const { mutate } = useMutation(
    async (values) => axios.post("/book/search?q=" + query, values),
    {
      onSuccess: (data) => {
        if (data.status === 200) {
          queryClient.setQueryData(["search", query], data);
        }
      },
    }
  );

  const handleSubmit = (values) => {
    mutate(values);
  };
  return (
    <>
      <h4>Filters</h4>
      <Formik
        initialValues={{
          genre: "",
          minPrice: 0,
          maxPrice: "",
        }}
        onSubmit={handleSubmit}
      >
        <FormikForm>
          <Form.Group className="mb-3" controlId="genre">
            <Form.Label>Filter by genre</Form.Label>
            <Field name="genre">
              {({ field }) => (
                <Form.Select aria-label="Default select example" {...field}>
                  <option value="">All</option>
                  {genre?.data?.data?.map((g) => (
                    <option key={g._id} value={g._id}>
                      {g.name}
                    </option>
                  ))}
                </Form.Select>
              )}
            </Field>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Filter by Price</Form.Label>
            <Row className="g-1">
              <Col>
                <Form.Label>Min</Form.Label>
                <Field type="number" name="minPrice" className="form-control" />
              </Col>
              <Col>
                <Form.Label>Max</Form.Label>
                <Field type="number" name="maxPrice" className="form-control" />
              </Col>
            </Row>
          </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="warning" type="submit">
              Filter
            </Button>
          </div>
        </FormikForm>
      </Formik>
    </>
  );
}
