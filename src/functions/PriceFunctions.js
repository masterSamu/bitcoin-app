import * as DateFunctions from "../functions/DateFunctions";

export const getDecreasedDaysInRow = (array, dates) => {
  return selectMethod(array, dates);
};

function selectMethod(array, dates) {
  let countOfDays = getCountOfDatesBetween(dates) + 1;
  let decreaseDaysInRow = [];

  if (array.length === countOfDays) {
    decreaseDaysInRow = getBearishDaysForShorterThan90DaysPeriod(array);
  } else {
    decreaseDaysInRow = getBearishDaysForShorterThan90DaysPeriod(array);
  }
  return decreaseDaysInRow;
}

function getBearishDaysForLongerThan90DaysPeriod(array) {
  let decreaseDaysInRow = [];
  let tempDaysInRow = [];
  let price, date;
  let previousPrice = 0;

  array.forEach((item,index) => {
    date = DateFunctions.convertUnixTimestampToDate(item[0]);
    price = item[1];
    const priceIsDecreasing = price < previousPrice;


    if (priceIsDecreasing) {
      tempDaysInRow.push({
        date: DateFunctions.convertUnixTimestampToDate(date),
        price: price,
      });
      if (tempDaysInRow.length > decreaseDaysInRow.length) {
        decreaseDaysInRow = tempDaysInRow;
      }
    } else {
      tempDaysInRow = [];
    }
    previousPrice = price;
  });

  return decreaseDaysInRow;
}

function hasDecreasingPrice(price, previousPrice) {
  return price < previousPrice;
}
// Viimenen päivä ei tule mukaan!!!
function getBearishDaysForShorterThan90DaysPeriod(array) {
  let daysInRow = [];
  let tempDaysInRow = [];
  let date, price;
  let previousDate = new Date("1970-01-01");
  let previousPrice = array[0][1] +1;

  array.forEach((item, index) => {
    date = DateFunctions.convertUnixTimestampToDate(item[0]);
    price = item[1];

    const isNotSameDate = date.getUTCDate() !== previousDate.getUTCDate();
    const priceIsDecreasing = price < previousPrice;

    if (isNotSameDate) {
      if (priceIsDecreasing) {
        console.log(
          date +
            " , " +
            previousDate +
            " , " +
            isNotSameDate +
            " , " +
            price +
           " , " +
            priceIsDecreasing
        );
        tempDaysInRow.push({
          date: DateFunctions.convertDateToString(date),
          price: price,
        });
        console.log(tempDaysInRow);
        if (tempDaysInRow.length > daysInRow.length) {
          daysInRow = tempDaysInRow;
        }
      } else {
        console.log(
          date +
            " , " +
            previousDate +
            " , " +
            isNotSameDate +
            " , " +
            price +
            " < " +
            previousPrice +
            " , " +
            priceIsDecreasing
        );
        tempDaysInRow = [];
      }
      previousPrice = price;
    }
    previousDate = date;
  });

  return daysInRow;
}

function getCountOfDatesBetween(dates) {
  let startDate = new Date(dates.startDate).getTime();
  let endDate = new Date(dates.endDate).getTime();
  let oneDay = 60 * 60 * 24 * 1000;
  return (endDate - startDate) / oneDay;
}
