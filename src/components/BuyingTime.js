import React, { useState, useEffect } from "react";
import * as DateFunctions from "../functions/DateFunctions";
import TwoValueCard from "./TwoValueCard";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

export default function BuyingTime(props) {
  const data = props.priceData;
  const currency = props.currency;
  const [lowestPrice, setLowestPrice] = useState(null);
  const [highestPrice, setHighestPrice] = useState(null);
  const [buiyngDate, setBuyingDate] = useState(null);
  const [sellingDate, setSellingDate] = useState(null);

  useEffect(() => {
    if (data.length > 0) {
      getBestBuyingDate();
      getBestSellingDate();
    }
  }, [data]);

  const getBestBuyingDate = () => {
    let lowestPrice;
    let date = new Date(0);
    let previousDate = new Date(0);

    data.forEach((item, index) => {
      if (index === 0) lowestPrice = item[1] + 1;
      let price = item[1];
      date = DateFunctions.convertUnixTimestampToDate(item[0]);
      const isSameDate = date.getUTCDate() === previousDate.getUTCDate();

      if (!isSameDate && price < lowestPrice) {
        setLowestPrice(price.toFixed(2));
        setBuyingDate(DateFunctions.convertDateToString(date));
        lowestPrice = price;
      }
      previousDate = date;
    });
  };

  const getBestSellingDate = () => {
    let highestPrice = 0;
    let date = new Date(0);
    let previousDate = new Date(0);

    data.forEach((item) => {
      let price = item[1];
      date = DateFunctions.convertUnixTimestampToDate(item[0]);
      const isSameDate = date.getUTCDate() === previousDate.getUTCDate();

      if (!isSameDate && price > highestPrice) {
        setHighestPrice(price.toFixed(2));
        setSellingDate(DateFunctions.convertDateToString(date));
        highestPrice = price;
      }
      previousDate = date;
    });
  };

  return (
    <Container style={containerStyle}>
      <Col>
        <TwoValueCard
          title="Best buying date"
          date={buiyngDate}
          value={lowestPrice}
          currency={currency}
        />
      </Col>
      <Col>
        <TwoValueCard
          title="Best selling date"
          date={sellingDate}
          value={highestPrice}
          currency={currency}
        />
      </Col>
    </Container>
  );
}

const containerStyle = {
}
