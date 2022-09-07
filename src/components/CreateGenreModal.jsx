import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useRef } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { toast } from "react-toastify";

export default function CreateGenreModal({ show, handleClose }) {
  const queryClient = useQueryClient();
  const [genre, setGenre] = React.useState("");
  const { mutate, isLoading } = useMutation(
    (value) => axios.post("/genre/new", { name: value }),
    {
      onSuccess: (data) => {
        if (data.status === 201 || data.status === 200) {
          queryClient.invalidateQueries("genre");
          toast.success("Genre added successfully");
          handleClose();
        }
      },
      onError: (error) => {
        toast.error(error.response.data.message);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    mutate(genre);
  };

  return (
    <form>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create a new Genre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Genre Name</Form.Label>

            <Form.Control
              placeholder="(eg. Fiction)"
              aria-label="Genre name"
              aria-describedby="basic-addon2"
              value={genre}
              onChange={(e) => setGenre(e.target.value)}
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
            {isLoading ? "Creating genre" : "Create Genre"}
          </Button>
        </Modal.Footer>
      </Modal>
    </form>
  );
}
