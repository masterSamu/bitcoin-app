import React, { useState, useEffect } from "react";

import * as DateFunctions from "./functions/DateFunctions";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";

import DataCards from "./components/DataCards";
import DateSelection from "./components/DateSelection";
import ErrorCard from "./components/ErrorCard";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [cryptoCurrency, setCryptoCurrency] = useState(null);
  const [startDate, setStartDate] = useState(
    DateFunctions.getDayBeforeYesterday()
  );
  const [endDate, setEndDate] = useState(DateFunctions.getYesterday());
  const [downloadingData, setDownloadingData] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  const [priceData, setPriceData] = useState([]);
  const [totalVolumes, setTotalVolumes] = useState([]);
  const [currency, setCurrency] = useState(null);
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    setCryptoCurrency("bitcoin");
    setCurrency("eur");
  }, []);

  const downlaodHistoricalData = () => {
    let fromDate = DateFunctions.convertDateToUnixTimestamp(startDate);
    let toDate = DateFunctions.convertDateToUnixTimestamp(endDate) + 3600; //3600 = 1hour
    let crypto = cryptoCurrency.toLowerCase();
    let url = `https://api.coingecko.com/api/v3/coins/${crypto}/market_chart/range?vs_currency=${currency}&from=${fromDate}&to=${toDate}`;

    const axios = require("axios");
    setDownloadingData(true);
    axios
      .get(url, {timeout: 15000})
      .then(function (response) {
        setPriceData(response.data.prices);
        setTotalVolumes(response.data.total_volumes);
        setDownloadError(false);
      })
      .catch(function (error) {
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
                    cryptoCurrency={cryptoCurrency}
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
