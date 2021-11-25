export const convertUnixTimestampToDate = (unixTimestamp) => {
  let date = new Date(unixTimestamp);
  /*let dateObject = {
    year: date.getFullYear(),
    month: date.getMonth(),
    date: date.getDate(),
    hour: date.getHours(),
    minutes: date.getMinutes(),
    seconds: date.getSeconds(),
  };*/
  return date;
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

export const convertDateToString = (date) => {
  let dateString = date.toISOString().substring(0, 10)
    /*date.getFullYear() +
    "-" +
    date.getMonth() +
    "-" +
    date.getDate() +
    " " +
    date.getHours() +
    ":" +
    date.getMinutes() +
    ":" +
    date.getSeconds();*/
  return dateString;
};
