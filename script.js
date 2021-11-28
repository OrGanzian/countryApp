const countrySearchInput = document.querySelector(".search-box");

/**
 *
 * @param {String} brandName // israel
 * @returns {Array}          // ["EGY","JOR","LBN","PSE","SYR"]
 */
const getBorderCountries = async function (brandName) {
  const httpReqPromise = await fetch(
    `https://restcountries.com/v3/name/${brandName}?fields=borders`
  );
  const jsonResponse = await httpReqPromise.json();
  return jsonResponse[0].borders;
};

/**
 *
 * @param {String} countryName // israel
 * @returns {Array}           // json with country info
 */
const getCountryInfo = async function (countryName) {
  const httpReqPromise = await fetch(
    `https://restcountries.com/v3/name/${countryName}?fields=capital,flags,name,population`
  );
  const jsonResponse = await httpReqPromise.json();
  return jsonResponse[0];
};

countrySearchInput.addEventListener("click", function (event) {
  console.log(countrySearchInput.textContent);
});
