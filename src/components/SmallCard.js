import React from "react";
import Card from "react-bootstrap/Card";
import Container from 'react-bootstrap/Container';

export default function SmallCard(props) {
  const title = props.title;
  const value = props.value;
  const icon = props.icon;

  return (
    <Card style={cardStyle}>
      <Card.Header style={cardHeaderStyle}>
        <h2 style={cardTitleStyle}>{title}</h2>
      </Card.Header>
      <Card.Body>
        <Container style={cardTextStyle}>
          <span style={{ fontSize: "2.5rem" }}>{icon}</span>
          <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            {value}
          </span>
        </Container>
      </Card.Body>
    </Card>
  );
}

const cardTitleStyle = {
  fontSize: "1.2rem",
};

const cardStyle = {
  minWidth: "260px",
  width: "max-content",
  padding: 0,
  marginBottom: 10,
  marginTop: 10,
};

const cardHeaderStyle = {
  backgroundColor: "#FFE05D",
  color: "#303030",
};

const cardTextStyle = {
  display: "flex",
  justifyContent: "space-between",
};
