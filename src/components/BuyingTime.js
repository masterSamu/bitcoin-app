import React, { useState, useEffect } from "react";
import * as DateFunctions from "../functions/DateFunctions";
import * as PriceFunctions from "../functions/PriceFunctions";
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
      let buyingDateObject = PriceFunctions.getBestBuyingDate(data);
      let sellingDateObject = PriceFunctions.getBestSellingDate(data);
      setLowestPrice(buyingDateObject.price);
      setBuyingDate(buyingDateObject.date);
      setHighestPrice(sellingDateObject.price);
      setSellingDate(sellingDateObject.date);
    }
  }, [data]);

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
