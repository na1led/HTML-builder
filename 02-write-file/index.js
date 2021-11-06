const path = require('path');
const fs = require('fs');
const readline = require('readline');

let readlineInt = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
readlineInt.on('line', (data)=>{
	if (data == 'exit') {
		console.log('[Closing...]');
		readlineInt.close();
	}else{
		let filePath = path.join(__dirname, 'text.txt');
		fs.appendFile(filePath, data, (error) => {
			if (error) {
				throw error;
			}
		});
	}

});


