const fs = require('fs');
const path = require('path');



let folderDir = path.join(path.dirname(__filename), 'files');
let dest = path.join(path.dirname(__filename), 'files-copy');


fs.mkdir(dest, { recursive: true }, (error) => {
	if (error) {
		throw error;
	}
});


let p = new Promise(function (resolve, reject) {
	fs.readdir(folderDir, { withFileTypes: true }, (error, files) => {
		resolve(files);
	});


});
p.then((data) => {
	data.forEach((item) => {
		
		let dirName = path.join(folderDir, item.name);
		let destName = path.join(dest, item.name);
		fs.copyFile(dirName, destName, (err)=>{
			if (err) {
				throw err;
			}
		});
		
	});
	console.log('[Copied succesful!]');
});


