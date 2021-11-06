const fs = require('fs');

// асинхронное чтение
fs.readFile('01-read-file/text.txt', 'utf8', showUp);


function showUp(error, data) {
	if (error){
		throw error;
	} 
	console.log(data);

}