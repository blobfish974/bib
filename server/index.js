'use strict';

const axios = require('axios');
const cheerio = require('cheerio');
const michelin = require('./michelin');
const sandbox_package=require('./sandbox.js');
const fs = require('fs'); //for data exports

async function fetchBibList(url){
// const res=await sandbox_package.sandboxBibList(url); 
const res=await sandbox_package.sandboxPageBibList(url); 
console.log(res);}

// start('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/3');

function bibUrlLisy(){

	fetchBibList('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/3');
}

bibUrlLisy();

