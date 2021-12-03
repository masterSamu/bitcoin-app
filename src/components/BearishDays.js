import React, { useState, useEffect } from "react";
import * as priceFunctions from "../functions/PriceFunctions";
import SmallCard from "./SmallCard";
import Container from 'react-bootstrap/Container';

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
    <Container>
      <SmallCard
        title="Decreased dates in row"
        value={decreasingDatesData.length}
        icon={<i class="bi bi-graph-down-arrow" style={{ color: "#F90716" }}></i>}
      />
    </Container>
  );
}
