export const convertUnixTimestampToDate = (unixTimestamp) => {
  let date = new Date(unixTimestamp);
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

/**
 * 
 * @param {*} date 
 * @returns String "yyyy-MM-dd"
 */
export const convertDateToString = (date) => {
  return date.toISOString().substring(0, 10);
};
