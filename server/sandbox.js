/* eslint-disable no-console, no-process-exit */
const michelin = require('./michelin');
const maitre = require('./maitre');

// async function sandbox (searchLink = 'https://guide.michelin.com/fr/fr/centre-val-de-loire/veuves/restaurant/l-auberge-de-la-croix-blanche') {

// for all restaurants
async function sandboxBibList (searchLink = 'https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/') {
    
  try {
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);

    const restaurant = await michelin.scrapeBibList(searchLink);

    // console.log(restaurant);
    // console.log('done');
    // console.log("lenght="+restaurant.length);
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


// for the maitres restaurateurs result page
async function sandboxMaitresRestaurateursList(page_number= 1) {
    
  try {
    console.log(`🕵️‍♀️  browsing ?, page number = ${page_number} source`);
    const restaurant = await maitre.scrapeMaitresRestaurateursList(page_number);
    
    return restaurant;
    // process.exit(0);
  } catch (e) {
    // console.error(e);
    // process.exit(1);
    return {};
  }
}

// for the number of results in maitres restaurateurs
async function sandboxResultsMaitresRestaurateursList(searchLink = 'https://www.maitresrestaurateurs.fr/annuaire/ajax/loadresult') {
  
  try {
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);
    const restaurant = await maitre.scrapeResultsMaitresRestaurateursList(searchLink);

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


// for a restaurant from the maitres restaurateurs 
async function sandboxMaitresRestaurateurs(searchLink = 'https://www.maitresrestaurateurs.fr/profil/68') {
    
  try {
    console.log(`🕵️‍♀️  browsing ${searchLink} source`);

    const restaurant = await maitre.scrapeMaitresRestaurateurs(searchLink);

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



// module.exports.sandbox = sandbox;
module.exports.sandboxBibList = sandboxBibList;
module.exports.sandboxRestaurant = sandboxRestaurant;
module.exports.sandboxPageBibList = sandboxPageBibList;
module.exports.sandboxMaitresRestaurateursList = sandboxMaitresRestaurateursList;
module.exports.sandboxMaitresRestaurateurs = sandboxMaitresRestaurateurs;
module.exports.sandboxResultsMaitresRestaurateursList = sandboxResultsMaitresRestaurateursList;

module.exports.get = () => {
  return [];
};

