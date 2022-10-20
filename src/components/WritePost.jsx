import React from "react";
import "../styles/WritePost.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import * as Icon from "react-bootstrap-icons";
import Image from "react-bootstrap/Image";

export default function WritePost() {
  return (
    <div className="writePost ">
      <div className="coverImg">
        <Image src="./assets/8.jpg" alt="PostCover" thumbnail fluid />
      </div>

      <Form className="writePostForm">
        <div className="writeFormGroup">
          <Form.Group controlId="coverImage" className="uploadButton mb-3">
            <Form.Label>
              <Icon.PatchPlusFill
                size={36}
                color="green"
                className="fileUploadIcon"
              />
            </Form.Label>
            <Form.Control type="file" style={{ display: "none" }} />
          </Form.Group>
        </div>

        <Form.Group className="writeFormGroup" controlId="postHeading">
          {/* <Form.Label>Enter Post Heading</Form.Label> */}
          <Form.Control
            type="text"
            placeholder="Title"
            autoFocus={true}
            className="writeInput"
          />
        </Form.Group>

        <Form.Group className="writeFormGroup" controlId="postDescription">
          {/* <Form.Label>Enter your story</Form.Label> */}
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Tell your story"
            className="writeInput writeText"
          />
        </Form.Group>

        <Button
          variant="outline-danger"
          className="postSubmitBtn"
          type="submit"
        >
          Publish
        </Button>
      </Form>
    </div>
  );
}
