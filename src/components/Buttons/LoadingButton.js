import React from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

export default function LoadingButton(props) {
  const text = props.text;

  return (
    <Button type="submit" variant="primary" disabled style={dateInputBtn}>
      <Spinner
        animation="border"
        style={{ marginRight: 5, height: 20, width: 20 }}
      ></Spinner>
      {text}
    </Button>
  );
}

const dateInputBtn = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: "fit-content",
};
