import React from "react";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

export default function TwoValueCard(props) {
  const title = props.title;
  const date = props.date;
  const value1 = props.value1;
  const value2 = props.value2;
  const value3 = props.value3;
  const label1 = props.label1;
  const label2 = props.label2;

  return (
    <Card style={cardStyle}>
      <Card.Header style={cardHeaderStyle}>
        <h2 style={cardTitleStyle}>{title}</h2>
      </Card.Header>
      <Card.Body>
          <Container style={cardTextContainerStyle}>
            <span style={labelStyle}>
              {label1}
            </span>
            <span>{value1}</span>
          </Container>
          <Container style={cardTextContainerStyle}>
            <span style={labelStyle}>
                {label2}
            </span>
            <Container style={value3.length > 3 ? value3IsLongerThan3 : value3IsShorterThan4}>
              <span style={{marginRight: 10}}>{value2}</span>
              <span>{value3}</span>
            </Container>
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

const value3IsShorterThan4 = {
  display: "flex",
  justifyContent: "flex-end",
  padding: 0,
}

const value3IsLongerThan3 = {
  display: "flex",
  justifyContent: "flex-end",
  flexDirection: "column",
  padding: 0,
  
}