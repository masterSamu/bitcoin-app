export const convertUnixTimestampToDate = (unixTimestamp) => {
  let date = new Date(unixTimestamp);
  let dateObject = {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };
  return dateObject;
};

/**
 *
 * @param {String} date
 * @returns int
 */
export const convertDateToUnixTimestamp = (date) => {
  let unixTimestamp = parseInt((new Date(date).getTime() / 1000).toFixed(0));
  return unixTimestamp;
};

export const getToday = () => {
  let today = new Date();
  return (
    today.getFullYear() +
    "-" +
    (today.getMonth() + 1) +
    "-" +
    (today.getDate() - 1)
  );
};

export const getYesterday = () => {
  let today = new Date();
  return (
    today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
  );
};

export const convertDateObjectToString = (dateObject) => {
  let dateString =
    dateObject.year +
    "-" +
    dateObject.month +
    "-" +
    dateObject.date +
    " " +
    dateObject.hour +
    ":" +
    dateObject.minutes +
    ":" +
    dateObject.seconds;
  return dateString;
};
