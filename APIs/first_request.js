// const request = require('request');

// request('https://jsonplaceholder.typicode.com/users/1', (error, response, body) => {
// 	//eval(require('locus'))
//     if (!error && response.statusCode == 200) {
// 	    const parsedData = JSON.parse(body);
// 	    console.log(parsedData.name + "lives in " + parsedData.address.city);
// 		console.log(typeof (parsedData.name + "lives in " + parsedData.address.city));
// 		console.log("${parsedData.name} + lives in + ${parsedData.address.city}");
// 		console.log(typeof ('${parsedData.name} + lives in + ${parsedData.address.city}'));
//     }
// });

const rp = require('request-promise');
rp('https://jsonplaceholder.typicode.com/users/1');
.then((htmlstring) => {
	console.log(htmlstring);
});
.catch((err) => {
	console.log("Error!", err);
});
