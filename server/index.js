'use strict';

const axios = require('axios');
const cheerio = require('cheerio');
const michelin = require('./michelin');
const sandbox_package=require('./sandbox.js');
const fs = require('fs'); //to export data
const readline = require('readline'); //to readfiles / import datas


async function fetchPageBibList(url){
const res=await sandbox_package.sandboxPageBibList(); 
return res;
}




async function bibUrlList(){ //fetch all the url from restaurant wich are bib and store them in a json file
	// const numberOfResults=fetchPageBibList('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/');
	const numberOfResults=await sandbox_package.sandboxPageBibList();  
	const numberOfPage=Math.floor(numberOfResults/20);
	console.log("pages="+numberOfPage);
	const urlBeginning="https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/";
	var i,url,restaurant, restaurantURL;
	var bibURLList=[];
	for (i = 1; i < (numberOfPage+2); i++) {
	// for (i = 1; i < 2; i++) {
		// console.log(url.concat(i.toString()));
		url=urlBeginning.concat(i.toString());
		// console.log(url);
		restaurantURL= await sandbox_package.sandboxBibList(url);
		// bibURLList.push(restaurantURL.web_link);
		bibURLList=bibURLList.concat(restaurantURL.web_link);
	}
	// console.log(bibURLList);


	// export in JSON
	fs.writeFile('./files/BibRestaurantsURL.json', JSON.stringify(bibURLList,null,2), (err) => {
	    if (err) throw err;
	    console.log('Data written to file');
	});


	// fs.writeFile("./files/BibRestaurantsURL.txt", bibURLList, function(err) {
 //    if(err) {
 //        return console.log(err);
 //    }
 //    console.log("The file was saved!");
	// }); 




	//Now let's fetch all the url one by one
	// for (i = 1; i < 3; i++) {
	// 	url=;
	// 	restaurant=await sandbox_package.sandboxRestaurant(url); 
 //  		bibList.push(restaurant);
		
	// }
	
	// console.log(bibList);
	
}

// fetchPageBibList();
bibUrlList();






// SOME TESTS:

// function getNumberOfPage(){
//   const promise1= new Promise((resolve, reject) => {
//     const r=fetchPageBibList();
//     return r;

//   })
//   promise1.then(function(value) {
//   console.log(value);
//   // expected output: "foo"
// });
//   return n;
// }
// const r=fetchPageBibList('r');
// console.log("TEST"+r);
// const j=getNumberOfPage();
// console.log("J="+j);




