import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function TwoValueCard(props) {
  const title = props.title;
  const date = props.date;
  const currency = props.currency;
  const value = props.value;
  const label2 = props.label2;

  return (
    <Card style={cardStyle}>
      <Card.Header style={cardHeaderStyle}>
        <h2 style={cardTitleStyle}>{title}</h2>
      </Card.Header>
      <Card.Body>
          <Container style={cardTextContainerStyle}>
            <span style={labelStyle}>
              Date:
            </span>
            <span>{date}</span>
          </Container>
          <Container style={cardTextContainerStyle}>
            <span style={labelStyle}>
                {label2}:
            </span>
            <span>{value} {currency}</span>
          </Container>
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
  fontSize: "1.2rem",
};

const cardHeaderStyle = {
  backgroundColor: "#3d3d3d",
  color: "#FFFFFF",
};

const cardTextContainerStyle = {
  padding: 0,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginBottom: 5,
  fontSize: "1.2rem"
};

const labelStyle = {
  fontSize: "1.2rem",
    marginRight: "1rem"
}
