import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default function SmallCard(props) {
  const title = props.title;
  const data = props.value;
  const icon = props.icon;
  let startDate = {};
  let endDate = {};

  if (data.length > 0) {
    startDate = data[0];
    endDate = data[data.length - 1];
  }

  return (
    <Card style={cardStyle}>
      <Card.Header style={cardHeaderStyle}>
        <h2 style={cardTitleStyle}>{title}</h2>
      </Card.Header>
      <Card.Body>
        <Container style={cardTextStyle}>
          <span style={{ fontSize: "2.5rem" }}>{icon}</span>
          <span style={{ fontSize: "2.5rem", fontWeight: "bold" }}>
            {data.length}
            <span
              style={{
                fontSize: "1.2rem",
                fontWeight: "normal",
                marginLeft: 2,
              }}
            >
              days
            </span>
          </span>
        </Container>
        {data.length > 0 ? (
          <Container style={cardTextStyle}>
            <span style={textSpanStyle}>Dates:</span>
            <span style={textSpanStyle}>{startDate.date} - {endDate.date}</span>
            
          </Container>
        ) : null}
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

const cardHeaderStyle = {
  backgroundColor: "#3d3d3d",
  color: "#FFFFFF",
};

const cardTitleStyle = {
  fontSize: "1.2rem",
};

const cardTextStyle = {
  display: "flex",
  justifyContent: "space-between",
  padding: 0,
  fontSize: "1.2rem"
};

const textSpanStyle = {

}