'use strict';

const axios = require('axios');
const cheerio = require('cheerio');
const michelin = require('./michelin');
const sandbox_package=require('./sandbox.js');
const fs = require('fs'); //to export data
const readline = require('readline'); //to readfiles / import datas


async function fetchPageBibList(url){
const res=await sandbox_package.sandboxPageBibList(); 
console.log("pages2="+res);
return res;
}

function getNumberOfPage(){
  const promise1= new Promise((resolve, reject) => {
    const r=fetchPageBibList();
    return r;

  })
  promise1.then(function(value) {
  console.log(value);
  // expected output: "foo"
});
  return n;
}



async function fetchBibList(url){
// const res=await sandbox_package.sandboxBibList(url); 
const res=await sandbox_package.sandboxPageBibList(url); 
console.log(res);}

function bibUrlList(){
	// const numberOfResults=fetchPageBibList('https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/');
	const numberOfResults=await sandbox_package.sandboxPageBibList(); 
	const numberOfPage=Math.floor(numberOfResults/20);
	console.log("pages="+numberOfPage);
	var url="https://guide.michelin.com/fr/fr/restaurants/bib-gourmand/page/";
	var i;
	for (i = 1; i < 3; i++) {
		console.log(url.concat(i.toString()));
  		// fetchBibList(url.concat(' ', i.toString()));
	}
	
}
const r=fetchPageBibList('r');
console.log("TEST"+r);
const j=getNumberOfPage();
console.log("J="+j);
// fetchPageBibList();
// bibUrlList();



// let student = { 
//     name: 'Mike',
//     age: 23, 
//     gender: 'Male',
//     department: 'English',
//     car: 'Honda' 
// };
 
// // let data = JSON.stringify(student);
// let data = JSON.stringify(student, null, 2);

// // fs.writeFileSync('student-2.json', data);
// fs.writeFile('student-3.json', data, (err) => {
//     if (err) throw err;
//     console.log('Data written to file');
// });

// console.log('This is after the write call');



// fs.writeFile("/files/BibRestaurantsURL", "Hey there!", function(err) {
//     if(err) {
//         return console.log(err);
//     }
//     console.log("The file was saved!");
// }); 