import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

export default function CreateCategoryModal({ show, handleClose }) {
  const queryClient = useQueryClient();
  const [category, setCategory] = React.useState("");
  const { mutate, isLoading } = useMutation(
    (value) => axios.post("/category/new", { name: value }),
    {
      onSuccess: (data) => {
        if (data.status === 201 || data.status === 200) {
          queryClient.invalidateQueries("category");
          toast.success("Category added successfully");
          handleClose();
        }
      },
      onError: (error) => {
        toast.error(error?.response?.data?.message);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(category);
  };

  return (
    <form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Category Name</Form.Label>

            <Form.Control
              placeholder="(eg. Poem)"
              aria-label="Category name"
              aria-describedby="basic-addon2"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Creating category" : "Create Category"}
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
}
