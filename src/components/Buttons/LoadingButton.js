import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default function LoadingButton(props) {
  const text = props.text;

  return (
    <Button type="submit" variant="secondary" disabled style={dateInputBtn}>
      <Spinner
        animation="border"
        style={spinnerStyle}
        aria-label="loading icon"
      ></Spinner>
      {text}
    </Button>
  );
}

const dateInputBtn = {
  minWidth: "120px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "fit-content",
  backgroundColor: "#FFFFFF",
  color: "#000000",
  borderColor: "#3d3d3d",
  borderWidth: 2
};

const spinnerStyle = {
  marginRight: 5,
  height: 20,
  width: 20,
  fontSize: "0.65rem",
  color: "#3d3d3d",
}

