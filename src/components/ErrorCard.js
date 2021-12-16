import React from "react";
import Card from "react-bootstrap/Card";

export default function ErrorCard(props) {
  const title = props.title;
  const text = props.text;

  return (
    <Card style={cardStyle}>
      <Card.Header style={cardHeaderStyle}>
        <i
          className="bi bi-exclamation-triangle"
          style={iconStyle}
        ></i>
        <h2 style={cardTitleStyle}>{title}</h2>
      </Card.Header>
      <Card.Body>
            <Card.Text>{text}</Card.Text>
      </Card.Body>
    </Card>
  );
}

const cardStyle = {
  minWidth: "260px",
  maxWidth: "700px",
  padding: 0,
  marginBottom: 10,
  marginTop: 10,
};

const cardTitleStyle = {
  fontSize: "1.6rem",
  marginBottom: 0,
};

const iconStyle = {
    fontSize: "1.8rem",
    marginRight: 15,
}

const cardHeaderStyle = {
  backgroundColor: "#3d3d3d",
  color: "#FFFFFF",
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "flex-start",
};