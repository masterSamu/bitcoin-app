import React, { useState, useEffect } from "react";
import * as priceFunctions from "../functions/PriceFunctions";

export default function BearishDays(props) {
  const [bearishDays, setBearishDays] = useState([]);

  useEffect(() => {
    console.log("bearish: ");
    console.log(bearishDays);
  }, [bearishDays]);

  const getLongestBearishDays = () => {
    //console.log(props.priceData)
    //const array = priceFunctions.getDecreasingDays(props.priceData);
    const days = priceFunctions.getDecreasedDaysInRow(props.priceData, {
      startDate: props.startDate,
      endDate: props.endDate,
    });
    //console.log(days)

    setBearishDays(days);
  };

  return (
    <div>
      <button onClick={getLongestBearishDays}>Bearish</button>
      <p>Bearish days in row: {bearishDays.length}</p>
    </div>
  );
}
