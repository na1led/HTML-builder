const fs = require('fs');

// асинхронное чтение

let fileContent = fs.createReadStream('01-read-file/text.txt', 'utf8');

fileContent.on('data',(data)=>{
	console.log(data);
});
