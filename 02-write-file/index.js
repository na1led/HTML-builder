const path = require('path');
const fs = require('fs');
const readline = require('readline');

let readlineInt = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});
readlineInt.on('line', (data)=>{

	data = data.trim();
	if (data == 'exit') {
		console.log('[Closing...]');
		readlineInt.close();
	}else{
		if (data.length > 0) {
			let filePath = path.join(__dirname, 'text.txt');
			fs.appendFile(filePath, `${data}\n`, (error) => {
				if (error) {
					throw error;
				}
			});
		}

	}

});


