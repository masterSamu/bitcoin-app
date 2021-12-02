import React, { useState, useEffect } from "react";
import * as priceFunctions from "../functions/PriceFunctions";

export default function BearishDays(props) {
  const priceData = props.priceData;
  const startDate = props.startDate;
  const endDate = props.endDate;
  const [decreasingDatesData, setDecreasingDatesData] = useState([]);

  useEffect(() => {
    filterDecresingDatesData();
  }, [decreasingDatesData]);

  const filterDecresingDatesData = () => {
    const filteredData = priceFunctions.getDecreasedDatesInRow(priceData);
    setDecreasingDatesData(filteredData);
  };

  return (
    <div>
      <p>Bearish days in row: {decreasingDatesData.length}</p>
    </div>
  );
}
