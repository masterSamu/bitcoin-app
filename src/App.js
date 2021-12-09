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
import ErrorCard from "./components/ErrorCard";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [cryptoCurrency, setCryptoCurrency] = useState(null);
  const [startDate, setStartDate] = useState(DateFunctions.getDayBeforeYesterday());
  const [endDate, setEndDate] = useState(DateFunctions.getYesterday());
  const [downloadingData, setDownloadingData] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  const [priceData, setPriceData] = useState([]);
  const [totalVolumes, setTotalVolumes] = useState([]);
  const [currency, setCurrency] = useState("eur");
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setCryptoCurrency("bitcoin")
  }, [])

  const downlaodHistoricalData = () => {
    let fromDate = DateFunctions.convertDateToUnixTimestamp(startDate);
    let toDate = DateFunctions.convertDateToUnixTimestamp(endDate) + 3600; //3600 = 1hour

    let url = `https://api.coingecko.com/api/v3/coins/${cryptoCurrency}/market_chart/range?vs_currency=${currency}&from=${fromDate}&to=${toDate}`;

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
        setDataLoaded(true);
      });
  };

  return (
    <>
      <main>
        <Container style={mainContainerStyle}>
          <header>
            <Header />
          </header>
          <Container style={dataContainer}>
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
            {dataLoaded ? (
              <>
                {downloadError ? (
                  <ErrorCard
                    title="Error"
                    text="Could not download the data, try again later."
                  />
                ) : (
                  <DataCards
                    priceData={priceData}
                    startDate={startDate}
                    endDate={endDate}
                    currency={currency}
                    totalVolumes={totalVolumes}
                  />
                )}
              </>
            ) : null}
          </Container>
        </Container>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
}

export default App;

const mainContainerStyle = {
  padding: 0,
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
};

const dataContainer = {
  display: "flex",
  justifyContent: "center",
  marginBottom: 25,
};
