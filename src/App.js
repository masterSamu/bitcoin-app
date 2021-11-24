import React, { useState, useEffect } from "react";

import BearishDays from "./components/BearishDays";
import * as DateFunctions from "./functions/DateFunctions";

function App() {
  const [startDate, setStartDate] = useState(DateFunctions.getToday);
  const [endDate, setEndDate] = useState(DateFunctions.getYesterday);
  const [daysPrice, setDaysPrice] = useState(0);
  const [downloadingData, setDownloadingData] = useState(false);
  const [downloadError, setDownloadError] = useState(false);
  const [priceData, setPriceData] = useState([]);
  const [totalVolumes, setTotalVolumes] = useState([]);

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  function downlaodCryptoData() {
    let fromDate = DateFunctions.convertDateToUnixTimestamp(startDate);
    let toDate = DateFunctions.convertDateToUnixTimestamp(endDate);
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
      <div>
        <input
          type="date"
          defaultValue={startDate}
          onChange={handleStartDateChange}
        />
        <input
          type="date"
          defaultValue={endDate}
          onChange={handleEndDateChange}
        />

        {downloadingData ? <p>Loading..</p> : <p></p>}

        <p>Starting date: {startDate}</p>
        <p>End date: {endDate}</p>
        <button onClick={downlaodCryptoData}>Download data</button>
        {downloadError ? (
          <p>Couldn't dowload the data, try again later.</p>
        ) : (
          <p></p>
        )}
      </div>
      <div>
        <BearishDays priceData={priceData} />
      </div>
    </main>
  );
}

export default App;
