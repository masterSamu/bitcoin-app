import React, { useState, useEffect } from "react";
import * as priceFunctions from "../functions/PriceFunctions";
import TwoValueCard from "./TwoValueCard";
import SmallCard from "./SmallCard";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

export default function DataCards(props) {
  const data = props.priceData;
  const volumeData = props.totalVolumes;
  const currency = props.currency;
  const [decreasingDates, setDecreasingDates] = useState([]);
  const [lowestPrice, setLowestPrice] = useState({});
  const [highestPrice, setHighestPrice] = useState({});
  const [highestVolume, setHighestVolume] = useState({})


  useEffect(() => {
    if (data.length > 0) {
      setDecreasingDates(priceFunctions.getMostDecreasingDatesInRow(data));
      setLowestPrice(priceFunctions.getBestBuyingDate(data));
      setHighestPrice(priceFunctions.getBestSellingDate(data));
    }
  }, [data]);
  
  useEffect(() => {
    if (volumeData.length > 0) {
      setHighestVolume(priceFunctions.extractHighestVolume(volumeData))
    }
  }, [volumeData])

  return (
      <Container>
        <Row>
          <SmallCard
            title="Decreased dates in row"
            value={decreasingDates.length}
            icon={<i className="bi bi-graph-down-arrow" style={{ color: "#F90716" }}></i>}
          />
        </Row>
        <Row>
          <TwoValueCard
            title="Best buying date"
            date={lowestPrice.date}
            value={lowestPrice.price}
            currency={currency}
            label2="Price"
          />
        </Row>
        <Row>
          <TwoValueCard
            title="Best selling date"
            date={highestPrice.date}
            value={highestPrice.price}
            currency={currency}
            label2="Price"
          />
        </Row>
        <Row>
          <TwoValueCard
            title="Highest trading volume"
            date={highestVolume.date}
            currency={currency}
            value={highestVolume.volume}
            label2="Volume"
          />
        </Row>
      </Container>
  );
}