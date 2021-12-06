import React, { useState, useEffect } from "react";

import * as DateFunctions from "./functions/DateFunctions";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import DataCards from "./components/DataCards";
import SelectedDatesCard from "./components/selectedDatesCard";

function App() {
  const [startDate, setStartDate] = useState(DateFunctions.getYesterday());
  const [endDate, setEndDate] = useState(DateFunctions.getToday());
  const [daysPrice, setDaysPrice] = useState(0);
  const [downloadingData, setDownloadingData] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  const [priceData, setPriceData] = useState([]);
  const [totalVolumes, setTotalVolumes] = useState([]);
  const [currency, setCurrency] = useState("€");

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
            <SelectedDatesCard startDate={startDate} endDate={endDate} downloadError={downloadError} />

        </Row>
        <Container style={dataContainer}>
          <DataCards
            priceData={priceData}
            startDate={startDate}
            endDate={endDate}
            currency={currency}
            totalVolumes={totalVolumes}
          />
        </Container>
      </Container>
    </main>
  );
}

export default App;

const mainContainerStyle = {
  padding: 0,
  margin: 0
};

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

const dataContainer = {
  display: "flex",
  justifyContent: "space-evenly",
}