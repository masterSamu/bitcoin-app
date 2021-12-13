import React, { useState, useEffect } from "react";
import * as priceFunctions from "../functions/PriceFunctions";
import TwoValueCard from "./TwoValueCard";

import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

export default function DataCards(props) {
  const data = props.priceData;
  const volumeData = props.totalVolumes;
  const currency = props.currency;
  const cryptoCurrency = props.cryptoCurrency;
  const [decreasingDates, setDecreasingDates] = useState([]);
  const [lowestPrice, setLowestPrice] = useState({});
  const [highestPrice, setHighestPrice] = useState({});
  const [highestVolume, setHighestVolume] = useState({});
  const [lowestPriceDate, setLowestPriceDate] = useState(null);
  const [highestPriceDate, setHighestPriceDate] = useState(null);

  useEffect(() => {
    if (data.length > 0) {
      setDecreasingDates(priceFunctions.getMostDecreasingDatesInRow(data));
      setLowestPrice(priceFunctions.getBestBuyingDate(data));
      setHighestPrice(priceFunctions.getBestSellingDate(data));
    }
  }, [data]);

  useEffect(() => {
    if (volumeData.length > 0) {
      setHighestVolume(priceFunctions.extractHighestVolume(volumeData));
    }
  }, [volumeData]);

  useEffect(() => {
    if (decreasingDates.length > 0) {
      setLowestPriceDate(decreasingDates[0].date);
      setHighestPriceDate(decreasingDates[decreasingDates.length - 1].date);
    }
  }, [decreasingDates]);

  return (
    <Card style={cardStyle}>
      <Card.Header style={cardHeaderStyle}>
        <Card.Title style={cardTitleStyle}>
          <h2>
            {cryptoCurrency.charAt(0).toUpperCase() + cryptoCurrency.slice(1)}
          </h2>
        </Card.Title>
      </Card.Header>
      <Card.Body style={cardBodyStyle}>
        <Row>
          <h3>Decreased dates in row</h3>
          <Col style={labelColStyle}>
            <label style={labelStyle}>Dates</label>
          </Col>
          <Col style={valueColStyle}>
            <span style={labelStyle}>{decreasingDates.length}</span>
          </Col>
        </Row>
        <Row>
          <Col style={labelColStyle}>
            <label style={labelStyle}>Start date</label>
          </Col>
          <Col style={valueColStyle}>
            <span style={labelStyle}>{lowestPriceDate}</span>
          </Col>
        </Row>
        <Row>
          <Col style={labelColStyle}>
            <label style={labelStyle}>End date</label>
          </Col>
          <Col style={valueColStyle}>
            <span style={labelStyle}>{highestPriceDate}</span>
          </Col>
        </Row>

        <hr></hr>
        <Row>
          <h3>Best buying price</h3>
          <Col style={labelColStyle}>
            <label style={labelStyle}>Date</label>
          </Col>
          <Col style={valueColStyle}>
            <span style={labelStyle}>{lowestPrice.date}</span>
          </Col>
        </Row>

        <Row>
          <Col style={labelColStyle}>
            <label style={labelStyle}>Price</label>
          </Col>
          <Col style={valueColStyle}>
            <span style={labelStyle}>
              {lowestPrice.price} {currency}
            </span>
          </Col>
        </Row>

        <hr></hr>
        <Row>
          <h3>Best selling price</h3>
          <Col style={labelColStyle}>
            <label style={labelStyle}>Date</label>
          </Col>
          <Col style={valueColStyle}>
            <span style={labelStyle}>{lowestPrice.date}</span>
          </Col>
        </Row>

        <Row>
          <Col style={labelColStyle}>
            <label style={labelStyle}>Price</label>
          </Col>
          <Col style={valueColStyle}>
            <span style={labelStyle}>
              {lowestPrice.price} {currency}
            </span>
          </Col>
        </Row>
        <hr></hr>
        <Row>
          <h3>Highest trading volume</h3>
          <Col style={labelColStyle}>
            <label style={labelStyle}>Date</label>
          </Col>
          <Col style={valueColStyle}>
            <span style={labelStyle}>{highestVolume.date}</span>
          </Col>
        </Row>
        <Row>
          <Col style={labelColStyle}>
            <label style={labelStyle}>Volume</label>
          </Col>
          <Col style={valueColStyle}>
            <span>
              {highestVolume.volume} {currency}
            </span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
}

const cardStyle = {
  minWidth: "260px",
  maxWidth: "700px",
  width: "100%",
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
  fontSize: "1.2rem",
};

const labelStyle = {
  fontSize: "1.2rem",
  marginRight: "1rem",
};

const cardBodyStyle = {
  fontSize: "1.2rem",
};

const labelColStyle = {
  minWidth: "90px",
  maxWidth: "130px",
};

const valueColStyle = {
  display: "flex",
  justifyContent: "flex-end",
};
