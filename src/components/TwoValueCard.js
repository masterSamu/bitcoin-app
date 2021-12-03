import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function TwoValueCard(props) {
  const title = props.title;
  const date = props.date;
  const currency = props.currency;
  const value = props.value;

  return (
    <Card style={cardStyle}>
      <Card.Header style={cardHeaderStyle}>
        <h2 style={cardTitleStyle}>{title}</h2>
      </Card.Header>
      <Card.Body>
        <Card.Text style={{fontSize: "1.2rem"}}>
          <Container style={cardTextContainerStyle}>
            <span style={labelStyle}>
              Date:
            </span>
            <span>{date}</span>
          </Container>
          <Container style={cardTextContainerStyle}>
            <span style={labelStyle}>
                Price:
            </span>
            <span>{value} {currency}</span>
          </Container>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const cardStyle = {
  width: "fit-content",
  padding: 0,
  margin: 20,
};

const cardTitleStyle = {
  fontSize: "1.2rem",
};

const cardHeaderStyle = {
  backgroundColor: "#FFE05D",
  color: "#303030",
};

const cardTextContainerStyle = {
  padding: 0,
  display: "flex",
  justifyContent: "space-between",
  marginBottom: 5,
};

const labelStyle = {
    marginRight: "0.5rem"
}
