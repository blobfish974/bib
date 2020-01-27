/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');

// async function sandbox (searchLink = 'https://guide.michelin.com/fr/fr/centre-val-de-loire/veuves/restaurant/l-auberge-de-la-croix-blanche') {

// for all restaurants
async function sandboxBibList (searchLink = 'https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/') {
    
  try {
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);

    const restaurant = await michelin.scrapeBibList(searchLink);

    // console.log(restaurant);
    // console.log('done');
    
    return restaurant;
    // process.exit(0);
  } catch (e) {
    // console.error(e);
    // process.exit(1);
    return {};
  }
}

// for a restaurants
async function sandboxRestaurant(searchLink = 'https://guide.michelin.com/fr/fr/bourgogne-franche-comte/chagny/restaurant/pierre-jean') {
    
  try {
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);

    const restaurant = await michelin.scrapeRestaurant(searchLink);

    // console.log(restaurant);
    // console.log('done');
    
    return restaurant;
    // process.exit(0);
  } catch (e) {
    // console.error(e);
    // process.exit(1);
    return {};
  }
}

// for the number of page
async function sandboxPageBibList(searchLink = 'https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/') {
    
  try {
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);

    const restaurant = await michelin.scrapePageBibList(searchLink);

    // console.log(restaurant);
    // console.log('done');
    
    return restaurant;
    // process.exit(0);
  } catch (e) {
    // console.error(e);
    // process.exit(1);
    return {};
  }
}

const [,, searchLink] = process.argv;

// sandbox(searchLink);


// module.exports.sandbox = sandbox;
module.exports.sandboxBibList = sandboxBibList;
module.exports.sandboxRestaurant = sandboxRestaurant;
module.exports.sandboxPageBibList = sandboxPageBibList;

module.exports.get = () => {
  return [];
};

