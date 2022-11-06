import React from "react";
import { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import { useNavigate } from "react-router-dom";

export default function SearchBox() {
  const [search, setSearch] = React.useState("");
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/search?q=${search}`);
  };

  useEffect(() => {
    return () => setSearch("");
  }, []);
  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <Form.Control
        type="search"
        placeholder="Search for books..."
        className="me-2"
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button variant="outline-dark" type="submit">
        <Icon.Search size={20} />
      </Button>
    </Form>
  );
}
