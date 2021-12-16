import React from "react";
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
            <Row style={inputRowStyle}>
              <Col style={formColStyle}>
                <Form.Label style={labelStyle}>Start date:</Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={startDate}
                  onChange={handleStartDateChange}
                  min="1970-01-01"
                  max={endDate}
                  style={dateInputStyle}
                />
              </Col>
              <Col style={formColStyle}>
                <Form.Label style={labelStyle}>End date:</Form.Label>
                <Form.Control
                  type="date"
                  defaultValue={endDate}
                  onChange={handleEndDateChange}
                  min="1970-01-01"
                  max={endDate}
                  style={dateInputStyle}
                />
              </Col>
              <Col style={btnContainer}>
                {downloading ? (
                  <LoadingButton text="Loading" />
                ) : (
                  <Button type="submit" variant="secondary" style={btnStyle}>
                    Load
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
    maxWidth: "700px"
}
const cardHeaderStyle = {
  backgroundColor: "#3d3d3d",
  color: "#FFFFFF",
};

const inputRowStyle = {
  display: "flex",
  justifyContent: "space-around"
};

const labelStyle = {
  display: "inline",
  marginRight: 5,
  width: 90,
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
  justifyContent: "center",
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
  borderWidth: 2,
  borderColor: "#000000",
};

const btnStyle = {
  backgroundColor: "#FFFFFF",
  color: "#000000",
  borderColor: "#3d3d3d",
  borderWidth: 2,
  minWidth: "120px",
}