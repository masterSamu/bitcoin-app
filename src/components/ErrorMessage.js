import React, { useState } from "react";
import ToastContainer from "react-bootstrap/ToastContainer";
import Toast from "react-bootstrap/Toast";

export default function ErrorMessage(props) {
  const [show, setShow] = useState(true);
  const text = props.text;

  return (
    <ToastContainer style={containerStyle}>
      <Toast onClose={() => setShow(false)} show={show}>
        <Toast.Header style={titleStyle}>
          <i
            class="bi bi-exclamation-triangle"
            style={{ marginRight: 15, fontSize: "2rem" }}
          ></i>
          <span className="me-auto">Error</span>
        </Toast.Header>
        <Toast.Body>{text}</Toast.Body>
      </Toast>
    </ToastContainer>
  );
}

const containerStyle = {
  margin: 10,
};
const titleStyle = {
  color: "red",
  fontSize: "1.5rem",
};
