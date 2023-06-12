/**
 * @license MIT
 * @fileoverview Menage all routes
 * @copyright andrea cortez 2023 All rights reserved
 * @author andrea cortez <cortex.andy2809@gmail.com>
 */

"use strict";

import { updateWeather, error404 } from "./app";
const defaultLocation = "#/weather?34.05223&-118.24368"; // Los Angeles

const currentLocation = function () {
  window.location.hash = defaultLocation;
};

/**
 * @param {string} query Searched query
 */
const searchedLocation = (query) => updateWeather(...query.split("&"));

const routes = new Map([
  ["/current-location", currentLocation],
  ["/weather", searchedLocation],
]);

const checkHash = function () {
  const requestURL = window.location.hash.slice(1);
  const [route, query] = requestURL.includes
    ? requestURL.split("?")
    : [requestURL];
  routes.get(route) ? routes.get(route)(query) : error404();
};

window.addEventListener("hashchange", checkHash);

window.addEventListener("load", function () {
  if (!window.location.hash) {
    window.location.hash = "#/current-location";
  } else {
    checkHash();
  }
});
