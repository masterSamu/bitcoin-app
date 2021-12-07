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
import DateSelection from "./components/DateSelection";
import ErrorMessage from "./components/ErrorMessage";

function App() {
  const [startDate, setStartDate] = useState(DateFunctions.getYesterday());
  const [endDate, setEndDate] = useState(DateFunctions.getToday());
  const [downloadingData, setDownloadingData] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  const [priceData, setPriceData] = useState([]);
  const [totalVolumes, setTotalVolumes] = useState([]);
  const [currency, setCurrency] = useState("€");

  useEffect(() => {
    downlaodHistoricalData();
  }, []);

  const downlaodHistoricalData = () => {
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
        setDownloadError(true);
      })
      .catch(function (error) {
        console.log(error);
        setDownloadError(true);
      })
      .then(function () {
        setDownloadingData(false);
      });
  };


  return (
    <main>
      <Container style={mainContainerStyle}>
        <Container>
          <DateSelection
            startDate={startDate}
            endDate={endDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            downloadingData={downloadingData}
            downlaodHistoricalData={downlaodHistoricalData}
          />
          </Container>
        <Container style={dataContainer}>
          {downloadError ? (
            <ErrorMessage text="Unable to load data, try again later." />
          ) : (
            <DataCards
              priceData={priceData}
              startDate={startDate}
              endDate={endDate}
              currency={currency}
              totalVolumes={totalVolumes}
            />

          )}
        </Container>
      </Container>
    </main>
  );
}

export default App;

const mainContainerStyle = {
  padding: 0,
  margin: 0,
};

const dataContainer = {
  display: "flex",
  justifyContent: "space-evenly",
};
