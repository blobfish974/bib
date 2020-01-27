const axios = require('axios');
const cheerio = require('cheerio');

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parse = data => {
  const $ = cheerio.load(data);
  const name = $('.section-main h2.restaurant-details__heading--title').text();
  const address= $('.restaurant-details__heading > ul > li:nth-child(1)').text();
  const street=address.split(',')[0];
  const city=address.split(',')[1];
  const postal_code=address.split(',')[2];
  const state= address.split(',')[3];
  const experience = $('#experience-section > ul > li:nth-child(2)').text();

  // return {name, addersse, experience};
  return {name, street, city, postal_code, state, experience};
};

/**
 * Scrape a given restaurant url
 * @param  {String}  url
 * @return {Object} restaurant
 */
module.exports.scrapeRestaurant = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parse(data);
  }

  console.error(status);

  return null;
};

/**
 * Get all France located Bib Gourmand restaurants
 * @return {Array} restaurants
 */
module.exports.get = () => {
  return [];
};
