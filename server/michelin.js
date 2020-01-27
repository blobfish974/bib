const axios = require('axios');
const cheerio = require('cheerio');


function removeDuplicates(array) {
  let unique = {};
  array.forEach(function(i) {
    if(!unique[i]) {
      unique[i] = true;
    }
  });
  return Object.keys(unique);
}




/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
 // FOR A RESTAURANT: 
const parse = data => {
  const $ = cheerio.load(data);
  const name = $('.section-main h2.restaurant-details__heading--title').text();
  const address= $('.restaurant-details__heading > ul > li:nth-child(1)').text();
  const street=address.split(',')[0];
  const city=address.split(',')[1];
  const postal_code=address.split(',')[2];
  const state= address.split(',')[3];
  const experience = $('#experience-section > ul > li:nth-child(2)').text().split('\n')[2];
  const tel= $('.section-main span.flex-fill').text().substring(0,17);
  // const tel= $('.section-main .collapse__block-item .d-flex span.flex-fill').text();

  const web_link=$('.section-main a').map(function(i, el) {
        return $(this).attr('href');
      }).toArray()[5];
  return {name, street, city, postal_code, state, experience, tel,web_link};
};


 // FOR ALL RESTAURANTS:
const parseBibList = data => {
  const $ = cheerio.load(data);
  const web_links=$('.card__menu a').map(function(i, el) {
        return $(this).attr('href');
      }).toArray();

  var web_link=removeDuplicates(web_links); //we need to remove duplicates
  web_link.splice(0, 1);
  var length= web_link.length;
  for (let i = 1; i < length; i++) { //to remove useless url
    web_link.splice(i, 1);
}
var length= web_link.length;
for (let i = 0; i < length; i++) { //to remove useless url
    web_link[i]="https://guide.michelin.com"+web_link[i];
}
  return {web_link};
};

// TO FIND THE NUMBER OF PAGE IN THE BIB LIST: 
const parsePageBibList = data => {
  const $ = cheerio.load(data);
  // const name = $('.search-listing-result h1').text();
  const false_pages = $('body > main > section.section-main.search-results.search-listing-result > div > div > div.search-results__count > div.d-flex.align-items-end.search-results__status > div.flex-fill > h1').text();
  //return " \n 01-20 \n sur XXX page"
  const pages=parseInt(false_pages.split('sur')[1].substring(1,4),10); //the split returns " XXX page" so we have to do a substring
  return pages;
};

/**
 * Scrape a given bib restaurant list page url
 * @param  {String}  url
 * @return {Object} restaurant
 */
module.exports.scrapeBibList = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parseBibList(data);
  }

  console.error(status);

  return null;
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
    return parseRestaurant(data);
  }

  console.error(status);

  return null;
};

/**
 * Scrape a given restaurant url
 * @param  {String}  url
 * @return {Object} restaurant
 */
module.exports.scrapePageBibList = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parsePageBibList(data);
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
