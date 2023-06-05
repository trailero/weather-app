/**
 * @license MIT
 * @fileoverview All module functions
 * @copyright andrea cortez 2023 All rights reserved
 * @author andrea cortez <cortex.andy2809@gmail.com>
 */
"use strict";

export const weekDayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

export const monthNames = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

/**
 * Function to convert a date to a string
 * @param {number} dateUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Date string. formate: "Sunday 10, Jan"
 */
export const getDate = function(dateUnix, timezone) {
    const date = new Date((dateUnix + timezone) * 1000);
    const weekDayName = weekDayNames[date.getUTCDay()];
    const monthName = monthNames[date.getUTCMonth()];

    return `${weekDayName} ${date.getUTCDate()}, ${monthName}`;
}

/**
 * Function to converter a time to string
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH:MM AM/PM"
 */
export const getTime = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const minutes = date.getUTCMinutes();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours % 2 || 12}:${minutes} ${period}`;
}

/**
 * Function to converter a hour to string
 * @param {number} timeUnix Unix date in seconds
 * @param {number} timezone Timezone shift from UTC in seconds
 * @returns {string} Time string. formate: "HH AM/PM"
 */
export const getHours = function (timeUnix, timezone) {
  const date = new Date((timeUnix + timezone) * 1000);
  const hours = date.getUTCHours();
  const period = hours >= 12 ? "PM" : "AM";

  return `${hours} ${period}`;
}

/**
 * function to converter m/s to km/h
 * @param {number} mps Metters per seconds
 * @returns {number} Kilometer per hours
 */
export const mps_to_kmh = mps => {
  const mph = mps * 3600;
  return mph / 1000
}
/**
 * converter grades celcius to grades fahrenheit
 * @param {number} gradosCelsius grades centrigrades
 * @returns {number}
 */
export const celsiusToFahrenheit =  gradosCelsius => {
  var gradosFahrenheit = (gradosCelsius * 9/5) + 32;
  return gradosFahrenheit;
}

export const kmToMiles = kilometer => {
  var miles = (kilometer / 1.60934).toFixed(1);
  return miles;
}

export const aqiText = {
  1: {
    level: "Good",
    message: "Air quality is considered satisfactory, and air pollution poses little or no risk"
  },
  2: {
    level: "Fair",
    message: "Air quality is acceptable; however, for some pollutant there may be a moderate health concern for a very small number of people who are unusually sensitive to air pollution",
  },
  3: {
    level: "Moderate",
    message: "Members of sensitive groups may experience health effects. The general public is not likely to be affected",
  },
  4: {
    level: "Poor",
    message: "Everyone my begin to experience health effects; members of sensitive groups may experience more serious health effects",
  },
  5: {
    level: "Very",
    message: "Health warnings of emergency conditions. The entire population is more likely to be affected",
  }
}