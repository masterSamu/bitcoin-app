import React from "react";
import Card from "react-bootstrap/Card";

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
        <Card.Text style={cardTextStyle}>
          <span style={{ fontSize: "2.5rem" }}>{icon}</span>
          <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            {value}
          </span>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

const cardTitleStyle = {
  fontSize: "1.2rem",
};

const cardStyle = {
  width: "fit-content",
  padding: 0,
  margin: 20,
};

const cardHeaderStyle = {
  backgroundColor: "#FFE05D",
  color: "#303030",
};

const cardTextStyle = {
  display: "flex",
  justifyContent: "space-between",
};
