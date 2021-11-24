import React, { useState, useEffect } from "react";
import * as DateFunctions from "../functions/DateFunctions";

export default function BearishDays(props) {
  const [bearishDays, setBearishDays] = useState([]);

  useEffect(() => {
    console.log("bearish: ");
    console.log(bearishDays);
  }, [bearishDays]);

  const getLongestBearishDays = () => {
    let mostBearishDaysInRow = [];
    let tempBearishDays = [];
    let lastPrice = 0;
    let previousDate;
    let tempDate = "";
    let tempPrice = 0;
    let dateString = "";

    props.priceData.forEach((item, index) => {
      tempDate = DateFunctions.convertUnixTimestampToDate(item[0]);
      tempPrice = item[1];
      dateString = DateFunctions.convertDateObjectToString(tempDate);

      if (index === 0) {
        tempBearishDays.push({ date: dateString, price: tempPrice });
      } else if (
        tempPrice < lastPrice &&
        parseInt(tempDate.date) === (previousDate + 1)
      ) {
        tempBearishDays.push({
          date: dateString,
          price: tempPrice,
        });
        if (tempBearishDays.length > mostBearishDaysInRow.length) {
          mostBearishDaysInRow = tempBearishDays;
        }
      } else {
        tempBearishDays = [];
      }
      previousDate = parseInt(tempDate.date);
      lastPrice = tempPrice;
    });
    setBearishDays(mostBearishDaysInRow);
  };
  

  



  return (
    <div>
      <button onClick={getLongestBearishDays}>Bearish</button>
      <p>Bearish days in row: {bearishDays.length}</p>
    </div>
  );
}
