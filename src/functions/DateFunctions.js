/**
 * Convert unix timestamp to date format
 * @param {Int} unixTimestamp 
 * @returns Date
 */
export const convertUnixTimestampToDate = (unixTimestamp) => {
  let date = new Date(unixTimestamp);
  return date;
};

/**
 * Convert date to unix timestamp format.
 * @param {String} date
 * @returns int
 */
export const convertDateToUnixTimestamp = (date) => {
  let unixTimestamp = parseInt((new Date(date).getTime() / 1000).toFixed(0));
  return unixTimestamp;
};

/**
 * Get todays date as a String.
 * @returns String "yyy-MM-dd"
 */
export const getToday = () => {
  return convertDateToString(new Date())
};

/**
 * Get yesterdays date as a String.
 * @returns String "yyy-MM-dd"
 */
export const getYesterday = () => {
  let today = new Date();
  today.setDate(today.getUTCDate() -1)
  return convertDateToString(today)
};

/**
 * Convert date to string format
 * @param {Date} date 
 * @returns String "yyyy-MM-dd"
 */
export const convertDateToString = (date) => {
  return date.toISOString().substring(0, 10);
};
