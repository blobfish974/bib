const axios = require('axios');
const cheerio = require('cheerio');
const querystring = require('querystring');

/**
 * Parse webpage restaurant
 * @param  {String} data - html response
 * @return {Object} restaurant
 */
const parseList = data => {

  const $ = cheerio.load(data);
  const name = $('#zoneAnnuaire_layout > div.row.annuaire_result > div.col-md-9 > div.annuaire_result_list > div.annuaire_single.row-31 > div.single_desc > div.single_libel > a').text();
  // const address= $('.restaurant-details__heading > ul > li:nth-child(1)').text();
  // const street=address.split(',')[0];
  // const city=address.split(',')[1];
  // const postal_code=address.split(',')[2];
  // const state= address.split(',')[3];
  // const experience = $('#experience-section > ul > li:nth-child(2)').text();
  const test= $('').text();
  var web_links=$('.single_libel a').map(function(i, el) {
        return $(this).attr('href');
      }).toArray();

  // const test2= $('body > div.main-content-wrapper.clearfix.main-content-wrapper-ep > section > section > div > div > div > div > section > div > div > div > div > ul > li > a').text();

  var length=web_links.length;
  for (let i = 0; i < length; i++) { //to remove useless url
      web_links[i]="https://www.maitresrestaurateurs.fr"+web_links[i];
  }

  return {web_links};
};

const parseResults = data => {
  const $ = cheerio.load(data);
  // const name = $('.search-listing-result h1').text();
  const false_results = $('body > div.col-md-9 > div.annuaire_result_topbar > div.row ').text().trim().substring(0,4);
  //return " \n 01-20 \n sur XXX page"
  const results=parseInt(false_results);
  // const pages=parseInt(false_pages.split('sur')[1].substring(1,4),10); //the split returns " XXX page" so we have to do a substring
  return results;
};


const parseRestaurant= data => {

  const $ = cheerio.load(data);
  const name = $('#module_ep > div.ep-container.container > div > div > div.ep-content-left.col-md-8 > div > div.ep-section.ep-content-infos.row > div.ep-infos-txt > div.infos-nom').text();
  // const address= $('.restaurant-details__heading > ul > li:nth-child(1)').text();
  // const street=address.split(',')[0];
  // const city=address.split(',')[1];
  // const postal_code=address.split(',')[2];
  // const state= address.split(',')[3];
  // const experience = $('#experience-section > ul > li:nth-child(2)').text();
  console.log("test");
  return {name};
};




/**
 * Scrape a given restaurant url
 * @param  {String}  url
 * @return {Object} restaurant
 */


 module.exports.scrapeMaitresRestaurateursList = async page_number => { //gives url of restaurant for a result page

    // const rep = await axios(url);
    const rep = await axios.post('https://www.maitresrestaurateurs.fr/annuaire/ajax/loadresult', querystring.stringify({page: page_number,request_id: 'f1a0b6f32797100c143ebed4fcb1f023'}));
    // const rep =  axios(url);
    const {data, status} = rep;
    // console.log("data"+data);
    if (status >= 200 && status < 300) {

      return parseList(data);
    }
  console.error(status);

  return null;
};





// module.exports.scrapeMaitresRestaurateursList = async url => {
//   await axios.post(url, {
//     page: 1,
//     request_id: '4503e2ccd9e7dd3fe7a68724417ba9a4'
//   })

//   // const querystring = require('querystring');
//   // axios.post('http://something.com/', querystring.stringify({ foo: 'bar' }));
//   .then(async function (response) {
//     // console.log("OK");
    
//     // const rep = await axios(url);
//     const rep = await axios('https://www.maitresrestaurateurs.fr/annuaire/recherche');
//     // const rep =  axios(url);
//     const {data, status} = rep;
//     // console.log("data"+data);
//     if (status >= 200 && status < 300) {
//       return parseList(data);
//     }
//     console.error(status);
//     return null;
//   })
//   .catch(function (error) {
//     console.log(error);
//   });

//   // axios.post(url, {
//   //   result: 1
//   // });
//   // // const rep = await axios(url);
//   //   const rep = await axios('https://www.maitresrestaurateurs.fr/annuaire/recherche');
//   //   // const rep =  axios(url);
//   //   const {data, status} = rep;
//   //   // console.log("data"+data);
//   //   if (status >= 200 && status < 300) {
//   //     return parseList(data);
//   //   }
//   //   console.error(status);
//   //   return null;
// };
module.exports.scrapeResultsMaitresRestaurateursList = async page_number => { //gives number of result

  const response = await axios.post('https://www.maitresrestaurateurs.fr/annuaire/ajax/loadresult', querystring.stringify({page: page_number,request_id: 'f1a0b6f32797100c143ebed4fcb1f023'}));
    
  const {data, status} = response;

  // console.log(response);

  if (status >= 200 && status < 300) {
    return parseResults(data);
  }

  console.error(status);

  return null;
};

module.exports.scrapeMaitresRestaurateurs = async url => {
  const response = await axios(url);
  const {data, status} = response;

  if (status >= 200 && status < 300) {
    return parseRestaurant(data);
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
