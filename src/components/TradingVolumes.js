import React, { useState, useEffect } from "react";
import * as DateFunctions from "../functions/DateFunctions";

export default function TradingVolumes(props) {
  const data = props.totalVolumes;
  const [volume, setVolume] = useState(null);
  const [date, setDate] = useState(null);

  useEffect(() => {
    extractHighestVolume();
  }, [data]);

  const extractHighestVolume = () => {
    let highestVolumeObject = {};
    let previousDate = new Date(0);
    let highestVolume = 0;

    data.forEach((item) => {
      let tempVolume = item[1];
      let date = DateFunctions.convertUnixTimestampToDate(item[0]);
      const isSameDate = date.getUTCDate() === previousDate.getUTCDate();

      if (tempVolume > highestVolume && !isSameDate) {
        highestVolume = tempVolume;
        highestVolumeObject = {
          date: DateFunctions.convertDateToString(date),
          volume: tempVolume,
        };
      }
      previousDate = date;
    });
    console.log(highestVolumeObject);
    setVolume(highestVolumeObject.volume);
    setDate(highestVolumeObject.date);
  };
  return (
    <div>
      <h2>Highest trading date</h2>
      <p>{date} , {volume} €</p>
    </div>
  );
}
