import React, { useState, useEffect } from "react";

import BearishDays from "./components/BearishDays";
import TradingVolumes from "./components/TradingVolumes";
import BuyingTime from "./components/BuyingTime";
import * as DateFunctions from "./functions/DateFunctions";

import 'bootstrap/dist/css/bootstrap.min.css';
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

function App() {
  const [startDate, setStartDate] = useState(DateFunctions.getYesterday());
  const [endDate, setEndDate] = useState(DateFunctions.getToday());
  const [daysPrice, setDaysPrice] = useState(0);
  const [downloadingData, setDownloadingData] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  const [priceData, setPriceData] = useState([]);
  const [totalVolumes, setTotalVolumes] = useState([]);

  useEffect(() => {
    downlaodCryptoData();
  }, []);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  function downlaodCryptoData() {
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
        console.log("axios call finished.");
        setDownloadingData(false);
      });
  }

  return (
    <main>
      <Container>
        <Container>
          <Form style={dateInputStyle}>
            <Form.Control
              type="date"
              defaultValue={startDate}
              onChange={handleStartDateChange}
              min="1970-01-01"
            />
            <Form.Control
              type="date"
              defaultValue={endDate}
              onChange={handleEndDateChange}
              min="1970-01-01"
            />
          </Form>
          {downloadingData ? <p>Loading..</p> : <p></p>}

          <p>Starting date: {startDate}</p>
          <p>End date: {endDate}</p>
          <Button variant="primary" onClick={downlaodCryptoData}>Refresh data</Button>
          {downloadError ? (
            <p>Couldn't dowload the data, try again later.</p>
          ) : (
            <p></p>
          )}
        </Container>
        <Container>
          <BearishDays
            priceData={priceData}
            startDate={startDate}
            endDate={endDate}
          />
          <TradingVolumes totalVolumes={totalVolumes} />
          <BuyingTime priceData={priceData} />
        </Container>
      </Container>
    </main>
  );
}

export default App;

const dateInputStyle = {
  display: 'flex',
  justfyContent: "space-between",
  width: "50%"
}
