import React, { useState, useEffect } from "react";

import BearishDays from "./components/BearishDays";
import TradingVolumes from "./components/TradingVolumes";
import BuyingTime from "./components/BuyingTime";
import * as DateFunctions from "./functions/DateFunctions";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [startDate, setStartDate] = useState(DateFunctions.getYesterday());
  const [endDate, setEndDate] = useState(DateFunctions.getToday());
  const [daysPrice, setDaysPrice] = useState(0);
  const [downloadingData, setDownloadingData] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  const [priceData, setPriceData] = useState([]);
  const [totalVolumes, setTotalVolumes] = useState([]);

  useEffect(() => {
    downlaodHistoricalData();
  }, []);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  function downlaodHistoricalData() {
    let fromDate = DateFunctions.convertDateToUnixTimestamp(startDate);
    let toDate = DateFunctions.convertDateToUnixTimestamp(endDate) + 3600; //3600 = 1hour
    let currency = "eur";
    let url = `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=${currency}&from=${fromDate}&to=${toDate}`;

    const axios = require("axios");
    setDownloadingData(true);
    axios
      .get(url)
      .then(function (response) {
        setPriceData(response.data.prices);
        setTotalVolumes(response.data.total_volumes);
        setDownloadError(false);
      })
      .catch(function (error) {
        console.log(error);
        setDownloadError(true);
      })
      .then(function () {
        setDownloadingData(false);
      });
  }

  return (
    <main>
      <Container style={mainContainerStyle}>
        <Form style={dateFormRowStyle}>
          <Form.Control
            type="date"
            defaultValue={startDate}
            onChange={handleStartDateChange}
            min="1970-01-01"
            style={dateInputStyle}
          />

          <Form.Control
            type="date"
            defaultValue={endDate}
            onChange={handleEndDateChange}
            min="1970-01-01"
            style={dateInputStyle}
          />

          {downloadingData ? (
            <Button variant="primary" disabled style={dateInputBtn}>
              <Spinner
                animation="border"
                style={{ marginRight: 5, height: 20, width: 20 }}
              ></Spinner>
              Loading...
            </Button>
          ) : (
            <Button
              variant="primary"
              onClick={downlaodHistoricalData}
              style={dateInputBtn}
            >
              Refresh
            </Button>
          )}
        </Form>
        <Row>
          <p>Starting date: {startDate}</p>
          <p>End date: {endDate}</p>
          {downloadError ? (
            <p>Couldn't dowload the data, try again later.</p>
          ) : (
            <p></p>
          )}
        </Row>
        <Row>
          <BearishDays
            priceData={priceData}
            startDate={startDate}
            endDate={endDate}
          />
        </Row>
        <Row>
          <TradingVolumes totalVolumes={totalVolumes} />
        </Row>
        <Row>
          <BuyingTime priceData={priceData} />
        </Row>
      </Container>
    </main>
  );
}

export default App;

const mainContainerStyle = {};

const dateFormRowStyle = {
  display: "flex",
  justfyContent: "space-between",
};

const dateInputStyle = {
  width: "200px",
  marginRight: 20,
};

const dateInputBtn = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
