import Spinner from "react-bootstrap/Spinner";

function Loading(props) {
  return props.inline ? (
    <div className="w-100 d-flex justify-content-center align-items-center">
      <Spinner animation="border" />
    </div>
  ) : (
    <div
      className="w-100 d-flex justify-content-center align-items-center"
      style={{ height: "50vh" }}
    >
      <Spinner animation="border" />
    </div>
  );
}

export default Loading;
