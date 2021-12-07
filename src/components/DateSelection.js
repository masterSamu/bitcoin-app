import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import LoadingButton from "./Buttons/LoadingButton";

export default function DateSelection(props) {
  const startDate = props.startDate;
  const endDate = props.endDate;
  const downloading = props.downloadingData;

  const handleStartDateChange = (e) => {
    props.setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    props.setStartDate(e.target.value);
  };

  const refreshData = (e) => {
    e.preventDefault();
    props.downlaodHistoricalData();
  };

  return (
      <Card style={cardStyle}>
        <Card.Header style={cardHeaderStyle}>
          <h2>Select date range</h2>
        </Card.Header>
        <Card.Body style={cardTextStyle}>
          <Form style={dateFormRowStyle} onSubmit={refreshData}>
            <Row style={{ width: "100%" }}>
              <Col md={5} style={formColStyle}>
                <Form.Label style={labelStyle}>Start date:</Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={startDate}
                  onChange={handleStartDateChange}
                  min="1970-01-01"
                  style={dateInputStyle}
                />
              </Col>
              <Col md={5} style={formColStyle}>
                <Form.Label style={labelStyle}>End date:</Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={endDate}
                  onChange={handleEndDateChange}
                  min="1970-01-01"
                  style={dateInputStyle}
                />
              </Col>
              <Col md={1} style={btnContainer}>
                {downloading ? (
                  <LoadingButton text="Loading.." />
                ) : (
                  <Button type="submit" variant="primary">
                    Refresh
                  </Button>
                )}
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
  );
}

const cardStyle = {
    minWidth: "260px",
}
const cardHeaderStyle = {
  backgroundColor: "#FFE05D",
  color: "#303030",
};

const textContainerStyle = {
  display: "flex",
  justifyContent: "space-between",
};

const labelStyle = {
  marginRight: 10,
};

const cardTextStyle = {
  fontSize: "1.2rem",
};

const dateFormRowStyle = {
  display: "flex",
  justfyContent: "space-evenly",
};

const formColStyle = {
  margin: 5,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  wordWrap: "no-wrap"
};

const btnContainer = {
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  margin: 5
};

const dateInputStyle = {
  width: "175px",
  marginRight: 20,
  display: "inline",
};
