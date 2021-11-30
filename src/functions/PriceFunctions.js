import * as DateFunctions from "../functions/DateFunctions";

export const getDecreasedDatesInRow = (array) => {
  if (array.length > 0) return filterDecreasingDatesInRow(array);
  else return [];
}

/**
 * Filters decreasing ("bearish") dates in row
 * @param {*} array 
 * @returns array 
 */
function filterDecreasingDatesInRow(array) {
  let datesInRow = [];
  let tempDatesInRow = [];
  let date, price, previousPrice;
  let previousDate = new Date("1970-01-01");

  if (array.length > 0) {
    previousPrice = array[0][1] +1; // increase first price item by 1

    array.forEach((item) => {
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
