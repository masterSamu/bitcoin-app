import * as DateFunctions from "../functions/DateFunctions";

/**
 * Extracts decreasing ("bearish") dates in row from array and return
 * longest decreasing dates data.
 * @param {array} data
 * @returns array
 */
export const getMostDecreasingDatesInRow = (data) => {
  let datesInRow = [];
  let tempDatesInRow = [];
  let date, price, previousPrice;
  let previousDate = new Date(0);

  if (data.length > 0) {
    previousPrice = data[0][1] + 1; // increase first price item by 1

    data.forEach((item) => {
      date = DateFunctions.convertUnixTimestampToDate(item[0]);
      price = item[1];
      const isSameDate = date.getUTCDate() === previousDate.getUTCDate();
      const priceIsDecreasing = price < previousPrice;

      if (!isSameDate) {
        if (priceIsDecreasing) {
          tempDatesInRow.push({
            date: DateFunctions.convertDateToString(date),
            price: price,
          });
          if (tempDatesInRow.length > datesInRow.length) {
            datesInRow = tempDatesInRow;
          }
        } else {
          tempDatesInRow = [];
        }
        previousPrice = price;
      }
      previousDate = date;
    });
  }

  return datesInRow;
}

export const getBestBuyingDate = (data) => {
  let lowestPrice;
  let date = new Date(0);
  let previousDate = new Date(0);
  let bestBuyingDateObject = {};

  data.forEach((item, index) => {
    if (index === 0) lowestPrice = item[1] + 1;
    let price = item[1];
    date = DateFunctions.convertUnixTimestampToDate(item[0]);
    const isSameDate = date.getUTCDate() === previousDate.getUTCDate();

    if (!isSameDate && price < lowestPrice) {
      bestBuyingDateObject = {
        price: price.toFixed(2),
        date: DateFunctions.convertDateToString(date),
      };
      lowestPrice = price;
    }
    previousDate = date;
  });

  return bestBuyingDateObject;
};

export const getBestSellingDate = (data) => {
  let highestPrice = 0;
  let date = new Date(0);
  let previousDate = new Date(0);
  let bestSellingDateObject = {};

  data.forEach((item) => {
    let price = item[1];
    date = DateFunctions.convertUnixTimestampToDate(item[0]);
    const isSameDate = date.getUTCDate() === previousDate.getUTCDate();

    if (!isSameDate && price > highestPrice) {
      bestSellingDateObject = {
        price: price.toFixed(2),
        date: DateFunctions.convertDateToString(date),
      };
      highestPrice = price;
    }
    previousDate = date;
  });

  return bestSellingDateObject;
};

export const extractHighestVolume = (data) => {
  let highestVolumeObject = {};
  let previousDate = new Date(0);
  let highestVolume = 0;

  data.forEach((item) => {
    let tempVolume = item[1];
    let date = DateFunctions.convertUnixTimestampToDate(item[0]);
    const isSameDate = date.getUTCDate() === previousDate.getUTCDate();

    if (tempVolume > highestVolume && !isSameDate) {
      console.log(tempVolume)
      highestVolume = tempVolume;
      highestVolumeObject = {
        date: DateFunctions.convertDateToString(date),
        volume: tempVolume.toFixed(2),
      };
    }
    previousDate = date;
  });
  return highestVolumeObject;
};
